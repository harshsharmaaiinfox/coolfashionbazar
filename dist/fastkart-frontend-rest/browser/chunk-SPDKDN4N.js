import {
  GetTags,
  TagState
} from "./chunk-Q3RMF2HO.js";
import {
  BlogService,
  BlogState,
  BreadcrumbComponent,
  CategoryState,
  GetBlogBySlug,
  GetBlogs,
  GetRecentBlog,
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NoDataComponent,
  PaginationComponent,
  Select,
  SharedModule,
  Store,
  SummaryPipe,
  ThemeOptionState,
  TranslateModule,
  TranslatePipe
} from "./chunk-24LTJJML.js";
import {
  SeoService
} from "./chunk-4VA66D5F.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  RouterLink,
  RouterModule,
  SlicePipe,
  __decorate,
  inject,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MJNPSVHG.js";

// src/app/shared/resolvers/blog.resolver.ts
var BlogResolver = (route, state) => {
  return inject(Store).dispatch(new GetBlogBySlug(route.paramMap.get("slug")));
};

// src/app/components/blog/sidebar/recent-post/recent-post.component.ts
var _c0 = (a0) => ["/blog/", a0];
function RecentPostComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "a", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "a", 7)(5, "h5", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h6");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, blog_r1 == null ? null : blog_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", (blog_r1 == null ? null : blog_r1.blog_thumbnail) ? blog_r1 == null ? null : blog_r1.blog_thumbnail == null ? null : blog_r1.blog_thumbnail.original_url : "assets/images/blog.png", \u0275\u0275sanitizeUrl)("alt", blog_r1 == null ? null : blog_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, blog_r1 == null ? null : blog_r1.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r1 == null ? null : blog_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 6, blog_r1 == null ? null : blog_r1.created_at, "dd MMM yyyy hh:mm:a"));
  }
}
function RecentPostComponent_app_no_data_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 9);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bg-light");
    \u0275\u0275property("text", "no_blog_found");
  }
}
var RecentPostComponent = class _RecentPostComponent {
  constructor() {
  }
  static {
    this.\u0275fac = function RecentPostComponent_Factory(t) {
      return new (t || _RecentPostComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecentPostComponent, selectors: [["app-recent-post"]], inputs: { blogs: "blogs" }, decls: 4, vars: 6, consts: [[1, "recent-post-box"], ["class", "recent-box", 4, "ngFor", "ngForOf"], [3, "class", "text", 4, "ngIf"], [1, "recent-box"], [1, "recent-image", 3, "routerLink"], [1, "img-fluid", 3, "src", "alt"], [1, "recent-detail"], [3, "routerLink"], [1, "recent-name"], [3, "text"]], template: function RecentPostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, RecentPostComponent_div_1_Template, 10, 13, "div", 1);
        \u0275\u0275pipe(2, "slice");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, RecentPostComponent_app_no_data_3_Template, 1, 3, "app-no-data", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 2, ctx.blogs, 0, 5));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !(ctx.blogs == null ? null : ctx.blogs.length));
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, NoDataComponent, SlicePipe, DatePipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecentPostComponent, { className: "RecentPostComponent", filePath: "src\\app\\components\\blog\\sidebar\\recent-post\\recent-post.component.ts", lineNumber: 9 });
})();

