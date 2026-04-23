import {
  DownloadFiles,
  DownloadLicense,
  DownloadState,
  Downloads,
  GetNotification,
  GetPaymentDetails,
  GetUserTransaction,
  GetUserTransaction2,
  MarkAsReadNotification,
  NotificationState,
  PaymentDetailsState,
  PointState,
  RefundState,
  UpdatePaymentDetails,
  WalletState
} from "./chunk-WBB47MMN.js";
import {
  GetOrderStatus,
  OrderState,
  OrderStatusState,
  StateState
} from "./chunk-TEOEL2A5.js";
import {
  AccountState,
  AddressModalComponent,
  BreadcrumbComponent,
  CartService,
  ChangePasswordModalComponent,
  ConfirmationModalComponent,
  CountryState,
  CurrencySymbolPipe,
  DeleteAddress,
  DeleteModalComponent,
  DownloadInvoice,
  EditProfileModalComponent,
  GetOrders,
  GetRefund,
  LoaderComponent,
  LoaderState,
  Logout,
  NgbDropdown,
  NgbDropdownButtonItem,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbTooltip,
  NoDataComponent,
  PaginationComponent,
  PayModalComponent,
  RefundModalComponent,
  Select,
  SettingState,
  SharedModule,
  Store,
  TitleCasePipe as TitleCasePipe2,
  TranslateModule,
  TranslatePipe,
  UpdateUserProfile,
  ViewOrder
} from "./chunk-24LTJJML.js";
import "./chunk-4VA66D5F.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  Validators,
  ɵNgNoValidate
} from "./chunk-UJVGNNHA.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  DatePipe,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  Subject,
  TitleCasePipe,
  __decorate,
  interval,
  of,
  switchMap,
  takeUntil,
  takeWhile,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵviewQuery
} from "./chunk-MJNPSVHG.js";

// src/app/components/account/sidebar/sidebar.component.ts
var _c0 = ["confirmationModal"];
var _c1 = () => ["/account/dashboard"];
var _c2 = () => ["active"];
var _c3 = () => ["/account/order"];
var _c4 = () => ["/account/addresses"];
var _c5 = () => ["/account/bank-details"];
function SidebarComponent_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_3_0 = \u0275\u0275pipeBind1(1, 1, ctx_r1.user$)) == null ? null : tmp_3_0.profile_image == null ? null : tmp_3_0.profile_image.original_url, \u0275\u0275sanitizeUrl);
  }
}
function SidebarComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = \u0275\u0275pipeBind1(2, 1, ctx_r1.user$)) == null ? null : tmp_3_0.name == null ? null : (tmp_3_0 = tmp_3_0.name.charAt(0)) == null ? null : (tmp_3_0 = tmp_3_0.toString()) == null ? null : tmp_3_0.toUpperCase());
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor(store) {
    this.store = store;
    this.menu = new EventEmitter();
    this.notification$.subscribe((notification) => {
      this.unreadNotificationCount = notification?.filter((item) => !item.read_at)?.length;
    });
  }
  logout() {
    this.store.dispatch(new Logout());
  }
  openMenu(value) {
    this.menu.emit(value);
  }
  uploadImage(event) {
    if (event?.target?.files) {
      let form = new FormData();
      form.append("profile_image", event.target.files[0]);
      form.append("_method", "PUT");
      this.store.dispatch(new UpdateUserProfile(form));
    } else {
      let form = new FormData();
      form.append("profile_image_id", "");
      form.append("_method", "PUT");
      this.store.dispatch(new UpdateUserProfile(form));
    }
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(t) {
      return new (t || _SidebarComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ConfirmationModal = _t.first);
      }
    }, inputs: { show: "show" }, outputs: { menu: "menu" }, decls: 34, vars: 28, consts: [["initials", ""], ["confirmationModal", ""], [1, "kf-sidebar-card"], [1, "kf-user-block"], [1, "kf-avatar"], ["alt", "profile", 3, "src", 4, "ngIf", "ngIfElse"], [1, "kf-user-info"], [1, "kf-nav"], [3, "click", "routerLink", "routerLinkActive"], [1, "ri-dashboard-line"], [1, "ri-file-list-3-line"], [1, "ri-map-pin-line"], [1, "ri-bank-line"], [1, "kf-nav-divider"], ["href", "javascript:void(0)", 1, "kf-logout", 3, "click"], [1, "ri-logout-box-r-line"], [3, "confirmed"], ["alt", "profile", 3, "src"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
        \u0275\u0275template(3, SidebarComponent_img_3_Template, 2, 3, "img", 5);
        \u0275\u0275pipe(4, "async");
        \u0275\u0275template(5, SidebarComponent_ng_template_5_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "h4");
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275pipe(11, "titleCase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "nav", 7)(16, "a", 8);
        \u0275\u0275listener("click", function SidebarComponent_Template_a_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openMenu(false));
        });
        \u0275\u0275element(17, "i", 9);
        \u0275\u0275text(18, " Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 8);
        \u0275\u0275listener("click", function SidebarComponent_Template_a_click_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openMenu(false));
        });
        \u0275\u0275element(20, "i", 10);
        \u0275\u0275text(21, " My Orders ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "a", 8);
        \u0275\u0275listener("click", function SidebarComponent_Template_a_click_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openMenu(false));
        });
        \u0275\u0275element(23, "i", 11);
        \u0275\u0275text(24, " Addresses ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a", 8);
        \u0275\u0275listener("click", function SidebarComponent_Template_a_click_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openMenu(false));
        });
        \u0275\u0275element(26, "i", 12);
        \u0275\u0275text(27, " Bank Details ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "div", 13);
        \u0275\u0275elementStart(29, "a", 14);
        \u0275\u0275listener("click", function SidebarComponent_Template_a_click_29_listener() {
          \u0275\u0275restoreView(_r1);
          const confirmationModal_r3 = \u0275\u0275reference(33);
          return \u0275\u0275resetView(confirmationModal_r3.openModal());
        });
        \u0275\u0275element(30, "i", 15);
        \u0275\u0275text(31, " Logout ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "app-confirmation-modal", 16, 1);
        \u0275\u0275listener("confirmed", function SidebarComponent_Template_app_confirmation_modal_confirmed_32_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logout());
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        let tmp_5_0;
        const initials_r4 = \u0275\u0275reference(6);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(4, 12, ctx.user$)) == null ? null : tmp_2_0.profile_image == null ? null : tmp_2_0.profile_image.original_url)("ngIfElse", initials_r4);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, (tmp_4_0 = \u0275\u0275pipeBind1(10, 14, ctx.user$)) == null ? null : tmp_4_0.name));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate((tmp_5_0 = \u0275\u0275pipeBind1(14, 18, ctx.user$)) == null ? null : tmp_5_0.email);
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(20, _c1))("routerLinkActive", \u0275\u0275pureFunction0(21, _c2));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c3))("routerLinkActive", \u0275\u0275pureFunction0(23, _c2));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(24, _c4))("routerLinkActive", \u0275\u0275pureFunction0(25, _c2));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(26, _c5))("routerLinkActive", \u0275\u0275pureFunction0(27, _c2));
      }
    }, dependencies: [NgIf, RouterLink, RouterLinkActive, ConfirmationModalComponent, AsyncPipe, TitleCasePipe2], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.kf-sidebar-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      165deg,\n      #0F1720 0%,\n      #1E2838 100%);\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 4px 10px rgba(15, 23, 32, 0.2), 0 24px 56px rgba(15, 23, 32, 0.35);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n@media (max-width: 991px) {\n  .kf-sidebar-card[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    border-radius: 18px;\n  }\n}\n.kf-user-block[_ngcontent-%COMP%] {\n  padding: 28px 24px 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(255, 255, 255, 0.03);\n  position: relative;\n  overflow: hidden;\n}\n.kf-user-block[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -20px;\n  left: -20px;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(30, 127, 201, 0.22) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n@media (max-width: 991px) {\n  .kf-user-block[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.kf-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  z-index: 1;\n}\n.kf-avatar[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -3px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #B38A48 0%,\n      #7c6032 100%);\n  z-index: -1;\n}\n.kf-avatar[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: -1px;\n  border-radius: 50%;\n  background: #0F1720;\n  z-index: -1;\n}\n.kf-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n  position: relative;\n  z-index: 1;\n}\n.kf-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1E7FC9 0%,\n      #135a95 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 900;\n  position: relative;\n  z-index: 1;\n  letter-spacing: -0.5px;\n}\n.kf-user-info[_ngcontent-%COMP%] {\n  min-width: 0;\n  z-index: 1;\n}\n.kf-user-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  font-weight: 800 !important;\n  color: #ffffff !important;\n  margin: 0 0 4px !important;\n  letter-spacing: -0.2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.kf-user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  color: rgba(255, 255, 255, 0.6) !important;\n  margin: 0 !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.kf-nav[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n}\n@media (max-width: 991px) {\n  .kf-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    padding: 10px;\n    gap: 6px;\n  }\n}\n.kf-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: none;\n  border-radius: 12px;\n  border: 1px solid transparent;\n  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);\n  position: relative;\n  letter-spacing: 0.2px;\n  margin-bottom: 2px;\n}\n@media (max-width: 991px) {\n  .kf-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 9px 14px;\n    font-size: 12px;\n    margin-bottom: 0;\n  }\n}\n.kf-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px !important;\n  color: rgba(255, 255, 255, 0.55) !important;\n  flex-shrink: 0;\n  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.kf-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  border-color: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n  transform: translateX(3px);\n}\n.kf-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  background: rgba(30, 127, 201, 0.2);\n  color: #65afe8 !important;\n  transform: scale(1.08);\n}\n.kf-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(30, 127, 201, 0.18);\n  border-color: rgba(30, 127, 201, 0.35);\n  color: #ffffff;\n  font-weight: 800;\n}\n.kf-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #1E7FC9;\n  color: #ffffff !important;\n  box-shadow: 0 4px 12px rgba(30, 127, 201, 0.45);\n}\n.kf-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 10px;\n  bottom: 10px;\n  width: 3px;\n  background: #1E7FC9;\n  border-radius: 0 3px 3px 0;\n}\n.kf-nav[_ngcontent-%COMP%]   .kf-nav-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 8px 6px;\n}\n@media (max-width: 991px) {\n  .kf-nav[_ngcontent-%COMP%]   .kf-nav-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.kf-nav[_ngcontent-%COMP%]   .kf-logout[_ngcontent-%COMP%] {\n  color: rgba(231, 71, 90, 0.85) !important;\n  margin-top: 4px;\n}\n.kf-nav[_ngcontent-%COMP%]   .kf-logout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: rgba(231, 71, 90, 0.12) !important;\n  color: #E7475A !important;\n}\n.kf-nav[_ngcontent-%COMP%]   .kf-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(231, 71, 90, 0.1) !important;\n  border-color: rgba(231, 71, 90, 0.2) !important;\n  color: #E7475A !important;\n}\n.kf-nav[_ngcontent-%COMP%]   .kf-logout[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  background: #E7475A !important;\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
  }
};
__decorate([
  Select(NotificationState.notification)
], SidebarComponent.prototype, "notification$", void 0);
__decorate([
  Select(AccountState.user)
], SidebarComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\components\\account\\sidebar\\sidebar.component.ts", lineNumber: 17 });
})();

// src/app/components/account/account.component.ts
function AccountComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-loader", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("loaderClass", "custom-loader-wrapper blur-bg");
  }
}
var AccountComponent = class _AccountComponent {
  constructor(store, router) {
    this.store = store;
    this.router = router;
    this.open = false;
    this.breadcrumb = {
      title: "Dashboard",
      items: [{ label: "Dashboard", active: false }]
    };
    this.store.dispatch(new GetNotification());
    this.breadcrumb.title = this.router?.url?.split("?")[0]?.split("/")?.pop();
    if (this.router?.url.includes("order/details")) {
      this.breadcrumb.title = "Order";
    }
    this.breadcrumb.items = [];
    this.breadcrumb.items.push({ label: this.breadcrumb.title, active: false });
  }
  openMenu(value) {
    this.open = value;
  }
  static {
    this.\u0275fac = function AccountComponent_Factory(t) {
      return new (t || _AccountComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountComponent, selectors: [["app-account"]], decls: 10, vars: 4, consts: [[3, "breadcrumb"], [1, "kf-dashboard"], [1, "container-fluid-lg"], [1, "kf-dash-layout"], [1, "kf-dash-sidebar"], [1, "kf-dash-content"], ["class", "box-loader", 4, "ngIf"], [1, "box-loader"], [3, "loaderClass"]], template: function AccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "aside", 4);
        \u0275\u0275element(5, "app-sidebar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "main", 5);
        \u0275\u0275template(7, AccountComponent_div_7_Template, 2, 1, "div", 6);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275element(9, "router-outlet");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 2, ctx.loadingStatus$));
      }
    }, dependencies: [NgIf, RouterOutlet, LoaderComponent, BreadcrumbComponent, SidebarComponent, AsyncPipe], styles: ["\n\n.kf-dashboard[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      ellipse at 10% 0%,\n      rgba(30, 127, 201, 0.06) 0%,\n      transparent 50%),\n    #EEF1F6;\n  padding: 36px 0 72px;\n  min-height: 80vh;\n  font-family: inherit;\n}\n.kf-dash-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 28px;\n  align-items: start;\n}\n@media (max-width: 991px) {\n  .kf-dash-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n}\n.kf-dash-sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 90px;\n}\n@media (max-width: 991px) {\n  .kf-dash-sidebar[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n.kf-dash-content[_ngcontent-%COMP%] {\n  min-width: 0;\n  position: relative;\n}\n/*# sourceMappingURL=account.component.css.map */"] });
  }
};
__decorate([
  Select(LoaderState.status)
], AccountComponent.prototype, "loadingStatus$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountComponent, { className: "AccountComponent", filePath: "src\\app\\components\\account\\account.component.ts", lineNumber: 14 });
})();

