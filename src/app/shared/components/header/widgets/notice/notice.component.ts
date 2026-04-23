import { Component, Input } from '@angular/core';
import { TopBarContent } from '../../../../interface/theme-option.interface';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent {

  @Input() content: TopBarContent[] | undefined;

}