// src/app/components/blog/sidebar/blog-category/blog-category.component.ts
var _c02 = (a0) => ({ $implicit: a0 });
var _c1 = () => ["/blogs"];
var _c2 = (a0) => ({ category: a0 });
function BlogCategoryComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function BlogCategoryComponent_div_0_ng_template_3_ng_container_0_li_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", category_r1 == null ? null : category_r1.blogs_count, ")");
  }
}
function BlogCategoryComponent_div_0_ng_template_3_ng_container_0_li_1_a_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function BlogCategoryComponent_div_0_ng_template_3_ng_container_0_li_1_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275template(1, BlogCategoryComponent_div_0_ng_template_3_ng_container_0_li_1_a_6_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275nextContext(2);
    const recursiveCategory_r2 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", recursiveCategory_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c02, category_r1 == null ? null : category_r1.subcategories));
  }
}
function BlogCategoryComponent_div_0_ng_template_3_ng_container_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 7)(2, "div", 8)(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BlogCategoryComponent_div_0_ng_template_3_ng_container_0_li_1_span_5_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, BlogCategoryComponent_div_0_ng_template_3_ng_container_0_li_1_a_6_Template, 2, 4, "a", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c1))("queryParams", \u0275\u0275pureFunction1(6, _c2, category_r1 == null ? null : category_r1.slug));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", category_r1 == null ? null : category_r1.blogs_count);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", category_r1 == null ? null : category_r1.subcategories);
  }
}
function BlogCategoryComponent_div_0_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BlogCategoryComponent_div_0_ng_template_3_ng_container_0_li_1_Template, 7, 8, "li", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (category_r1 == null ? null : category_r1.type) == "post");
  }
}
function BlogCategoryComponent_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BlogCategoryComponent_div_0_ng_template_3_ng_container_0_Template, 2, 1, "ng-container", 5);
  }
  if (rf & 2) {
    const categories_r3 = ctx.$implicit;
    \u0275\u0275property("ngForOf", categories_r3);
  }
}
function BlogCategoryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "ul");
    \u0275\u0275template(2, BlogCategoryComponent_div_0_div_2_Template, 1, 0, "div", 4)(3, BlogCategoryComponent_div_0_ng_template_3_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recursiveCategory_r2 = \u0275\u0275reference(4);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", recursiveCategory_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c02, ctx_r3.data));
  }
}
function BlogCategoryComponent_app_no_data_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 11);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bg-light");
    \u0275\u0275property("text", "no_category_found");
  }
}
var BlogCategoryComponent = class _BlogCategoryComponent {
  static {
    this.\u0275fac = function BlogCategoryComponent_Factory(t) {
      return new (t || _BlogCategoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogCategoryComponent, selectors: [["app-blog-category"]], inputs: { data: "data" }, decls: 2, vars: 2, consts: [["recursiveCategory", ""], ["class", "category-list-box", 4, "ngIf"], [3, "class", "text", 4, "ngIf"], [1, "category-list-box"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "routerLink", "queryParams"], [1, "category-name"], ["class", "dropdown-menu", 4, "ngIf"], [1, "dropdown-menu"], [3, "text"]], template: function BlogCategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BlogCategoryComponent_div_0_Template, 5, 4, "div", 1)(1, BlogCategoryComponent_app_no_data_1_Template, 1, 3, "app-no-data", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", (ctx.data == null ? null : ctx.data.length) || 0 > 5);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.data == null ? null : ctx.data.length));
      }
    }, dependencies: [NgForOf, NgIf, NgTemplateOutlet, RouterLink, NoDataComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogCategoryComponent, { className: "BlogCategoryComponent", filePath: "src\\app\\components\\blog\\sidebar\\blog-category\\blog-category.component.ts", lineNumber: 9 });
})();

// src/app/components/blog/sidebar/blog-tag/blog-tag.component.ts
var _c03 = () => ["/blogs"];
var _c12 = (a0) => ({ tag: a0 });
function BlogTagComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c03))("queryParams", \u0275\u0275pureFunction1(4, _c12, tag_r1 == null ? null : tag_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r1 == null ? null : tag_r1.name);
  }
}
function BlogTagComponent_app_no_data_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 5);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bg-light");
    \u0275\u0275property("text", "no_tag_found");
  }
}
var BlogTagComponent = class _BlogTagComponent {
  constructor() {
  }
  static {
    this.\u0275fac = function BlogTagComponent_Factory(t) {
      return new (t || _BlogTagComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogTagComponent, selectors: [["app-blog-tag"]], inputs: { tags: "tags" }, decls: 5, vars: 2, consts: [[1, "accordion-body", "pt-0"], [1, "product-tags-box"], [4, "ngFor", "ngForOf"], [3, "class", "text", 4, "ngIf"], [3, "routerLink", "queryParams"], [3, "text"]], template: function BlogTagComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "ul");
        \u0275\u0275template(3, BlogTagComponent_li_3_Template, 3, 6, "li", 2);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(4, BlogTagComponent_app_no_data_4_Template, 1, 3, "app-no-data", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.tags);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.tags == null ? null : ctx.tags.length));
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, NoDataComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogTagComponent, { className: "BlogTagComponent", filePath: "src\\app\\components\\blog\\sidebar\\blog-tag\\blog-tag.component.ts", lineNumber: 9 });
})();