// src/app/components/account/dashboard/dashboard.component.ts
var _c02 = ["profileModal"];
var _c12 = ["passwordModal"];
function DashboardComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate4("", ctx_r1.address.street, ", ", ctx_r1.address.city, ", ", ctx_r1.address.area, " ", ctx_r1.address.pincode, "");
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(router) {
    this.router = router;
    this.user$.subscribe((user) => {
      this.address = user?.address?.length ? user?.address?.[0] : null;
    });
  }
  navigateTo(route) {
    this.router.navigate([`/account/${route}`]);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ProfileModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.PasswordModal = _t.first);
      }
    }, decls: 64, vars: 26, consts: [["profileModal", ""], ["passwordModal", ""], [1, "kf-dash-page"], [1, "kf-welcome"], [1, "kf-section"], [1, "kf-section-head"], ["href", "javascript:void(0)", 1, "kf-edit-link", 3, "click"], [1, "ri-lock-line"], [1, "kf-info-grid"], [1, "kf-info-item"], [1, "kf-info-content"], [1, "kf-info-label"], [1, "kf-info-value"], ["class", "kf-info-item", 4, "ngIf"], [1, "kf-quick-grid"], [1, "kf-quick-item", 3, "click"], [1, "ri-file-list-3-line"], [1, "ri-map-pin-line"], [1, "ri-bank-line"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h2");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "titleCase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 4)(12, "div", 5)(13, "h3");
        \u0275\u0275text(14, "Profile Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 6);
        \u0275\u0275listener("click", function DashboardComponent_Template_a_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.PasswordModal.openModal());
        });
        \u0275\u0275element(16, "i", 7);
        \u0275\u0275text(17, " Change Password ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 8)(19, "div", 9)(20, "div", 10)(21, "span", 11);
        \u0275\u0275text(22, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 12);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "async");
        \u0275\u0275pipe(26, "titleCase");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 9)(28, "div", 10)(29, "span", 11);
        \u0275\u0275text(30, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 12);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 9)(35, "div", 10)(36, "span", 11);
        \u0275\u0275text(37, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 12);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "async");
        \u0275\u0275pipe(41, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(42, DashboardComponent_div_42_Template, 6, 4, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 4)(44, "div", 5)(45, "h3");
        \u0275\u0275text(46, "Quick Links");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 14)(48, "a", 15);
        \u0275\u0275listener("click", function DashboardComponent_Template_a_click_48_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigateTo("order"));
        });
        \u0275\u0275element(49, "i", 16);
        \u0275\u0275elementStart(50, "span");
        \u0275\u0275text(51, "My Orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "a", 15);
        \u0275\u0275listener("click", function DashboardComponent_Template_a_click_52_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigateTo("addresses"));
        });
        \u0275\u0275element(53, "i", 17);
        \u0275\u0275elementStart(54, "span");
        \u0275\u0275text(55, "Addresses");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "a", 15);
        \u0275\u0275listener("click", function DashboardComponent_Template_a_click_56_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.navigateTo("bank-details"));
        });
        \u0275\u0275element(57, "i", 18);
        \u0275\u0275elementStart(58, "span");
        \u0275\u0275text(59, "Bank Details");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(60, "app-edit-profile-modal", null, 0)(62, "app-change-password-modal", null, 1);
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 8, "Hello"), ", ", \u0275\u0275pipeBind1(7, 12, (tmp_2_0 = \u0275\u0275pipeBind1(6, 10, ctx.user$)) == null ? null : tmp_2_0.name), "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 14, "Welcome to your dashboard"));
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 18, (tmp_4_0 = \u0275\u0275pipeBind1(25, 16, ctx.user$)) == null ? null : tmp_4_0.name));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate((tmp_5_0 = \u0275\u0275pipeBind1(33, 20, ctx.user$)) == null ? null : tmp_5_0.email);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate2("", (tmp_6_0 = \u0275\u0275pipeBind1(40, 22, ctx.user$)) == null ? null : tmp_6_0.country_code, " ", (tmp_6_0 = \u0275\u0275pipeBind1(41, 24, ctx.user$)) == null ? null : tmp_6_0.phone, "");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.address);
      }
    }, dependencies: [NgIf, EditProfileModalComponent, ChangePasswordModalComponent, AsyncPipe, TitleCasePipe2, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family: inherit;\n}\n.kf-dash-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.kf-welcome[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 36px 36px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 4px 10px rgba(15, 23, 32, 0.15), 0 20px 50px rgba(15, 23, 32, 0.22);\n}\n.kf-welcome[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -40px;\n  right: -30px;\n  width: 240px;\n  height: 240px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(30, 127, 201, 0.28) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.kf-welcome[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -30px;\n  left: -20px;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(179, 138, 72, 0.14) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.kf-welcome[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.kf-welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n  font-weight: 900 !important;\n  color: #fff !important;\n  margin: 0 0 8px !important;\n  letter-spacing: -0.7px;\n  line-height: 1.15;\n}\n.kf-welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #B38A48;\n}\n@media (max-width: 575px) {\n  .kf-welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n}\n.kf-welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: rgba(255, 255, 255, 0.62) !important;\n  margin: 0 !important;\n  letter-spacing: 0.2px;\n}\n@media (max-width: 575px) {\n  .kf-welcome[_ngcontent-%COMP%] {\n    padding: 28px 22px 24px;\n    border-radius: 18px;\n  }\n}\n.kf-section[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  border: 1px solid #E6E8EC;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 12px 30px rgba(15, 23, 32, 0.07);\n  transition: box-shadow 0.35s ease;\n}\n.kf-section[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(15, 23, 32, 0.04), 0 18px 42px rgba(30, 127, 201, 0.1);\n}\n.kf-section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 26px;\n  background:\n    linear-gradient(\n      90deg,\n      #F8F9FB 0%,\n      #FFFFFF 100%);\n  border-bottom: 1px solid #E6E8EC;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.kf-section-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: 800 !important;\n  text-transform: uppercase !important;\n  letter-spacing: 2.5px !important;\n  color: #0F1720 !important;\n  margin: 0 !important;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.kf-section-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\n  content: "\\f1d2";\n  font-family: "remixicon";\n  font-size: 16px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #EAF3FB;\n  color: #1E7FC9;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: none;\n}\n.kf-section-head[_ngcontent-%COMP%]   .kf-edit-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  color: #1E7FC9;\n  text-decoration: none;\n  padding: 8px 14px;\n  border: 1px solid rgba(30, 127, 201, 0.28);\n  border-radius: 999px;\n  background: #EAF3FB;\n  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.kf-section-head[_ngcontent-%COMP%]   .kf-edit-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.kf-section-head[_ngcontent-%COMP%]   .kf-edit-link[_ngcontent-%COMP%]:hover {\n  background: #1E7FC9;\n  border-color: #135a95;\n  color: #fff;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 14px rgba(30, 127, 201, 0.3);\n}\n.kf-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 575px) {\n  .kf-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.kf-info-item[_ngcontent-%COMP%] {\n  padding: 20px 26px;\n  border-bottom: 1px solid #E6E8EC;\n  border-right: 1px solid #E6E8EC;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: background 0.25s ease;\n}\n.kf-info-item[_ngcontent-%COMP%]:nth-child(2n) {\n  border-right: none;\n}\n.kf-info-item[_ngcontent-%COMP%]:last-child, .kf-info-item[_ngcontent-%COMP%]:nth-last-child(2):nth-child(odd) {\n  border-bottom: none;\n}\n@media (max-width: 575px) {\n  .kf-info-item[_ngcontent-%COMP%] {\n    border-right: none;\n  }\n  .kf-info-item[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n}\n.kf-info-item[_ngcontent-%COMP%]:hover {\n  background: rgba(30, 127, 201, 0.02);\n}\n.kf-info-item[_ngcontent-%COMP%]:nth-child(1)::before {\n  content: "\\f1cd";\n}\n.kf-info-item[_ngcontent-%COMP%]:nth-child(2)::before {\n  content: "\\eef0";\n}\n.kf-info-item[_ngcontent-%COMP%]:nth-child(3)::before {\n  content: "\\ef27";\n}\n.kf-info-item[_ngcontent-%COMP%]:nth-child(4)::before {\n  content: "\\ef3b";\n}\n.kf-info-item[_ngcontent-%COMP%]::before {\n  font-family: "remixicon";\n  width: 38px;\n  height: 38px;\n  min-width: 38px;\n  border-radius: 12px;\n  background: #EAF3FB;\n  color: #1E7FC9;\n  font-size: 17px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.kf-info-item[_ngcontent-%COMP%]:hover::before {\n  background: #1E7FC9;\n  color: #fff;\n  transform: scale(1.06) rotate(-6deg);\n}\n.kf-info-item[_ngcontent-%COMP%]   .kf-info-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.kf-info-item[_ngcontent-%COMP%]   .kf-info-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #6B7280;\n}\n.kf-info-item[_ngcontent-%COMP%]   .kf-info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0F1720;\n  line-height: 1.45;\n  word-break: break-word;\n}\n.kf-quick-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .kf-quick-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 420px) {\n  .kf-quick-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.kf-quick-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  padding: 30px 20px;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 18px;\n  border: 1px solid #E6E8EC;\n  background: #FFFFFF;\n  transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n  position: relative;\n  overflow: hidden;\n}\n.kf-quick-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -1px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(30, 127, 201, 0.08) 0%,\n      rgba(179, 138, 72, 0.06) 100%);\n  opacity: 0;\n  transition: opacity 0.35s ease;\n}\n.kf-quick-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background: #F8F9FB;\n  border: 1px solid #E6E8EC;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px !important;\n  color: #6B7280 !important;\n  transition: all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);\n  box-shadow: 0 2px 8px rgba(15, 23, 32, 0.06);\n}\n.kf-quick-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-size: 11.5px;\n  font-weight: 800;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  color: #6B7280;\n  transition: color 0.3s ease;\n  text-align: center;\n  line-height: 1.3;\n}\n.kf-quick-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: rgba(30, 127, 201, 0.3);\n  box-shadow: 0 4px 10px rgba(15, 23, 32, 0.05), 0 22px 50px rgba(30, 127, 201, 0.18);\n}\n.kf-quick-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.kf-quick-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  background: #1E7FC9;\n  border-color: #135a95;\n  color: #fff !important;\n  transform: scale(1.1) rotate(-8deg);\n  box-shadow: 0 10px 26px rgba(30, 127, 201, 0.42);\n}\n.kf-quick-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: #0F1720;\n}\n@media (max-width: 420px) {\n  .kf-quick-item[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: flex-start;\n    padding: 18px 22px;\n    gap: 16px;\n    text-align: left;\n    border-radius: 14px;\n  }\n  .kf-quick-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n    font-size: 20px !important;\n    border-radius: 12px;\n  }\n  .kf-quick-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
__decorate([
  Select(AccountState.user)
], DashboardComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\components\\account\\dashboard\\dashboard.component.ts", lineNumber: 15 });
})();

// src/app/components/account/wallet/wallet.component.ts
function WalletComponent_div_5_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titleCase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const transaction_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, transaction_r1 == null ? null : transaction_r1.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, transaction_r1 == null ? null : transaction_r1.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(transaction_r1 == null ? null : transaction_r1.detail);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("status-", transaction_r1 == null ? null : transaction_r1.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, transaction_r1 == null ? null : transaction_r1.type));
  }
}
function WalletComponent_div_5_nav_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 16)(1, "app-pagination", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("setPage", function WalletComponent_div_5_nav_37_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.wallet$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function WalletComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    \u0275\u0275element(5, "img", 9);
    \u0275\u0275elementStart(6, "div", 10)(7, "h5");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "async");
    \u0275\u0275pipe(14, "currencySymbol");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(15, "div", 11)(16, "h4", 12);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13)(20, "table")(21, "tbody")(22, "tr")(23, "th");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, WalletComponent_div_5_tr_35_Template, 14, 14, "tr", 14);
    \u0275\u0275pipe(36, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(37, WalletComponent_div_5_nav_37_Template, 3, 5, "nav", 15);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "wallet balance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, \u0275\u0275pipeBind1(12, 11, ctx_r2.wallet$) ? (tmp_2_0 = \u0275\u0275pipeBind1(13, 13, ctx_r2.wallet$)) == null ? null : tmp_2_0.balance : 0));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 17, "transactions"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 19, "date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 21, "Amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 23, "Remark"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 25, "Status"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_8_0 = \u0275\u0275pipeBind1(36, 27, ctx_r2.wallet$)) == null ? null : tmp_8_0.transactions == null ? null : tmp_8_0.transactions.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_9_0 = \u0275\u0275pipeBind1(38, 29, ctx_r2.wallet$)) == null ? null : tmp_9_0.transactions == null ? null : tmp_9_0.transactions.data == null ? null : tmp_9_0.transactions.data.length);
  }
}
function WalletComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "No Transaction Found")("description", "No Wallet Detected");
  }
}
var WalletComponent = class _WalletComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetUserTransaction(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetUserTransaction(this.filter));
  }
  static {
    this.\u0275fac = function WalletComponent_Factory(t) {
      return new (t || _WalletComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WalletComponent, selectors: [["app-wallet"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "total-box mt-0", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "total-box", "mt-0"], [1, "row"], [1, "col-12"], [1, "totle-contain", "wallet-bg"], [1, "wallet-point-box"], ["src", "assets/images/svg/wallet.svg", "alt", "wallet"], [1, "totle-detail"], [1, "wallet-table"], [1, "user-dashboard-title"], [1, "table-responsive"], [4, "ngFor", "ngForOf"], ["class", "custome-pagination", 4, "ngIf"], [1, "custome-pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function WalletComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(5, WalletComponent_div_5_Template, 39, 31, "div", 2);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, WalletComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
        \u0275\u0275pipe(8, "async");
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "my wallet"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.wallet$)) == null ? null : tmp_1_0.transactions == null ? null : tmp_1_0.transactions.data == null ? null : tmp_1_0.transactions.data.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.wallet$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.data == null ? null : tmp_2_0.transactions.data.length));
      }
    }, dependencies: [NgForOf, NgIf, PaginationComponent, NoDataComponent, AsyncPipe, DatePipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe] });
  }
};
__decorate([
  Select(WalletState.wallet)
], WalletComponent.prototype, "wallet$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WalletComponent, { className: "WalletComponent", filePath: "src\\app\\components\\account\\wallet\\wallet.component.ts", lineNumber: 14 });
})();

// src/app/components/account/notification/notification.component.ts
function NotificationComponent_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275element(4, "i", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    \u0275\u0275classProp("unread", !notification_r1.read_at);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r1 == null ? null : notification_r1.data == null ? null : notification_r1.data.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, notification_r1 == null ? null : notification_r1.created_at, "dd MMM yyyy hh:mm:a"), "");
  }
}
function NotificationComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 4);
    \u0275\u0275template(1, NotificationComponent_ul_5_li_1_Template, 7, 7, "li", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r1.notification$));
  }
}
function NotificationComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 7);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "No Notifications Found")("description", "You Have Not Notification yet");
  }
}
var NotificationComponent = class _NotificationComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnDestroy() {
    this.store.dispatch(new MarkAsReadNotification());
  }
  static {
    this.\u0275fac = function NotificationComponent_Factory(t) {
      return new (t || _NotificationComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationComponent, selectors: [["app-notification"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "notification-list", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "notification-list"], [3, "unread", 4, "ngFor", "ngForOf"], [1, "ri-time-line"], [3, "image", "text", "description"]], template: function NotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(5, NotificationComponent_ul_5_Template, 3, 3, "ul", 2);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, NotificationComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
        \u0275\u0275pipe(8, "async");
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "Notifications"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.notification$)) == null ? null : tmp_1_0.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.notification$)) == null ? null : tmp_2_0.length));
      }
    }, dependencies: [NgForOf, NgIf, NoDataComponent, AsyncPipe, DatePipe, TranslatePipe] });
  }
};
__decorate([
  Select(NotificationState.notification)
], NotificationComponent.prototype, "notification$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationComponent, { className: "NotificationComponent", filePath: "src\\app\\components\\account\\notification\\notification.component.ts", lineNumber: 13 });
})();

