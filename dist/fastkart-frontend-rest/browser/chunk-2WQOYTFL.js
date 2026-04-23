import {
  ContactUs,
  CouponService,
  CouponState,
  Error404Component,
  GetCoupons,
  GetFaqs,
  GetPageBySlug,
  PageService,
  PageState
} from "./chunk-GHS4OJJ3.js";
import {
  BreadcrumbComponent,
  ButtonComponent,
  GetProducts,
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NoDataComponent,
  ProductBoxComponent,
  ProductService,
  ProductState,
  Select,
  SharedModule,
  SkeletonProductBoxComponent,
  Store,
  ThemeOptionState,
  TranslateModule,
  TranslatePipe,
  productSlider6ItemMargin
} from "./chunk-24LTJJML.js";
import {
  SeoService
} from "./chunk-4VA66D5F.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  PatternValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-UJVGNNHA.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  Meta,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  __decorate,
  debounceTime,
  distinctUntilChanged,
  inject,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MJNPSVHG.js";

// src/app/shared/resolvers/page.resolver.ts
var PageResolver = (route, state) => {
  return inject(Store).dispatch(new GetPageBySlug(route.paramMap.get("slug")));
};

// src/app/components/page/skeleton-page/skeleton-page.component.ts
var SkeletonPageComponent = class _SkeletonPageComponent {
  static {
    this.\u0275fac = function SkeletonPageComponent_Factory(t) {
      return new (t || _SkeletonPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonPageComponent, selectors: [["app-skeleton-page"]], decls: 17, vars: 0, consts: [[1, "common-skeleton"], [1, "img-box"], [1, "img"], [1, "img-content"], [1, "placeholder", "col-6"], [1, "placeholder", "col-7"], [1, "placeholder", "col-10"], [1, "placeholder", "col-9"], [1, "placeholder", "col-8"], [1, "placeholder", "col-11"]], template: function SkeletonPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "ul");
        \u0275\u0275element(11, "li", 8)(12, "li", 7)(13, "li", 6)(14, "li", 5)(15, "li", 7)(16, "li", 9);
        \u0275\u0275elementEnd()();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonPageComponent, { className: "SkeletonPageComponent", filePath: "src\\app\\components\\page\\skeleton-page\\skeleton-page.component.ts", lineNumber: 8 });
})();

// src/app/components/page/page.component.ts
function PageComponent_app_skeleton_page_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-page");
  }
}
function PageComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", (tmp_2_0 = \u0275\u0275pipeBind1(1, 1, ctx_r0.selectedPage$)) == null ? null : tmp_2_0.content, \u0275\u0275sanitizeHtml);
  }
}
var PageComponent = class _PageComponent {
  constructor(meta, pageService) {
    this.meta = meta;
    this.pageService = pageService;
    this.breadcrumb = {
      title: "Page",
      items: []
    };
    this.selectedPage$.subscribe((page) => {
      this.breadcrumb.items = [];
      this.breadcrumb.title = page.title;
      this.breadcrumb.items.push({ label: "Page", active: true }, { label: page.title, active: false });
      page?.meta_title && this.meta.updateTag({ property: "og:title", content: page?.meta_title });
      page?.meta_description && this.meta.updateTag({ property: "og:description", content: page?.meta_description });
    });
  }
  static {
    this.\u0275fac = function PageComponent_Factory(t) {
      return new (t || _PageComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(PageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageComponent, selectors: [["app-pages"]], decls: 6, vars: 3, consts: [["content", ""], [3, "breadcrumb"], [1, "section-b-space", "ckeditor-content"], [1, "container"], [4, "ngIf", "ngIfElse"], [3, "innerHTML"]], template: function PageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 1);
        \u0275\u0275elementStart(1, "section", 2)(2, "div", 3);
        \u0275\u0275template(3, PageComponent_app_skeleton_page_3_Template, 1, 0, "app-skeleton-page", 4)(4, PageComponent_ng_template_4_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const content_r2 = \u0275\u0275reference(5);
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.pageService == null ? null : ctx.pageService.skeletonLoader)("ngIfElse", content_r2);
      }
    }, dependencies: [NgIf, BreadcrumbComponent, SkeletonPageComponent, AsyncPipe] });
  }
};
__decorate([
  Select(PageState.selectedPage)
], PageComponent.prototype, "selectedPage$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageComponent, { className: "PageComponent", filePath: "src\\app\\components\\page\\page.component.ts", lineNumber: 15 });
})();

// src/app/components/page/faq/faq.component.ts
function FaqComponent_section_1_app_skeleton_page_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-page");
  }
}
function FaqComponent_section_1_ng_template_3_div_12_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r1.description);
  }
}
function FaqComponent_section_1_ng_template_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h2", 15)(2, "button", 16);
    \u0275\u0275text(3);
    \u0275\u0275element(4, "i", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19);
    \u0275\u0275template(7, FaqComponent_section_1_ng_template_3_div_12_ng_template_7_Template, 3, 1, "ng-template");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275property("collapsed", i_r2 !== 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", faq_r1.title, " ");
  }
}
function FaqComponent_section_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "div", 12);
    \u0275\u0275template(12, FaqComponent_section_1_ng_template_3_div_12_Template, 8, 2, "div", 13);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "frequently_asked_questions"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "you_can_find_out_more_searching"));
    \u0275\u0275advance(4);
    \u0275\u0275property("closeOthers", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_6_0 = \u0275\u0275pipeBind1(13, 8, ctx_r2.faq$)) == null ? null : tmp_6_0.data);
  }
}
function FaqComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 5);
    \u0275\u0275template(2, FaqComponent_section_1_app_skeleton_page_2_Template, 1, 0, "app-skeleton-page", 6)(3, FaqComponent_section_1_ng_template_3_Template, 14, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const content_r4 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.pageService == null ? null : ctx_r2.pageService.skeletonLoader)("ngIfElse", content_r4);
  }
}
function FaqComponent_app_no_data_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 21);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/no-product.svg")("text", "no_faq_found")("description", "inform_you_that_the_faq__currently_unavailable");
  }
}
var FaqComponent = class _FaqComponent {
  constructor(store, pageService) {
    this.store = store;
    this.pageService = pageService;
    this.breadcrumb = {
      title: "FAQ's",
      items: [{ label: "FAQ's", active: true }]
    };
    this.pageService.skeletonLoader = true;
    this.store.dispatch(new GetFaqs()).subscribe({
      complete: () => {
        this.pageService.skeletonLoader = false;
      }
    });
  }
  static {
    this.\u0275fac = function FaqComponent_Factory(t) {
      return new (t || _FaqComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], decls: 5, vars: 7, consts: [["content", ""], [3, "breadcrumb"], ["class", "faq-box-contain section-b-space", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "faq-box-contain", "section-b-space"], [1, "container"], [4, "ngIf", "ngIfElse"], [1, "row"], [1, "col-xl-5"], [1, "faq-contain"], [1, "col-xl-7"], [1, "faq-accordion"], ["ngbAccordion", "", 1, "accordion", 3, "closeOthers"], ["ngbAccordionItem", "", "class", "accordion-item", 3, "collapsed", 4, "ngFor", "ngForOf"], ["ngbAccordionItem", "", 1, "accordion-item", 3, "collapsed"], ["ngbAccordionHeader", "", 1, "accordion-header"], ["type", "button", "ngbAccordionButton", "", 1, "accordion-button"], [1, "ri-arrow-down-s-line"], ["ngbAccordionCollapse", "", 1, "accordion-collapse", "collapse"], ["ngbAccordionBody", ""], [1, "accordion-body"], [3, "image", "text", "description"]], template: function FaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 1);
        \u0275\u0275template(1, FaqComponent_section_1_Template, 5, 2, "section", 2);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275template(3, FaqComponent_app_no_data_3_Template, 1, 5, "app-no-data", 3);
        \u0275\u0275pipe(4, "async");
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(2, 3, ctx.faq$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 5, ctx.faq$)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.length) && (ctx.pageService == null ? null : ctx.pageService.skeletonLoader));
      }
    }, dependencies: [NgForOf, NgIf, BreadcrumbComponent, NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionBody, NgbAccordionCollapse, NoDataComponent, SkeletonPageComponent, AsyncPipe, TranslatePipe] });
  }
};
__decorate([
  Select(PageState.faq)
], FaqComponent.prototype, "faq$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src\\app\\components\\page\\faq\\faq.component.ts", lineNumber: 15 });
})();