// src/app/components/blog/skeleton-blog/skeleton-blog.component.ts
function SkeletonBlogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    \u0275\u0275element(5, "div", 7);
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275element(7, "div", 8)(8, "div", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275element(10, "div", 9)(11, "div", 9)(12, "div", 9);
    \u0275\u0275elementEnd()()()()();
  }
}
function SkeletonBlogComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "h2", 13)(3, "button", 14);
    \u0275\u0275element(4, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 15)(6, "div", 16)(7, "ul");
    \u0275\u0275element(8, "li", 17)(9, "li", 18)(10, "li", 19)(11, "li", 20)(12, "li", 18)(13, "li", 17)(14, "li", 18)(15, "li", 21)(16, "li", 20)(17, "li", 18)(18, "li", 22)(19, "li", 18)(20, "li", 21)(21, "li", 20)(22, "li", 18)(23, "li", 17)(24, "li", 22)(25, "li", 23)(26, "li", 20)(27, "li", 18);
    \u0275\u0275elementEnd()()()()();
  }
}
var SkeletonBlogComponent = class _SkeletonBlogComponent {
  constructor() {
    this.type = "grid";
  }
  static {
    this.\u0275fac = function SkeletonBlogComponent_Factory(t) {
      return new (t || _SkeletonBlogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonBlogComponent, selectors: [["app-skeleton-blog"]], inputs: { type: "type" }, decls: 2, vars: 2, consts: [["class", "blog-skeleton", 4, "ngIf"], ["class", "accordion left-accordion-box", 4, "ngIf"], [1, "blog-skeleton"], [1, "skeleton-div"], [1, "product-box", "skeleton-box"], [1, "skeleton"], [1, "skeleton__section", "skeleton__section--card"], [1, "skeleton__img"], [1, "skeleton__header", "skeleton__header--long"], [1, "skeleton__p"], [1, "content-div"], [1, "accordion", "left-accordion-box"], [1, "accordion-item", "skeleton-accordion"], [1, "accordion-header"], ["type", "button", 1, "accordion-button"], [1, "accordion-collapse"], [1, "accordion-body"], [1, "placeholder", "col-6"], [1, "placeholder", "col-7"], [1, "placeholder", "col-10"], [1, "placeholder", "col-9"], [1, "placeholder", "col-11"], [1, "placeholder", "col-8"], [1, "placeholder", "col-4"]], template: function SkeletonBlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SkeletonBlogComponent_div_0_Template, 13, 0, "div", 0)(1, SkeletonBlogComponent_div_1_Template, 28, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.type == "grid");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.type == "sidebar");
      }
    }, dependencies: [NgIf] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonBlogComponent, { className: "SkeletonBlogComponent", filePath: "src\\app\\components\\blog\\skeleton-blog\\skeleton-blog.component.ts", lineNumber: 8 });
})();