// src/app/components/account/bank-details/bank-details.component.ts
var _c03 = () => ["/account/dashboard"];
function BankDetailsComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "Only numbers are allowed"));
  }
}
function BankDetailsComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "Only letters and spaces are allowed"));
  }
}
function BankDetailsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "Only letters and spaces are allowed"));
  }
}
function BankDetailsComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "Please enter a valid email address"));
  }
}
var BankDetailsComponent = class _BankDetailsComponent {
  constructor(store) {
    this.store = store;
    this.active = "bank";
    this.form = new FormGroup({
      bank_account_no: new FormControl("", [Validators.pattern(/^[0-9]*$/)]),
      bank_name: new FormControl("", [Validators.pattern(/^[A-Za-z\s]*$/)]),
      bank_holder_name: new FormControl("", [Validators.pattern(/^[A-Za-z\s]*$/)]),
      swift: new FormControl(),
      ifsc: new FormControl(),
      paypal_email: new FormControl("", [Validators.email])
    });
  }
  ngOnInit() {
    this.store.dispatch(new GetPaymentDetails());
    this.paymentDetails$.subscribe((paymentDetails) => {
      this.form.patchValue({
        bank_account_no: paymentDetails?.bank_account_no,
        bank_name: paymentDetails?.bank_name,
        bank_holder_name: paymentDetails?.bank_holder_name,
        swift: paymentDetails?.swift,
        ifsc: paymentDetails?.ifsc,
        paypal_email: paymentDetails?.paypal_email
      });
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new UpdatePaymentDetails(this.form.value));
    }
  }
  // Input guards: shared helpers
  allowOnlyDigits(event) {
    const allowedControlKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Enter",
      "Escape",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End"
    ];
    if (allowedControlKeys.includes(event.key))
      return;
    if (event.ctrlKey || event.metaKey)
      return;
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  }
  sanitizeDigitsInput(event, controlName) {
    const input = event.target;
    const digitsOnly = (input.value || "").replace(/\D/g, "");
    if (digitsOnly !== input.value) {
      input.value = digitsOnly;
      this.form.controls[controlName].setValue(digitsOnly, { emitEvent: false });
    }
  }
  sanitizeDigitsPaste(event) {
    const pasted = event.clipboardData?.getData("text") ?? "";
    if (/\D/.test(pasted)) {
      event.preventDefault();
      const sanitized = pasted.replace(/\D/g, "");
      document.execCommand("insertText", false, sanitized);
    }
  }
  allowOnlyLetters(event) {
    const allowedControlKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Enter",
      "Escape",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End"
    ];
    if (allowedControlKeys.includes(event.key))
      return;
    if (/^[A-Za-z\s]$/.test(event.key))
      return;
    event.preventDefault();
  }
  sanitizeLettersInput(event, controlName) {
    const input = event.target;
    const sanitized = (input.value || "").replace(/[^A-Za-z\s]/g, "");
    if (sanitized !== input.value) {
      input.value = sanitized;
      this.form.controls[controlName].setValue(sanitized, { emitEvent: false });
    }
  }
  sanitizeLettersPaste(event) {
    const pasted = event.clipboardData?.getData("text") ?? "";
    if (/[^A-Za-z\s]/.test(pasted)) {
      event.preventDefault();
      const sanitized = pasted.replace(/[^A-Za-z\s]/g, "");
      document.execCommand("insertText", false, sanitized);
    }
  }
  static {
    this.\u0275fac = function BankDetailsComponent_Factory(t) {
      return new (t || _BankDetailsComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankDetailsComponent, selectors: [["app-bank-details"]], decls: 100, vars: 75, consts: [[1, "bank-details-page-container"], [1, "bank-details-page-header"], [1, "header-content"], [1, "header-icon-wrapper"], [1, "ri-bank-line"], [1, "header-text-content"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-back-dashboard", 3, "routerLink"], [1, "ri-arrow-left-line"], [3, "ngSubmit", "formGroup"], [1, "bank-details-section"], [1, "section-header"], [1, "section-icon-wrapper"], [1, "ri-bank-card-line"], [1, "section-title"], [1, "section-subtitle"], [1, "form-fields-grid"], [1, "form-field-wrapper"], ["for", "bank_account_no", 1, "form-label-modern"], [1, "ri-numbers-line"], ["type", "text", "id", "bank_account_no", "formControlName", "bank_account_no", 1, "form-input-modern", 3, "keydown", "input", "paste", "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "bank_name", 1, "form-label-modern"], [1, "ri-building-line"], ["type", "text", "id", "bank_name", "formControlName", "bank_name", 1, "form-input-modern", 3, "keydown", "input", "paste", "placeholder"], ["for", "bank_holder_name", 1, "form-label-modern"], [1, "ri-user-line"], ["type", "text", "id", "bank_holder_name", "formControlName", "bank_holder_name", 1, "form-input-modern", 3, "keydown", "input", "paste", "placeholder"], ["for", "swift", 1, "form-label-modern"], [1, "ri-global-line"], ["type", "text", "id", "swift", "formControlName", "swift", 1, "form-input-modern", 3, "placeholder"], ["for", "ifsc", 1, "form-label-modern"], [1, "ri-file-code-line"], ["type", "text", "id", "ifsc", "formControlName", "ifsc", 1, "form-input-modern", 3, "placeholder"], [1, "paypal-details-section"], [1, "section-icon-wrapper", "paypal-icon"], [1, "ri-paypal-line"], ["for", "paypal_email", 1, "form-label-modern"], [1, "ri-mail-line"], ["type", "email", "id", "paypal_email", "formControlName", "paypal_email", 1, "form-input-modern", 3, "placeholder"], [1, "form-actions"], ["type", "submit", 1, "btn-save"], [1, "ri-save-line"], [1, "error-message"], [1, "ri-error-warning-line"]], template: function BankDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "a", 8);
        \u0275\u0275element(13, "i", 9);
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "form", 10);
        \u0275\u0275listener("ngSubmit", function BankDetailsComponent_Template_form_ngSubmit_17_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(18, "div", 11)(19, "div", 12)(20, "div", 13);
        \u0275\u0275element(21, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div")(23, "h5", 15);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p", 16);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 17)(30, "div", 18)(31, "label", 19);
        \u0275\u0275element(32, "i", 20);
        \u0275\u0275elementStart(33, "span");
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "input", 21);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275listener("keydown", function BankDetailsComponent_Template_input_keydown_36_listener($event) {
          return ctx.allowOnlyDigits($event);
        })("input", function BankDetailsComponent_Template_input_input_36_listener($event) {
          return ctx.sanitizeDigitsInput($event, "bank_account_no");
        })("paste", function BankDetailsComponent_Template_input_paste_36_listener($event) {
          return ctx.sanitizeDigitsPaste($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(38, BankDetailsComponent_div_38_Template, 5, 3, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 18)(40, "label", 23);
        \u0275\u0275element(41, "i", 24);
        \u0275\u0275elementStart(42, "span");
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "input", 25);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275listener("keydown", function BankDetailsComponent_Template_input_keydown_45_listener($event) {
          return ctx.allowOnlyLetters($event);
        })("input", function BankDetailsComponent_Template_input_input_45_listener($event) {
          return ctx.sanitizeLettersInput($event, "bank_name");
        })("paste", function BankDetailsComponent_Template_input_paste_45_listener($event) {
          return ctx.sanitizeLettersPaste($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(47, BankDetailsComponent_div_47_Template, 5, 3, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 18)(49, "label", 26);
        \u0275\u0275element(50, "i", 27);
        \u0275\u0275elementStart(51, "span");
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "input", 28);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275listener("keydown", function BankDetailsComponent_Template_input_keydown_54_listener($event) {
          return ctx.allowOnlyLetters($event);
        })("input", function BankDetailsComponent_Template_input_input_54_listener($event) {
          return ctx.sanitizeLettersInput($event, "bank_holder_name");
        })("paste", function BankDetailsComponent_Template_input_paste_54_listener($event) {
          return ctx.sanitizeLettersPaste($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(56, BankDetailsComponent_div_56_Template, 5, 3, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 18)(58, "label", 29);
        \u0275\u0275element(59, "i", 30);
        \u0275\u0275elementStart(60, "span");
        \u0275\u0275text(61);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(63, "input", 31);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 18)(66, "label", 32);
        \u0275\u0275element(67, "i", 33);
        \u0275\u0275elementStart(68, "span");
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(71, "input", 34);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "div", 35)(74, "div", 12)(75, "div", 36);
        \u0275\u0275element(76, "i", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div")(78, "h5", 15);
        \u0275\u0275text(79);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "p", 16);
        \u0275\u0275text(82);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 17)(85, "div", 18)(86, "label", 38);
        \u0275\u0275element(87, "i", 39);
        \u0275\u0275elementStart(88, "span");
        \u0275\u0275text(89);
        \u0275\u0275pipe(90, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(91, "input", 40);
        \u0275\u0275pipe(92, "translate");
        \u0275\u0275template(93, BankDetailsComponent_div_93_Template, 5, 3, "div", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "div", 41)(95, "button", 42);
        \u0275\u0275element(96, "i", 43);
        \u0275\u0275elementStart(97, "span");
        \u0275\u0275text(98);
        \u0275\u0275pipe(99, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 34, "Bank Details"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 36, "Manage your payment and bank information"));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(74, _c03));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 38, "Back to Dashboard"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 40, "Bank Details"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 42, "Enter your bank account information"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 44, "Bank Account No."));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("is-invalid", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["bank_account_no"] == null ? null : ctx.form.controls["bank_account_no"].touched) && (ctx.form.controls["bank_account_no"] == null ? null : ctx.form.controls["bank_account_no"].errors == null ? null : ctx.form.controls["bank_account_no"].errors["pattern"]));
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(37, 46, "Enter bank Account Number"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["bank_account_no"] == null ? null : ctx.form.controls["bank_account_no"].touched) && (ctx.form.controls["bank_account_no"] == null ? null : ctx.form.controls["bank_account_no"].errors == null ? null : ctx.form.controls["bank_account_no"].errors["pattern"]));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 48, "Bank Name"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("is-invalid", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["bank_name"] == null ? null : ctx.form.controls["bank_name"].touched) && (ctx.form.controls["bank_name"] == null ? null : ctx.form.controls["bank_name"].errors == null ? null : ctx.form.controls["bank_name"].errors["pattern"]));
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(46, 50, "Enter Bank Name"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["bank_name"] == null ? null : ctx.form.controls["bank_name"].touched) && (ctx.form.controls["bank_name"] == null ? null : ctx.form.controls["bank_name"].errors == null ? null : ctx.form.controls["bank_name"].errors["pattern"]));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 52, "Holder Name"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("is-invalid", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["bank_holder_name"] == null ? null : ctx.form.controls["bank_holder_name"].touched) && (ctx.form.controls["bank_holder_name"] == null ? null : ctx.form.controls["bank_holder_name"].errors == null ? null : ctx.form.controls["bank_holder_name"].errors["pattern"]));
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(55, 54, "Enter Bank Holder Name"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["bank_holder_name"] == null ? null : ctx.form.controls["bank_holder_name"].touched) && (ctx.form.controls["bank_holder_name"] == null ? null : ctx.form.controls["bank_holder_name"].errors == null ? null : ctx.form.controls["bank_holder_name"].errors["pattern"]));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 56, "Swift"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(64, 58, "Enter Swift"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 60, "IFSC"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(72, 62, "Enter IFSC"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 64, "Paypal Details"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 66, "Enter your PayPal email address"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 68, "Paypal Email"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("is-invalid", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["paypal_email"] == null ? null : ctx.form.controls["paypal_email"].touched) && (ctx.form.controls["paypal_email"] == null ? null : ctx.form.controls["paypal_email"].errors == null ? null : ctx.form.controls["paypal_email"].errors["email"]));
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(92, 70, "Enter Paypal Email"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.form == null ? null : ctx.form.controls == null ? null : ctx.form.controls["paypal_email"] == null ? null : ctx.form.controls["paypal_email"].touched) && (ctx.form.controls["paypal_email"] == null ? null : ctx.form.controls["paypal_email"].errors == null ? null : ctx.form.controls["paypal_email"].errors["email"]));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 72, "Save"));
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family: inherit;\n}\n.bank-details-page-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.bank-details-page-header[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 28px 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 10px rgba(15, 23, 32, 0.15), 0 20px 48px rgba(15, 23, 32, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.bank-details-page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -30px;\n  right: -20px;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(30, 127, 201, 0.25) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.bank-details-page-header[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -20px;\n  left: -10px;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(179, 138, 72, 0.12) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.bank-details-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  position: relative;\n  z-index: 1;\n}\n.bank-details-page-header[_ngcontent-%COMP%]   .header-icon-wrapper[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.bank-details-page-header[_ngcontent-%COMP%]   .header-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  color: #B38A48 !important;\n}\n.bank-details-page-header[_ngcontent-%COMP%]   .header-text-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  font-weight: 800 !important;\n  color: #fff !important;\n  letter-spacing: -0.3px;\n  margin: 0 0 4px !important;\n}\n.bank-details-page-header[_ngcontent-%COMP%]   .header-text-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  color: rgba(255, 255, 255, 0.6) !important;\n  margin: 0 !important;\n}\n.bank-details-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 999px;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 11.5px;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.bank-details-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  transition: transform 0.3s ease;\n}\n.bank-details-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n  border-color: rgba(255, 255, 255, 0.28);\n  color: #fff;\n  transform: translateX(-2px);\n}\n.bank-details-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(-3px);\n}\n@media (max-width: 575px) {\n  .bank-details-page-header[_ngcontent-%COMP%] {\n    padding: 22px 20px;\n    border-radius: 16px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .bank-details-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.bank-details-section[_ngcontent-%COMP%], .paypal-details-section[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  border: 1px solid #E6E8EC;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 12px 30px rgba(15, 23, 32, 0.07);\n  transition: box-shadow 0.35s ease;\n}\n.bank-details-section[_ngcontent-%COMP%]:hover, .paypal-details-section[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(15, 23, 32, 0.04), 0 18px 42px rgba(30, 127, 201, 0.1);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 26px;\n  background:\n    linear-gradient(\n      90deg,\n      #F8F9FB 0%,\n      #FFFFFF 100%);\n  border-bottom: 1px solid #E6E8EC;\n}\n.section-icon-wrapper[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  min-width: 46px;\n  border-radius: 14px;\n  background: #EAF3FB;\n  border: 1px solid rgba(30, 127, 201, 0.2);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.section-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px !important;\n  color: #1E7FC9 !important;\n}\n.section-icon-wrapper.paypal-icon[_ngcontent-%COMP%] {\n  background: #E3F5FC;\n  border-color: rgba(0, 156, 222, 0.2);\n}\n.section-icon-wrapper.paypal-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #009CDE !important;\n}\n.bank-details-section[_ngcontent-%COMP%]:hover   .section-icon-wrapper[_ngcontent-%COMP%] {\n  background: #1E7FC9;\n  border-color: #135a95;\n  transform: scale(1.08) rotate(-6deg);\n  box-shadow: 0 8px 20px rgba(30, 127, 201, 0.35);\n}\n.bank-details-section[_ngcontent-%COMP%]:hover   .section-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.paypal-details-section[_ngcontent-%COMP%]:hover   .section-icon-wrapper[_ngcontent-%COMP%] {\n  background: #009CDE;\n  border-color: #0078ab;\n  transform: scale(1.08) rotate(-6deg);\n  box-shadow: 0 8px 20px rgba(0, 156, 222, 0.35);\n}\n.paypal-details-section[_ngcontent-%COMP%]:hover   .section-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2px !important;\n  text-transform: uppercase !important;\n  color: #0F1720 !important;\n  margin: 0 0 3px !important;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 12.5px !important;\n  color: #6B7280 !important;\n  margin: 0 !important;\n  letter-spacing: 0.1px;\n}\n.form-fields-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n}\n@media (max-width: 575px) {\n  .form-fields-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-field-wrapper[_ngcontent-%COMP%] {\n  padding: 22px 26px;\n  border-bottom: 1px solid #E6E8EC;\n  border-right: 1px solid #E6E8EC;\n  transition: background 0.25s ease;\n}\n.form-field-wrapper[_ngcontent-%COMP%]:nth-child(2n) {\n  border-right: none;\n}\n.form-field-wrapper[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.form-field-wrapper[_ngcontent-%COMP%]:nth-last-child(2):nth-child(odd) {\n  border-bottom: none;\n}\n@media (max-width: 575px) {\n  .form-field-wrapper[_ngcontent-%COMP%] {\n    border-right: none;\n  }\n  .form-field-wrapper[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n}\n.form-field-wrapper[_ngcontent-%COMP%]:hover {\n  background: rgba(30, 127, 201, 0.015);\n}\n.form-label-modern[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #0F1720;\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2px !important;\n  text-transform: uppercase;\n  margin-bottom: 10px !important;\n  cursor: default;\n}\n.form-label-modern[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 7px;\n  background: #EAF3FB;\n  color: #1E7FC9 !important;\n  font-size: 13px !important;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.form-field-wrapper[_ngcontent-%COMP%]:hover   .form-label-modern[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #1E7FC9;\n  color: #fff !important;\n  transform: scale(1.08) rotate(-6deg);\n}\n.form-input-modern[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  padding: 0 16px !important;\n  border: 1.5px solid #D1D5DB !important;\n  border-radius: 12px !important;\n  font-size: 14.5px !important;\n  font-weight: 600;\n  color: #0F1720 !important;\n  background: #F8F9FB !important;\n  font-family: inherit;\n  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1) !important;\n  box-shadow: 0 1px 3px rgba(15, 23, 32, 0.04) !important;\n  outline: none !important;\n}\n.form-input-modern[_ngcontent-%COMP%]::placeholder {\n  color: #D1D5DB !important;\n  font-size: 13.5px !important;\n  font-weight: 500;\n}\n.form-input-modern[_ngcontent-%COMP%]:focus {\n  border-color: #1E7FC9 !important;\n  background: #FFFFFF !important;\n  box-shadow: 0 0 0 4px rgba(30, 127, 201, 0.12), 0 4px 12px rgba(30, 127, 201, 0.08) !important;\n  transform: translateY(-1px);\n}\n.form-input-modern[_ngcontent-%COMP%]:hover:not(:focus) {\n  border-color: #D1D5DB !important;\n  background: #FFFFFF !important;\n}\n.form-input-modern.is-invalid[_ngcontent-%COMP%] {\n  border-color: #E7475A !important;\n  background: #FDECEE !important;\n}\n.form-input-modern.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 4px rgba(231, 71, 90, 0.1), 0 4px 12px rgba(231, 71, 90, 0.08) !important;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px !important;\n  font-weight: 700;\n  color: #E7475A !important;\n  margin-top: 8px !important;\n  padding: 6px 12px;\n  background: #FDECEE;\n  border: 1px solid rgba(231, 71, 90, 0.25);\n  border-radius: 8px;\n  animation: _ngcontent-%COMP%_bdFadeIn 0.3s ease;\n}\n.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  color: #E7475A !important;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_bdFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 4px;\n}\n@media (max-width: 575px) {\n  .form-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n}\n.btn-save[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  height: 56px;\n  padding: 0 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #1E7FC9 0%,\n      #135a95 100%);\n  color: #fff;\n  border: none;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 2.5px;\n  text-transform: uppercase;\n  cursor: pointer;\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);\n  box-shadow: 0 4px 12px rgba(30, 127, 201, 0.28), 0 14px 32px rgba(30, 127, 201, 0.2);\n}\n.btn-save[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  transform: translateX(-101%);\n  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n  z-index: 0;\n}\n.btn-save[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.btn-save[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: inherit !important;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(15, 23, 32, 0.25), 0 18px 40px rgba(15, 23, 32, 0.2);\n}\n.btn-save[_ngcontent-%COMP%]:hover::before {\n  transform: translateX(0);\n}\n.btn-save[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(-12deg) scale(1.1);\n}\n.btn-save[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n@media (max-width: 575px) {\n  .btn-save[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 52px;\n  }\n}\n@media (max-width: 768px) {\n  .bank-details-page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: 16px !important;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n    gap: 12px;\n  }\n  .section-icon-wrapper[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border-radius: 12px;\n  }\n  .section-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 19px !important;\n  }\n  .form-field-wrapper[_ngcontent-%COMP%] {\n    padding: 18px 20px;\n  }\n  .form-input-modern[_ngcontent-%COMP%] {\n    height: 46px !important;\n    font-size: 14px !important;\n    border-radius: 10px !important;\n  }\n}\n/*# sourceMappingURL=bank-details.component.css.map */'] });
  }
};
__decorate([
  Select(PaymentDetailsState.paymentDetails)
], BankDetailsComponent.prototype, "paymentDetails$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankDetailsComponent, { className: "BankDetailsComponent", filePath: "src\\app\\components\\account\\bank-details\\bank-details.component.ts", lineNumber: 14 });
})();