// src/app/components/page/contact-us/contact-us.component.ts
function ContactUsComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "name_is_required"));
  }
}
function ContactUsComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "email_is_required"));
  }
}
function ContactUsComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "invalid_email"));
  }
}
function ContactUsComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "phone_number_is_required"));
  }
}
function ContactUsComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "subject_is_required"));
  }
}
function ContactUsComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "message_is_required"));
  }
}
var ContactUsComponent = class _ContactUsComponent {
  constructor(formBuilder, store, seoService) {
    this.formBuilder = formBuilder;
    this.store = store;
    this.seoService = seoService;
    this.breadcrumb = {
      title: "Contact Us",
      items: [{ label: "Contact Us", active: true }]
    };
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required]),
      subject: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required])
    });
  }
  ngOnInit() {
    this.seoService.setSEOData({
      title: "Contact Kahuafashionclub \u2013 We're Here to Help You 24/7",
      description: "Get in touch with Kahuafashionclub customer support. We're available 24/7 to help with orders, products, and any questions you may have.",
      keywords: "contact us, customer support, help, Kahuafashionclub contact, customer service",
      canonicalUrl: "https://kahuafashionclub.com/Contact-Us",
      url: "https://kahuafashionclub.com/Contact-Us",
      type: "website",
      image: "https://kahuafashionclub.com/assets/images/contact-us.jpg"
    });
  }
  filterSpecialCharacters(event, fieldName) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.form.get(fieldName)?.setValue(filteredValue);
    }
  }
  filterEmailCharacters(event) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/[^a-zA-Z0-9._\-+@]/g, "");
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.form.get("email")?.setValue(filteredValue);
    }
  }
  filterPhoneNumber(event) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/\D/g, "").slice(0, 10);
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.form.get("phone")?.setValue(filteredValue);
    }
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new ContactUs(this.form.value)).subscribe({
        complete: () => {
          this.form.reset();
        }
      });
    }
  }
  static {
    this.\u0275fac = function ContactUsComponent_Factory(t) {
      return new (t || _ContactUsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactUsComponent, selectors: [["app-contact-us"]], decls: 140, vars: 42, consts: [[3, "breadcrumb"], [1, "contact-hero-section"], [1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [1, "contact-hero-content"], [1, "hero-icon-wrapper"], [1, "ri-customer-service-2-line"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-description"], [1, "contact-main-section", "section-lg-space"], [1, "row", "g-4"], [1, "col-lg-5"], [1, "contact-info-card"], [1, "card-header-modern"], [1, "section-title"], [1, "ri-information-line"], [1, "card-body-modern"], [1, "info-item"], [1, "info-icon-wrapper"], [1, "ri-building-line"], [1, "info-content"], [1, "info-label"], [1, "info-value"], [1, "ri-file-text-line"], [1, "ri-mail-line"], ["href", "mailto:info@kahuafashionclub.com"], [1, "ri-map-pin-line"], [1, "ri-global-line"], ["href", "https://kahuafashionclub.com", "target", "_blank"], [1, "col-lg-7"], [1, "contact-form-card"], [1, "ri-message-3-line"], [1, "section-subtitle"], [3, "ngSubmit", "formGroup"], [1, "contact-form-fields"], [1, "form-field-wrapper"], ["for", "fullname", 1, "form-label-modern"], [1, "ri-user-line"], [1, "input-wrapper"], ["type", "text", "id", "fullname", "formControlName", "name", "pattern", "[a-zA-Z\\s]+", 1, "form-input-modern", 3, "input", "placeholder"], [1, "ri-user-3-fill", "input-icon"], ["class", "error-message", 4, "ngIf"], [1, "form-row"], ["for", "email", 1, "form-label-modern"], ["type", "email", "id", "email", "formControlName", "email", "pattern", "[a-zA-Z0-9._\\-+@]+", 1, "form-input-modern", 3, "input", "placeholder"], [1, "ri-mail-fill", "input-icon"], ["for", "phonenumber", 1, "form-label-modern"], [1, "ri-phone-line"], ["type", "tel", "id", "phonenumber", "formControlName", "phone", "maxlength", "10", "pattern", "[0-9]{10}", 1, "form-input-modern", 3, "input", "placeholder"], [1, "ri-smartphone-line", "input-icon"], ["for", "subject", 1, "form-label-modern"], [1, "ri-file-list-line"], ["type", "text", "id", "subject", "formControlName", "subject", 1, "form-input-modern", 3, "placeholder"], [1, "ri-file-text-line", "input-icon"], ["for", "message", 1, "form-label-modern"], [1, "ri-message-2-line"], ["id", "message", "rows", "6", "formControlName", "message", 1, "form-textarea-modern", 3, "placeholder"], [1, "ri-chat-2-fill", "input-icon", "textarea-icon"], [1, "form-submit-wrapper"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "ri-send-plane-fill"], [1, "error-message"], [1, "ri-error-warning-line"]], template: function ContactUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h1", 8);
        \u0275\u0275text(9, "Contact Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 9);
        \u0275\u0275text(11, "We'd love to hear from you!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 10);
        \u0275\u0275text(13, " Get in touch with our customer support team for any questions, assistance, or feedback. We're here to help you 24/7. ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(14, "section", 11)(15, "div", 2)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "h3", 16);
        \u0275\u0275element(21, "i", 17);
        \u0275\u0275text(22, " Company Information ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 18)(24, "div", 19)(25, "div", 20);
        \u0275\u0275element(26, "i", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 22)(28, "label", 23);
        \u0275\u0275text(29, "Company Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 24);
        \u0275\u0275text(31, "KAHUA SYSTEMS PRIVATE LIMITED");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 19)(33, "div", 20);
        \u0275\u0275element(34, "i", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 22)(36, "label", 23);
        \u0275\u0275text(37, "GST");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p", 24);
        \u0275\u0275text(39, "09AAFCK5079D1ZE");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 19)(41, "div", 20);
        \u0275\u0275element(42, "i", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 22)(44, "label", 23);
        \u0275\u0275text(45, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p", 24)(47, "a", 27);
        \u0275\u0275text(48, "info@kahuafashionclub.com");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "div", 19)(50, "div", 20);
        \u0275\u0275element(51, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 22)(53, "label", 23);
        \u0275\u0275text(54, "Registered Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 24)(56, "div");
        \u0275\u0275text(57, "KAHUA SYSTEMS PRIVATE LIMITED");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div");
        \u0275\u0275text(59, "FF-202, Gaur City Center");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div");
        \u0275\u0275text(61, "Greater Noida, Gautam Buddh Nagar\nUttar Pradesh - 201301");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "div", 19)(63, "div", 20);
        \u0275\u0275element(64, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 22)(66, "label", 23);
        \u0275\u0275text(67, "Website");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "p", 24)(69, "a", 30);
        \u0275\u0275text(70, "kahuafashionclub.com");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(71, "div", 31)(72, "div", 32)(73, "div", 15)(74, "h3", 16);
        \u0275\u0275element(75, "i", 33);
        \u0275\u0275text(76, " Get In Touch ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "p", 34);
        \u0275\u0275text(78, "Fill out the form below and we'll get back to you as soon as possible.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 18)(80, "form", 35);
        \u0275\u0275listener("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_80_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(81, "div", 36)(82, "div", 37)(83, "label", 38);
        \u0275\u0275element(84, "i", 39);
        \u0275\u0275text(85);
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 40)(88, "input", 41);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275listener("input", function ContactUsComponent_Template_input_input_88_listener($event) {
          return ctx.filterSpecialCharacters($event, "name");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(90, "i", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275template(91, ContactUsComponent_div_91_Template, 5, 3, "div", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "div", 44)(93, "div", 37)(94, "label", 45);
        \u0275\u0275element(95, "i", 26);
        \u0275\u0275text(96);
        \u0275\u0275pipe(97, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 40)(99, "input", 46);
        \u0275\u0275pipe(100, "translate");
        \u0275\u0275listener("input", function ContactUsComponent_Template_input_input_99_listener($event) {
          return ctx.filterEmailCharacters($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(101, "i", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275template(102, ContactUsComponent_div_102_Template, 5, 3, "div", 43)(103, ContactUsComponent_div_103_Template, 5, 3, "div", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 37)(105, "label", 48);
        \u0275\u0275element(106, "i", 49);
        \u0275\u0275text(107);
        \u0275\u0275pipe(108, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div", 40)(110, "input", 50);
        \u0275\u0275pipe(111, "translate");
        \u0275\u0275listener("input", function ContactUsComponent_Template_input_input_110_listener($event) {
          return ctx.filterPhoneNumber($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(112, "i", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275template(113, ContactUsComponent_div_113_Template, 5, 3, "div", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "div", 37)(115, "label", 52);
        \u0275\u0275element(116, "i", 53);
        \u0275\u0275text(117);
        \u0275\u0275pipe(118, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "div", 40);
        \u0275\u0275element(120, "input", 54);
        \u0275\u0275pipe(121, "translate");
        \u0275\u0275element(122, "i", 55);
        \u0275\u0275elementEnd();
        \u0275\u0275template(123, ContactUsComponent_div_123_Template, 5, 3, "div", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "div", 37)(125, "label", 56);
        \u0275\u0275element(126, "i", 57);
        \u0275\u0275text(127);
        \u0275\u0275pipe(128, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "div", 40);
        \u0275\u0275element(130, "textarea", 58);
        \u0275\u0275pipe(131, "translate");
        \u0275\u0275element(132, "i", 59);
        \u0275\u0275elementEnd();
        \u0275\u0275template(133, ContactUsComponent_div_133_Template, 5, 3, "div", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "div", 60)(135, "button", 61);
        \u0275\u0275element(136, "i", 62);
        \u0275\u0275elementStart(137, "span");
        \u0275\u0275text(138);
        \u0275\u0275pipe(139, "translate");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(80);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 20, "full_name"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(89, 22, "enter_full_name"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.form.controls["name"].touched && (ctx.form.controls["name"].errors == null ? null : ctx.form.controls["name"].errors["required"]));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(97, 24, "email_address"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(100, 26, "enter_email_address"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(108, 28, "phone_number"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(111, 30, "enter_your_phone_number"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["required"]));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(118, 32, "subject"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(121, 34, "enter_subject"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.form.controls["subject"].touched && (ctx.form.controls["subject"].errors == null ? null : ctx.form.controls["subject"].errors["required"]));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(128, 36, "message"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(131, 38, "enter_your_message"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.form.controls["message"].touched && (ctx.form.controls["message"].errors == null ? null : ctx.form.controls["message"].errors["required"]));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.invalid);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(139, 40, "send_message"));
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, FormGroupDirective, FormControlName, BreadcrumbComponent, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family: inherit;\n}\n.contact-hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 72px 0 64px;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  overflow: hidden;\n  text-align: center;\n}\n.contact-hero-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50px;\n  right: -30px;\n  width: 320px;\n  height: 320px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(30, 127, 201, 0.25) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n@media (max-width: 768px) {\n  .contact-hero-section[_ngcontent-%COMP%] {\n    padding: 52px 0 48px;\n  }\n}\n.contact-hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n}\n.hero-icon-wrapper[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 6px;\n}\n.hero-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px !important;\n  color: #B38A48 !important;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 52px !important;\n  font-weight: 900 !important;\n  color: #fff !important;\n  margin: 0 !important;\n  letter-spacing: -2px;\n}\n@media (max-width: 768px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px !important;\n  }\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  font-weight: 700;\n  color: #B38A48 !important;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  margin: 0 !important;\n}\n.hero-description[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  color: rgba(255, 255, 255, 0.58) !important;\n  line-height: 1.7 !important;\n  margin: 0 !important;\n  max-width: 500px;\n}\n.contact-main-section[_ngcontent-%COMP%] {\n  padding: 60px 0 80px;\n  background: #F8F9FB;\n}\n@media (max-width: 768px) {\n  .contact-main-section[_ngcontent-%COMP%] {\n    padding: 40px 0 60px;\n  }\n}\n.contact-info-card[_ngcontent-%COMP%], .contact-form-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E6E8EC;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 14px 36px rgba(15, 23, 32, 0.08);\n  transition: box-shadow 0.35s ease;\n  height: 100%;\n}\n.contact-info-card[_ngcontent-%COMP%]:hover, .contact-form-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(15, 23, 32, 0.04), 0 20px 50px rgba(30, 127, 201, 0.1);\n}\n.card-header-modern[_ngcontent-%COMP%] {\n  padding: 20px 26px;\n  background:\n    linear-gradient(\n      90deg,\n      #F8F9FB 0%,\n      #FFFFFF 100%);\n  border-bottom: 1px solid #E6E8EC;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2px !important;\n  text-transform: uppercase !important;\n  color: #0F1720 !important;\n  margin: 0 0 4px !important;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n  color: #1E7FC9 !important;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  color: #6B7280 !important;\n  margin: 0 !important;\n}\n.card-body-modern[_ngcontent-%COMP%] {\n  padding: 22px 26px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding-bottom: 18px;\n  border-bottom: 1px solid #E6E8EC;\n}\n.info-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.info-item[_ngcontent-%COMP%]:hover   .info-icon-wrapper[_ngcontent-%COMP%] {\n  background: #1E7FC9;\n  border-color: #135a95;\n  transform: scale(1.08) rotate(-6deg);\n  box-shadow: 0 6px 16px rgba(30, 127, 201, 0.35);\n}\n.info-item[_ngcontent-%COMP%]:hover   .info-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.info-icon-wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  border-radius: 12px;\n  background: #EAF3FB;\n  border: 1px solid rgba(30, 127, 201, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  margin-top: 2px;\n}\n.info-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: #1E7FC9 !important;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 10px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2.5px !important;\n  text-transform: uppercase;\n  color: #6B7280;\n  display: block;\n  margin-bottom: 6px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  font-weight: 600;\n  color: #0F1720 !important;\n  line-height: 1.65;\n  margin: 0 !important;\n}\n.info-value[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1E7FC9;\n  text-decoration: none;\n}\n.info-value[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.info-value[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  line-height: 1.65;\n}\n.contact-form-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 575px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-field-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-label-modern[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2px !important;\n  text-transform: uppercase;\n  color: #0F1720 !important;\n  margin: 0 !important;\n}\n.form-label-modern[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 7px;\n  background: #EAF3FB;\n  color: #1E7FC9 !important;\n  font-size: 13px !important;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-input-modern[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  padding: 0 44px 0 16px !important;\n  border: 1.5px solid #D1D5DB !important;\n  border-radius: 12px !important;\n  font-size: 14px !important;\n  font-weight: 600;\n  color: #0F1720 !important;\n  background: #F8F9FB !important;\n  font-family: inherit;\n  outline: none !important;\n  transition: all 0.3s ease !important;\n  box-shadow: 0 1px 3px rgba(15, 23, 32, 0.04) !important;\n}\n.form-input-modern[_ngcontent-%COMP%]::placeholder {\n  color: #D1D5DB !important;\n}\n.form-input-modern[_ngcontent-%COMP%]:focus {\n  border-color: #1E7FC9 !important;\n  background: #FFFFFF !important;\n  box-shadow: 0 0 0 4px rgba(30, 127, 201, 0.12), 0 4px 12px rgba(30, 127, 201, 0.08) !important;\n}\n.form-textarea-modern[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 44px 14px 16px !important;\n  border: 1.5px solid #D1D5DB !important;\n  border-radius: 12px !important;\n  font-size: 14px !important;\n  font-weight: 600;\n  color: #0F1720 !important;\n  background: #F8F9FB !important;\n  font-family: inherit;\n  outline: none !important;\n  resize: vertical;\n  line-height: 1.6;\n  min-height: 130px;\n  transition: all 0.3s ease !important;\n  box-shadow: 0 1px 3px rgba(15, 23, 32, 0.04) !important;\n}\n.form-textarea-modern[_ngcontent-%COMP%]::placeholder {\n  color: #D1D5DB !important;\n}\n.form-textarea-modern[_ngcontent-%COMP%]:focus {\n  border-color: #1E7FC9 !important;\n  background: #FFFFFF !important;\n  box-shadow: 0 0 0 4px rgba(30, 127, 201, 0.12), 0 4px 12px rgba(30, 127, 201, 0.08) !important;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 16px !important;\n  color: #D1D5DB !important;\n  pointer-events: none;\n}\n.textarea-icon[_ngcontent-%COMP%] {\n  top: 16px;\n  transform: none;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #E7475A;\n  padding: 6px 12px;\n  background: #FDECEE;\n  border: 1px solid rgba(231, 71, 90, 0.25);\n  border-radius: 8px;\n}\n.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  color: #E7475A !important;\n}\n.form-submit-wrapper[_ngcontent-%COMP%] {\n  padding-top: 6px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  height: 56px;\n  padding: 0 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #1E7FC9 0%,\n      #135a95 100%);\n  color: #fff;\n  border: none;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 2.5px;\n  text-transform: uppercase;\n  cursor: pointer;\n  overflow: hidden;\n  transition: all 0.4s ease;\n  box-shadow: 0 4px 12px rgba(30, 127, 201, 0.28), 0 14px 32px rgba(30, 127, 201, 0.2);\n}\n.btn-submit[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  transform: translateX(-101%);\n  transition: transform 0.45s ease;\n}\n.btn-submit[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.btn-submit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(30, 127, 201, 0.4);\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled)::before {\n  transform: translateX(0);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=contact-us.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactUsComponent, { className: "ContactUsComponent", filePath: "src\\app\\components\\page\\contact-us\\contact-us.component.ts", lineNumber: 13 });
})();

// src/app/components/page/offer/offer.component.ts
function OfferComponent_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div");
    \u0275\u0275element(5, "h5", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275element(7, "p")(8, "p", 13)(9, "p", 14);
    \u0275\u0275elementEnd()()();
  }
}
function OfferComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275template(4, OfferComponent_ng_container_1_div_4_Template, 10, 0, "div", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function OfferComponent_ng_template_2_div_3_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275listener("click", function OfferComponent_ng_template_2_div_3_a_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const coupon_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyFunction(coupon_r3.code));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "copy_code"), " ");
  }
}
function OfferComponent_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div")(5, "h5", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "div", 12)(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 17)(11, "h6", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, OfferComponent_ng_template_2_div_3_a_13_Template, 3, 3, "a", 19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const coupon_r3 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(coupon_r3 == null ? null : coupon_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(coupon_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", coupon_r3 == null ? null : coupon_r3.code, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", coupon_r3 == null ? null : coupon_r3.code);
  }
}
function OfferComponent_ng_template_2_app_no_data_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 21);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/no-product.svg")("text", "no_Offers_found")("description", "inform_you_that_the_currently_unavailable");
  }
}
function OfferComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 4)(2, "div", 5);
    \u0275\u0275template(3, OfferComponent_ng_template_2_div_3_Template, 14, 4, "div", 6);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, OfferComponent_ng_template_2_app_no_data_5_Template, 1, 5, "app-no-data", 16);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (tmp_2_0 = \u0275\u0275pipeBind1(4, 2, ctx_r0.coupon$)) == null ? null : tmp_2_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_3_0 = \u0275\u0275pipeBind1(6, 4, ctx_r0.coupon$)) == null ? null : tmp_3_0.data == null ? null : tmp_3_0.data.length) && !ctx_r0.couponService.skeletonLoader);
  }
}
var OfferComponent = class _OfferComponent {
  constructor(store, couponService) {
    this.store = store;
    this.couponService = couponService;
    this.skeletonItems = Array.from({ length: 8 }, (_, index) => index);
    this.breadcrumb = {
      title: "Offer",
      items: [{ label: "Offer", active: true }]
    };
    this.store.dispatch(new GetCoupons({ status: 1 }));
  }
  copyFunction(txt) {
    navigator.clipboard.writeText(txt);
  }
  static {
    this.\u0275fac = function OfferComponent_Factory(t) {
      return new (t || _OfferComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(CouponService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfferComponent, selectors: [["app-offer"]], decls: 4, vars: 3, consts: [["offerContent", ""], [3, "breadcrumb"], [4, "ngIf", "ngIfElse"], [1, "section-b-space", "section-t-space", "offer-section", "skeleton-offer"], [1, "container-fluid-lg"], [1, "row", "g-md-4", "g-3"], ["class", "col-xxl-3 col-lg-4 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-xxl-3", "col-lg-4", "col-sm-6"], [1, "coupon-box"], [1, "coupon-name"], [1, "card-name"], [1, "fw-semibold", "dark-text"], [1, "coupon-content"], [1, "long"], [1, "long", "long-s"], [1, "section-b-space", "section-t-space", "offer-section"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "coupon-apply"], [1, "coupon-code", "success-color"], ["href", "javascript:void(0)", "class", "btn theme-btn border-btn copy-btn mt-0", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "theme-btn", "border-btn", "copy-btn", "mt-0", 3, "click"], [3, "image", "text", "description"]], template: function OfferComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 1);
        \u0275\u0275template(1, OfferComponent_ng_container_1_Template, 5, 1, "ng-container", 2)(2, OfferComponent_ng_template_2_Template, 7, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const offerContent_r4 = \u0275\u0275reference(3);
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.couponService == null ? null : ctx.couponService.skeletonLoader)("ngIfElse", offerContent_r4);
      }
    }, dependencies: [NgForOf, NgIf, BreadcrumbComponent, NoDataComponent, AsyncPipe, TranslatePipe] });
  }
};
__decorate([
  Select(CouponState.coupon)
], OfferComponent.prototype, "coupon$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfferComponent, { className: "OfferComponent", filePath: "src\\app\\components\\page\\offer\\offer.component.ts", lineNumber: 15 });
})();