// src/app/components/blog/sidebar/sidebar.component.ts
var _c04 = () => [];
function BlogSidebarComponent_app_skeleton_blog_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-blog", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("type", "sidebar");
  }
}
function BlogSidebarComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-recent-post", 10);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("blogs", \u0275\u0275pipeBind1(1, 1, ctx_r0.resentBlog$) || \u0275\u0275pureFunction0(3, _c04));
  }
}
function BlogSidebarComponent_ng_template_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-blog-category", 11);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ((tmp_3_0 = \u0275\u0275pipeBind1(1, 1, ctx_r0.category$)) == null ? null : tmp_3_0.data) || \u0275\u0275pureFunction0(3, _c04));
  }
}
function BlogSidebarComponent_ng_template_2_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-blog-tag", 12);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("tags", ((tmp_3_0 = \u0275\u0275pipeBind1(1, 1, ctx_r0.tag$)) == null ? null : tmp_3_0.data) || \u0275\u0275pureFunction0(3, _c04));
  }
}
function BlogSidebarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h2", 6)(3, "button", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9);
    \u0275\u0275template(8, BlogSidebarComponent_ng_template_2_ng_template_8_Template, 2, 4, "ng-template");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 5)(10, "h2", 6)(11, "button", 7);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
    \u0275\u0275template(16, BlogSidebarComponent_ng_template_2_ng_template_16_Template, 2, 4, "ng-template");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 5)(18, "h2", 6)(19, "button", 7);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 8)(23, "div", 9);
    \u0275\u0275template(24, BlogSidebarComponent_ng_template_2_ng_template_24_Template, 2, 4, "ng-template");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "recent_posts"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 8, "categories"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 10, "tags"), " ");
  }
}
var BlogSidebarComponent = class _BlogSidebarComponent {
  constructor(blogService, store) {
    this.blogService = blogService;
    this.store = store;
    this.store.dispatch(new GetTags({ status: 1, type: "post" }));
    this.store.dispatch(new GetRecentBlog({ status: 1, type: "post", paginate: "5" }));
  }
  static {
    this.\u0275fac = function BlogSidebarComponent_Factory(t) {
      return new (t || _BlogSidebarComponent)(\u0275\u0275directiveInject(BlogService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogSidebarComponent, selectors: [["app-blog-sidebar"]], decls: 4, vars: 2, consts: [["content", ""], [1, "left-sidebar-box"], [3, "type", 4, "ngIf", "ngIfElse"], [3, "type"], ["ngbAccordion", "", 1, "accordion", "left-accordion-box"], ["ngbAccordionItem", "", 1, "accordion-item", 3, "collapsed"], ["ngbAccordionHeader", "", 1, "accordion-header"], ["type", "button", "ngbAccordionButton", "", 1, "accordion-button"], ["ngbAccordionCollapse", "", 1, "accordion-collapse", "collapse"], ["ngbAccordionBody", "", 1, "accordion-body", "pt-0"], [3, "blogs"], [3, "data"], [3, "tags"]], template: function BlogSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, BlogSidebarComponent_app_skeleton_blog_1_Template, 1, 1, "app-skeleton-blog", 2)(2, BlogSidebarComponent_ng_template_2_Template, 25, 12, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const content_r2 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.blogService.skeletonLoader)("ngIfElse", content_r2);
      }
    }, dependencies: [NgIf, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, RecentPostComponent, BlogCategoryComponent, BlogTagComponent, SkeletonBlogComponent, AsyncPipe, TranslatePipe] });
  }
};
__decorate([
  Select(BlogState.resentBlog)
], BlogSidebarComponent.prototype, "resentBlog$", void 0);
__decorate([
  Select(TagState.tag)
], BlogSidebarComponent.prototype, "tag$", void 0);
__decorate([
  Select(CategoryState.category)
], BlogSidebarComponent.prototype, "category$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogSidebarComponent, { className: "BlogSidebarComponent", filePath: "src\\app\\components\\blog\\sidebar\\sidebar.component.ts", lineNumber: 19 });
})();