// src/app/components/account/point/point.component.ts
function PointComponent_div_5_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titleCase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const transaction_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, transaction_r1 == null ? null : transaction_r1.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", transaction_r1 == null ? null : transaction_r1.amount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transaction_r1 == null ? null : transaction_r1.detail);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("status-", transaction_r1 == null ? null : transaction_r1.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, transaction_r1 == null ? null : transaction_r1.type));
  }
}
function PointComponent_div_5_nav_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 18)(1, "app-pagination", 19);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("setPage", function PointComponent_div_5_nav_43_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.point$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function PointComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    \u0275\u0275element(5, "img", 9);
    \u0275\u0275elementStart(6, "div", 10)(7, "h5");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 11)(15, "h3", 12);
    \u0275\u0275element(16, "i", 13);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275pipe(19, "async");
    \u0275\u0275pipe(20, "currencySymbol");
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "div", 14)(23, "h4", 15);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "table")(27, "tbody")(28, "tr")(29, "th");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, PointComponent_div_5_tr_41_Template, 13, 12, "tr", 16);
    \u0275\u0275pipe(42, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, PointComponent_div_5_nav_43_Template, 3, 5, "nav", 17);
    \u0275\u0275pipe(44, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, "Total Points"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, ctx_r2.point$) ? (tmp_2_0 = \u0275\u0275pipeBind1(13, 16, ctx_r2.point$)) == null ? null : tmp_2_0.balance : 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(18, 18, "1_point"), " = ", \u0275\u0275pipeBind1(20, 22, 1 / ((tmp_3_0 = \u0275\u0275pipeBind1(19, 20, ctx_r2.setting$)) == null ? null : tmp_3_0.wallet_points == null ? null : tmp_3_0.wallet_points.point_currency_ratio)), " ", \u0275\u0275pipeBind1(21, 24, "Balance"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 26, "Transactions"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 28, "Date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 30, "Points"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 32, "Remark"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 34, "Status"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_9_0 = \u0275\u0275pipeBind1(42, 36, ctx_r2.point$)) == null ? null : tmp_9_0.transactions == null ? null : tmp_9_0.transactions.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_10_0 = \u0275\u0275pipeBind1(44, 38, ctx_r2.point$)) == null ? null : tmp_10_0.transactions == null ? null : tmp_10_0.transactions.data == null ? null : tmp_10_0.transactions.data.length);
  }
}
function PointComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 20);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_transaction_found")("description", "You_have_not_earned_yet");
  }
}
var PointComponent = class _PointComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetUserTransaction2(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetUserTransaction2(this.filter));
  }
  static {
    this.\u0275fac = function PointComponent_Factory(t) {
      return new (t || _PointComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointComponent, selectors: [["app-point"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "total-box mt-0", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "total-box", "mt-0"], [1, "row"], [1, "col-12"], [1, "totle-contain", "wallet-bg"], [1, "wallet-point-box"], ["src", "assets/images/svg/coin.svg", "alt", "coin", 1, "img-fluid"], [1, "totle-detail"], [1, "point-ratio"], [1, "counter"], [1, "ri-information-line", "me-2"], [1, "wallet-table"], [1, "user-dashboard-title"], [4, "ngFor", "ngForOf"], ["class", "custome-pagination", 4, "ngIf"], [1, "custome-pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function PointComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(5, PointComponent_div_5_Template, 45, 40, "div", 2);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, PointComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
        \u0275\u0275pipe(8, "async");
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "Points"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.point$)) == null ? null : tmp_1_0.transactions == null ? null : tmp_1_0.transactions.data == null ? null : tmp_1_0.transactions.data.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.point$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.data == null ? null : tmp_2_0.transactions.data.length));
      }
    }, dependencies: [NgForOf, NgIf, PaginationComponent, NoDataComponent, AsyncPipe, DatePipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe] });
  }
};
__decorate([
  Select(SettingState.setting)
], PointComponent.prototype, "setting$", void 0);
__decorate([
  Select(PointState.point)
], PointComponent.prototype, "point$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointComponent, { className: "PointComponent", filePath: "src\\app\\components\\account\\point\\point.component.ts", lineNumber: 16 });
})();

// src/app/components/account/orders/orders.component.ts
var _c04 = () => ["/account/dashboard"];
var _c13 = (a0) => ["/account/order/details", a0];
function OrdersComponent_div_17_div_2_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Pay By UPI INTENT 3 ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_div_17_div_2_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Cash Free ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_div_17_div_2_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Pay via UPI App ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_div_17_div_2_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titleCase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, order_r1 == null ? null : order_r1.payment_method), " ");
  }
}
function OrdersComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19);
    \u0275\u0275element(4, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h6", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titleCase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 23)(16, "div", 24)(17, "div", 25);
    \u0275\u0275element(18, "i", 26);
    \u0275\u0275elementStart(19, "div")(20, "span", 27);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 28);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 25);
    \u0275\u0275element(27, "i", 29);
    \u0275\u0275elementStart(28, "div")(29, "span", 27);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 30);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "currencySymbol");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 24)(36, "div", 25);
    \u0275\u0275element(37, "i", 31);
    \u0275\u0275elementStart(38, "div")(39, "span", 27);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 28);
    \u0275\u0275template(43, OrdersComponent_div_17_div_2_span_43_Template, 2, 0, "span", 32)(44, OrdersComponent_div_17_div_2_span_44_Template, 2, 0, "span", 32)(45, OrdersComponent_div_17_div_2_span_45_Template, 2, 0, "span", 32)(46, OrdersComponent_div_17_div_2_span_46_Template, 3, 3, "span", 32);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "div", 33)(48, "a", 34);
    \u0275\u0275element(49, "i", 35);
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 17, "Order Number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r1.order_number, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("order-status-badge status-", order_r1 == null ? null : order_r1.payment_status == null ? null : order_r1.payment_status.toLowerCase(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 19, order_r1 == null ? null : order_r1.payment_status));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, "Date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 23, order_r1 == null ? null : order_r1.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 26, "Amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 28, order_r1 == null ? null : order_r1.total));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 30, "Payment Method"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (order_r1 == null ? null : order_r1.payment_method) === "mangal fashion_nabu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (order_r1 == null ? null : order_r1.payment_method) === "pay_drill");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (order_r1 == null ? null : order_r1.payment_method) === "star_mangal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (order_r1 == null ? null : order_r1.payment_method) !== "mangal fashion_nabu" && (order_r1 == null ? null : order_r1.payment_method) !== "pay_drill" && (order_r1 == null ? null : order_r1.payment_method) !== "star_mangal");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(34, _c13, order_r1.order_number));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 32, "View Details"));
  }
}
function OrdersComponent_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "app-pagination", 37);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("setPage", function OrdersComponent_div_17_div_4_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.order$)) == null ? null : tmp_2_0.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function OrdersComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275template(2, OrdersComponent_div_17_div_2_Template, 53, 36, "div", 14);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, OrdersComponent_div_17_div_4_Template, 3, 5, "div", 15);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_1_0 = \u0275\u0275pipeBind1(3, 2, ctx_r2.order$)) == null ? null : tmp_1_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(5, 4, ctx_r2.order$)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.length);
  }
}
function OrdersComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "No Orders have yet"));
  }
}
var OrdersComponent = class _OrdersComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetOrders(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetOrders(this.filter));
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(t) {
      return new (t || _OrdersComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], decls: 21, vars: 17, consts: [[1, "orders-page-container"], [1, "orders-page-header"], [1, "header-content"], [1, "header-icon-wrapper"], [1, "ri-file-text-line"], [1, "header-text-content"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-back-dashboard", 3, "routerLink"], [1, "ri-arrow-left-line"], ["class", "orders-list-container", 4, "ngIf"], ["class", "orders-empty-state", 4, "ngIf"], [1, "orders-list-container"], [1, "orders-grid"], ["class", "order-card", 4, "ngFor", "ngForOf"], ["class", "orders-pagination", 4, "ngIf"], [1, "order-card"], [1, "order-card-header"], [1, "order-number-section"], [1, "order-icon-wrapper"], [1, "ri-shopping-bag-line"], [1, "order-label"], [1, "order-number"], [1, "order-card-body"], [1, "order-info-row"], [1, "info-item"], [1, "ri-calendar-line"], [1, "info-label"], [1, "info-value"], [1, "ri-money-rupee-circle-line"], [1, "info-value", "amount"], [1, "ri-bank-card-line"], [4, "ngIf"], [1, "order-card-footer"], [1, "btn-view-order", 3, "routerLink"], [1, "ri-eye-line"], [1, "orders-pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [1, "orders-empty-state"], [1, "empty-state-content"]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "a", 8);
        \u0275\u0275element(13, "i", 9);
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(17, OrdersComponent_div_17_Template, 6, 6, "div", 10);
        \u0275\u0275pipe(18, "async");
        \u0275\u0275template(19, OrdersComponent_div_19_Template, 6, 3, "div", 11);
        \u0275\u0275pipe(20, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "My Orders"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "View and track all your orders"));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c04));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 10, "Back to Dashboard"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_4_0 = \u0275\u0275pipeBind1(18, 12, ctx.order$)) == null ? null : tmp_4_0.data == null ? null : tmp_4_0.data.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_5_0 = \u0275\u0275pipeBind1(20, 14, ctx.order$)) == null ? null : tmp_5_0.data == null ? null : tmp_5_0.data.length));
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, PaginationComponent, AsyncPipe, DatePipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe], styles: ["\n\n.orders-page-container[_ngcontent-%COMP%]   .orders-page-header[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px 24px;\n  border: 1px solid #eee;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n  border-radius: 0;\n  box-shadow: none;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon-wrapper[_ngcontent-%COMP%] {\n  display: none;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  color: #2F2F2F;\n  font-weight: 700;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin: 0;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  display: none;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: transparent;\n  color: #6D645F;\n  border: 1.5px solid #ddd;\n  border-radius: 0;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  transition: all 0.2s;\n  box-shadow: none;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%]:hover {\n  background: #2F2F2F;\n  color: #fff;\n  border-color: #2F2F2F;\n  transform: none;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .orders-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #eee;\n  border-radius: 0;\n  box-shadow: none;\n  transition: border-color 0.2s;\n  overflow: hidden;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(107, 142, 35, 0.3);\n  transform: none;\n  box-shadow: none;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-header[_ngcontent-%COMP%] {\n  background: #FAF9F6;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #eee;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-header[_ngcontent-%COMP%]   .order-number-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-header[_ngcontent-%COMP%]   .order-number-section[_ngcontent-%COMP%]   .order-icon-wrapper[_ngcontent-%COMP%] {\n  display: none;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-header[_ngcontent-%COMP%]   .order-number-section[_ngcontent-%COMP%]   .order-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #bbb;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 2px;\n  display: block;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-header[_ngcontent-%COMP%]   .order-number-section[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] {\n  color: #2F2F2F;\n  font-weight: 700;\n  font-size: 15px;\n  margin: 0;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-header[_ngcontent-%COMP%]   .order-status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 0;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-header[_ngcontent-%COMP%]   .order-status-badge.status-completed[_ngcontent-%COMP%], .orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-header[_ngcontent-%COMP%]   .order-status-badge.status-paid[_ngcontent-%COMP%] {\n  background: rgba(107, 142, 35, 0.1);\n  color: #6B8E23;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-header[_ngcontent-%COMP%]   .order-status-badge.status-pending[_ngcontent-%COMP%] {\n  background: rgba(230, 126, 34, 0.1);\n  color: #e67e22;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-header[_ngcontent-%COMP%]   .order-status-badge.status-failed[_ngcontent-%COMP%] {\n  background: rgba(192, 57, 43, 0.08);\n  color: #c0392b;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-header[_ngcontent-%COMP%]   .order-status-badge.status-processing[_ngcontent-%COMP%] {\n  background: rgba(109, 100, 95, 0.1);\n  color: #6D645F;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-body[_ngcontent-%COMP%]   .order-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-body[_ngcontent-%COMP%]   .order-info-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-body[_ngcontent-%COMP%]   .order-info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-body[_ngcontent-%COMP%]   .order-info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: none;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-body[_ngcontent-%COMP%]   .order-info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  display: block;\n  color: #bbb;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 2px;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-body[_ngcontent-%COMP%]   .order-info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: block;\n  color: #2F2F2F;\n  font-size: 13px;\n  font-weight: 600;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-body[_ngcontent-%COMP%]   .order-info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value.amount[_ngcontent-%COMP%] {\n  color: #2F2F2F;\n  font-size: 15px;\n  font-weight: 700;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  background: transparent;\n  border-top: 1px solid #eee;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-footer[_ngcontent-%COMP%]   .btn-view-order[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: transparent;\n  color: #2F2F2F;\n  border: 1.5px solid #2F2F2F;\n  border-radius: 0;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  transition: all 0.2s;\n  box-shadow: none;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-footer[_ngcontent-%COMP%]   .btn-view-order[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-footer[_ngcontent-%COMP%]   .btn-view-order[_ngcontent-%COMP%]:hover {\n  background: #2F2F2F;\n  color: #fff;\n  transform: none;\n}\n.orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .orders-pagination[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  justify-content: center;\n}\n.orders-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 350px;\n  padding: 40px;\n  background: #fff;\n  border: 1px solid #eee;\n}\n.orders-empty-state[_ngcontent-%COMP%]   .empty-state-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.orders-empty-state[_ngcontent-%COMP%]   .empty-state-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #ddd;\n  margin-bottom: 16px;\n  display: block;\n}\n.orders-empty-state[_ngcontent-%COMP%]   .empty-state-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .orders-page-container[_ngcontent-%COMP%]   .orders-page-header[_ngcontent-%COMP%] {\n    padding: 16px 18px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .orders-page-container[_ngcontent-%COMP%]   .orders-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n    padding: 14px 16px;\n  }\n  .orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-body[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n  .orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-body[_ngcontent-%COMP%]   .order-info-row[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-footer[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .orders-page-container[_ngcontent-%COMP%]   .orders-list-container[_ngcontent-%COMP%]   .order-card[_ngcontent-%COMP%]   .order-card-footer[_ngcontent-%COMP%]   .btn-view-order[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=orders.component.css.map */"] });
  }
};
__decorate([
  Select(OrderState.order)
], OrdersComponent.prototype, "order$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src\\app\\components\\account\\orders\\orders.component.ts", lineNumber: 14 });
})();

