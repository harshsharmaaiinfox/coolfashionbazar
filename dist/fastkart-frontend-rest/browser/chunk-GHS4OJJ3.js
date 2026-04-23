import {
  Action,
  BreadcrumbComponent,
  ButtonComponent,
  Select,
  Selector,
  State,
  ThemeOptionState,
  environment
} from "./chunk-24LTJJML.js";
import {
  AsyncPipe,
  HttpClient,
  Location,
  NgIf,
  Router,
  __decorate,
  __spreadProps,
  __spreadValues,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MJNPSVHG.js";

// src/app/components/page/error404/error404.component.ts
function Error404Component_div_7_app_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 11);
    \u0275\u0275listener("click", function Error404Component_div_7_app_button_5_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("btn btn-md text-white theme-bg-color mt-4 mx-auto");
    \u0275\u0275property("id", "back_button")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = \u0275\u0275pipeBind1(2, 5, ctx_r1.themeOption$)) == null ? null : tmp_5_0.error_page == null ? null : tmp_5_0.error_page.back_button_text, " ");
  }
}
function Error404Component_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 8)(2, "h3", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, Error404Component_div_7_app_button_5_Template, 3, 7, "app-button", 10);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_1_0 = \u0275\u0275pipeBind1(4, 2, ctx_r1.themeOption$)) == null ? null : tmp_1_0.error_page == null ? null : tmp_1_0.error_page.error_page_content, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(6, 4, ctx_r1.themeOption$)) == null ? null : tmp_2_0.error_page == null ? null : tmp_2_0.error_page.back_button_enable);
  }
}
var Error404Component = class _Error404Component {
  constructor(location) {
    this.location = location;
    this.breadcrumb = {
      title: "404",
      items: [{ label: "404", active: true }]
    };
  }
  back() {
    this.location.back();
  }
  static {
    this.\u0275fac = function Error404Component_Factory(t) {
      return new (t || _Error404Component)(\u0275\u0275directiveInject(Location));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error404Component, selectors: [["app-error404"]], decls: 9, vars: 4, consts: [[3, "breadcrumb"], [1, "section-404", "section-lg-space"], [1, "container-fluid-lg"], [1, "row"], [1, "col-12"], [1, "image-404"], ["src", "assets/images/inner-page/404.png", "alt", "error page", 1, "img-fluid"], ["class", "col-12", 4, "ngIf"], [1, "contain-404"], [1, "text-content"], [3, "class", "id", "spinner", "click", 4, "ngIf"], [3, "click", "id", "spinner"]], template: function Error404Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275element(6, "img", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, Error404Component_div_7_Template, 7, 6, "div", 7);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(8, 2, ctx.themeOption$)) == null ? null : tmp_1_0.error_page == null ? null : tmp_1_0.error_page.error_page_content);
      }
    }, dependencies: [NgIf, BreadcrumbComponent, ButtonComponent, AsyncPipe] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], Error404Component.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error404Component, { className: "Error404Component", filePath: "src\\app\\components\\page\\error404\\error404.component.ts", lineNumber: 14 });
})();

// src/app/shared/action/page.action.ts
var GetPages = class {
  static {
    this.type = "[Page] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetPageBySlug = class {
  static {
    this.type = "[Page] By Slug";
  }
  constructor(slug) {
    this.slug = slug;
  }
};
var GetFaqs = class {
  static {
    this.type = "[Faq] Get";
  }
};
var ContactUs = class {
  static {
    this.type = "[ContactUs] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/page.service.ts
var PageService = class _PageService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getPages(payload) {
    return this.http.get(`${environment.URL}/page`, { params: payload });
  }
  getPageBySlug(slug) {
    return this.http.get(`${environment.URL}/page/slug/${slug}`);
  }
  getFaqs() {
    return this.http.get(`${environment.URL}/faq`);
  }
  contactUs(payload) {
    return this.http.post(`${environment.URL}/contact-us`, payload);
  }
  getStores(payload) {
    return this.http.get(`${environment.URL}/store`, { params: payload });
  }
  static {
    this.\u0275fac = function PageService_Factory(t) {
      return new (t || _PageService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PageService, factory: _PageService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/state/page.state.ts
var PageState = class PageState2 {
  constructor(router, pageService) {
    this.router = router;
    this.pageService = pageService;
  }
  static page(state) {
    return state.page;
  }
  static faq(state) {
    return state.faq;
  }
  static selectedPage(state) {
    return state.selectedPage;
  }
  getPages(ctx, action) {
    return this.pageService.getPages(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          page: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getPageBySlug(ctx, { slug }) {
    this.pageService.skeletonLoader = true;
    return this.pageService.getPageBySlug(slug).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          selectedPage: result
        }));
      },
      complete: () => {
        this.pageService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getFaqs(ctx) {
    this.pageService.skeletonLoader = true;
    return this.pageService.getFaqs().pipe(tap({
      next: (result) => {
        ctx.patchState({
          faq: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.pageService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  contactUs(ctx, { payload }) {
    return this.pageService.contactUs(payload).pipe(tap({
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function PageState_Factory(t) {
      return new (t || PageState2)(\u0275\u0275inject(Router), \u0275\u0275inject(PageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: PageState2, factory: PageState2.\u0275fac });
  }
};
__decorate([
  Action(GetPages)
], PageState.prototype, "getPages", null);
__decorate([
  Action(GetPageBySlug)
], PageState.prototype, "getPageBySlug", null);
__decorate([
  Action(GetFaqs)
], PageState.prototype, "getFaqs", null);
__decorate([
  Action(ContactUs)
], PageState.prototype, "contactUs", null);
__decorate([
  Selector()
], PageState, "page", null);
__decorate([
  Selector()
], PageState, "faq", null);
__decorate([
  Selector()
], PageState, "selectedPage", null);
PageState = __decorate([
  State({
    name: "page",
    defaults: {
      page: {
        data: [],
        total: 0
      },
      faq: {
        data: [],
        total: 0
      },
      selectedPage: null
    }
  })
], PageState);

// src/app/shared/action/coupon.action.ts
var GetCoupons = class {
  static {
    this.type = "[Coupon] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/coupon.service.ts
var CouponService = class _CouponService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getCoupons(payload) {
    return this.http.get(`${environment.URL}/coupon`, { params: payload });
  }
  static {
    this.\u0275fac = function CouponService_Factory(t) {
      return new (t || _CouponService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CouponService, factory: _CouponService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/state/coupon.state.ts
var CouponState = class CouponState2 {
  constructor(couponService) {
    this.couponService = couponService;
  }
  static coupon(state) {
    return state.coupon;
  }
  getCoupons(ctx, action) {
    this.couponService.skeletonLoader = true;
    return this.couponService.getCoupons(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          coupon: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.couponService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function CouponState_Factory(t) {
      return new (t || CouponState2)(\u0275\u0275inject(CouponService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: CouponState2, factory: CouponState2.\u0275fac });
  }
};
__decorate([
  Action(GetCoupons)
], CouponState.prototype, "getCoupons", null);
__decorate([
  Selector()
], CouponState, "coupon", null);
CouponState = __decorate([
  State({
    name: "coupon",
    defaults: {
      coupon: {
        data: [],
        total: 0
      }
    }
  })
], CouponState);

export {
  Error404Component,
  GetPages,
  GetPageBySlug,
  GetFaqs,
  ContactUs,
  PageService,
  PageState,
  GetCoupons,
  CouponService,
  CouponState
};
//# sourceMappingURL=chunk-GHS4OJJ3.js.map