// src/app/components/blog/blog.component.ts
var _c05 = (a0) => ["/blog/", a0];
function BlogComponent_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-skeleton-blog");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.style === "list_view" ? "col-12 list_view" : "col-xxl-4 col-sm-6");
  }
}
function BlogComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275template(2, BlogComponent_ng_container_5_div_2_Template, 2, 2, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function BlogComponent_ng_template_6_div_0_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "featured"));
  }
}
function BlogComponent_ng_template_6_div_0_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const blog_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(blog_r2 == null ? null : blog_r2.created_by == null ? null : blog_r2.created_by.name);
  }
}
function BlogComponent_ng_template_6_div_0_div_1_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 28);
    \u0275\u0275pipe(1, "summary");
  }
  if (rf & 2) {
    const blog_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(1, 1, blog_r2.description, 200), \u0275\u0275sanitizeHtml);
  }
}
function BlogComponent_ng_template_6_div_0_div_1_a_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const blog_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c05, blog_r2 == null ? null : blog_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "read_more"), " ");
  }
}
function BlogComponent_ng_template_6_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 13);
    \u0275\u0275template(2, BlogComponent_ng_template_6_div_0_div_1_div_2_Template, 4, 3, "div", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "a", 16);
    \u0275\u0275element(5, "img", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18)(7, "div", 19)(8, "span", 20);
    \u0275\u0275element(9, "i", 21);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, BlogComponent_ng_template_6_div_0_div_1_span_13_Template, 4, 1, "span", 22);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 16)(16, "h3");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, BlogComponent_ng_template_6_div_0_div_1_p_18_Template, 2, 4, "p", 23)(19, BlogComponent_ng_template_6_div_0_div_1_a_19_Template, 4, 6, "a", 24);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_19_0;
    const blog_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.style === "list_view" ? "col-12" : "col-xxl-4 col-sm-6");
    \u0275\u0275advance();
    \u0275\u0275classProp("blog-list", ctx_r0.style === "list_view");
    \u0275\u0275property("ngClass", (blog_r2 == null ? null : blog_r2.is_sticky) === 1 ? "sticky-blog-box" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", blog_r2 == null ? null : blog_r2.is_featured);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c05, blog_r2 == null ? null : blog_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", (blog_r2 == null ? null : blog_r2.blog_thumbnail == null ? null : blog_r2.blog_thumbnail.original_url) ? blog_r2 == null ? null : blog_r2.blog_thumbnail == null ? null : blog_r2.blog_thumbnail.original_url : "assets/images/blog.png", \u0275\u0275sanitizeUrl)("alt", blog_r2 == null ? null : blog_r2.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("blog-contain-2", ctx_r0.style === "list_view");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 17, blog_r2 == null ? null : blog_r2.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_15_0 = \u0275\u0275pipeBind1(14, 20, ctx_r0.themeOption$)) == null ? null : tmp_15_0.blog == null ? null : tmp_15_0.blog.blog_author_enable);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(26, _c05, blog_r2 == null ? null : blog_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r2 == null ? null : blog_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", blog_r2 == null ? null : blog_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_19_0 = \u0275\u0275pipeBind1(20, 22, ctx_r0.themeOption$)) == null ? null : tmp_19_0.blog == null ? null : tmp_19_0.blog.read_more_enable);
  }
}
function BlogComponent_ng_template_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, BlogComponent_ng_template_6_div_0_div_1_Template, 21, 28, "div", 11);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ratio_65", ctx_r0.style === "list_view");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_5_0 = \u0275\u0275pipeBind1(2, 3, ctx_r0.blog$)) == null ? null : tmp_5_0.data);
  }
}
function BlogComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BlogComponent_ng_template_6_div_0_Template, 3, 5, "div", 12);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    const noData_r3 = \u0275\u0275reference(11);
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(1, 2, ctx_r0.blog$)) == null ? null : tmp_3_0.data == null ? null : tmp_3_0.data.length)("ngIfElse", noData_r3);
  }
}
function BlogComponent_nav_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 31)(1, "app-pagination", 32);
    \u0275\u0275listener("setPage", function BlogComponent_nav_8_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("total", ctx_r0.totalItems)("currentPage", ctx_r0.filter["page"])("pageSize", ctx_r0.filter["paginate"]);
  }
}
function BlogComponent_ng_template_10_app_no_data_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 34);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_blogs_found")("description", "not_find_any_blogs_matching_search_criteria");
  }
}
function BlogComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BlogComponent_ng_template_10_app_no_data_0_Template, 1, 5, "app-no-data", 33);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !((tmp_3_0 = \u0275\u0275pipeBind1(1, 1, ctx_r0.blog$)) == null ? null : tmp_3_0.data == null ? null : tmp_3_0.data.length));
  }
}
var BlogComponent = class _BlogComponent {
  constructor(store, route, blogService) {
    this.store = store;
    this.route = route;
    this.blogService = blogService;
    this.breadcrumb = {
      title: "Blogs",
      items: []
    };
    this.filter = {
      "page": 1,
      "paginate": 12,
      "status": 1,
      "category": "",
      "tag": ""
    };
    this.totalItems = 0;
    this.skeletonItems = Array.from({ length: 9 }, (_, index) => index);
    this.sidebar = "left_sidebar";
    this.route.queryParams.subscribe((params) => {
      this.filter.category = params["category"] ? params["category"] : "";
      this.filter.tag = params["tag"] ? params["tag"] : "";
      this.breadcrumb.items = [];
      this.breadcrumb.title = this.filter.category ? `Blogs: ${this.filter.category.replaceAll("-", " ")}` : this.filter.tag ? `Blogs: ${this.filter.tag.replaceAll("-", " ")}` : "Blogs";
      this.breadcrumb.items.push({ label: "Blogs", active: true });
      this.store.dispatch(new GetBlogs(this.filter));
      if (params["style"]) {
        this.style = params["style"];
      }
      if (params["sidebar"]) {
        this.sidebar = params["sidebar"];
      }
      if (!params["style"] && !params["sidebar"]) {
        this.themeOption$.subscribe((theme) => {
          this.style = theme?.blog?.blog_style;
          this.sidebar = theme?.blog.blog_sidebar_type;
        });
      }
    });
    this.blog$.subscribe((blog) => this.totalItems = blog?.total);
  }
  setPaginate(data) {
    this.filter.page = data;
    this.store.dispatch(new GetBlogs(this.filter));
  }
  static {
    this.\u0275fac = function BlogComponent_Factory(t) {
      return new (t || _BlogComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(BlogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogComponent, selectors: [["app-blogs"]], decls: 15, vars: 14, consts: [["blogContent", ""], ["noData", ""], [3, "breadcrumb"], [1, "blog-section", "section-b-space"], [1, "container-fluid-lg"], [1, "row", "g-4"], [1, "col-xxl-9", "col-xl-8", "col-lg-7"], [4, "ngIf", "ngIfElse"], ["class", "custome-pagination", 4, "ngIf"], [1, "col-xxl-3", "col-xl-4", "col-lg-5"], [1, "left-sidebar-box"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "row g-4", 3, "ratio_65", 4, "ngIf", "ngIfElse"], [1, "blog-box", 3, "ngClass"], ["class", "blog-label-tag", 4, "ngIf"], [1, "blog-image"], [3, "routerLink"], [3, "src", "alt"], [1, "blog-contain", "blog-contain-2"], [1, "blog-label"], [1, "time"], [1, "ri-time-line"], ["class", "super", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["class", "blog-button", 3, "routerLink", 4, "ngIf"], [1, "blog-label-tag"], [1, "super"], [1, "ri-user-line"], [3, "innerHTML"], [1, "blog-button", 3, "routerLink"], [1, "ri-arrow-right-fill"], [1, "custome-pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "class", "image", "text", "description", 4, "ngIf"], [3, "image", "text", "description"]], template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 2);
        \u0275\u0275elementStart(1, "section", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
        \u0275\u0275template(5, BlogComponent_ng_container_5_Template, 3, 1, "ng-container", 7)(6, BlogComponent_ng_template_6_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, BlogComponent_nav_8_Template, 2, 3, "nav", 8);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275template(10, BlogComponent_ng_template_10_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9)(13, "div", 10);
        \u0275\u0275element(14, "app-blog-sidebar");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_7_0;
        const blogContent_r5 = \u0275\u0275reference(7);
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(4);
        \u0275\u0275classMap(ctx.sidebar === "no_sidebar" ? "col-xxl-12 col-xl-12 col-lg-12" : "col-xxl-9 col-xl-8 col-lg-7");
        \u0275\u0275classProp("order-lg-2", ctx.sidebar === "left_sidebar");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.blogService == null ? null : ctx.blogService.skeletonLoader)("ngIfElse", blogContent_r5);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ((tmp_7_0 = \u0275\u0275pipeBind1(9, 12, ctx.blog$)) == null ? null : tmp_7_0.data == null ? null : tmp_7_0.data.length) && !ctx.blogService.skeletonLoader);
        \u0275\u0275advance(4);
        \u0275\u0275classMap(ctx.sidebar === "no_sidebar" ? "d-none" : "");
        \u0275\u0275classProp("order-lg-1", ctx.sidebar === "left_sidebar");
      }
    }, dependencies: [NgClass, NgForOf, NgIf, RouterLink, BreadcrumbComponent, PaginationComponent, NoDataComponent, BlogSidebarComponent, SkeletonBlogComponent, AsyncPipe, DatePipe, SummaryPipe, TranslatePipe] });
  }
};
__decorate([
  Select(BlogState.blog)
], BlogComponent.prototype, "blog$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], BlogComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogComponent, { className: "BlogComponent", filePath: "src\\app\\components\\blog\\blog.component.ts", lineNumber: 18 });
})();