// src/app/components/account/orders/details/details.component.ts
var _c05 = ["refundModal"];
var _c14 = ["payModal"];
var _c22 = () => ["/account/order"];
var _c32 = (a0) => ({ "d-none": a0 });
var _c42 = (a0) => ["/account/order/details", a0];
function OrderDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "span", 11);
    \u0275\u0275text(4, "Loading...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h5");
    \u0275\u0275text(6, "Loading Order Details...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 12);
    \u0275\u0275text(8, "Please wait while we fetch your order information.");
    \u0275\u0275elementEnd()()();
  }
}
function OrderDetailsComponent_div_2_a_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 48);
    \u0275\u0275listener("click", function OrderDetailsComponent_div_2_a_18_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      const payModal_r3 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(payModal_r3.openModal(ctx_r1.order));
    });
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "Pay Now"));
  }
}
function OrderDetailsComponent_div_2_a_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 50);
    \u0275\u0275listener("click", function OrderDetailsComponent_div_2_a_19_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.download(ctx_r1.order.order_number));
    });
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "Invoice"));
  }
}
function OrderDetailsComponent_div_2_div_20_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275element(2, "img", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titleCase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const orderStatus_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", (orderStatus_r5 == null ? null : orderStatus_r5.sequence) <= ctx_r1.order.order_status.sequence)("completed", (orderStatus_r5 == null ? null : orderStatus_r5.sequence) < ctx_r1.order.order_status.sequence);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c32, (orderStatus_r5 == null ? null : orderStatus_r5.sequence) >= ctx_r1.order.order_status.sequence && (ctx_r1.order.order_status && ctx_r1.order.order_status.slug == "cancelled") || (orderStatus_r5 == null ? null : orderStatus_r5.slug) == "cancelled" || ctx_r1.order.is_digital_only && ((orderStatus_r5 == null ? null : orderStatus_r5.slug) == "shipped" || (orderStatus_r5 == null ? null : orderStatus_r5.slug) == "out-for-delivery")));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "assets/svg/tracking/", orderStatus_r5 == null ? null : orderStatus_r5.slug, ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, orderStatus_r5 == null ? null : orderStatus_r5.name));
  }
}
function OrderDetailsComponent_div_2_div_20_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275element(2, "img", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "assets/svg/tracking/", ctx_r1.order.order_status.slug, ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, ctx_r1.order.order_status.name.replace("_", " ")));
  }
}
function OrderDetailsComponent_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 54)(3, "h5", 55);
    \u0275\u0275element(4, "i", 56);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 57);
    \u0275\u0275template(8, OrderDetailsComponent_div_2_div_20_div_8_Template, 6, 12, "div", 58);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275template(10, OrderDetailsComponent_div_2_div_20_div_10_Template, 6, 5, "div", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "Order Tracking"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (tmp_5_0 = \u0275\u0275pipeBind1(9, 5, ctx_r1.orderStatus$)) == null ? null : tmp_5_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.order_status) && (ctx_r1.order == null ? null : ctx_r1.order.order_status == null ? null : ctx_r1.order.order_status.slug) == "cancelled");
  }
}
function OrderDetailsComponent_div_2_div_21_div_8_a_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 83);
    \u0275\u0275listener("click", function OrderDetailsComponent_div_2_div_21_div_8_a_28_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const product_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      const refundModal_r8 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(refundModal_r8.openModal(product_r7, ctx_r1.order.id));
    });
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "Refund"));
  }
}
function OrderDetailsComponent_div_2_div_21_div_8_ng_template_29_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 86);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "Non Refundable"));
  }
}
function OrderDetailsComponent_div_2_div_21_div_8_ng_template_29_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titleCase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275classMapInterpolate1("refund-status-badge status-", product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status == null ? null : product_r7.pivot.refund_status.toLowerCase(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status));
  }
}
function OrderDetailsComponent_div_2_div_21_div_8_ng_template_29_ng_template_1_ng_template_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 90);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Refund"), " ");
  }
}
function OrderDetailsComponent_div_2_div_21_div_8_ng_template_29_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275template(1, OrderDetailsComponent_div_2_div_21_div_8_ng_template_29_ng_template_1_ng_template_1_a_1_Template, 3, 3, "a", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status));
  }
}
function OrderDetailsComponent_div_2_div_21_div_8_ng_template_29_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrderDetailsComponent_div_2_div_21_div_8_ng_template_29_ng_template_1_div_0_Template, 4, 6, "div", 87)(1, OrderDetailsComponent_div_2_div_21_div_8_ng_template_29_ng_template_1_ng_template_1_Template, 2, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const disabled_r9 = \u0275\u0275reference(2);
    const product_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngIf", product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status)("ngIfElse", disabled_r9);
  }
}
function OrderDetailsComponent_div_2_div_21_div_8_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrderDetailsComponent_div_2_div_21_div_8_ng_template_29_ng_container_0_Template, 4, 3, "ng-container", 85)(1, OrderDetailsComponent_div_2_div_21_div_8_ng_template_29_ng_template_1_Template, 3, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const NonRefundable_r10 = \u0275\u0275reference(2);
    const product_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", product_r7.is_return === 0)("ngIfElse", NonRefundable_r10);
  }
}
function OrderDetailsComponent_div_2_div_21_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72);
    \u0275\u0275element(2, "img", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74)(4, "h6", 75);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 76)(7, "div", 77)(8, "span", 78);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 79);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 77)(15, "span", 78);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 79);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 77)(21, "span", 78);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 80);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "currencySymbol");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 81);
    \u0275\u0275template(28, OrderDetailsComponent_div_2_div_21_div_8_a_28_Template, 5, 3, "a", 82)(29, OrderDetailsComponent_div_2_div_21_div_8_ng_template_29_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const noRefund_r11 = \u0275\u0275reference(30);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation) && (product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.variation_image) ? product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.variation_image == null ? null : product_r7.pivot.variation.variation_image.original_url : (product_r7 == null ? null : product_r7.product_thumbnail) ? product_r7 == null ? null : product_r7.product_thumbnail == null ? null : product_r7.product_thumbnail.original_url : "assets/images/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation) ? product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.name : product_r7 == null ? null : product_r7.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "Price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.single_price));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "Quantity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 16, "Subtotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 18, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.subtotal));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (product_r7 == null ? null : product_r7.is_return) === 1 && (ctx_r1.order == null ? null : ctx_r1.order.payment_status) && (ctx_r1.order == null ? null : ctx_r1.order.payment_status) === "COMPLETED" && ctx_r1.order.order_status && ctx_r1.order.order_status.slug == "delivered" && !(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status))("ngIfElse", noRefund_r11);
  }
}
function OrderDetailsComponent_div_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "div", 31)(3, "h5", 32);
    \u0275\u0275element(4, "i", 68);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 69);
    \u0275\u0275template(8, OrderDetailsComponent_div_2_div_21_div_8_Template, 31, 20, "div", 70);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "Ordered Products"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.order.products);
  }
}
function OrderDetailsComponent_div_2_div_33_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Floor No.: ", ctx_r1.order.billing_address.floor_no, "");
  }
}
function OrderDetailsComponent_div_2_div_33_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Flat No.: ", ctx_r1.order.billing_address.flat_no, "");
  }
}
function OrderDetailsComponent_div_2_div_33_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Building: ", ctx_r1.order.billing_address.building, "");
  }
}
function OrderDetailsComponent_div_2_div_33_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Road: ", ctx_r1.order.billing_address.road, "");
  }
}
function OrderDetailsComponent_div_2_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 93)(4, "label", 94);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 95);
    \u0275\u0275template(8, OrderDetailsComponent_div_2_div_33_div_8_Template, 2, 1, "div", 7)(9, OrderDetailsComponent_div_2_div_33_div_9_Template, 2, 1, "div", 7)(10, OrderDetailsComponent_div_2_div_33_div_10_Template, 2, 1, "div", 7)(11, OrderDetailsComponent_div_2_div_33_div_11_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "span", 96);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "Billing Address"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.order.billing_address.floor_no);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.billing_address.flat_no);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.billing_address.building);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.billing_address.road);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.order.billing_address.street);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", ctx_r1.order.billing_address.city, ", ", ctx_r1.getStateName(ctx_r1.order.billing_address.state_id), ", ", ctx_r1.getCountryName(ctx_r1.order.billing_address.country_id), " ", ctx_r1.order.billing_address.pincode, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(19, 15, "Phone"), ": +", ctx_r1.order.billing_address.country_code, " ", ctx_r1.order.billing_address.phone, "");
  }
}
function OrderDetailsComponent_div_2_div_34_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Floor No.: ", ctx_r1.order.shipping_address.floor_no, "");
  }
}
function OrderDetailsComponent_div_2_div_34_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Flat No.: ", ctx_r1.order.shipping_address.flat_no, "");
  }
}
function OrderDetailsComponent_div_2_div_34_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Building: ", ctx_r1.order.shipping_address.building, "");
  }
}
function OrderDetailsComponent_div_2_div_34_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Road: ", ctx_r1.order.shipping_address.road, "");
  }
}
function OrderDetailsComponent_div_2_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92);
    \u0275\u0275element(2, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 93)(4, "label", 94);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 95);
    \u0275\u0275template(8, OrderDetailsComponent_div_2_div_34_div_8_Template, 2, 1, "div", 7)(9, OrderDetailsComponent_div_2_div_34_div_9_Template, 2, 1, "div", 7)(10, OrderDetailsComponent_div_2_div_34_div_10_Template, 2, 1, "div", 7)(11, OrderDetailsComponent_div_2_div_34_div_11_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "span", 96);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "Shipping Address"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.order.shipping_address.floor_no);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.shipping_address.flat_no);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.shipping_address.building);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.shipping_address.road);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.order.shipping_address.street);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", ctx_r1.order.shipping_address.city, ", ", ctx_r1.getStateName(ctx_r1.order.shipping_address.state_id), ", ", ctx_r1.getCountryName(ctx_r1.order.shipping_address.country_id), " ", ctx_r1.order.shipping_address.pincode, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(19, 15, "Phone"), ": +", ctx_r1.order.shipping_address.country_code, " ", ctx_r1.order.shipping_address.phone, "");
  }
}
function OrderDetailsComponent_div_2_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92);
    \u0275\u0275element(2, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 93)(4, "label", 94);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 95);
    \u0275\u0275text(8, "Standard Delivery | Approx 10 to 15 Days");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "Delivery Slot"));
  }
}
function OrderDetailsComponent_div_2_div_36_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Pay By UPI INTENT 3 ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailsComponent_div_2_div_36_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Cash Free ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailsComponent_div_2_div_36_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Pay via UPI App ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailsComponent_div_2_div_36_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titleCase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.order == null ? null : ctx_r1.order.payment_method), " ");
  }
}
function OrderDetailsComponent_div_2_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92);
    \u0275\u0275element(2, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 93)(4, "label", 94);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 95)(8, "span", 79);
    \u0275\u0275template(9, OrderDetailsComponent_div_2_div_36_span_9_Template, 2, 0, "span", 7)(10, OrderDetailsComponent_div_2_div_36_span_10_Template, 2, 0, "span", 7)(11, OrderDetailsComponent_div_2_div_36_span_11_Template, 2, 0, "span", 7)(12, OrderDetailsComponent_div_2_div_36_span_12_Template, 3, 3, "span", 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "Payment Mode"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.payment_method) === "mangal fashion_nabu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.payment_method) === "pay_drill");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.payment_method) === "star_mangal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.payment_method) !== "mangal fashion_nabu" && (ctx_r1.order == null ? null : ctx_r1.order.payment_method) !== "pay_drill" && (ctx_r1.order == null ? null : ctx_r1.order.payment_method) !== "star_mangal");
  }
}
function OrderDetailsComponent_div_2_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92);
    \u0275\u0275element(2, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 93)(4, "label", 94);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titleCase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "Payment Status"));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("payment-status-badge status-", ctx_r1.order == null ? null : ctx_r1.order.payment_status == null ? null : ctx_r1.order.payment_status.toLowerCase(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, ctx_r1.order.payment_status));
  }
}
function OrderDetailsComponent_div_2_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "Shipping"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, ctx_r1.order.shipping_total ? ctx_r1.order.shipping_total : 0));
  }
}
function OrderDetailsComponent_div_2_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "Points"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind1(6, 4, ctx_r1.order.points_amount), "");
  }
}
function OrderDetailsComponent_div_2_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "Wallet Balance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind1(6, 4, ctx_r1.order.wallet_balance), "");
  }
}
function OrderDetailsComponent_div_2_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "Discount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind1(6, 4, ctx_r1.order.coupon_total_discount), "");
  }
}
function OrderDetailsComponent_div_2_div_72_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107)(2, "div", 108)(3, "div", 109)(4, "span", 78);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 79);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 109)(10, "span", 78);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 79);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 109)(17, "span", 78);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 80);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 109)(24, "span", 78);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div")(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "titleCase");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "a", 110);
    \u0275\u0275element(32, "i", 111);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const subOrder_r12 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "Order Number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", subOrder_r12.order_number, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 15, "Order Date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 17, subOrder_r12.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 20, "Total Amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 22, subOrder_r12.amount));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 24, "Status"));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("status-badge status-", subOrder_r12.order_status.slug, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 26, subOrder_r12.order_status.name));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(30, _c42, subOrder_r12.order_number));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 28, "View Details"));
  }
}
function OrderDetailsComponent_div_2_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "div", 31)(3, "h5", 32);
    \u0275\u0275element(4, "i", 103);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 104);
    \u0275\u0275template(8, OrderDetailsComponent_div_2_div_72_div_8_Template, 36, 32, "div", 105);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "Sub Orders"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.order.sub_orders);
  }
}
function OrderDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 13)(2, "div", 14)(3, "div", 15);
    \u0275\u0275element(4, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "h4", 18);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 19);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 20)(13, "a", 21);
    \u0275\u0275element(14, "i", 22);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, OrderDetailsComponent_div_2_a_18_Template, 5, 3, "a", 23)(19, OrderDetailsComponent_div_2_a_19_Template, 5, 3, "a", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, OrderDetailsComponent_div_2_div_20_Template, 11, 7, "div", 25)(21, OrderDetailsComponent_div_2_div_21_Template, 9, 4, "div", 26);
    \u0275\u0275elementStart(22, "div", 27)(23, "div", 28)(24, "div", 29)(25, "div", 30)(26, "div", 31)(27, "h5", 32);
    \u0275\u0275element(28, "i", 33);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 34)(32, "div", 35);
    \u0275\u0275template(33, OrderDetailsComponent_div_2_div_33_Template, 20, 17, "div", 36)(34, OrderDetailsComponent_div_2_div_34_Template, 20, 17, "div", 36)(35, OrderDetailsComponent_div_2_div_35_Template, 9, 3, "div", 36)(36, OrderDetailsComponent_div_2_div_36_Template, 13, 7, "div", 36)(37, OrderDetailsComponent_div_2_div_37_Template, 11, 9, "div", 36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 37)(39, "div", 38)(40, "div", 31)(41, "h5", 32);
    \u0275\u0275element(42, "i", 39);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 34)(46, "div", 40)(47, "div", 41)(48, "span", 42);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 43);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, OrderDetailsComponent_div_2_div_54_Template, 7, 6, "div", 44);
    \u0275\u0275elementStart(55, "div", 41)(56, "span", 42);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 43);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(62, OrderDetailsComponent_div_2_div_62_Template, 7, 6, "div", 45)(63, OrderDetailsComponent_div_2_div_63_Template, 7, 6, "div", 45)(64, OrderDetailsComponent_div_2_div_64_Template, 7, 6, "div", 45);
    \u0275\u0275elementStart(65, "div", 46)(66, "span", 42);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 43);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "currencySymbol");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(72, OrderDetailsComponent_div_2_div_72_Template, 9, 4, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(8, 27, "order_number"), ": #", ctx_r1.order.order_number, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 29, "View your order details and track shipment"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(49, _c22));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 31, "Back to Orders"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canPayNow);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDownloadInvoice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showTracking);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.products == null ? null : ctx_r1.order.products.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 33, "Consumer Details"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.billing_address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.shipping_address) && !(ctx_r1.order == null ? null : ctx_r1.order.is_digital_only));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.delivery_description) && !(ctx_r1.order == null ? null : ctx_r1.order.is_digital_only));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.payment_method);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.payment_status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 35, "Summary"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 37, "Subtotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 39, ctx_r1.order.amount ? ctx_r1.order.amount : 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx_r1.order == null ? null : ctx_r1.order.is_digital_only));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 41, "Tax"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 43, ctx_r1.order.tax_total ? ctx_r1.order.tax_total : 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order.points_amount != 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.wallet_balance != 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.coupon_total_discount != 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 45, "Total"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 47, ctx_r1.order.total ? ctx_r1.order.total : 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order == null ? null : ctx_r1.order.sub_orders == null ? null : ctx_r1.order.sub_orders.length);
  }
}
var OrderDetailsComponent = class _OrderDetailsComponent {
  // Computed properties for better performance
  get canDownloadInvoice() {
    return !!(this.order?.invoice_url && this.order?.payment_status === "COMPLETED" && this.isLogin);
  }
  get canPayNow() {
    return !!(this.order?.payment_status === "FAILED" || this.order?.payment_status === "PENDING") && (this.order?.order_status && this.order?.order_status?.slug != "cancelled") && this.order?.payment_method != "cod";
  }
  get showTracking() {
    return !!(this.order && !this.order?.sub_orders?.length);
  }
  constructor(store, route, cartService) {
    this.store = store;
    this.route = route;
    this.cartService = cartService;
    this.destroy$ = new Subject();
    this.pollingInterval = 15e3;
    this.loading = true;
    this.countries = [];
    this.states = [];
    this.store.dispatch(new GetOrderStatus());
    this.country$.subscribe((country) => this.countries = country.data);
    this.state$.subscribe((state) => this.states = state.data);
  }
  ngOnInit() {
    this.isLogin = !!this.store.selectSnapshot((state) => state.auth && state.auth.access_token);
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        if (this.orderSubscription) {
          this.orderSubscription.unsubscribe();
        }
        const currentOrder = this.store.selectSnapshot(OrderState.selectedOrder);
        if (currentOrder && currentOrder.id === +params["id"]) {
          this.order = currentOrder;
          this.loading = false;
          this.checkPaymentStatusIfNeeded();
          this.clearPaymentDataIfNeeded();
        } else {
          this.store.dispatch(new ViewOrder(params["id"])).subscribe(() => {
            this.orderSubscription = this.store.select(OrderState.selectedOrder).pipe(takeUntil(this.destroy$)).subscribe((order) => {
              if (order) {
                this.order = order;
                this.loading = false;
                this.checkPaymentStatusIfNeeded();
                this.clearPaymentDataIfNeeded();
              }
            });
          });
        }
      }
    });
  }
  getCountryName(id) {
    return this.countries.find((country) => country.id == id)?.name;
  }
  getStateName(id) {
    return this.states.find((state) => state.id == id)?.name;
  }
  checkPaymentStatusIfNeeded() {
    if (this.order && this.order.payment_method === "mangal fashion_nabu" && (this.order.payment_status === "PENDING" || this.order.payment_status === "PROCESSING") && this.order.uuid && this.order.order_status?.slug !== "delivered" && this.order.order_status?.slug !== "cancelled") {
      setTimeout(() => {
        this.checkPaymentStatus();
      }, 3e3);
    }
  }
  clearPaymentDataIfNeeded() {
    const cameFromPayment = sessionStorage.getItem("came_from_checkout_payment");
    const hasPaymentData = sessionStorage.getItem("payment_uuid") || localStorage.getItem("order_id");
    if (cameFromPayment || hasPaymentData) {
      localStorage.removeItem("order_id");
      localStorage.removeItem("payment_uuid");
      localStorage.removeItem("payment_method");
      sessionStorage.removeItem("payment_uuid");
      sessionStorage.removeItem("payment_method");
      sessionStorage.removeItem("payment_action");
      sessionStorage.removeItem("came_from_checkout_payment");
    }
  }
  checkPaymentStatus() {
    if (!this.order || !this.order.uuid)
      return;
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
    let maxAttempts = 20;
    let attemptCount = 0;
    this.pollingSubscription = interval(this.pollingInterval).pipe(switchMap(() => {
      attemptCount++;
      if (this.order?.payment_status === "COMPLETED" || this.order?.payment_status === "paid") {
        return of({ status: true });
      }
      return this.cartService.checkTransectionStatusNeoKred(this.order.uuid, this.order.payment_method);
    }), takeWhile((response) => {
      if (response?.status === true || attemptCount >= maxAttempts || this.order?.order_status?.slug === "delivered" || this.order?.order_status?.slug === "cancelled") {
        if (response?.status === true && this.order?.id) {
          this.store.dispatch(new ViewOrder(this.order.id)).subscribe(() => {
            this.store.select(OrderState.selectedOrder).pipe(takeUntil(this.destroy$)).subscribe((updatedOrder) => {
              if (updatedOrder) {
                this.order = updatedOrder;
              }
            });
          });
        }
        return false;
      }
      if (attemptCount >= maxAttempts) {
        console.warn("Payment status check timeout after maximum attempts");
        return false;
      }
      return this.order?.payment_status === "PENDING";
    }, true)).subscribe({
      error: (err) => {
        console.error("Error checking payment status:", err);
        this.pollingSubscription.unsubscribe();
      }
    });
  }
  download(id) {
    this.store.dispatch(new DownloadInvoice({ order_number: id }));
  }
  ngOnDestroy() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
    if (this.orderSubscription) {
      this.orderSubscription.unsubscribe();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.\u0275fac = function OrderDetailsComponent_Factory(t) {
      return new (t || _OrderDetailsComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CartService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailsComponent, selectors: [["app-order-details"]], viewQuery: function OrderDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
        \u0275\u0275viewQuery(_c14, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.RefundModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.PayModal = _t.first);
      }
    }, decls: 7, vars: 2, consts: [["refundModal", ""], ["payModal", ""], ["noRefund", ""], ["NonRefundable", ""], ["disabled", ""], [1, "order-details-page-container"], ["class", "loading-container", 4, "ngIf"], [4, "ngIf"], [1, "loading-container"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary", "mb-3"], [1, "visually-hidden"], [1, "text-muted"], [1, "order-details-header"], [1, "header-content"], [1, "header-icon-wrapper"], [1, "ri-file-text-line"], [1, "header-text-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn-back-orders", 3, "routerLink"], [1, "ri-arrow-left-line"], ["href", "javascript:void(0)", "class", "btn-pay-now", 3, "click", 4, "ngIf"], ["class", "btn-download-invoice", "download", "download", 3, "click", 4, "ngIf"], ["class", "order-tracking-section mb-4", 4, "ngIf"], ["class", "order-products-section mb-4", 4, "ngIf"], [1, "order-info-section"], [1, "row", "g-4"], [1, "col-xxl-8", "col-lg-12"], [1, "consumer-details-card"], [1, "card-header-modern"], [1, "section-title"], [1, "ri-user-line"], [1, "card-body-modern"], [1, "details-grid"], ["class", "detail-item", 4, "ngIf"], [1, "col-xxl-4", "col-lg-12"], [1, "order-summary-card"], [1, "ri-file-list-line"], [1, "summary-list"], [1, "summary-item"], [1, "summary-label"], [1, "summary-value"], ["class", "summary-item", 4, "ngIf"], ["class", "summary-item discount", 4, "ngIf"], [1, "summary-item", "total"], ["class", "sub-orders-section", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn-pay-now", 3, "click"], [1, "ri-refresh-line"], ["download", "download", 1, "btn-download-invoice", 3, "click"], [1, "ri-download-2-fill"], [1, "order-tracking-section", "mb-4"], [1, "tracking-card"], [1, "tracking-header"], [1, "tracking-title"], [1, "ri-truck-line"], [1, "tracking-steps"], ["class", "tracking-step", 3, "active", "completed", "ngClass", 4, "ngFor", "ngForOf"], ["class", "tracking-step active cancelled-step", 4, "ngIf"], [1, "tracking-step", 3, "ngClass"], [1, "step-icon-wrapper"], ["alt", "order status tracking icon", 1, "step-icon", 3, "src"], [1, "step-label"], [1, "tracking-step", "active", "cancelled-step"], [1, "step-icon-wrapper", "cancelled"], [1, "order-products-section", "mb-4"], [1, "products-card"], [1, "ri-shopping-bag-line"], [1, "products-list"], ["class", "product-item-card", 4, "ngFor", "ngForOf"], [1, "product-item-card"], [1, "product-image-wrapper"], ["alt", "product", 1, "product-img", 3, "src"], [1, "product-details"], [1, "product-name"], [1, "product-info-grid"], [1, "product-info-item"], [1, "info-label"], [1, "info-value"], [1, "info-value", "amount"], [1, "product-refund-section"], ["class", "btn-refund", "href", "javascript:void(0)", 3, "click", 4, "ngIf", "ngIfElse"], ["href", "javascript:void(0)", 1, "btn-refund", 3, "click"], [1, "ri-refund-line"], [4, "ngIf", "ngIfElse"], [1, "refund-status-badge", "non-refundable"], [3, "class", 4, "ngIf", "ngIfElse"], ["placement", "top", "ngbTooltip", "Enable after delivery", 1, "black-tooltip"], ["class", "btn-refund disabled", 4, "ngIf"], [1, "btn-refund", "disabled"], [1, "detail-item"], [1, "detail-icon-wrapper"], [1, "detail-content"], [1, "detail-label"], [1, "detail-value"], [1, "phone-text"], [1, "ri-calendar-line"], [1, "ri-bank-card-line"], [1, "ri-checkbox-circle-line"], [1, "summary-item", "discount"], [1, "sub-orders-section"], [1, "sub-orders-card"], [1, "ri-file-list-3-line"], [1, "sub-orders-list"], ["class", "sub-order-card", 4, "ngFor", "ngForOf"], [1, "sub-order-card"], [1, "sub-order-content"], [1, "sub-order-info"], [1, "info-row"], ["href", "javascript:void(0)", 1, "btn-view-sub-order", 3, "routerLink"], [1, "ri-eye-line"]], template: function OrderDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 5);
        \u0275\u0275template(1, OrderDetailsComponent_div_1_Template, 9, 0, "div", 6)(2, OrderDetailsComponent_div_2_Template, 73, 50, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "app-refund-modal", null, 0)(5, "app-pay-modal", null, 1);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.order);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, RouterLink, NgbTooltip, RefundModalComponent, PayModalComponent, AsyncPipe, TitleCasePipe, DatePipe, TitleCasePipe2, CurrencySymbolPipe, TranslatePipe], styles: ['\n\n.order-details-page-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px 0;\n}\n.loading-container[_ngcontent-%COMP%] {\n  min-height: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  color: #6D645F;\n  width: 24px;\n  height: 24px;\n  border-width: 2px;\n}\n.order-details-header[_ngcontent-%COMP%] {\n  background: #2F2F2F;\n  padding: 20px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  border-radius: 6px;\n}\n.order-details-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.order-details-header[_ngcontent-%COMP%]   .header-icon-wrapper[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.order-details-header[_ngcontent-%COMP%]   .header-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n}\n.order-details-header[_ngcontent-%COMP%]   .header-text-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  margin: 0 0 2px;\n  letter-spacing: -0.2px;\n}\n.order-details-header[_ngcontent-%COMP%]   .header-text-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.65);\n  margin: 0;\n}\n.order-details-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n@media (max-width: 576px) {\n  .order-details-header[_ngcontent-%COMP%] {\n    padding: 16px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .order-details-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n  .order-details-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.btn-download-invoice[_ngcontent-%COMP%], .btn-pay-now[_ngcontent-%COMP%], .btn-back-orders[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1.5px solid transparent;\n  border-radius: 4px;\n}\n.btn-download-invoice[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .btn-pay-now[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .btn-back-orders[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-back-orders[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.3);\n  color: rgba(255, 255, 255, 0.8);\n  background: transparent;\n}\n.btn-back-orders[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n  color: #fff;\n}\n.btn-pay-now[_ngcontent-%COMP%] {\n  background: #6B8E23;\n  border-color: #6B8E23;\n  color: #fff;\n}\n.btn-pay-now[_ngcontent-%COMP%]:hover {\n  background: #526d1b;\n  border-color: #526d1b;\n}\n.btn-download-invoice[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.3);\n  color: rgba(255, 255, 255, 0.8);\n  background: transparent;\n}\n.btn-download-invoice[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n  color: #fff;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8e4df;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-header[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-bottom: 1px solid #e8e4df;\n  background: #FAF9F6;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-header[_ngcontent-%COMP%]   .tracking-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #2F2F2F;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-header[_ngcontent-%COMP%]   .tracking-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6B8E23;\n  font-size: 16px;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px 20px;\n  position: relative;\n  gap: 8px;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-steps[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 44px;\n  left: 40px;\n  right: 40px;\n  height: 1.5px;\n  background: #e8e4df;\n  z-index: 0;\n}\n@media (max-width: 575px) {\n  .order-tracking-section[_ngcontent-%COMP%]   .tracking-steps[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 14px;\n  }\n  .order-tracking-section[_ngcontent-%COMP%]   .tracking-steps[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  position: relative;\n  z-index: 1;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step[_ngcontent-%COMP%]   .step-icon-wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1.5px solid #e8e4df;\n  background: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step[_ngcontent-%COMP%]   .step-icon-wrapper[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  opacity: 0.25;\n  filter: grayscale(1);\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step[_ngcontent-%COMP%]   .step-icon-wrapper.cancelled[_ngcontent-%COMP%] {\n  background: #c0392b;\n  border-color: #c0392b;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step[_ngcontent-%COMP%]   .step-icon-wrapper.cancelled[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: brightness(0) invert(1);\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  color: #ccc;\n  text-align: center;\n  line-height: 1.3;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step.active[_ngcontent-%COMP%]   .step-icon-wrapper[_ngcontent-%COMP%] {\n  background: #6B8E23;\n  border-color: #6B8E23;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step.active[_ngcontent-%COMP%]   .step-icon-wrapper[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: brightness(0) invert(1);\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #2F2F2F;\n  font-weight: 700;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step.completed[_ngcontent-%COMP%]   .step-icon-wrapper[_ngcontent-%COMP%] {\n  background: #6B8E23;\n  border-color: #6B8E23;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step.completed[_ngcontent-%COMP%]   .step-icon-wrapper[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: brightness(0) invert(1);\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step.completed[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #6D645F;\n}\n.order-tracking-section[_ngcontent-%COMP%]   .tracking-step.cancelled-step[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #c0392b;\n}\n@media (max-width: 575px) {\n  .order-tracking-section[_ngcontent-%COMP%]   .tracking-step[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex: unset;\n    width: 100%;\n    align-items: center;\n    gap: 12px;\n  }\n  .order-tracking-section[_ngcontent-%COMP%]   .tracking-step[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n.order-products-section[_ngcontent-%COMP%]   .products-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8e4df;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.card-header-modern[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-bottom: 1px solid #e8e4df;\n  background: #FAF9F6;\n}\n.card-header-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #2F2F2F;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.card-header-modern[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6B8E23;\n  font-size: 16px;\n}\n.products-list[_ngcontent-%COMP%]   .product-item-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e8e4df;\n}\n.products-list[_ngcontent-%COMP%]   .product-item-card[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n@media (max-width: 640px) {\n  .products-list[_ngcontent-%COMP%]   .product-item-card[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n}\n.products-list[_ngcontent-%COMP%]   .product-image-wrapper[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  flex-shrink: 0;\n  border: 1px solid #e8e4df;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.products-list[_ngcontent-%COMP%]   .product-image-wrapper[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.products-list[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.products-list[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #2F2F2F;\n  margin: 0 0 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.products-list[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-info-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.products-list[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.products-list[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #bbb;\n}\n.products-list[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #2F2F2F;\n}\n.products-list[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-info-item[_ngcontent-%COMP%]   .info-value.amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.products-list[_ngcontent-%COMP%]   .product-refund-section[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: auto;\n}\n@media (max-width: 640px) {\n  .products-list[_ngcontent-%COMP%]   .product-refund-section[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n.btn-refund[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: 1.5px solid #2F2F2F;\n  color: #2F2F2F;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: transparent;\n  border-radius: 4px;\n}\n.btn-refund[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.btn-refund[_ngcontent-%COMP%]:hover {\n  background: #2F2F2F;\n  color: #fff;\n}\n.btn-refund.disabled[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n@media (max-width: 640px) {\n  .btn-refund[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.refund-status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: 1.5px solid #e8e4df;\n  color: #6D645F;\n  border-radius: 4px;\n}\n.refund-status-badge.non-refundable[_ngcontent-%COMP%] {\n  color: #999;\n  border-color: #ddd;\n}\n.refund-status-badge.status-pending[_ngcontent-%COMP%] {\n  border-color: #e0a800;\n  color: #b8860b;\n}\n.refund-status-badge.status-approved[_ngcontent-%COMP%] {\n  border-color: #6B8E23;\n  color: #6B8E23;\n}\n.refund-status-badge.status-rejected[_ngcontent-%COMP%] {\n  border-color: #c0392b;\n  color: #c0392b;\n}\n.order-info-section[_ngcontent-%COMP%]   .consumer-details-card[_ngcontent-%COMP%], .order-info-section[_ngcontent-%COMP%]   .order-summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8e4df;\n  border-radius: 6px;\n  overflow: hidden;\n  height: 100%;\n}\n.order-info-section[_ngcontent-%COMP%]   .card-body-modern[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.order-info-section[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.order-info-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 14px 0;\n  border-bottom: 1px solid #e8e4df;\n}\n.order-info-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n.order-info-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.order-info-section[_ngcontent-%COMP%]   .detail-icon-wrapper[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: #FAF9F6;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.order-info-section[_ngcontent-%COMP%]   .detail-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B8E23;\n}\n.order-info-section[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.order-info-section[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #bbb;\n  margin-bottom: 4px;\n}\n.order-info-section[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2F2F2F;\n  font-weight: 500;\n  line-height: 1.7;\n  margin: 0;\n}\n.order-info-section[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%]   .phone-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6D645F;\n}\n.order-info-section[_ngcontent-%COMP%]   .summary-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.order-info-section[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #e8e4df;\n}\n.order-info-section[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6D645F;\n}\n.order-info-section[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #2F2F2F;\n}\n.order-info-section[_ngcontent-%COMP%]   .summary-item.discount[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%], .order-info-section[_ngcontent-%COMP%]   .summary-item.discount[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  color: #6B8E23;\n}\n.order-info-section[_ngcontent-%COMP%]   .summary-item.total[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding-top: 14px;\n}\n.order-info-section[_ngcontent-%COMP%]   .summary-item.total[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #2F2F2F;\n}\n.order-info-section[_ngcontent-%COMP%]   .summary-item.total[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #2F2F2F;\n}\n.order-info-section[_ngcontent-%COMP%]   .payment-status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: 1.5px solid #e8e4df;\n  color: #6D645F;\n  border-radius: 4px;\n}\n.order-info-section[_ngcontent-%COMP%]   .payment-status-badge.status-completed[_ngcontent-%COMP%], .order-info-section[_ngcontent-%COMP%]   .payment-status-badge.status-paid[_ngcontent-%COMP%] {\n  border-color: #6B8E23;\n  color: #6B8E23;\n}\n.order-info-section[_ngcontent-%COMP%]   .payment-status-badge.status-pending[_ngcontent-%COMP%] {\n  border-color: #e0a800;\n  color: #b8860b;\n}\n.order-info-section[_ngcontent-%COMP%]   .payment-status-badge.status-failed[_ngcontent-%COMP%] {\n  border-color: #c0392b;\n  color: #c0392b;\n}\n.sub-orders-section[_ngcontent-%COMP%]   .sub-orders-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8e4df;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.sub-orders-section[_ngcontent-%COMP%]   .sub-orders-list[_ngcontent-%COMP%]   .sub-order-card[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e8e4df;\n}\n.sub-orders-section[_ngcontent-%COMP%]   .sub-orders-list[_ngcontent-%COMP%]   .sub-order-card[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sub-orders-section[_ngcontent-%COMP%]   .sub-orders-list[_ngcontent-%COMP%]   .sub-order-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  flex-wrap: wrap;\n}\n.sub-orders-section[_ngcontent-%COMP%]   .sub-orders-list[_ngcontent-%COMP%]   .sub-order-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n@media (max-width: 640px) {\n  .sub-orders-section[_ngcontent-%COMP%]   .sub-orders-list[_ngcontent-%COMP%]   .sub-order-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.sub-orders-section[_ngcontent-%COMP%]   .sub-orders-list[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.sub-orders-section[_ngcontent-%COMP%]   .sub-orders-list[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #bbb;\n}\n.sub-orders-section[_ngcontent-%COMP%]   .sub-orders-list[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2F2F2F;\n  font-weight: 500;\n}\n.sub-orders-section[_ngcontent-%COMP%]   .sub-orders-list[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-value.amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  border: 1.5px solid #e8e4df;\n  color: #6D645F;\n  border-radius: 4px;\n  width: fit-content;\n}\n.status-badge.status-delivered[_ngcontent-%COMP%] {\n  border-color: #6B8E23;\n  color: #6B8E23;\n}\n.status-badge.status-cancelled[_ngcontent-%COMP%] {\n  border-color: #c0392b;\n  color: #c0392b;\n}\n.status-badge.status-pending[_ngcontent-%COMP%] {\n  border-color: #e0a800;\n  color: #b8860b;\n}\n.status-badge.status-processing[_ngcontent-%COMP%] {\n  border-color: #6D645F;\n  color: #6D645F;\n}\n.status-badge.status-shipped[_ngcontent-%COMP%] {\n  border-color: #2F2F2F;\n  color: #2F2F2F;\n}\n.btn-view-sub-order[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid #2F2F2F;\n  color: #2F2F2F;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-decoration: none;\n  transition: all 0.2s;\n  flex-shrink: 0;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n.btn-view-sub-order[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-view-sub-order[_ngcontent-%COMP%]:hover {\n  background: #2F2F2F;\n  color: #fff;\n}\n@media (max-width: 640px) {\n  .btn-view-sub-order[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.black-tooltip[_ngcontent-%COMP%]   .tooltip-inner[_ngcontent-%COMP%] {\n  background: #2F2F2F;\n  color: #fff;\n  font-size: 11px;\n}\n/*# sourceMappingURL=details.component.css.map */'] });
  }
};
__decorate([
  Select(OrderStatusState.orderStatus)
], OrderDetailsComponent.prototype, "orderStatus$", void 0);
__decorate([
  Select(CountryState.country)
], OrderDetailsComponent.prototype, "country$", void 0);
__decorate([
  Select(StateState.state)
], OrderDetailsComponent.prototype, "state$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailsComponent, { className: "OrderDetailsComponent", filePath: "src\\app\\components\\account\\orders\\details\\details.component.ts", lineNumber: 25 });
})();