// src/app/components/page/about-us/about-us.component.ts
var AboutUsComponent = class _AboutUsComponent {
  constructor() {
    this.breadcrumb = {
      title: "About Us",
      items: [{ label: "About Us", active: true }]
    };
  }
  static {
    this.\u0275fac = function AboutUsComponent_Factory(t) {
      return new (t || _AboutUsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutUsComponent, selectors: [["app-about-us"]], decls: 112, vars: 1, consts: [[3, "breadcrumb"], [1, "kfa-intro"], [1, "container-fluid-lg"], [1, "kfa-eyebrow"], [1, "kfa-headline"], [1, "kfa-stats"], [1, "kfa-stats-row"], [1, "kfa-stat"], [1, "kfa-stat-num"], [1, "kfa-stat-label"], [1, "kfa-story"], [1, "kfa-story-grid"], [1, "kfa-story-img"], ["src", "assets/images/about-T.png", "alt", "Kahua Fashion", 1, "img-fluid"], [1, "kfa-story-text"], [1, "kfa-promises"], [1, "kfa-promises-title"], [1, "kfa-promise-scroll"], [1, "kfa-promise-card"], [1, "kfa-promise-icon"], [1, "ri-t-shirt-line"], [1, "ri-truck-line"], [1, "ri-exchange-line"], [1, "ri-shield-check-line"], [1, "kfa-company"], [1, "kfa-company-inner"], [1, "kfa-info-table"], [1, "kfa-td-label"], ["href", "https://kahuafashionclub.com/", "target", "_blank"], ["href", "mailto: info@kahuafashionclub.com"]], template: function AboutUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4, "Est. 2024");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "We make fashion");
        \u0275\u0275element(7, "br");
        \u0275\u0275elementStart(8, "em");
        \u0275\u0275text(9, "feel personal.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "section", 5)(11, "div", 2)(12, "div", 6)(13, "div", 7)(14, "span", 8);
        \u0275\u0275text(15, "5K+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 9);
        \u0275\u0275text(17, "Happy Customers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 7)(19, "span", 8);
        \u0275\u0275text(20, "200+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 9);
        \u0275\u0275text(22, "Styles Curated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 7)(24, "span", 8);
        \u0275\u0275text(25, "15+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 9);
        \u0275\u0275text(27, "Cities Delivered");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 7)(29, "span", 8);
        \u0275\u0275text(30, "4.8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 9);
        \u0275\u0275text(32, "Avg Rating");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(33, "section", 10)(34, "div", 2)(35, "div", 11)(36, "div", 12);
        \u0275\u0275element(37, "img", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 14)(39, "p", 3);
        \u0275\u0275text(40, "Our Story");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "h2");
        \u0275\u0275text(42, "Born from a love for fabric & fit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p");
        \u0275\u0275text(44, "Kahua Fashion Club started with one idea \u2014 fashion should feel good, look great, and not cost a fortune. We handpick fabrics, obsess over cuts, and test every piece before it reaches you.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p");
        \u0275\u0275text(46, "From daily wear to festive collections, every style is designed for real life \u2014 comfortable enough for all day, polished enough for any occasion.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(47, "section", 15)(48, "div", 2)(49, "p", 3);
        \u0275\u0275text(50, "Our Promises");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "h2", 16);
        \u0275\u0275text(52, "What you get with Kahua");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 17)(54, "div", 18)(55, "div", 19);
        \u0275\u0275element(56, "i", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "h4");
        \u0275\u0275text(58, "Quality First");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p");
        \u0275\u0275text(60, "Premium fabrics, clean stitching, and finishes that last wash after wash.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 18)(62, "div", 19);
        \u0275\u0275element(63, "i", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "h4");
        \u0275\u0275text(65, "Fast Shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "p");
        \u0275\u0275text(67, "Dispatched within 24 hours. Delivered to your door in 3\u20135 days.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 18)(69, "div", 19);
        \u0275\u0275element(70, "i", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "h4");
        \u0275\u0275text(72, "Easy Returns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "p");
        \u0275\u0275text(74, "No questions asked. If it doesn't fit, we'll sort it out \u2014 hassle free.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 18)(76, "div", 19);
        \u0275\u0275element(77, "i", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "h4");
        \u0275\u0275text(79, "Secure Payments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "p");
        \u0275\u0275text(81, "100% encrypted checkout. Your data stays yours, always.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(82, "section", 24)(83, "div", 2)(84, "div", 25)(85, "p", 3);
        \u0275\u0275text(86, "Legal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "h2");
        \u0275\u0275text(88, "Company Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "table", 26)(90, "tr")(91, "td", 27);
        \u0275\u0275text(92, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "td");
        \u0275\u0275text(94, "KAHUA SYSTEMS PRIVATE LIMITED");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "tr")(96, "td", 27);
        \u0275\u0275text(97, "Website");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "td")(99, "a", 28);
        \u0275\u0275text(100, "kahuafashionclub.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(101, "tr")(102, "td", 27);
        \u0275\u0275text(103, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "td")(105, "a", 29);
        \u0275\u0275text(106, " info@kahuafashionclub.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(107, "tr")(108, "td", 27);
        \u0275\u0275text(109, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "td");
        \u0275\u0275text(111, "KAHUA SYSTEMS PRIVATE LIMITED\nFF-202, Gaur City Center\nGreater Noida, Gautam Buddh Nagar\nUttar Pradesh - 201301");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
      }
    }, dependencies: [BreadcrumbComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family: inherit;\n}\n.kfa-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 10.5px;\n  font-weight: 800;\n  letter-spacing: 3.5px;\n  text-transform: uppercase;\n  color: #B38A48;\n  margin: 0 0 16px;\n}\n.kfa-eyebrow[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 22px;\n  height: 2px;\n  background: #B38A48;\n  border-radius: 2px;\n}\n.kfa-intro[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 80px 0 72px;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  overflow: hidden;\n}\n.kfa-intro[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -60px;\n  right: 5%;\n  width: 380px;\n  height: 380px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(30, 127, 201, 0.22) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.kfa-intro[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -30px;\n  left: -20px;\n  width: 260px;\n  height: 260px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(179, 138, 72, 0.1) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.kfa-intro[_ngcontent-%COMP%]   .kfa-eyebrow[_ngcontent-%COMP%] {\n  color: #B38A48;\n  position: relative;\n  z-index: 1;\n}\n.kfa-intro[_ngcontent-%COMP%]   .kfa-headline[_ngcontent-%COMP%] {\n  font-size: 64px !important;\n  font-weight: 900 !important;\n  color: #fff !important;\n  line-height: 1 !important;\n  margin: 0 !important;\n  letter-spacing: -2.5px;\n  position: relative;\n  z-index: 1;\n}\n.kfa-intro[_ngcontent-%COMP%]   .kfa-headline[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 300;\n  background:\n    linear-gradient(\n      135deg,\n      #B38A48 0%,\n      #c9ab79 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-width: 768px) {\n  .kfa-intro[_ngcontent-%COMP%]   .kfa-headline[_ngcontent-%COMP%] {\n    font-size: 42px !important;\n    letter-spacing: -1.5px;\n  }\n}\n@media (max-width: 480px) {\n  .kfa-intro[_ngcontent-%COMP%]   .kfa-headline[_ngcontent-%COMP%] {\n    font-size: 32px !important;\n  }\n}\n@media (max-width: 768px) {\n  .kfa-intro[_ngcontent-%COMP%] {\n    padding: 56px 0 52px;\n  }\n}\n.kfa-stats[_ngcontent-%COMP%] {\n  padding: 36px 0;\n  background: #F8F9FB;\n  border-bottom: 1px solid #E6E8EC;\n  border-top: 1px solid #E6E8EC;\n}\n.kfa-stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n}\n@media (max-width: 768px) {\n  .kfa-stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.kfa-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 24px 20px;\n  text-align: center;\n  border-right: 1px solid #E6E8EC;\n  transition: all 0.3s ease;\n}\n.kfa-stat[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n@media (max-width: 768px) {\n  .kfa-stat[_ngcontent-%COMP%]:nth-child(2) {\n    border-right: none;\n  }\n  .kfa-stat[_ngcontent-%COMP%]:nth-child(3) {\n    border-right: 1px solid #E6E8EC;\n    border-top: 1px solid #E6E8EC;\n  }\n  .kfa-stat[_ngcontent-%COMP%]:nth-child(4) {\n    border-right: none;\n    border-top: 1px solid #E6E8EC;\n  }\n}\n.kfa-stat[_ngcontent-%COMP%]:hover {\n  background: #EAF3FB;\n}\n.kfa-stat[_ngcontent-%COMP%]   .kfa-stat-num[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 900;\n  color: #1E7FC9;\n  letter-spacing: -1.2px;\n  line-height: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #1E7FC9 0%,\n      #135a95 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.kfa-stat[_ngcontent-%COMP%]   .kfa-stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.8px;\n  text-transform: uppercase;\n  color: #6B7280;\n}\n.kfa-story[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: #FFFFFF;\n}\n@media (max-width: 768px) {\n  .kfa-story[_ngcontent-%COMP%] {\n    padding: 56px 0;\n  }\n}\n.kfa-story-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 64px;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .kfa-story-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n}\n.kfa-story-img[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 4px 10px rgba(15, 23, 32, 0.08), 0 28px 64px rgba(15, 23, 32, 0.16);\n}\n.kfa-story-img[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -12px;\n  left: -12px;\n  right: 12px;\n  bottom: 12px;\n  border: 1.5px solid rgba(179, 138, 72, 0.4);\n  border-radius: 24px;\n  z-index: -1;\n  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.kfa-story-img[_ngcontent-%COMP%]:hover::before {\n  transform: translate(8px, 8px);\n}\n.kfa-story-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.kfa-story-img[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.kfa-story-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 34px !important;\n  font-weight: 800 !important;\n  color: #0F1720 !important;\n  letter-spacing: -0.8px;\n  line-height: 1.2;\n  margin: 0 0 22px !important;\n}\n@media (max-width: 480px) {\n  .kfa-story-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n  }\n}\n.kfa-story-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15.5px !important;\n  color: #6B7280 !important;\n  line-height: 1.75 !important;\n  margin: 0 0 16px !important;\n  letter-spacing: 0.1px;\n}\n.kfa-story-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0 !important;\n}\n.kfa-promises[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background:\n    linear-gradient(\n      180deg,\n      #F8F9FB 0%,\n      #FFFFFF 100%);\n}\n@media (max-width: 768px) {\n  .kfa-promises[_ngcontent-%COMP%] {\n    padding: 56px 0;\n  }\n}\n.kfa-promises[_ngcontent-%COMP%]   .kfa-promises-title[_ngcontent-%COMP%] {\n  font-size: 34px !important;\n  font-weight: 800 !important;\n  color: #0F1720 !important;\n  letter-spacing: -0.8px;\n  margin: 0 0 40px !important;\n}\n@media (max-width: 480px) {\n  .kfa-promises[_ngcontent-%COMP%]   .kfa-promises-title[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n  }\n}\n.kfa-promise-scroll[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}\n@media (max-width: 991px) {\n  .kfa-promise-scroll[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .kfa-promise-scroll[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.kfa-promise-card[_ngcontent-%COMP%] {\n  padding: 28px 24px;\n  background: #FFFFFF;\n  border: 1px solid #E6E8EC;\n  border-radius: 20px;\n  transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03);\n  position: relative;\n  overflow: hidden;\n}\n.kfa-promise-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #1E7FC9,\n      #B38A48);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.kfa-promise-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: rgba(30, 127, 201, 0.25);\n  box-shadow: 0 4px 10px rgba(15, 23, 32, 0.05), 0 22px 50px rgba(30, 127, 201, 0.16);\n}\n.kfa-promise-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.kfa-promise-card[_ngcontent-%COMP%]:hover   .kfa-promise-icon[_ngcontent-%COMP%] {\n  background: #1E7FC9;\n  border-color: #135a95;\n  transform: scale(1.08) rotate(-8deg);\n  box-shadow: 0 8px 20px rgba(30, 127, 201, 0.38);\n}\n.kfa-promise-card[_ngcontent-%COMP%]:hover   .kfa-promise-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.kfa-promise-card[_ngcontent-%COMP%]   .kfa-promise-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  background: #EAF3FB;\n  border: 1px solid rgba(30, 127, 201, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 18px;\n  transition: all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.kfa-promise-card[_ngcontent-%COMP%]   .kfa-promise-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px !important;\n  color: #1E7FC9 !important;\n}\n.kfa-promise-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  font-weight: 800 !important;\n  color: #0F1720 !important;\n  margin: 0 0 10px !important;\n  letter-spacing: -0.2px;\n}\n.kfa-promise-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.5px !important;\n  color: #6B7280 !important;\n  line-height: 1.65 !important;\n  margin: 0 !important;\n}\n.kfa-company[_ngcontent-%COMP%] {\n  padding: 72px 0 80px;\n  background: #FFFFFF;\n}\n@media (max-width: 768px) {\n  .kfa-company[_ngcontent-%COMP%] {\n    padding: 52px 0 60px;\n  }\n}\n.kfa-company-inner[_ngcontent-%COMP%] {\n  max-width: 680px;\n}\n.kfa-company-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px !important;\n  font-weight: 800 !important;\n  color: #0F1720 !important;\n  margin: 0 0 28px !important;\n  letter-spacing: -0.5px;\n}\n.kfa-info-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: #FFFFFF;\n  border: 1px solid #E6E8EC;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 12px 28px rgba(15, 23, 32, 0.07);\n}\n.kfa-info-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #E6E8EC;\n  transition: background 0.2s ease;\n}\n.kfa-info-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.kfa-info-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #EAF3FB;\n}\n.kfa-info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 22px;\n  font-size: 14px;\n  vertical-align: top;\n  line-height: 1.7;\n  white-space: pre-line;\n  color: #2B3240;\n}\n.kfa-info-table[_ngcontent-%COMP%]   .kfa-td-label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #6B7280;\n  width: 130px;\n  padding-top: 18px;\n}\n.kfa-info-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1E7FC9;\n  text-decoration: none;\n  font-weight: 700;\n}\n.kfa-info-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=about-us.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutUsComponent, { className: "AboutUsComponent", filePath: "src\\app\\components\\page\\about-us\\about-us.component.ts", lineNumber: 9 });
})();

// src/app/components/page/search/search.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "full_border": a0, "product_img_bg": a1, "full_bg": a2, "product_border": a3 });
function SearchComponent_ng_container_26_app_skeleton_product_box_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-product-box");
  }
}
function SearchComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SearchComponent_ng_container_26_app_skeleton_product_box_1_Template, 1, 0, "app-skeleton-product-box", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.skeletonItems);
  }
}
function SearchComponent_ng_template_27_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div");
    \u0275\u0275element(3, "app-product-box", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("product", product_r3);
  }
}
function SearchComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SearchComponent_ng_template_27_div_0_Template, 4, 3, "div", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r1.products);
  }
}
function SearchComponent_app_no_data_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 23);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/no-product.svg")("text", "Sorry Cant Find Products Looking")("description", "Please Check Misspelt Something Searching Other Way");
  }
}
var SearchComponent = class _SearchComponent {
  constructor(store, productService, route, router) {
    this.store = store;
    this.productService = productService;
    this.route = route;
    this.router = router;
    this.breadcrumb = {
      title: "Search",
      items: [{ label: "Search", active: true }]
    };
    this.search = new FormControl();
    this.totalItems = 0;
    this.gridClass = "row g-sm-4 g-3 row-cols-2 row-cols-md-3 cols-lg-4 row-cols-xxl-6 product-list-section";
    this.skeletonItems = Array.from({ length: 12 }, (_, index) => index);
    this.productSlider6ItemMargin = productSlider6ItemMargin;
    this.filter = {
      "page": 1,
      "paginate": 12,
      "status": 1,
      "search": ""
    };
    this.route.queryParams.subscribe((params) => {
      if (params["search"]) {
        this.filter["search"] = params["search"];
        this.search.patchValue(params["search"] ? params["search"] : "");
      }
      this.store.dispatch(new GetProducts(this.filter)).subscribe({
        next: (val) => {
          this.products = val.product.product.data;
        }
      });
    });
  }
  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((inputValue) => {
      if (inputValue.length == 0) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {
            search: inputValue
          }
        });
        this.filter["search"] = inputValue;
      }
    });
    this.themeOption$.subscribe((option) => {
      if (option?.product?.product_box_variant === "digital") {
        this.gridClass = "row g-sm-4 g-3 row-custom-col-1 row-cols-1 row-cols-sm-2 cols-lg-4 row-cols-xxl-4 product-list-section";
      }
    });
  }
  searchProduct() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search: this.search.value
      }
    });
    this.filter["search"] = this.search.value;
  }
  static {
    this.\u0275fac = function SearchComponent_Factory(t) {
      return new (t || _SearchComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchComponent, selectors: [["app-search"]], decls: 30, vars: 32, consts: [["productContent", ""], [3, "breadcrumb"], [1, "search-section"], [1, "container-fluid-lg"], [1, "row"], [1, "col-xxl-6", "col-xl-8", "mx-auto"], [1, "title", "d-block", "text-center"], [1, "title-leaf"], [1, "icon-width"], [0, "xlink", "href", "../assets/svg/leaf.svg#leaf"], [1, "search-box"], [1, "input-group"], ["type", "text", 1, "form-control", 3, "formControl"], [3, "click", "type", "id", "spinner"], [1, "section-b-space"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], [3, "class", "image", "text", "description", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "search-product", "product-wrapper"], [3, "product"], [3, "image", "text", "description"]], template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-breadcrumb", 1);
        \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h2");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 8);
        \u0275\u0275element(11, "use", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
        \u0275\u0275element(14, "input", 12);
        \u0275\u0275elementStart(15, "app-button", 13);
        \u0275\u0275listener("click", function SearchComponent_Template_app_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchProduct());
        });
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(18, "section", 14)(19, "div", 3)(20, "div", 15);
        \u0275\u0275pipe(21, "async");
        \u0275\u0275pipe(22, "async");
        \u0275\u0275pipe(23, "async");
        \u0275\u0275pipe(24, "async");
        \u0275\u0275elementStart(25, "div");
        \u0275\u0275template(26, SearchComponent_ng_container_26_Template, 2, 1, "ng-container", 16)(27, SearchComponent_ng_template_27_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(29, SearchComponent_app_no_data_29_Template, 1, 5, "app-no-data", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_9_0;
        const productContent_r4 = \u0275\u0275reference(28);
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 15, "search_for_products"));
        \u0275\u0275advance(7);
        \u0275\u0275property("formControl", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275classMap("btn theme-bg-color text-white m-0");
        \u0275\u0275property("type", "button")("id", "search-btn")("spinner", false);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 17, "search"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(27, _c0, (tmp_9_0 = \u0275\u0275pipeBind1(21, 19, ctx.themeOption$)) == null ? null : tmp_9_0.product == null ? null : tmp_9_0.product.full_border, (tmp_9_0 = \u0275\u0275pipeBind1(22, 21, ctx.themeOption$)) == null ? null : tmp_9_0.product == null ? null : tmp_9_0.product.image_bg, (tmp_9_0 = \u0275\u0275pipeBind1(23, 23, ctx.themeOption$)) == null ? null : tmp_9_0.product == null ? null : tmp_9_0.product.product_box_bg, (tmp_9_0 = \u0275\u0275pipeBind1(24, 25, ctx.themeOption$)) == null ? null : tmp_9_0.product == null ? null : tmp_9_0.product.product_box_border));
        \u0275\u0275advance(5);
        \u0275\u0275classMap(ctx.gridClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.productService.skeletonLoader)("ngIfElse", productContent_r4);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !(ctx.products == null ? null : ctx.products.length) && !ctx.productService.skeletonLoader);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, FormControlDirective, BreadcrumbComponent, ButtonComponent, NoDataComponent, ProductBoxComponent, SkeletonProductBoxComponent, AsyncPipe, TranslatePipe] });
  }
};
__decorate([
  Select(ProductState.product)
], SearchComponent.prototype, "product$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], SearchComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchComponent, { className: "SearchComponent", filePath: "src\\app\\components\\page\\search\\search.component.ts", lineNumber: 21 });
})();

// src/app/components/page/page-routing.module.ts
var routes = [
  {
    path: "page/about-us",
    component: AboutUsComponent
  },
  {
    path: "page/:slug",
    component: PageComponent,
    resolve: {
      data: PageResolver
    }
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "404",
    component: Error404Component
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "offers",
    component: OfferComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "search",
    component: SearchComponent
  }
];
var PagesRoutingModule = class _PagesRoutingModule {
  static {
    this.\u0275fac = function PagesRoutingModule_Factory(t) {
      return new (t || _PagesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PagesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/components/page/page.module.ts
var PagesModule = class _PagesModule {
  static {
    this.\u0275fac = function PagesModule_Factory(t) {
      return new (t || _PagesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PagesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      PagesRoutingModule,
      SharedModule,
      TranslateModule
    ] });
  }
};
export {
  PagesModule
};
//# sourceMappingURL=chunk-2WQOYTFL.js.map