// src/app/components/blog/blog-details/blog-details.component.ts
var _c06 = (a0) => ({ "background-image": a0 });
var BlogDetailsComponent = class _BlogDetailsComponent {
  constructor(seoService, route) {
    this.seoService = seoService;
    this.route = route;
    this.breadcrumb = {
      title: "Product",
      items: []
    };
    this.blog$.subscribe((blog) => {
      this.breadcrumb.items = [];
      this.breadcrumb.title = blog.title;
      this.breadcrumb.items.push({ label: "Blog", active: true }, { label: blog.title, active: false });
    });
    this.route.queryParams.subscribe((params) => {
      if (params["sidebar"]) {
        this.sidebar = params["sidebar"];
      } else {
        this.themeOption$.subscribe((theme) => {
          this.sidebar = theme?.blog.blog_sidebar_type;
        });
      }
    });
  }
  static {
    this.\u0275fac = function BlogDetailsComponent_Factory(t) {
      return new (t || _BlogDetailsComponent)(\u0275\u0275directiveInject(SeoService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogDetailsComponent, selectors: [["app-blog-details"]], decls: 30, vars: 26, consts: [[3, "breadcrumb"], [1, "blog-section", "section-b-space"], [1, "container-fluid-lg"], [1, "row", "g-sm-4", "g-3"], [1, "col-xxl-3", "col-xl-4", "col-lg-5", "d-lg-block", "d-none", 3, "ngClass"], [1, "col-xxl-9", "col-xl-8", "col-lg-7", "ratio_50"], [1, "blog-detail-image", "rounded-3", "mb-4", "bg-size", 3, "ngStyle"], [1, "blog-image-contain"], [1, "contain-comment-list"], [1, "user-list"], [1, "ri-user-line"], [1, "ri-time-line"], [1, "blog-detail-contain", "ckeditor-content", 3, "innerHTML"]], template: function BlogDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "app-blog-sidebar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275pipe(9, "async");
        \u0275\u0275elementStart(10, "div", 7)(11, "h2");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "ul", 8)(15, "li")(16, "div", 9);
        \u0275\u0275element(17, "i", 10);
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "li")(22, "div", 9);
        \u0275\u0275element(23, "i", 11);
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275pipe(27, "date");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275element(28, "div", 12);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("order-lg-1", ctx.sidebar === "right_sidebar");
        \u0275\u0275property("ngClass", ctx.sidebar === "no_sidebar" ? "d-none" : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(24, _c06, "url(" + (((tmp_3_0 = \u0275\u0275pipeBind1(8, 9, ctx.blog$)) == null ? null : tmp_3_0.blog_thumbnail) ? (tmp_3_0 = \u0275\u0275pipeBind1(9, 11, ctx.blog$)) == null ? null : tmp_3_0.blog_thumbnail == null ? null : tmp_3_0.blog_thumbnail.original_url : "assets/images/blog.png") + ")"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate((tmp_4_0 = \u0275\u0275pipeBind1(13, 13, ctx.blog$)) == null ? null : tmp_4_0.title);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate((tmp_5_0 = \u0275\u0275pipeBind1(20, 15, ctx.blog$)) == null ? null : tmp_5_0.created_by == null ? null : tmp_5_0.created_by.name);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 19, (tmp_6_0 = \u0275\u0275pipeBind1(26, 17, ctx.blog$)) == null ? null : tmp_6_0.created_at, "dd MMM yyyy hh:mm:a"));
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", (tmp_7_0 = \u0275\u0275pipeBind1(29, 22, ctx.blog$)) == null ? null : tmp_7_0.content, \u0275\u0275sanitizeHtml);
      }
    }, dependencies: [NgClass, NgStyle, BreadcrumbComponent, BlogSidebarComponent, AsyncPipe, DatePipe] });
  }
};
__decorate([
  Select(BlogState.selectedBlog)
], BlogDetailsComponent.prototype, "blog$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], BlogDetailsComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogDetailsComponent, { className: "BlogDetailsComponent", filePath: "src\\app\\components\\blog\\blog-details\\blog-details.component.ts", lineNumber: 18 });
})();

// src/app/components/blog/blog-routing.module.ts
var routes = [
  {
    path: "blogs",
    component: BlogComponent
  },
  {
    path: "blog/:slug",
    component: BlogDetailsComponent,
    resolve: {
      data: BlogResolver
    }
  }
];
var BlogRoutingModule = class _BlogRoutingModule {
  static {
    this.\u0275fac = function BlogRoutingModule_Factory(t) {
      return new (t || _BlogRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BlogRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/components/blog/blog.module.ts
var BlogModule = class _BlogModule {
  static {
    this.\u0275fac = function BlogModule_Factory(t) {
      return new (t || _BlogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BlogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      BlogRoutingModule,
      SharedModule,
      TranslateModule
    ] });
  }
};

export {
  SkeletonBlogComponent,
  BlogModule
};
//# sourceMappingURL=chunk-SPDKDN4N.js.map