// src/app/components/account/refund/refund.component.ts
function RefundComponent_div_5_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titleCase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refund_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", refund_r1 == null ? null : refund_r1.order == null ? null : refund_r1.order.order_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("status-", refund_r1 == null ? null : refund_r1.status, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, refund_r1 == null ? null : refund_r1.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(refund_r1 == null ? null : refund_r1.reason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, refund_r1 == null ? null : refund_r1.created_at, "dd MMM yyyy"));
  }
}
function RefundComponent_div_5_nav_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 10)(1, "app-pagination", 11);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("setPage", function RefundComponent_div_5_nav_19_Template_app_pagination_setPage_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.refund$)) == null ? null : tmp_2_0.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function RefundComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "table")(3, "tbody")(4, "tr")(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 6);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, RefundComponent_div_5_tr_17_Template, 14, 12, "tr", 7);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, RefundComponent_div_5_nav_19_Template, 3, 5, "nav", 8);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "Order"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "Status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "Reason"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 12, "Created At"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_5_0 = \u0275\u0275pipeBind1(18, 14, ctx_r2.refund$)) == null ? null : tmp_5_0.data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_6_0 = \u0275\u0275pipeBind1(20, 16, ctx_r2.refund$)) == null ? null : tmp_6_0.data == null ? null : tmp_6_0.data.length);
  }
}
function RefundComponent_app_no_data_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 12);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "No Refunds Found")("description", "You Have No Refunds yet");
  }
}
var RefundComponent = class _RefundComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetRefund(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetRefund(this.filter));
  }
  static {
    this.\u0275fac = function RefundComponent_Factory(t) {
      return new (t || _RefundComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RefundComponent, selectors: [["app-refund"]], decls: 9, vars: 9, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], ["class", "total-box mt-0", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "total-box", "mt-0"], [1, "wallet-table", "mt-0", "refund-table"], [1, "reason-table"], [4, "ngFor", "ngForOf"], ["class", "custome-pagination", 4, "ngIf"], [1, "fw-bolder"], [1, "custome-pagination"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function RefundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(5, RefundComponent_div_5_Template, 21, 18, "div", 2);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, RefundComponent_app_no_data_7_Template, 1, 5, "app-no-data", 3);
        \u0275\u0275pipe(8, "async");
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "Refund"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(6, 5, ctx.refund$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(8, 7, ctx.refund$)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.length));
      }
    }, dependencies: [NgForOf, NgIf, PaginationComponent, NoDataComponent, AsyncPipe, DatePipe, TitleCasePipe2, TranslatePipe] });
  }
};
__decorate([
  Select(RefundState.refund)
], RefundComponent.prototype, "refund$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RefundComponent, { className: "RefundComponent", filePath: "src\\app\\components\\account\\refund\\refund.component.ts", lineNumber: 14 });
})();

