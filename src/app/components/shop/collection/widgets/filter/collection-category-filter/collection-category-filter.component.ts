import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Params } from '../../../../../../shared/interface/core.interface';
import { Category, CategoryModel } from '../../../../../../shared/interface/category.interface';
import { CategoryState } from '../../../../../../shared/state/category.state';

@Component({
  selector: 'app-collection-category-filter',
  templateUrl: './collection-category-filter.component.html',
  styleUrls: ['./collection-category-filter.component.scss']
})
export class CollectionCategoryFilterComponent {

  @Select(CategoryState.category) category$: Observable<CategoryModel>;

  @Input() filter: Params;

  public categories: Category[];
  public selectedCategories: string[] = [];
  public searchText: string = '';
  
  constructor(private route: ActivatedRoute,
    private router: Router){
    this.category$.subscribe(res => this.categories = res.data.filter(category => category.type == 'product'));
  }

  ngOnChanges() {
    this.selectedCategories = this.filter['category'] ? this.filter['category'].split(',') : [];
  }

  toggleCategory(slug: string, category?: Category) {
    // Prevent toggling if category is not clickable
    if (category && category.is_clickable === false) {
      return;
    }

    if (this.selectedCategories.includes(slug)) {
      // Unselect if already selected
      this.selectedCategories = [];
    } else {
      // Select new one, replacing any existing selection
      this.selectedCategories = [slug];
    }

    const categoryPath = this.selectedCategories.length ? this.selectedCategories[0] : null;
    this.router.navigate([categoryPath ? `/collections/${categoryPath}` : '/collections']);
  }

  applyFilter(event: Event) {
    if ((<HTMLInputElement>event?.target)?.checked)
      this.selectedCategories = [(<HTMLInputElement>event?.target)?.value]; // replace array with single checked value
    else
      this.selectedCategories = [];  // removed from array if unchecked

    const categoryPath = this.selectedCategories.length ? this.selectedCategories[0] : null;
    this.router.navigate([categoryPath ? `/collections/${categoryPath}` : '/collections']);
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedCategories?.indexOf(item) != -1){
      return true;
    }
    return false;
  }

}