// src/app/components/account/addresses/addresses.component.ts
var _c06 = ["addressModal"];
var _c15 = ["deleteModal"];
var _c23 = () => ["/account/dashboard"];
function AddressesComponent_div_23_div_2_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const address_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Floor No.: ", address_r3 == null ? null : address_r3.floor_no, "");
  }
}
function AddressesComponent_div_23_div_2_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const address_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Flat No.: ", address_r3 == null ? null : address_r3.flat_no, "");
  }
}
function AddressesComponent_div_23_div_2_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const address_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Building: ", address_r3 == null ? null : address_r3.building, "");
  }
}
function AddressesComponent_div_23_div_2_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const address_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Road: ", address_r3 == null ? null : address_r3.road, "");
  }
}
function AddressesComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24);
    \u0275\u0275element(4, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 26);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h6", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 28)(12, "div", 29);
    \u0275\u0275element(13, "i", 30);
    \u0275\u0275elementStart(14, "div")(15, "span", 31);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 32);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275pipe(21, "titleCase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 29);
    \u0275\u0275element(23, "i", 6);
    \u0275\u0275elementStart(24, "div")(25, "span", 31);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 33);
    \u0275\u0275template(29, AddressesComponent_div_23_div_2_div_29_Template, 2, 1, "div", 34)(30, AddressesComponent_div_23_div_2_div_30_Template, 2, 1, "div", 34)(31, AddressesComponent_div_23_div_2_div_31_Template, 2, 1, "div", 34)(32, AddressesComponent_div_23_div_2_div_32_Template, 2, 1, "div", 34);
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 35)(36, "div", 29);
    \u0275\u0275element(37, "i", 36);
    \u0275\u0275elementStart(38, "div")(39, "span", 31);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 32);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 29);
    \u0275\u0275element(45, "i", 37);
    \u0275\u0275elementStart(46, "div")(47, "span", 31);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 32);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(52, "div", 38)(53, "button", 39);
    \u0275\u0275listener("click", function AddressesComponent_div_23_div_2_Template_button_click_53_listener() {
      const address_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.AddressModal.openModal(address_r3));
    });
    \u0275\u0275element(54, "i", 40);
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "button", 41);
    \u0275\u0275listener("click", function AddressesComponent_div_23_div_2_Template_button_click_58_listener() {
      const address_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.DeleteModal.openModal("delete", address_r3));
    });
    \u0275\u0275element(59, "i", 42);
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const address_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 20, "Address Type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(address_r3 == null ? null : address_r3.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 22, "Name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 26, (tmp_9_0 = \u0275\u0275pipeBind1(20, 24, ctx_r3.user$)) == null ? null : tmp_9_0.name));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 28, "Address"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", address_r3 == null ? null : address_r3.floor_no);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", address_r3 == null ? null : address_r3.flat_no);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", address_r3 == null ? null : address_r3.building);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", address_r3 == null ? null : address_r3.road);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", address_r3 == null ? null : address_r3.street, ", ", address_r3 == null ? null : address_r3.city, ", ", address_r3 == null ? null : address_r3.area, ", ", address_r3 == null ? null : address_r3.country_id, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 30, "Pin Code"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(address_r3 == null ? null : address_r3.pincode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 32, "Phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("+", address_r3 == null ? null : address_r3.country_code, " ", address_r3 == null ? null : address_r3.phone, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 34, "Edit"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 36, "Remove"));
  }
}
function AddressesComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275template(2, AddressesComponent_div_23_div_2_Template, 63, 38, "div", 20);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_3_0 = \u0275\u0275pipeBind1(3, 1, ctx_r3.user$)) == null ? null : tmp_3_0.address);
  }
}
function AddressesComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275element(2, "i", 6);
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "You Have Not Address yet"));
  }
}
var AddressesComponent = class _AddressesComponent {
  constructor(store) {
    this.store = store;
  }
  delete(action, data) {
    if (action == "delete" && data)
      this.store.dispatch(new DeleteAddress(data.id));
  }
  static {
    this.\u0275fac = function AddressesComponent_Factory(t) {
      return new (t || _AddressesComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddressesComponent, selectors: [["app-addresses"]], viewQuery: function AddressesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
        \u0275\u0275viewQuery(_c15, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.AddressModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.DeleteModal = _t.first);
      }
    }, decls: 31, vars: 20, consts: [["addressModal", ""], ["deleteModal", ""], [1, "addresses-page-container"], [1, "addresses-page-header"], [1, "header-content"], [1, "header-icon-wrapper"], [1, "ri-map-pin-line"], [1, "header-text-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn-back-dashboard", 3, "routerLink"], [1, "ri-arrow-left-line"], ["type", "button", 1, "btn-add-address", 3, "click"], [1, "ri-add-line"], ["class", "addresses-list-container", 4, "ngIf"], ["class", "addresses-empty-state", 4, "ngIf"], [3, "deleteItem"], [1, "addresses-list-container"], [1, "addresses-grid"], ["class", "address-card", 4, "ngFor", "ngForOf"], [1, "address-card"], [1, "address-card-header"], [1, "address-title-section"], [1, "address-icon-wrapper"], [1, "ri-home-line"], [1, "address-label"], [1, "address-title"], [1, "address-card-body"], [1, "address-info-item"], [1, "ri-user-line"], [1, "info-label"], [1, "info-value"], [1, "info-value", "address-structured"], [4, "ngIf"], [1, "address-info-row"], [1, "ri-mail-line"], [1, "ri-phone-line"], [1, "address-card-footer"], ["type", "button", 1, "btn-edit-address", 3, "click"], [1, "ri-edit-line"], ["type", "button", 1, "btn-delete-address", 3, "click"], [1, "ri-delete-bin-line"], [1, "addresses-empty-state"], [1, "empty-state-content"]], template: function AddressesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
        \u0275\u0275element(4, "i", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 7)(6, "h4", 8);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 9);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 10)(13, "a", 11);
        \u0275\u0275element(14, "i", 12);
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 13);
        \u0275\u0275listener("click", function AddressesComponent_Template_button_click_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.AddressModal.openModal());
        });
        \u0275\u0275element(19, "i", 14);
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(23, AddressesComponent_div_23_Template, 4, 3, "div", 15);
        \u0275\u0275pipe(24, "async");
        \u0275\u0275template(25, AddressesComponent_div_25_Template, 6, 3, "div", 16);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "address-modal", null, 0);
        \u0275\u0275elementStart(29, "app-delete-modal", 17, 1);
        \u0275\u0275listener("deleteItem", function AddressesComponent_Template_app_delete_modal_deleteItem_29_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.delete($event.actionToPerform, $event.data));
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_7_0;
        let tmp_8_0;
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "Saved Address"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "Manage your delivery addresses"));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c23));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, "Back to Dashboard"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 13, "Add Address"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_7_0 = \u0275\u0275pipeBind1(24, 15, ctx.user$)) == null ? null : tmp_7_0.address == null ? null : tmp_7_0.address.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_8_0 = \u0275\u0275pipeBind1(26, 17, ctx.user$)) == null ? null : tmp_8_0.address == null ? null : tmp_8_0.address.length));
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, DeleteModalComponent, AddressModalComponent, AsyncPipe, TitleCasePipe2, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family: inherit;\n}\n.addresses-page-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.addresses-page-header[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 28px 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 10px rgba(15, 23, 32, 0.15), 0 20px 48px rgba(15, 23, 32, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.addresses-page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -30px;\n  right: -20px;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(30, 127, 201, 0.25) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.addresses-page-header[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -20px;\n  left: -10px;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(179, 138, 72, 0.12) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.addresses-page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  position: relative;\n  z-index: 1;\n}\n.addresses-page-header[_ngcontent-%COMP%]   .header-icon-wrapper[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.addresses-page-header[_ngcontent-%COMP%]   .header-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  color: #B38A48 !important;\n}\n.addresses-page-header[_ngcontent-%COMP%]   .header-text-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  font-weight: 800 !important;\n  color: #fff !important;\n  letter-spacing: -0.3px;\n  margin: 0 0 4px !important;\n}\n.addresses-page-header[_ngcontent-%COMP%]   .header-text-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  color: rgba(255, 255, 255, 0.6) !important;\n  margin: 0 !important;\n}\n.addresses-page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.addresses-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 999px;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 11.5px;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.addresses-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  transition: transform 0.3s ease;\n}\n.addresses-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n  border-color: rgba(255, 255, 255, 0.28);\n  color: #fff;\n}\n.addresses-page-header[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(-3px);\n}\n.addresses-page-header[_ngcontent-%COMP%]   .btn-add-address[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #1E7FC9 0%,\n      #135a95 100%);\n  border: none;\n  border-radius: 999px;\n  color: #fff;\n  font-size: 11.5px;\n  font-weight: 800;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);\n  box-shadow: 0 6px 18px rgba(30, 127, 201, 0.45);\n  position: relative;\n  overflow: hidden;\n}\n.addresses-page-header[_ngcontent-%COMP%]   .btn-add-address[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #B38A48 0%,\n      #876836 100%);\n  transform: translateX(-101%);\n  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.addresses-page-header[_ngcontent-%COMP%]   .btn-add-address[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.addresses-page-header[_ngcontent-%COMP%]   .btn-add-address[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.addresses-page-header[_ngcontent-%COMP%]   .btn-add-address[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(179, 138, 72, 0.45);\n}\n.addresses-page-header[_ngcontent-%COMP%]   .btn-add-address[_ngcontent-%COMP%]:hover::before {\n  transform: translateX(0);\n}\n.addresses-page-header[_ngcontent-%COMP%]   .btn-add-address[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(90deg) scale(1.1);\n}\n@media (max-width: 768px) {\n  .addresses-page-header[_ngcontent-%COMP%] {\n    padding: 22px 20px;\n    border-radius: 16px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .addresses-page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .addresses-page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn-back-dashboard[_ngcontent-%COMP%], .addresses-page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn-add-address[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n}\n.addresses-list-container[_ngcontent-%COMP%]   .addresses-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 18px;\n}\n@media (max-width: 575px) {\n  .addresses-list-container[_ngcontent-%COMP%]   .addresses-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.address-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E6E8EC;\n  border-radius: 20px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 12px 30px rgba(15, 23, 32, 0.07);\n  transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n  position: relative;\n}\n.address-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 18px;\n  left: 0;\n  bottom: 18px;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      #1E7FC9 0%,\n      #B38A48 100%);\n  border-radius: 0 3px 3px 0;\n  opacity: 0;\n  transform: scaleY(0.4);\n  transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.address-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: rgba(30, 127, 201, 0.28);\n  box-shadow: 0 6px 14px rgba(15, 23, 32, 0.05), 0 24px 56px rgba(30, 127, 201, 0.16);\n}\n.address-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.address-card[_ngcontent-%COMP%]:hover   .address-icon-wrapper[_ngcontent-%COMP%] {\n  background: #1E7FC9;\n  border-color: #135a95;\n  transform: scale(1.08) rotate(-8deg);\n  box-shadow: 0 8px 20px rgba(30, 127, 201, 0.4);\n}\n.address-card[_ngcontent-%COMP%]:hover   .address-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.address-card-header[_ngcontent-%COMP%] {\n  padding: 18px 22px 16px;\n  background:\n    linear-gradient(\n      90deg,\n      #F8F9FB 0%,\n      #FFFFFF 100%);\n  border-bottom: 1px solid #E6E8EC;\n}\n.address-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.address-icon-wrapper[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 14px;\n  background: #EAF3FB;\n  border: 1px solid rgba(30, 127, 201, 0.2);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);\n  flex-shrink: 0;\n}\n.address-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  color: #1E7FC9 !important;\n}\n.address-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2px !important;\n  text-transform: uppercase;\n  color: #6B7280;\n  margin-bottom: 3px;\n}\n.address-title[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  font-weight: 800 !important;\n  color: #0F1720 !important;\n  margin: 0 !important;\n  letter-spacing: -0.2px;\n}\n.address-card-body[_ngcontent-%COMP%] {\n  padding: 18px 22px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.address-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.address-info-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  min-width: 30px;\n  border-radius: 9px;\n  background: #F8F9FB;\n  border: 1px solid #E6E8EC;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px !important;\n  color: #6B7280 !important;\n  margin-top: 2px;\n  flex-shrink: 0;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.address-card[_ngcontent-%COMP%]:hover   .address-info-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  background: #EAF3FB;\n  border-color: rgba(30, 127, 201, 0.2);\n  color: #1E7FC9 !important;\n}\n.address-info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2px !important;\n  text-transform: uppercase;\n  color: #6B7280;\n  margin-bottom: 4px;\n}\n.address-info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13.5px !important;\n  font-weight: 600;\n  color: #0F1720 !important;\n  line-height: 1.6;\n}\n.address-info-item[_ngcontent-%COMP%]   .address-structured[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2B3240;\n  line-height: 1.6;\n}\n.address-info-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  padding-top: 14px;\n  border-top: 1px solid #E6E8EC;\n}\n.address-info-row[_ngcontent-%COMP%]   .address-info-item[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n@media (max-width: 450px) {\n  .address-info-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.address-card-footer[_ngcontent-%COMP%] {\n  padding: 14px 22px;\n  border-top: 1px solid #E6E8EC;\n  background: #F8F9FB;\n  display: flex;\n  gap: 10px;\n}\n.btn-edit-address[_ngcontent-%COMP%], .btn-delete-address[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 10px 16px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n  border: none;\n}\n.btn-edit-address[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .btn-delete-address[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.btn-edit-address[_ngcontent-%COMP%] {\n  background: #EAF3FB;\n  color: #1E7FC9;\n  border: 1px solid rgba(30, 127, 201, 0.25);\n}\n.btn-edit-address[_ngcontent-%COMP%]:hover {\n  background: #1E7FC9;\n  color: #fff;\n  border-color: #135a95;\n  transform: translateY(-1px);\n  box-shadow: 0 8px 20px rgba(30, 127, 201, 0.32);\n}\n.btn-edit-address[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(-8deg) scale(1.1);\n}\n.btn-delete-address[_ngcontent-%COMP%] {\n  background: #F8F9FB;\n  color: #6B7280;\n  border: 1px solid #E6E8EC;\n}\n.btn-delete-address[_ngcontent-%COMP%]:hover {\n  background: #FDECEE;\n  color: #E7475A;\n  border-color: rgba(231, 71, 90, 0.3);\n  transform: translateY(-1px);\n  box-shadow: 0 8px 20px rgba(231, 71, 90, 0.2);\n}\n.btn-delete-address[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.addresses-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 320px;\n  padding: 60px 32px;\n  background: #FFFFFF;\n  border: 1px solid #E6E8EC;\n  border-radius: 20px;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 12px 30px rgba(15, 23, 32, 0.07);\n}\n.addresses-empty-state[_ngcontent-%COMP%]   .empty-state-content[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.addresses-empty-state[_ngcontent-%COMP%]   .empty-state-content[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 24px;\n  background: #F8F9FB;\n  border: 1px solid #E6E8EC;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 36px !important;\n  color: #D1D5DB !important;\n  box-shadow: 0 4px 14px rgba(15, 23, 32, 0.06);\n}\n.addresses-empty-state[_ngcontent-%COMP%]   .empty-state-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  color: #6B7280 !important;\n  margin: 0 !important;\n  letter-spacing: 0.2px;\n}\n/*# sourceMappingURL=addresses.component.css.map */'] });
  }
};
__decorate([
  Select(AccountState.user)
], AddressesComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddressesComponent, { className: "AddressesComponent", filePath: "src\\app\\components\\account\\addresses\\addresses.component.ts", lineNumber: 16 });
})();

// src/app/components/account/downloads/downloads.component.ts
function DownloadsComponent_div_12_tr_15_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function DownloadsComponent_div_12_tr_15_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const data_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadFiles(data_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "all_files"), " & ", \u0275\u0275pipeBind1(3, 4, "documentation"), "");
  }
}
function DownloadsComponent_div_12_tr_15_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function DownloadsComponent_div_12_tr_15_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const data_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadLicense(data_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "license_certificate"), " & ", \u0275\u0275pipeBind1(3, 4, "purchase_code"), "");
  }
}
function DownloadsComponent_div_12_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 14)(7, "button", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16);
    \u0275\u0275template(11, DownloadsComponent_div_12_tr_15_button_11_Template, 4, 6, "button", 17)(12, DownloadsComponent_div_12_tr_15_button_12_Template, 4, 6, "button", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", data_r2.item_image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.item_name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "Download"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", data_r2.can_download_file);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r2.can_download_license);
  }
}
function DownloadsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "table", 10)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 11);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, DownloadsComponent_div_12_tr_15_Template, 13, 7, "tr", 12);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "Image"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, "Name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "Action"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (tmp_4_0 = \u0275\u0275pipeBind1(16, 10, ctx_r2.download$)) == null ? null : tmp_4_0.data);
  }
}
function DownloadsComponent_app_no_data_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 19);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "No item found")("description", "No Orders have yet");
  }
}
var DownloadsComponent = class _DownloadsComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      "paginate": 10
      // Display per page,
    };
    this.term = new FormControl("");
    this.store.dispatch(new Downloads(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new Downloads(this.filter));
  }
  search() {
    this.filter["search"] = this.term.value;
    ;
    this.store.dispatch(new Downloads(this.filter));
  }
  downloadFiles(id) {
    this.store.dispatch(new DownloadFiles(id));
  }
  downloadLicense(id) {
    this.store.dispatch(new DownloadLicense(id));
  }
  static {
    this.\u0275fac = function DownloadsComponent_Factory(t) {
      return new (t || _DownloadsComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DownloadsComponent, selectors: [["app-downloads"]], decls: 16, vars: 13, consts: [[1, "title-header"], [1, "d-flex", "align-items-center"], [1, "download-detail", "dashboard-bg-box"], [1, "input-group", "download-form"], ["type", "text", 1, "form-control", 3, "placeholder", "formControl"], ["type", "button", 1, "btn", "theme-bg-color", "text-light", 3, "click"], ["class", "download-table", 4, "ngIf"], [3, "class", "image", "text", "description", 4, "ngIf"], [1, "download-table"], [1, "table-responsive"], [1, "table"], [1, "table-name"], [4, "ngFor", "ngForOf"], ["alt", "downloadable item image", 1, "img-fluid", 3, "src"], ["ngbDropdown", "", "container", "body", "placement", "bottom-end", 1, "d-inline-block"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "download-dropdown-menu"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [3, "image", "text", "description"]], template: function DownloadsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "div", 2)(6, "form")(7, "div", 3);
        \u0275\u0275element(8, "input", 4);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementStart(10, "button", 5);
        \u0275\u0275listener("click", function DownloadsComponent_Template_button_click_10_listener() {
          return ctx.search();
        });
        \u0275\u0275text(11, "Search");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, DownloadsComponent_div_12_Template, 17, 12, "div", 6);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, DownloadsComponent_app_no_data_14_Template, 1, 5, "app-no-data", 7);
        \u0275\u0275pipe(15, "async");
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "Downloads"));
        \u0275\u0275advance(5);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(9, 7, "Search your Download"));
        \u0275\u0275property("formControl", ctx.term);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(13, 9, ctx.download$)) == null ? null : tmp_3_0.data == null ? null : tmp_3_0.data.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !((tmp_4_0 = \u0275\u0275pipeBind1(15, 11, ctx.download$)) == null ? null : tmp_4_0.data == null ? null : tmp_4_0.data.length));
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, NgForm, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem, NoDataComponent, AsyncPipe, TranslatePipe] });
  }
};
__decorate([
  Select(DownloadState.download)
], DownloadsComponent.prototype, "download$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DownloadsComponent, { className: "DownloadsComponent", filePath: "src\\app\\components\\account\\downloads\\downloads.component.ts", lineNumber: 15 });
})();

// src/app/components/account/account-routing.module.ts
var routes = [
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "wallet",
        component: WalletComponent
      },
      {
        path: "notifications",
        component: NotificationComponent
      },
      {
        path: "bank-details",
        component: BankDetailsComponent
      },
      {
        path: "point",
        component: PointComponent
      },
      {
        path: "order",
        component: OrdersComponent
      },
      {
        path: "order/details/:id",
        component: OrderDetailsComponent
      },
      {
        path: "refund",
        component: RefundComponent
      },
      {
        path: "addresses",
        component: AddressesComponent
      },
      {
        path: "downloads",
        component: DownloadsComponent
      }
    ]
  }
];
var AccountRoutingModule = class _AccountRoutingModule {
  static {
    this.\u0275fac = function AccountRoutingModule_Factory(t) {
      return new (t || _AccountRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/components/account/account.module.ts
var AccountModule = class _AccountModule {
  static {
    this.\u0275fac = function AccountModule_Factory(t) {
      return new (t || _AccountModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AccountModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      AccountRoutingModule,
      SharedModule,
      TranslateModule
    ] });
  }
};
export {
  AccountModule
};
//# sourceMappingURL=chunk-QX75L3VF.js.map
