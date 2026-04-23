import {
  RecaptchaComponent,
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaValueAccessorDirective
} from "./chunk-SA6XGII2.js";
import {
  AlertComponent,
  AuthService,
  AuthState,
  BreadcrumbComponent,
  ButtonComponent,
  CartState,
  CustomValidators,
  ForgotPassWord,
  GetCartItems,
  Login,
  LoginWithNumber,
  NgxsModule,
  NotificationService,
  Register,
  Select,
  Select2,
  SettingState,
  SharedModule,
  Store,
  SyncCart,
  ThemeOptionState,
  TranslateModule,
  TranslatePipe,
  UpdatePassword,
  VerifyEmailOtp,
  VerifyNumberOTP,
  countryCodes
} from "./chunk-24LTJJML.js";
import "./chunk-4VA66D5F.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  PatternValidator,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-UJVGNNHA.js";
import {
  CommonModule,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  __decorate,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MJNPSVHG.js";

// src/app/components/auth/login/login.component.ts
var _c0 = () => ["/auth/forgot-password"];
var _c1 = () => ["/auth/register"];
function LoginComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Email Is Required"), " ");
  }
}
function LoginComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Invalid Email"), " ");
  }
}
function LoginComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Password Is Required"), " ");
  }
}
function LoginComponent_div_25_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ReCaptcha is Required"), " ");
  }
}
function LoginComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "re-captcha", 24);
    \u0275\u0275template(2, LoginComponent_div_25_span_2_Template, 3, 3, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.form.controls["recaptcha"] == null ? null : ctx_r0.form.controls["recaptcha"].touched) && (ctx_r0.form.controls["recaptcha"] == null ? null : ctx_r0.form.controls["recaptcha"].errors == null ? null : ctx_r0.form.controls["recaptcha"].errors["required"]));
  }
}
var LoginComponent = class _LoginComponent {
  constructor(store, router, formBuilder, authService) {
    this.store = store;
    this.router = router;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.breadcrumb = {
      title: "Log in",
      items: [{ label: "Log in", active: true }]
    };
    this.reCaptcha = true;
    this.form = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      recaptcha: new FormControl(null, Validators.required)
    });
    this.setting$.subscribe((setting) => {
      if (setting?.google_reCaptcha && !setting?.google_reCaptcha?.status || !setting?.google_reCaptcha) {
        this.form.removeControl("recaptcha");
        this.reCaptcha = false;
      } else {
        this.form.setControl("recaptcha", new FormControl(null, Validators.required));
        this.reCaptcha = true;
      }
    });
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
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new Login(this.form.value)).subscribe({
        complete: () => {
          let syncCartItems = [];
          this.cartItem$.subscribe((items) => {
            items.filter((item) => {
              if (item) {
                const params = {
                  id: null,
                  product: item?.product,
                  product_id: item?.product_id,
                  variation: item?.variation ? item.variation : null,
                  variation_id: item?.variation_id ? item.variation_id : null,
                  quantity: item.quantity
                };
                syncCartItems.push(params);
              }
            });
          });
          if (syncCartItems.length) {
            this.store.dispatch(new SyncCart(syncCartItems));
          } else {
            this.store.dispatch(new GetCartItems());
          }
          const redirectUrl = this.authService.redirectUrl || "/account/dashboard";
          this.router.navigateByUrl(redirectUrl);
          this.authService.redirectUrl = void 0;
        }
      });
    }
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 48, vars: 40, consts: [[1, "kfa-page"], [1, "kfa-center"], [1, "kfa-right"], [1, "kfa-form-wrap"], [1, "kfa-form-head"], [1, "kfa-eyebrow", "kfa-eyebrow--dark"], [1, "kfa-form", 3, "ngSubmit", "formGroup"], [1, "kfa-field"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "pattern", "[a-zA-Z0-9._\\-+@]+", 3, "input", "placeholder"], ["class", "kfa-error", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["class", "kfa-field", 4, "ngIf"], [1, "kfa-options-row"], [1, "kfa-check"], ["type", "checkbox", "id", "remeberme"], [1, "kfa-check-box"], [1, "kfa-forgot", 3, "routerLink"], [3, "id"], [1, "ri-arrow-right-line"], [1, "kfa-alt-link"], [3, "routerLink"], [1, "kfa-error"], ["formControlName", "recaptcha"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "app-alert");
        \u0275\u0275elementStart(5, "div", 4)(6, "p", 5);
        \u0275\u0275text(7, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h2");
        \u0275\u0275text(9, "Sign in to your account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "form", 6);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(11, "div", 7)(12, "label", 8);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 9);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275listener("input", function LoginComponent_Template_input_input_15_listener($event) {
          return ctx.filterEmailCharacters($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, LoginComponent_span_17_Template, 3, 3, "span", 10)(18, LoginComponent_span_18_Template, 3, 3, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 7)(20, "label", 11);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 12);
        \u0275\u0275template(24, LoginComponent_span_24_Template, 3, 3, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, LoginComponent_div_25_Template, 3, 1, "div", 13);
        \u0275\u0275elementStart(26, "div", 14)(27, "label", 15);
        \u0275\u0275element(28, "input", 16)(29, "span", 17);
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "a", 18);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "app-button", 19);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275element(39, "i", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 21)(41, "span");
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "a", 22);
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275element(47, "i", 20);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 22, "Email Address"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("kfa-input-error", ctx.form.controls["email"].touched && ctx.form.controls["email"].invalid);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(16, 24, "enter_your_email"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 26, "Password"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("kfa-input-error", ctx.form.controls["password"].touched && ctx.form.controls["password"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["password"].touched && (ctx.form.controls["password"].errors == null ? null : ctx.form.controls["password"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.reCaptcha);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 28, "Remember Me"));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(38, _c0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 30, "Forgot Password"), "? ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("kfa-submit-btn");
        \u0275\u0275property("id", "login_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 32, "Login"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(43, 34, "Dont Have An Account"), "?");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(39, _c1));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(46, 36, "Sign up"), " ");
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, PatternValidator, FormGroupDirective, FormControlName, AlertComponent, ButtonComponent, RecaptchaComponent, RecaptchaValueAccessorDirective, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\nsection.kfa-page[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.kfa-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #FFFFFF;\n  display: flex;\n}\n.kfa-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  width: 100%;\n  background:\n    radial-gradient(\n      ellipse at 15% 10%,\n      rgba(30, 127, 201, 0.07) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 90% 90%,\n      rgba(179, 138, 72, 0.05) 0%,\n      transparent 50%),\n    #F8F9FB;\n  padding: 8px 20px;\n}\n.kfa-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 10.5px;\n  font-weight: 800;\n  letter-spacing: 3.5px;\n  text-transform: uppercase;\n  color: #B38A48;\n  margin: 0 0 18px;\n}\n.kfa-eyebrow[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 24px;\n  height: 2px;\n  background: #B38A48;\n  border-radius: 2px;\n}\n.kfa-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.kfa-form-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  background: #FFFFFF;\n  border: 1px solid #E6E8EC;\n  border-radius: 24px;\n  padding: 44px 48px;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 16px 42px rgba(15, 23, 32, 0.1);\n}\n@media (max-width: 575px) {\n  .kfa-form-wrap[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n    border-radius: 18px;\n  }\n}\n.kfa-form-head[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.kfa-form-head[_ngcontent-%COMP%]   .kfa-eyebrow--dark[_ngcontent-%COMP%] {\n  color: #1E7FC9;\n}\n.kfa-form-head[_ngcontent-%COMP%]   .kfa-eyebrow--dark[_ngcontent-%COMP%]::before {\n  background: #1E7FC9;\n}\n.kfa-form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px !important;\n  font-weight: 800 !important;\n  color: #0F1720 !important;\n  margin: 0 !important;\n  letter-spacing: -0.8px;\n}\n@media (max-width: 480px) {\n  .kfa-form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n  }\n}\n.kfa-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.kfa-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.kfa-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2px !important;\n  text-transform: uppercase;\n  color: #0F1720 !important;\n}\n.kfa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .kfa-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 52px;\n  padding: 0 16px !important;\n  border: 1.5px solid #D1D5DB !important;\n  border-radius: 14px !important;\n  font-size: 14.5px !important;\n  font-weight: 600;\n  color: #0F1720 !important;\n  background: #F8F9FB !important;\n  font-family: inherit;\n  outline: none !important;\n  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1) !important;\n  box-shadow: 0 1px 3px rgba(15, 23, 32, 0.04) !important;\n  width: 100%;\n}\n.kfa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .kfa-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #D1D5DB !important;\n  font-size: 13.5px !important;\n}\n.kfa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .kfa-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #1E7FC9 !important;\n  background: #FFFFFF !important;\n  box-shadow: 0 0 0 4px rgba(30, 127, 201, 0.12), 0 4px 12px rgba(30, 127, 201, 0.08) !important;\n  transform: translateY(-1px);\n}\n.kfa-field[_ngcontent-%COMP%]   input.kfa-input-error[_ngcontent-%COMP%], .kfa-field[_ngcontent-%COMP%]   textarea.kfa-input-error[_ngcontent-%COMP%] {\n  border-color: #E7475A !important;\n  background: #FDECEE !important;\n}\n.kfa-error[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #E7475A;\n  padding: 6px 12px;\n  background: #FDECEE;\n  border: 1px solid rgba(231, 71, 90, 0.25);\n  border-radius: 8px;\n  animation: _ngcontent-%COMP%_kfaErrIn 0.3s ease;\n}\n.kfa-error[_ngcontent-%COMP%]::before {\n  content: "\\ec07";\n  font-family: "remixicon";\n  font-size: 13px;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_kfaErrIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.kfa-two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 480px) {\n  .kfa-two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.kfa-phone-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%] {\n  width: 130px;\n  flex-shrink: 0;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%]     .select2-container {\n  width: 100% !important;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%]     .select2-container .select2-selection {\n  border: 1.5px solid #D1D5DB !important;\n  border-radius: 14px !important;\n  min-height: 52px !important;\n  background: #F8F9FB !important;\n  display: flex !important;\n  align-items: center !important;\n  transition: all 0.3s ease !important;\n  padding: 0 10px !important;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%]     .select2-container.select2-container--open .select2-selection {\n  border-color: #1E7FC9 !important;\n  box-shadow: 0 0 0 4px rgba(30, 127, 201, 0.12) !important;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%]     .select2-dropdown {\n  border: 1.5px solid #E6E8EC !important;\n  border-radius: 12px !important;\n  box-shadow: 0 12px 36px rgba(15, 23, 32, 0.14) !important;\n  border-top: 3px solid #1E7FC9 !important;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kfa-options-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.kfa-check[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  font-size: 13.5px;\n  color: #6B7280;\n  font-weight: 500;\n}\n.kfa-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.kfa-check[_ngcontent-%COMP%]   .kfa-check-box[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  border: 1.5px solid #D1D5DB;\n  background: #F8F9FB;\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.kfa-check[_ngcontent-%COMP%]   .kfa-check-box--error[_ngcontent-%COMP%] {\n  border-color: #E7475A !important;\n  background: #FDECEE;\n}\n.kfa-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .kfa-check-box[_ngcontent-%COMP%] {\n  background: #1E7FC9;\n  border-color: #135a95;\n  box-shadow: 0 4px 10px rgba(30, 127, 201, 0.35);\n}\n.kfa-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .kfa-check-box[_ngcontent-%COMP%]::after {\n  content: "\\eb7b";\n  font-family: "remixicon";\n  font-size: 12px;\n  color: #fff;\n}\n.kfa-text-error[_ngcontent-%COMP%] {\n  color: #E7475A !important;\n}\n.kfa-terms-link[_ngcontent-%COMP%] {\n  color: #1E7FC9;\n  text-decoration: none;\n  font-weight: 700;\n}\n.kfa-terms-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.kfa-forgot[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1E7FC9;\n  text-decoration: none;\n  letter-spacing: 0.3px;\n  transition: color 0.25s ease;\n}\n.kfa-forgot[_ngcontent-%COMP%]:hover {\n  color: #135a95;\n  text-decoration: underline;\n}\n  .kfa-submit-btn,   button.kfa-submit-btn {\n  position: relative;\n  width: 100% !important;\n  height: 56px !important;\n  padding: 0 28px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #1E7FC9 0%,\n      #135a95 100%) !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 999px !important;\n  font-size: 12.5px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2.5px !important;\n  text-transform: uppercase;\n  cursor: pointer;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 12px !important;\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1) !important;\n  box-shadow: 0 4px 12px rgba(30, 127, 201, 0.28), 0 14px 32px rgba(30, 127, 201, 0.2) !important;\n}\n  .kfa-submit-btn::before,   button.kfa-submit-btn::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  transform: translateX(-101%);\n  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n}\n  .kfa-submit-btn > *,   button.kfa-submit-btn > * {\n  position: relative;\n  z-index: 1;\n}\n  .kfa-submit-btn i,   button.kfa-submit-btn i {\n  font-size: 18px !important;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n  .kfa-submit-btn:hover:not(:disabled),   button.kfa-submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px) !important;\n  box-shadow: 0 6px 16px rgba(15, 23, 32, 0.25), 0 18px 40px rgba(15, 23, 32, 0.2) !important;\n}\n  .kfa-submit-btn:hover:not(:disabled)::before,   button.kfa-submit-btn:hover:not(:disabled)::before {\n  transform: translateX(0);\n}\n  .kfa-submit-btn:hover:not(:disabled) i,   button.kfa-submit-btn:hover:not(:disabled) i {\n  transform: translateX(5px);\n}\n  .kfa-submit-btn:disabled,   button.kfa-submit-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.kfa-alt-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding-top: 20px;\n  border-top: 1px solid #E6E8EC;\n  flex-wrap: wrap;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #6B7280;\n  font-weight: 500;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 13.5px;\n  font-weight: 800;\n  color: #1E7FC9;\n  text-decoration: none;\n  transition: all 0.25s ease;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  transition: transform 0.3s ease;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #135a95;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\nre-captcha[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
__decorate([
  Select(CartState.cartItems)
], LoginComponent.prototype, "cartItem$", void 0);
__decorate([
  Select(SettingState.setting)
], LoginComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\components\\auth\\login\\login.component.ts", lineNumber: 20 });
})();

// src/app/components/auth/forgot-password/forgot-password.component.ts
var _c02 = () => ["/auth/login"];
function ForgotPasswordComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Email Is Required"), " ");
  }
}
function ForgotPasswordComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Invalid Email"), " ");
  }
}
function ForgotPasswordComponent_div_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ReCaptcha is Required"), " ");
  }
}
function ForgotPasswordComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "re-captcha", 18);
    \u0275\u0275template(2, ForgotPasswordComponent_div_19_span_2_Template, 3, 3, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.form.controls["recaptcha"] == null ? null : ctx_r0.form.controls["recaptcha"].touched) && (ctx_r0.form.controls["recaptcha"] == null ? null : ctx_r0.form.controls["recaptcha"].errors == null ? null : ctx_r0.form.controls["recaptcha"].errors["required"]));
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(store, router, authService, formBuilder) {
    this.store = store;
    this.router = router;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.breadcrumb = {
      title: "Forgot Password",
      items: [{ label: "Forgot Password", active: true }]
    };
    this.reCaptcha = true;
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      recaptcha: ["", [Validators.required]]
    });
    this.setting$.subscribe((setting) => {
      if (setting?.google_reCaptcha && !setting?.google_reCaptcha?.status || !setting?.google_reCaptcha) {
        this.form.removeControl("recaptcha");
        this.reCaptcha = false;
      } else {
        this.form.setControl("recaptcha", new FormControl(null, Validators.required));
        this.reCaptcha = true;
      }
    });
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
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new ForgotPassWord(this.form.value)).subscribe({
        complete: () => {
          this.authService.otpType = "email";
          this.router.navigateByUrl("/auth/otp");
        }
      });
    }
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(t) {
      return new (t || _ForgotPasswordComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 32, vars: 26, consts: [[1, "kfa-page"], [1, "kfa-center"], [1, "kfa-right"], [1, "kfa-form-wrap"], [1, "kfa-form-head"], [1, "kfa-eyebrow", "kfa-eyebrow--dark"], [1, "kfa-form", 3, "ngSubmit", "formGroup"], [1, "kfa-field"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "pattern", "[a-zA-Z0-9._\\-+@]+", 3, "input", "placeholder"], ["class", "kfa-error", 4, "ngIf"], ["class", "kfa-field", 4, "ngIf"], [3, "id"], [1, "ri-mail-send-line"], [1, "kfa-alt-link"], [3, "routerLink"], [1, "ri-arrow-right-line"], [1, "kfa-error"], ["formControlName", "recaptcha"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "app-alert");
        \u0275\u0275elementStart(5, "div", 4)(6, "p", 5);
        \u0275\u0275text(7, "Forgot Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h2");
        \u0275\u0275text(9, "Reset your password");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "form", 6);
        \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_10_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(11, "div", 7)(12, "label", 8);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 9);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275listener("input", function ForgotPasswordComponent_Template_input_input_15_listener($event) {
          return ctx.filterEmailCharacters($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, ForgotPasswordComponent_span_17_Template, 3, 3, "span", 10)(18, ForgotPasswordComponent_span_18_Template, 3, 3, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, ForgotPasswordComponent_div_19_Template, 3, 1, "div", 11);
        \u0275\u0275elementStart(20, "app-button", 12);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275element(23, "i", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 14)(25, "span");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "a", 15);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275element(31, "i", 16);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, "Email Address"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("kfa-input-error", ctx.form.controls["email"].touched && ctx.form.controls["email"].invalid);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(16, 17, "enter_your_email"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.reCaptcha);
        \u0275\u0275advance();
        \u0275\u0275classMap("kfa-submit-btn");
        \u0275\u0275property("id", "forgot_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 19, "Send Reset Link"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(27, 21, "Remember Your Password"), "?");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c02));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(30, 23, "Back to Login"), " ");
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, PatternValidator, FormGroupDirective, FormControlName, AlertComponent, ButtonComponent, RecaptchaComponent, RecaptchaValueAccessorDirective, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\nsection.kfa-page[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.kfa-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #FFFFFF;\n  display: flex;\n}\n.kfa-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  width: 100%;\n  background:\n    radial-gradient(\n      ellipse at 15% 10%,\n      rgba(30, 127, 201, 0.07) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 90% 90%,\n      rgba(179, 138, 72, 0.05) 0%,\n      transparent 50%),\n    #F8F9FB;\n  padding: 8px 20px;\n}\n.kfa-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 10.5px;\n  font-weight: 800;\n  letter-spacing: 3.5px;\n  text-transform: uppercase;\n  color: #B38A48;\n  margin: 0 0 18px;\n}\n.kfa-eyebrow[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 24px;\n  height: 2px;\n  background: #B38A48;\n  border-radius: 2px;\n}\n.kfa-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.kfa-form-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  background: #FFFFFF;\n  border: 1px solid #E6E8EC;\n  border-radius: 24px;\n  padding: 44px 48px;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 16px 42px rgba(15, 23, 32, 0.1);\n}\n@media (max-width: 575px) {\n  .kfa-form-wrap[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n    border-radius: 18px;\n  }\n}\n.kfa-form-head[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.kfa-form-head[_ngcontent-%COMP%]   .kfa-eyebrow--dark[_ngcontent-%COMP%] {\n  color: #1E7FC9;\n}\n.kfa-form-head[_ngcontent-%COMP%]   .kfa-eyebrow--dark[_ngcontent-%COMP%]::before {\n  background: #1E7FC9;\n}\n.kfa-form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px !important;\n  font-weight: 800 !important;\n  color: #0F1720 !important;\n  margin: 0 !important;\n  letter-spacing: -0.8px;\n}\n@media (max-width: 480px) {\n  .kfa-form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n  }\n}\n.kfa-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.kfa-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.kfa-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2px !important;\n  text-transform: uppercase;\n  color: #0F1720 !important;\n}\n.kfa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .kfa-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 52px;\n  padding: 0 16px !important;\n  border: 1.5px solid #D1D5DB !important;\n  border-radius: 14px !important;\n  font-size: 14.5px !important;\n  font-weight: 600;\n  color: #0F1720 !important;\n  background: #F8F9FB !important;\n  font-family: inherit;\n  outline: none !important;\n  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1) !important;\n  box-shadow: 0 1px 3px rgba(15, 23, 32, 0.04) !important;\n  width: 100%;\n}\n.kfa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .kfa-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #D1D5DB !important;\n  font-size: 13.5px !important;\n}\n.kfa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .kfa-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #1E7FC9 !important;\n  background: #FFFFFF !important;\n  box-shadow: 0 0 0 4px rgba(30, 127, 201, 0.12), 0 4px 12px rgba(30, 127, 201, 0.08) !important;\n  transform: translateY(-1px);\n}\n.kfa-field[_ngcontent-%COMP%]   input.kfa-input-error[_ngcontent-%COMP%], .kfa-field[_ngcontent-%COMP%]   textarea.kfa-input-error[_ngcontent-%COMP%] {\n  border-color: #E7475A !important;\n  background: #FDECEE !important;\n}\n.kfa-error[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #E7475A;\n  padding: 6px 12px;\n  background: #FDECEE;\n  border: 1px solid rgba(231, 71, 90, 0.25);\n  border-radius: 8px;\n  animation: _ngcontent-%COMP%_kfaErrIn 0.3s ease;\n}\n.kfa-error[_ngcontent-%COMP%]::before {\n  content: "\\ec07";\n  font-family: "remixicon";\n  font-size: 13px;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_kfaErrIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.kfa-two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 480px) {\n  .kfa-two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.kfa-phone-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%] {\n  width: 130px;\n  flex-shrink: 0;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%]     .select2-container {\n  width: 100% !important;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%]     .select2-container .select2-selection {\n  border: 1.5px solid #D1D5DB !important;\n  border-radius: 14px !important;\n  min-height: 52px !important;\n  background: #F8F9FB !important;\n  display: flex !important;\n  align-items: center !important;\n  transition: all 0.3s ease !important;\n  padding: 0 10px !important;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%]     .select2-container.select2-container--open .select2-selection {\n  border-color: #1E7FC9 !important;\n  box-shadow: 0 0 0 4px rgba(30, 127, 201, 0.12) !important;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%]     .select2-dropdown {\n  border: 1.5px solid #E6E8EC !important;\n  border-radius: 12px !important;\n  box-shadow: 0 12px 36px rgba(15, 23, 32, 0.14) !important;\n  border-top: 3px solid #1E7FC9 !important;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kfa-options-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.kfa-check[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  font-size: 13.5px;\n  color: #6B7280;\n  font-weight: 500;\n}\n.kfa-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.kfa-check[_ngcontent-%COMP%]   .kfa-check-box[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  border: 1.5px solid #D1D5DB;\n  background: #F8F9FB;\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.kfa-check[_ngcontent-%COMP%]   .kfa-check-box--error[_ngcontent-%COMP%] {\n  border-color: #E7475A !important;\n  background: #FDECEE;\n}\n.kfa-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .kfa-check-box[_ngcontent-%COMP%] {\n  background: #1E7FC9;\n  border-color: #135a95;\n  box-shadow: 0 4px 10px rgba(30, 127, 201, 0.35);\n}\n.kfa-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .kfa-check-box[_ngcontent-%COMP%]::after {\n  content: "\\eb7b";\n  font-family: "remixicon";\n  font-size: 12px;\n  color: #fff;\n}\n.kfa-text-error[_ngcontent-%COMP%] {\n  color: #E7475A !important;\n}\n.kfa-terms-link[_ngcontent-%COMP%] {\n  color: #1E7FC9;\n  text-decoration: none;\n  font-weight: 700;\n}\n.kfa-terms-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.kfa-forgot[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1E7FC9;\n  text-decoration: none;\n  letter-spacing: 0.3px;\n  transition: color 0.25s ease;\n}\n.kfa-forgot[_ngcontent-%COMP%]:hover {\n  color: #135a95;\n  text-decoration: underline;\n}\n  .kfa-submit-btn,   button.kfa-submit-btn {\n  position: relative;\n  width: 100% !important;\n  height: 56px !important;\n  padding: 0 28px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #1E7FC9 0%,\n      #135a95 100%) !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 999px !important;\n  font-size: 12.5px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2.5px !important;\n  text-transform: uppercase;\n  cursor: pointer;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 12px !important;\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1) !important;\n  box-shadow: 0 4px 12px rgba(30, 127, 201, 0.28), 0 14px 32px rgba(30, 127, 201, 0.2) !important;\n}\n  .kfa-submit-btn::before,   button.kfa-submit-btn::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  transform: translateX(-101%);\n  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n}\n  .kfa-submit-btn > *,   button.kfa-submit-btn > * {\n  position: relative;\n  z-index: 1;\n}\n  .kfa-submit-btn i,   button.kfa-submit-btn i {\n  font-size: 18px !important;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n  .kfa-submit-btn:hover:not(:disabled),   button.kfa-submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px) !important;\n  box-shadow: 0 6px 16px rgba(15, 23, 32, 0.25), 0 18px 40px rgba(15, 23, 32, 0.2) !important;\n}\n  .kfa-submit-btn:hover:not(:disabled)::before,   button.kfa-submit-btn:hover:not(:disabled)::before {\n  transform: translateX(0);\n}\n  .kfa-submit-btn:hover:not(:disabled) i,   button.kfa-submit-btn:hover:not(:disabled) i {\n  transform: translateX(5px);\n}\n  .kfa-submit-btn:disabled,   button.kfa-submit-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.kfa-alt-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding-top: 20px;\n  border-top: 1px solid #E6E8EC;\n  flex-wrap: wrap;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #6B7280;\n  font-weight: 500;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 13.5px;\n  font-weight: 800;\n  color: #1E7FC9;\n  text-decoration: none;\n  transition: all 0.25s ease;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  transition: transform 0.3s ease;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #135a95;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\nre-captcha[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */'] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], ForgotPasswordComponent.prototype, "themeOption$", void 0);
__decorate([
  Select(SettingState.setting)
], ForgotPasswordComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src\\app\\components\\auth\\forgot-password\\forgot-password.component.ts", lineNumber: 20 });
})();

// src/app/components/auth/otp/otp.component.ts
var _c03 = () => ["/auth/login"];
function OtpComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.email, " ");
  }
}
function OtpComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.number.phone, " ");
  }
}
function OtpComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "Verification code is required"), " ");
  }
}
function OtpComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "Please enter a valid 5-digit code"), " ");
  }
}
var OtpComponent = class _OtpComponent {
  constructor(router, store, authService, formBuilder) {
    this.router = router;
    this.store = store;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.breadcrumb = {
      title: "OTP",
      items: [{ label: "OTP", active: true }]
    };
    this.form = this.formBuilder.group({
      otp: new FormControl("", [Validators.required, Validators.minLength(5)])
    });
  }
  ngOnInit() {
    this.otpType = this.authService.otpType;
    if (this.otpType === "email") {
      this.email = this.store.selectSnapshot((state) => state.auth.email);
      if (!this.email) {
        this.router.navigateByUrl("/auth/login");
      }
    } else if (this.otpType === "number") {
      this.number = this.store.selectSnapshot((state) => state.auth.number);
      if (!this.number.phone) {
        this.router.navigateByUrl("/auth/login");
      }
    } else {
      this.router.navigateByUrl("/auth/login");
    }
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      var action;
      var value;
      if (this.otpType === "email") {
        value = {
          email: this.email,
          token: this.form.value.otp
        };
        action = new VerifyEmailOtp(value);
      }
      if (this.otpType === "number") {
        value = {
          phone: this.number.phone,
          country_code: this.number.country_code,
          token: this.form.value.otp
        };
        action = new VerifyNumberOTP(value);
      }
      this.store.dispatch(action).subscribe({
        complete: () => {
          if (this.otpType === "email") {
            this.router.navigateByUrl("/auth/update-password");
          } else {
            this.router.navigateByUrl("/account/dashboard");
          }
        }
      });
    }
  }
  resendOtp() {
    this.form.reset();
    this.router.navigateByUrl("/auth/login");
  }
  static {
    this.\u0275fac = function OtpComponent_Factory(t) {
      return new (t || _OtpComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpComponent, selectors: [["app-otp"]], decls: 54, vars: 40, consts: [[3, "breadcrumb"], [1, "login-section", "section-b-space"], [1, "container-fluid-lg"], [1, "row", "justify-content-center"], [1, "col-xxl-5", "col-xl-6", "col-lg-7", "col-md-8", "col-sm-10"], [1, "login-container"], [1, "welcome-header"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "otp-destination"], ["class", "destination-text", 4, "ngIf"], [1, "login-card-modern"], [1, "login-form-modern", 3, "ngSubmit", "formGroup"], [1, "input-field-group"], [1, "field-label-row"], ["for", "otp", 1, "field-label"], [1, "ri-lock-password-line"], [1, "input-container"], ["type", "text", "id", "otp", "formControlName", "otp", "maxlength", "5", "oninput", "this.value = this.value?.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');", "onKeyPress", "if(this.value.length==5) return false;", 1, "form-field", "otp-input", 3, "placeholder"], ["class", "field-error-message", 4, "ngIf"], [1, "submit-button-wrapper"], [3, "id"], [1, "ri-arrow-right-line"], [1, "form-divider"], [1, "divider-text"], [1, "otp-options"], [1, "resend-text"], ["type", "button", 1, "resend-button", 3, "click"], [1, "ri-refresh-line"], [1, "signup-section"], [1, "signup-question"], [1, "signup-button", 3, "routerLink"], [1, "destination-text"], [1, "ri-mail-line"], [1, "ri-phone-line"], [1, "field-error-message"], [1, "ri-error-warning-line"]], template: function OtpComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "app-alert");
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "h1", 7);
        \u0275\u0275text(9, "Verify Your Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 9);
        \u0275\u0275template(14, OtpComponent_span_14_Template, 3, 1, "span", 10)(15, OtpComponent_span_15_Template, 3, 1, "span", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 11)(17, "form", 12);
        \u0275\u0275listener("ngSubmit", function OtpComponent_Template_form_ngSubmit_17_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "label", 15);
        \u0275\u0275element(21, "i", 16);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 17);
        \u0275\u0275element(25, "input", 18);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, OtpComponent_div_27_Template, 4, 3, "div", 19)(28, OtpComponent_div_28_Template, 4, 3, "div", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 20)(30, "app-button", 21);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275element(33, "i", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 23)(35, "span", 24);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 25)(39, "p", 26);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 27);
        \u0275\u0275listener("click", function OtpComponent_Template_button_click_42_listener() {
          return ctx.resendOtp();
        });
        \u0275\u0275element(43, "i", 28);
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 29)(47, "p", 30);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "a", 31);
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275element(53, "i", 22);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 21, "Enter the verification code sent to"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.otpType === "email");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.otpType === "number");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 23, "Verification Code"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("field-error", ctx.form.controls["otp"].touched && ctx.form.controls["otp"].invalid);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(26, 25, "Enter 5-digit code"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls["otp"].touched && (ctx.form.controls["otp"].errors == null ? null : ctx.form.controls["otp"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["otp"].touched && (ctx.form.controls["otp"].errors == null ? null : ctx.form.controls["otp"].errors["pattern"]));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn-login-submit");
        \u0275\u0275property("id", "otp_validate_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 27, "Validate"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 29, "OR"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 31, "Didn't receive the code?"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 33, "Resend Code"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 35, "Wrong email or phone?"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(39, _c03));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 37, "Back to Login"), " ");
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, TranslatePipe], styles: ['\n\n.login-section[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  min-height: calc(100vh - 200px);\n  background:\n    linear-gradient(\n      135deg,\n      #fafbfc 0%,\n      #ffffff 50%,\n      #f8f9fa 100%);\n  display: flex;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.login-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -100px;\n  right: -100px;\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(235, 97, 49, 0.06) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  z-index: 0;\n}\n.login-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -80px;\n  left: -80px;\n  width: 350px;\n  height: 350px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(235, 97, 49, 0.05) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  z-index: 0;\n}\n.login-section[_ngcontent-%COMP%]   .container-fluid-lg[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.login-section[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  max-width: 520px;\n  margin: 0 auto;\n}\n.login-section[_ngcontent-%COMP%]   .welcome-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n  padding-bottom: 32px;\n  border-bottom: 2px solid #f0f0f0;\n}\n.login-section[_ngcontent-%COMP%]   .welcome-header[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin-bottom: 12px;\n  letter-spacing: -0.5px;\n  position: relative;\n  display: inline-block;\n}\n.login-section[_ngcontent-%COMP%]   .welcome-header[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 60px;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #EB6131,\n      transparent);\n  border-radius: 2px;\n}\n@media (max-width: 767px) {\n  .login-section[_ngcontent-%COMP%]   .welcome-header[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.login-section[_ngcontent-%COMP%]   .welcome-header[_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 20px 0 16px 0;\n  font-weight: 400;\n}\n@media (max-width: 767px) {\n  .login-section[_ngcontent-%COMP%]   .welcome-header[_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.login-section[_ngcontent-%COMP%]   .welcome-header[_ngcontent-%COMP%]   .otp-destination[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.login-section[_ngcontent-%COMP%]   .welcome-header[_ngcontent-%COMP%]   .otp-destination[_ngcontent-%COMP%]   .destination-text[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 500;\n  color: #EB6131;\n  background: rgba(235, 97, 49, 0.08);\n  padding: 8px 16px;\n  border-radius: 8px;\n  border: 1px solid rgba(235, 97, 49, 0.2);\n}\n.login-section[_ngcontent-%COMP%]   .welcome-header[_ngcontent-%COMP%]   .otp-destination[_ngcontent-%COMP%]   .destination-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media (max-width: 767px) {\n  .login-section[_ngcontent-%COMP%]   .welcome-header[_ngcontent-%COMP%]   .otp-destination[_ngcontent-%COMP%]   .destination-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 6px 12px;\n  }\n}\n.login-section[_ngcontent-%COMP%]   .login-card-modern[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 48px 40px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n  border: 1px solid #e9ecef;\n  position: relative;\n}\n@media (max-width: 767px) {\n  .login-section[_ngcontent-%COMP%]   .login-card-modern[_ngcontent-%COMP%] {\n    padding: 36px 28px;\n    border-radius: 20px;\n  }\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .field-label-row[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .field-label-row[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .field-label-row[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #EB6131;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 20px;\n  font-size: 15px;\n  color: #1a1a1a;\n  background: #f8f9fa;\n  border: 2px solid transparent;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  outline: none;\n  text-align: center;\n  font-weight: 600;\n  letter-spacing: 2px;\n  font-size: 18px;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: #EB6131;\n  box-shadow: 0 0 0 4px rgba(235, 97, 49, 0.08);\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-field.field-error[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background: #fff5f5;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-field.field-error[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.08);\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: 8px;\n  text-align: center;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]::placeholder {\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .field-error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n  font-size: 13px;\n  color: #dc3545;\n  justify-content: center;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .field-error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button {\n  width: 100%;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button .btn-login-submit, .login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button button {\n  width: 100%;\n  padding: 16px 24px;\n  background: #EB6131;\n  color: #ffffff;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(235, 97, 49, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  position: relative;\n  overflow: hidden;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button .btn-login-submit::before, .login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button button::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button .btn-login-submit:hover, .login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button button:hover {\n  background: #cb4314;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(235, 97, 49, 0.35);\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button .btn-login-submit:hover::before, .login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button button:hover::before {\n  left: 100%;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button .btn-login-submit:active, .login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button button:active {\n  transform: translateY(0);\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button .btn-login-submit i, .login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button button i {\n  font-size: 18px;\n  transition: transform 0.3s ease;\n}\n.login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button .btn-login-submit:hover i, .login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .submit-button-wrapper[_ngcontent-%COMP%]     app-button button:hover i {\n  transform: translateX(4px);\n}\n.login-section[_ngcontent-%COMP%]   .otp-options[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.login-section[_ngcontent-%COMP%]   .otp-options[_ngcontent-%COMP%]   .resend-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 12px;\n}\n.login-section[_ngcontent-%COMP%]   .otp-options[_ngcontent-%COMP%]   .resend-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: transparent;\n  color: #EB6131;\n  border: 2px solid #EB6131;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.login-section[_ngcontent-%COMP%]   .otp-options[_ngcontent-%COMP%]   .resend-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: transform 0.3s ease;\n}\n.login-section[_ngcontent-%COMP%]   .otp-options[_ngcontent-%COMP%]   .resend-button[_ngcontent-%COMP%]:hover {\n  background: #EB6131;\n  color: #ffffff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(235, 97, 49, 0.25);\n}\n.login-section[_ngcontent-%COMP%]   .otp-options[_ngcontent-%COMP%]   .resend-button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.login-section[_ngcontent-%COMP%]   .form-divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin-bottom: 32px;\n}\n.login-section[_ngcontent-%COMP%]   .form-divider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #e9ecef,\n      transparent);\n}\n.login-section[_ngcontent-%COMP%]   .form-divider[_ngcontent-%COMP%]   .divider-text[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 0 16px;\n  background: #ffffff;\n  font-size: 13px;\n  color: #999;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.login-section[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.login-section[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%]   .signup-question[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #666;\n  margin-bottom: 16px;\n}\n.login-section[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%]   .signup-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 32px;\n  background: #ffffff;\n  color: #EB6131;\n  border: 2px solid #EB6131;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.login-section[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%]   .signup-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: transform 0.3s ease;\n}\n.login-section[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%]   .signup-button[_ngcontent-%COMP%]:hover {\n  background: #EB6131;\n  color: #ffffff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(235, 97, 49, 0.25);\n}\n.login-section[_ngcontent-%COMP%]   .signup-section[_ngcontent-%COMP%]   .signup-button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n@media (max-width: 991px) {\n  .login-section[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n}\n@media (max-width: 767px) {\n  .login-section[_ngcontent-%COMP%] {\n    padding: 30px 0;\n  }\n  .login-section[_ngcontent-%COMP%]   .welcome-header[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n    padding-bottom: 24px;\n  }\n  .login-section[_ngcontent-%COMP%]   .login-card-modern[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n  .login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n  .login-section[_ngcontent-%COMP%]   .login-form-modern[_ngcontent-%COMP%]   .input-field-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-field.otp-input[_ngcontent-%COMP%] {\n    font-size: 18px;\n    letter-spacing: 6px;\n  }\n  .login-section[_ngcontent-%COMP%]   .otp-options[_ngcontent-%COMP%]   .resend-button[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=otp.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpComponent, { className: "OtpComponent", filePath: "src\\app\\components\\auth\\otp\\otp.component.ts", lineNumber: 15 });
})();

// src/app/components/auth/update-password/update-password.component.ts
var _c04 = () => ["/auth/login"];
function UpdatePasswordComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "new_password_is_required"), " ");
  }
}
function UpdatePasswordComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "confirm_password_is_required"), " ");
  }
}
var UpdatePasswordComponent = class _UpdatePasswordComponent {
  constructor(store, formBuilder, router) {
    this.store = store;
    this.formBuilder = formBuilder;
    this.router = router;
    this.breadcrumb = {
      title: "Reset Password",
      items: [{ label: "Reset Password", active: true }]
    };
    this.email = this.store.selectSnapshot((state) => state.auth.email);
    this.token = this.store.selectSnapshot((state) => state.auth.token);
    if (!this.email && !this.token)
      this.router.navigateByUrl("/auth/login");
    this.form = this.formBuilder.group({
      newPassword: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required])
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new UpdatePassword({
        email: this.email,
        token: this.token,
        password: this.form.value.newPassword,
        password_confirmation: this.form.value.confirmPassword
      })).subscribe({
        complete: () => {
          this.router.navigateByUrl("/auth/login");
        }
      });
    }
  }
  static {
    this.\u0275fac = function UpdatePasswordComponent_Factory(t) {
      return new (t || _UpdatePasswordComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdatePasswordComponent, selectors: [["app-update-password"]], decls: 41, vars: 21, consts: [[1, "kfa-page"], [1, "kfa-center"], [1, "kfa-right"], [1, "kfa-form-wrap"], [1, "kfa-form-head"], [1, "kfa-lock-icon"], [1, "ri-lock-password-line"], [1, "kfa-eyebrow", "kfa-eyebrow--dark"], [1, "kfa-head-sub"], [1, "kfa-form", 3, "ngSubmit", "formGroup"], [1, "kfa-field"], ["for", "newPassword"], [1, "kfa-input-wrap"], [1, "ri-lock-line", "kfa-input-icon"], ["type", "password", "id", "newPassword", "formControlName", "newPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["class", "kfa-error", 4, "ngIf"], ["for", "confirmPassword"], [1, "ri-shield-check-line", "kfa-input-icon"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], [3, "id"], [1, "ri-check-line"], [1, "kfa-alt-link"], [3, "routerLink"], [1, "ri-arrow-right-line"], [1, "kfa-error"]], template: function UpdatePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "app-alert");
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
        \u0275\u0275element(7, "i", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, "Security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h2");
        \u0275\u0275text(11, "Set a new password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 8);
        \u0275\u0275text(13, "Choose a strong password you haven't used before.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "form", 9);
        \u0275\u0275listener("ngSubmit", function UpdatePasswordComponent_Template_form_ngSubmit_14_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(15, "div", 10)(16, "label", 11);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 12);
        \u0275\u0275element(20, "i", 13)(21, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, UpdatePasswordComponent_span_22_Template, 3, 3, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 10)(24, "label", 16);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 12);
        \u0275\u0275element(28, "i", 17)(29, "input", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, UpdatePasswordComponent_span_30_Template, 3, 3, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "app-button", 19);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275element(34, "i", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 21)(36, "span");
        \u0275\u0275text(37, "Remember your password?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "a", 22);
        \u0275\u0275text(39, "Back to Login ");
        \u0275\u0275element(40, "i", 23);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 14, "new_password"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("kfa-input-error", ctx.form.controls["newPassword"].touched && ctx.form.controls["newPassword"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["newPassword"].touched && (ctx.form.controls["newPassword"].errors == null ? null : ctx.form.controls["newPassword"].errors["required"]));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 16, "confirm_password"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("kfa-input-error", ctx.form.controls["confirmPassword"].touched && ctx.form.controls["confirmPassword"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["confirmPassword"].touched && (ctx.form.controls["confirmPassword"].errors == null ? null : ctx.form.controls["confirmPassword"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275classMap("kfa-submit-btn");
        \u0275\u0275property("id", "confirm_pass_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 18, "submit"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(20, _c04));
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, AlertComponent, ButtonComponent, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\nsection.kfa-page[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.kfa-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #FFFFFF;\n  display: flex;\n}\n.kfa-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  width: 100%;\n  background:\n    radial-gradient(\n      ellipse at 15% 10%,\n      rgba(30, 127, 201, 0.07) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 90% 90%,\n      rgba(179, 138, 72, 0.05) 0%,\n      transparent 50%),\n    #F8F9FB;\n  padding: 16px 20px;\n}\n.kfa-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.kfa-form-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  background: #FFFFFF;\n  border: 1px solid #E6E8EC;\n  border-radius: 24px;\n  padding: 44px 48px;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 16px 42px rgba(15, 23, 32, 0.1);\n}\n@media (max-width: 575px) {\n  .kfa-form-wrap[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n    border-radius: 18px;\n  }\n}\n.kfa-form-head[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.kfa-lock-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1E7FC9 0%,\n      #135a95 100%);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  box-shadow: 0 8px 22px rgba(30, 127, 201, 0.35);\n}\n.kfa-lock-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n  color: #fff !important;\n}\n.kfa-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 10.5px;\n  font-weight: 800;\n  letter-spacing: 3.5px;\n  text-transform: uppercase;\n  color: #B38A48;\n  margin: 0 0 12px;\n}\n.kfa-eyebrow[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 20px;\n  height: 2px;\n  background: #B38A48;\n  border-radius: 2px;\n}\n.kfa-eyebrow--dark[_ngcontent-%COMP%] {\n  color: #1E7FC9;\n}\n.kfa-eyebrow--dark[_ngcontent-%COMP%]::before {\n  background: #1E7FC9;\n}\n.kfa-form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n  font-weight: 800 !important;\n  color: #0F1720 !important;\n  margin: 0 0 10px !important;\n  letter-spacing: -0.6px;\n}\n.kfa-head-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n  margin: 0;\n  line-height: 1.6;\n}\n.kfa-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.kfa-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.kfa-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2px !important;\n  text-transform: uppercase;\n  color: #0F1720 !important;\n}\n.kfa-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.kfa-input-wrap[_ngcontent-%COMP%]   .kfa-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px !important;\n  color: #6B7280 !important;\n  pointer-events: none;\n  transition: color 0.25s ease;\n}\n.kfa-input-wrap[_ngcontent-%COMP%]:focus-within   .kfa-input-icon[_ngcontent-%COMP%] {\n  color: #1E7FC9 !important;\n}\n.kfa-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 52px;\n  padding: 0 16px 0 46px !important;\n  border: 1.5px solid #D1D5DB !important;\n  border-radius: 14px !important;\n  font-size: 14.5px !important;\n  font-weight: 600;\n  color: #0F1720 !important;\n  background: #F8F9FB !important;\n  font-family: inherit;\n  outline: none !important;\n  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1) !important;\n  box-shadow: 0 1px 3px rgba(15, 23, 32, 0.04) !important;\n}\n.kfa-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #D1D5DB !important;\n  font-size: 14px !important;\n}\n.kfa-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #1E7FC9 !important;\n  background: #FFFFFF !important;\n  box-shadow: 0 0 0 4px rgba(30, 127, 201, 0.12), 0 4px 12px rgba(30, 127, 201, 0.08) !important;\n  transform: translateY(-1px);\n}\n.kfa-input-wrap[_ngcontent-%COMP%]   input.kfa-input-error[_ngcontent-%COMP%] {\n  border-color: #E7475A !important;\n  background: #FDECEE !important;\n}\n.kfa-error[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #E7475A;\n  padding: 6px 12px;\n  background: #FDECEE;\n  border: 1px solid rgba(231, 71, 90, 0.25);\n  border-radius: 8px;\n  animation: _ngcontent-%COMP%_kfaErrIn 0.3s ease;\n}\n.kfa-error[_ngcontent-%COMP%]::before {\n  content: "\\ec07";\n  font-family: "remixicon";\n  font-size: 13px;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_kfaErrIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n  .kfa-submit-btn,   button.kfa-submit-btn {\n  position: relative;\n  width: 100% !important;\n  height: 56px !important;\n  padding: 0 28px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #1E7FC9 0%,\n      #135a95 100%) !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 999px !important;\n  font-size: 12.5px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2.5px !important;\n  text-transform: uppercase;\n  cursor: pointer;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 10px !important;\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1) !important;\n  box-shadow: 0 4px 12px rgba(30, 127, 201, 0.28), 0 14px 32px rgba(30, 127, 201, 0.2) !important;\n}\n  .kfa-submit-btn::before,   button.kfa-submit-btn::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  transform: translateX(-101%);\n  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n}\n  .kfa-submit-btn > *,   button.kfa-submit-btn > * {\n  position: relative;\n  z-index: 1;\n}\n  .kfa-submit-btn i,   button.kfa-submit-btn i {\n  font-size: 18px !important;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n  .kfa-submit-btn:hover:not(:disabled),   button.kfa-submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px) !important;\n  box-shadow: 0 6px 16px rgba(15, 23, 32, 0.25), 0 18px 40px rgba(15, 23, 32, 0.2) !important;\n}\n  .kfa-submit-btn:hover:not(:disabled)::before,   button.kfa-submit-btn:hover:not(:disabled)::before {\n  transform: translateX(0);\n}\n  .kfa-submit-btn:hover:not(:disabled) i,   button.kfa-submit-btn:hover:not(:disabled) i {\n  transform: scale(1.15) rotate(-6deg);\n}\n  .kfa-submit-btn:disabled,   button.kfa-submit-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.kfa-alt-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding-top: 20px;\n  border-top: 1px solid #E6E8EC;\n  flex-wrap: wrap;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #6B7280;\n  font-weight: 500;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 13.5px;\n  font-weight: 800;\n  color: #1E7FC9;\n  text-decoration: none;\n  transition: all 0.25s ease;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  transition: transform 0.3s ease;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #135a95;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n/*# sourceMappingURL=update-password.component.css.map */'] });
  }
};
__decorate([
  Select(SettingState.setting)
], UpdatePasswordComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdatePasswordComponent, { className: "UpdatePasswordComponent", filePath: "src\\app\\components\\auth\\update-password\\update-password.component.ts", lineNumber: 16 });
})();

// src/app/components/auth/register/register.component.ts
var _c05 = () => ["/term-condition"];
var _c12 = () => ["/privacy-policy"];
var _c2 = () => ["/auth/login"];
function RegisterComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "name_is_required"), " ");
  }
}
function RegisterComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Only letters and spaces are allowed"), " ");
  }
}
function RegisterComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Email Is Required"), " ");
  }
}
function RegisterComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Invalid Email"), " ");
  }
}
function RegisterComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("iti-flag ", data_r2 == null ? null : data_r2.class, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.code);
  }
}
function RegisterComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Phone Number Is Required"), " ");
  }
}
function RegisterComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, " Phone Number must be 10 digits. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "password_is_required"), " ");
  }
}
function RegisterComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "confirm_password_is_required"), " ");
  }
}
function RegisterComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "confirm Password Does Not Matched"), " ");
  }
}
function RegisterComponent_div_52_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ReCaptcha is Required"), " ");
  }
}
function RegisterComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "re-captcha", 37);
    \u0275\u0275template(2, RegisterComponent_div_52_span_2_Template, 3, 3, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r2.form.controls["recaptcha"] == null ? null : ctx_r2.form.controls["recaptcha"].touched) && (ctx_r2.form.controls["recaptcha"] == null ? null : ctx_r2.form.controls["recaptcha"].errors == null ? null : ctx_r2.form.controls["recaptcha"].errors["required"]));
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(store, router, formBuilder, notificationService) {
    this.store = store;
    this.router = router;
    this.formBuilder = formBuilder;
    this.notificationService = notificationService;
    this.breadcrumb = {
      title: "Sign In",
      items: [{ label: "Sign In", active: true }]
    };
    this.codes = countryCodes;
    this.tnc = new FormControl(false, [Validators.requiredTrue]);
    this.reCaptcha = true;
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      country_code: new FormControl("91", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      password_confirmation: new FormControl("", [Validators.required]),
      recaptcha: new FormControl(null, Validators.required)
    }, { validator: CustomValidators.MatchValidator("password", "password_confirmation") });
    this.setting$.subscribe((seting) => {
      if (seting?.google_reCaptcha && !seting?.google_reCaptcha?.status || !seting?.google_reCaptcha) {
        this.form.removeControl("recaptcha");
        this.reCaptcha = false;
      } else {
        this.form.setControl("recaptcha", new FormControl(null, Validators.required));
        this.reCaptcha = true;
      }
    });
    this.form.get("country_code")?.disable();
    this.form.controls["phone"]?.valueChanges.subscribe((value) => {
      if (value && value.toString().length < 10) {
        this.form.controls["phone"].markAsTouched();
        this.form.controls["phone"].setErrors({ invalid: true });
      }
      if (value && value.toString().length > 10) {
        this.form.controls["phone"]?.setValue(+value.toString().slice(0, 10), { emitEvent: false });
      }
      if (value && value.toString().length === 10) {
        this.form.controls["phone"].setErrors(null);
      }
    });
  }
  get passwordMatchError() {
    return this.form.getError("mismatch") && this.form.get("password_confirmation")?.touched;
  }
  // Allow only letters and spaces in name field (block numbers/special characters)
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
    if (!/^[A-Za-z\s]$/.test(event.key)) {
      event.preventDefault();
    }
  }
  sanitizeNameInput(event) {
    const input = event.target;
    const sanitized = (input.value || "").replace(/[^A-Za-z\s]/g, "");
    if (sanitized !== input.value) {
      input.value = sanitized;
      this.form.controls["name"].setValue(sanitized, { emitEvent: false });
    }
  }
  sanitizeNamePaste(event) {
    const pasted = event.clipboardData?.getData("text") ?? "";
    if (/[^A-Za-z\s]/.test(pasted)) {
      event.preventDefault();
      const sanitized = pasted.replace(/[^A-Za-z\s]/g, "");
      document.execCommand("insertText", false, sanitized);
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
  // Allow only digits in phone field (block alphabets/special characters)
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
  sanitizePhoneInput(event) {
    const input = event.target;
    const digitsOnly = (input.value || "").replace(/\D/g, "").slice(0, 10);
    if (digitsOnly !== input.value) {
      input.value = digitsOnly;
      this.form.controls["phone"].setValue(digitsOnly, { emitEvent: false });
    }
  }
  sanitizePhonePaste(event) {
    const pasted = event.clipboardData?.getData("text") ?? "";
    if (/\D/.test(pasted)) {
      event.preventDefault();
      const sanitized = pasted.replace(/\D/g, "").slice(0, 10);
      document.execCommand("insertText", false, sanitized);
    }
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.tnc.invalid) {
      return;
    }
    if (this.form.valid) {
      this.store.dispatch(new Register(this.form.value)).subscribe({
        complete: () => {
          this.router.navigateByUrl("/account/dashboard");
        }
      });
    }
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 79, vars: 80, consts: [["template", ""], [1, "kfa-page"], [1, "kfa-center"], [1, "kfa-right"], [1, "kfa-form-wrap"], [1, "kfa-form-head"], [1, "kfa-eyebrow", "kfa-eyebrow--dark"], [1, "kfa-form", 3, "ngSubmit", "formGroup"], [1, "kfa-field"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 3, "keydown", "input", "paste", "placeholder"], ["class", "kfa-error", 4, "ngIf"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "pattern", "[a-zA-Z0-9._\\-+@]+", 3, "input", "placeholder"], ["for", "phone"], [1, "kfa-phone-row"], ["formControlName", "country_code", 1, "kfa-country-code", 3, "data", "templates"], ["type", "tel", "id", "phone", "formControlName", "phone", "maxlength", "10", 3, "keydown", "input", "paste", "placeholder"], [1, "kfa-two-col"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["for", "password_confirmation"], ["type", "password", "id", "password_confirmation", "formControlName", "password_confirmation", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["class", "kfa-field", 4, "ngIf"], [1, "kfa-options-row"], [1, "kfa-check"], ["type", "checkbox", "id", "flexCheckDefault", 3, "formControl"], [1, "kfa-check-box"], [1, "kfa-terms-link", 3, "routerLink"], [3, "id", "disabled"], [1, "ri-arrow-right-line"], [1, "kfa-alt-link"], [3, "routerLink"], [1, "kfa-error"], [1, "country"], [1, "flag-box"], [1, "dial-code"], ["formControlName", "recaptcha"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "p", 6);
        \u0275\u0275text(6, "Create Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h2");
        \u0275\u0275text(8, "Fill in your details");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "form", 7);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 10);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275listener("keydown", function RegisterComponent_Template_input_keydown_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.allowOnlyLetters($event));
        })("input", function RegisterComponent_Template_input_input_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sanitizeNameInput($event));
        })("paste", function RegisterComponent_Template_input_paste_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sanitizeNamePaste($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, RegisterComponent_span_16_Template, 3, 3, "span", 11)(17, RegisterComponent_span_17_Template, 3, 3, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 8)(19, "label", 12);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 13);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275listener("input", function RegisterComponent_Template_input_input_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterEmailCharacters($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, RegisterComponent_span_24_Template, 3, 3, "span", 11)(25, RegisterComponent_span_25_Template, 3, 3, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 8)(27, "label", 14);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 15)(31, "select2", 16);
        \u0275\u0275template(32, RegisterComponent_ng_template_32_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "input", 17);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275listener("keydown", function RegisterComponent_Template_input_keydown_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.allowOnlyDigits($event));
        })("input", function RegisterComponent_Template_input_input_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sanitizePhoneInput($event));
        })("paste", function RegisterComponent_Template_input_paste_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sanitizePhonePaste($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(36, RegisterComponent_span_36_Template, 3, 3, "span", 11)(37, RegisterComponent_span_37_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 18)(39, "div", 8)(40, "label", 19);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "input", 20);
        \u0275\u0275template(44, RegisterComponent_span_44_Template, 3, 3, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 8)(46, "label", 21);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(49, "input", 22);
        \u0275\u0275template(50, RegisterComponent_span_50_Template, 3, 3, "span", 11)(51, RegisterComponent_span_51_Template, 3, 3, "span", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(52, RegisterComponent_div_52_Template, 3, 1, "div", 23);
        \u0275\u0275elementStart(53, "div", 24)(54, "label", 25);
        \u0275\u0275element(55, "input", 26)(56, "span", 27);
        \u0275\u0275elementStart(57, "span");
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementStart(60, "a", 28);
        \u0275\u0275text(61);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " & ");
        \u0275\u0275elementStart(64, "a", 28);
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(67, "app-button", 29);
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275element(70, "i", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 31)(72, "span");
        \u0275\u0275text(73);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "a", 32);
        \u0275\u0275text(76);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275element(78, "i", 30);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        const template_r4 = \u0275\u0275reference(33);
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 49, "Full Name"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("kfa-input-error", ctx.form.controls["name"].touched && ctx.form.controls["name"].invalid);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(15, 51, "Name"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls["name"].touched && (ctx.form.controls["name"].errors == null ? null : ctx.form.controls["name"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["name"].touched && (ctx.form.controls["name"].errors == null ? null : ctx.form.controls["name"].errors["pattern"]));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 53, "Email Address"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("kfa-input-error", ctx.form.controls["email"].touched && ctx.form.controls["email"].invalid);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(23, 55, "enter_your_email"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 57, "Phone Number"));
        \u0275\u0275advance(3);
        \u0275\u0275property("data", ctx.codes)("templates", template_r4);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("kfa-input-error", ctx.form.controls["phone"].touched && ctx.form.controls["phone"].invalid);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(35, 59, "Phone"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["invalid"]));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 61, "Password"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("kfa-input-error", ctx.form.controls["password"].touched && ctx.form.controls["password"].invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["password"].touched && (ctx.form.controls["password"].errors == null ? null : ctx.form.controls["password"].errors["required"]));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 63, "Confirm Password"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("kfa-input-error", ctx.form.controls["password_confirmation"].touched && ((ctx.form.controls["password_confirmation"].errors == null ? null : ctx.form.controls["password_confirmation"].errors["required"]) || ctx.passwordMatchError));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls["password_confirmation"].touched && (ctx.form.controls["password_confirmation"].errors == null ? null : ctx.form.controls["password_confirmation"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.passwordMatchError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.reCaptcha);
        \u0275\u0275advance(3);
        \u0275\u0275property("formControl", ctx.tnc);
        \u0275\u0275advance();
        \u0275\u0275classProp("kfa-check-box--error", ctx.tnc.touched && ctx.tnc.invalid);
        \u0275\u0275advance();
        \u0275\u0275classProp("kfa-text-error", ctx.tnc.touched && ctx.tnc.invalid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 65, "I Agree With"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(77, _c05));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 67, "Terms"));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(78, _c12));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 69, "Privacy"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("kfa-submit-btn");
        \u0275\u0275property("id", "sign_up_btn")("disabled", ctx.tnc.invalid || ctx.form.invalid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(69, 71, "Sign Up"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(74, 73, "Already Have An Account"), "?");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(79, _c2));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(77, 75, "Login"), " ");
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, FormControlDirective, FormGroupDirective, FormControlName, ButtonComponent, Select2, RecaptchaComponent, RecaptchaValueAccessorDirective, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\nsection.kfa-page[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.kfa-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #FFFFFF;\n  display: flex;\n}\n.kfa-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  width: 100%;\n  background:\n    radial-gradient(\n      ellipse at 15% 10%,\n      rgba(30, 127, 201, 0.07) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 90% 90%,\n      rgba(179, 138, 72, 0.05) 0%,\n      transparent 50%),\n    #F8F9FB;\n  padding: 8px 20px;\n}\n.kfa-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 10.5px;\n  font-weight: 800;\n  letter-spacing: 3.5px;\n  text-transform: uppercase;\n  color: #B38A48;\n  margin: 0 0 18px;\n}\n.kfa-eyebrow[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 24px;\n  height: 2px;\n  background: #B38A48;\n  border-radius: 2px;\n}\n.kfa-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.kfa-form-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  background: #FFFFFF;\n  border: 1px solid #E6E8EC;\n  border-radius: 24px;\n  padding: 44px 48px;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 16px 42px rgba(15, 23, 32, 0.1);\n}\n@media (max-width: 575px) {\n  .kfa-form-wrap[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n    border-radius: 18px;\n  }\n}\n.kfa-form-head[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.kfa-form-head[_ngcontent-%COMP%]   .kfa-eyebrow--dark[_ngcontent-%COMP%] {\n  color: #1E7FC9;\n}\n.kfa-form-head[_ngcontent-%COMP%]   .kfa-eyebrow--dark[_ngcontent-%COMP%]::before {\n  background: #1E7FC9;\n}\n.kfa-form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px !important;\n  font-weight: 800 !important;\n  color: #0F1720 !important;\n  margin: 0 !important;\n  letter-spacing: -0.8px;\n}\n@media (max-width: 480px) {\n  .kfa-form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n  }\n}\n.kfa-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.kfa-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.kfa-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2px !important;\n  text-transform: uppercase;\n  color: #0F1720 !important;\n}\n.kfa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .kfa-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 52px;\n  padding: 0 16px !important;\n  border: 1.5px solid #D1D5DB !important;\n  border-radius: 14px !important;\n  font-size: 14.5px !important;\n  font-weight: 600;\n  color: #0F1720 !important;\n  background: #F8F9FB !important;\n  font-family: inherit;\n  outline: none !important;\n  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1) !important;\n  box-shadow: 0 1px 3px rgba(15, 23, 32, 0.04) !important;\n  width: 100%;\n}\n.kfa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .kfa-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #D1D5DB !important;\n  font-size: 13.5px !important;\n}\n.kfa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .kfa-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #1E7FC9 !important;\n  background: #FFFFFF !important;\n  box-shadow: 0 0 0 4px rgba(30, 127, 201, 0.12), 0 4px 12px rgba(30, 127, 201, 0.08) !important;\n  transform: translateY(-1px);\n}\n.kfa-field[_ngcontent-%COMP%]   input.kfa-input-error[_ngcontent-%COMP%], .kfa-field[_ngcontent-%COMP%]   textarea.kfa-input-error[_ngcontent-%COMP%] {\n  border-color: #E7475A !important;\n  background: #FDECEE !important;\n}\n.kfa-error[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #E7475A;\n  padding: 6px 12px;\n  background: #FDECEE;\n  border: 1px solid rgba(231, 71, 90, 0.25);\n  border-radius: 8px;\n  animation: _ngcontent-%COMP%_kfaErrIn 0.3s ease;\n}\n.kfa-error[_ngcontent-%COMP%]::before {\n  content: "\\ec07";\n  font-family: "remixicon";\n  font-size: 13px;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_kfaErrIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.kfa-two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 480px) {\n  .kfa-two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.kfa-phone-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%] {\n  width: 130px;\n  flex-shrink: 0;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%]     .select2-container {\n  width: 100% !important;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%]     .select2-container .select2-selection {\n  border: 1.5px solid #D1D5DB !important;\n  border-radius: 14px !important;\n  min-height: 52px !important;\n  background: #F8F9FB !important;\n  display: flex !important;\n  align-items: center !important;\n  transition: all 0.3s ease !important;\n  padding: 0 10px !important;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%]     .select2-container.select2-container--open .select2-selection {\n  border-color: #1E7FC9 !important;\n  box-shadow: 0 0 0 4px rgba(30, 127, 201, 0.12) !important;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   .kfa-country-code[_ngcontent-%COMP%]     .select2-dropdown {\n  border: 1.5px solid #E6E8EC !important;\n  border-radius: 12px !important;\n  box-shadow: 0 12px 36px rgba(15, 23, 32, 0.14) !important;\n  border-top: 3px solid #1E7FC9 !important;\n}\n.kfa-phone-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kfa-options-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.kfa-check[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  font-size: 13.5px;\n  color: #6B7280;\n  font-weight: 500;\n}\n.kfa-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.kfa-check[_ngcontent-%COMP%]   .kfa-check-box[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  border: 1.5px solid #D1D5DB;\n  background: #F8F9FB;\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.kfa-check[_ngcontent-%COMP%]   .kfa-check-box--error[_ngcontent-%COMP%] {\n  border-color: #E7475A !important;\n  background: #FDECEE;\n}\n.kfa-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .kfa-check-box[_ngcontent-%COMP%] {\n  background: #1E7FC9;\n  border-color: #135a95;\n  box-shadow: 0 4px 10px rgba(30, 127, 201, 0.35);\n}\n.kfa-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .kfa-check-box[_ngcontent-%COMP%]::after {\n  content: "\\eb7b";\n  font-family: "remixicon";\n  font-size: 12px;\n  color: #fff;\n}\n.kfa-text-error[_ngcontent-%COMP%] {\n  color: #E7475A !important;\n}\n.kfa-terms-link[_ngcontent-%COMP%] {\n  color: #1E7FC9;\n  text-decoration: none;\n  font-weight: 700;\n}\n.kfa-terms-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.kfa-forgot[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1E7FC9;\n  text-decoration: none;\n  letter-spacing: 0.3px;\n  transition: color 0.25s ease;\n}\n.kfa-forgot[_ngcontent-%COMP%]:hover {\n  color: #135a95;\n  text-decoration: underline;\n}\n  .kfa-submit-btn,   button.kfa-submit-btn {\n  position: relative;\n  width: 100% !important;\n  height: 56px !important;\n  padding: 0 28px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #1E7FC9 0%,\n      #135a95 100%) !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 999px !important;\n  font-size: 12.5px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2.5px !important;\n  text-transform: uppercase;\n  cursor: pointer;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 12px !important;\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1) !important;\n  box-shadow: 0 4px 12px rgba(30, 127, 201, 0.28), 0 14px 32px rgba(30, 127, 201, 0.2) !important;\n}\n  .kfa-submit-btn::before,   button.kfa-submit-btn::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  transform: translateX(-101%);\n  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n}\n  .kfa-submit-btn > *,   button.kfa-submit-btn > * {\n  position: relative;\n  z-index: 1;\n}\n  .kfa-submit-btn i,   button.kfa-submit-btn i {\n  font-size: 18px !important;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n  .kfa-submit-btn:hover:not(:disabled),   button.kfa-submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px) !important;\n  box-shadow: 0 6px 16px rgba(15, 23, 32, 0.25), 0 18px 40px rgba(15, 23, 32, 0.2) !important;\n}\n  .kfa-submit-btn:hover:not(:disabled)::before,   button.kfa-submit-btn:hover:not(:disabled)::before {\n  transform: translateX(0);\n}\n  .kfa-submit-btn:hover:not(:disabled) i,   button.kfa-submit-btn:hover:not(:disabled) i {\n  transform: translateX(5px);\n}\n  .kfa-submit-btn:disabled,   button.kfa-submit-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.kfa-alt-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding-top: 20px;\n  border-top: 1px solid #E6E8EC;\n  flex-wrap: wrap;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #6B7280;\n  font-weight: 500;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 13.5px;\n  font-weight: 800;\n  color: #1E7FC9;\n  text-decoration: none;\n  transition: all 0.25s ease;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  transition: transform 0.3s ease;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #135a95;\n}\n.kfa-alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\nre-captcha[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=register.component.css.map */'] });
  }
};
__decorate([
  Select(SettingState.setting)
], RegisterComponent.prototype, "setting$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], RegisterComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\components\\auth\\register\\register.component.ts", lineNumber: 21 });
})();

// src/app/components/auth/login-with-number/login-with-number.component.ts
var _c06 = () => ["/auth/register"];
function LoginWithNumberComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "phone_number_is_required"));
  }
}
function LoginWithNumberComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("iti-flag ", data_r2 == null ? null : data_r2.class, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.code);
  }
}
var LoginWithNumberComponent = class _LoginWithNumberComponent {
  constructor(store, router, authService, formBuilder) {
    this.store = store;
    this.router = router;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.codes = countryCodes;
    this.breadcrumb = {
      title: "Login With Number",
      items: [{ label: "Login With Number", active: true }]
    };
    this.form = this.formBuilder.group({
      phone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      country_code: new FormControl("91", [Validators.required])
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new LoginWithNumber(this.form.value)).subscribe({
        complete: () => {
          this.authService.otpType = "number";
          this.router.navigateByUrl("/auth/otp");
        }
      });
    }
  }
  static {
    this.\u0275fac = function LoginWithNumberComponent_Factory(t) {
      return new (t || _LoginWithNumberComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginWithNumberComponent, selectors: [["app-login-with-number"]], decls: 45, vars: 29, consts: [["template", ""], [3, "breadcrumb"], [1, "log-in-section", "section-b-space"], [1, "container-fluid-lg", "w-100"], [1, "row"], [1, "col-xxl-6", "col-xl-5", "col-lg-6", "d-lg-block", "d-none", "ms-auto"], [1, "image-contain"], ["src", "assets/images/inner-page/sign-up.png", "alt", "register", 1, "img-fluid"], [1, "col-xxl-4", "col-xl-5", "col-lg-6", "col-sm-8", "mx-auto"], [1, "log-in-box"], [1, "log-in-title"], [1, "input-box"], [1, "row", "g-4", 3, "ngSubmit", "formGroup"], [1, "col-12", "phone-field"], [1, "form-floating", "log-in-form"], ["type", "number", "id", "phone", "id", "phone", "formControlName", "phone", 1, "form-control", 3, "placeholder"], ["for", "phone"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "country_code", 1, "custom-select", "intl-tel-input", 3, "data", "templates"], [1, "col-12"], [3, "id"], [1, "other-log-in"], [1, "sign-up-box"], [3, "routerLink"], [1, "col-xxl-7", "col-xl-6", "col-lg-6"], [1, "invalid-feedback"], [1, "country"], [1, "flag-box"], [1, "dial-code"]], template: function LoginWithNumberComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-breadcrumb", 1);
        \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
        \u0275\u0275element(6, "img", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 8);
        \u0275\u0275element(8, "app-alert");
        \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "h3");
        \u0275\u0275text(12, "Welcome To kahuafashionclub");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "h4");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 11)(17, "form", 12);
        \u0275\u0275listener("ngSubmit", function LoginWithNumberComponent_Template_form_ngSubmit_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
        \u0275\u0275element(20, "input", 15);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementStart(22, "label", 16);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, LoginWithNumberComponent_div_25_Template, 3, 3, "div", 17);
        \u0275\u0275elementStart(26, "select2", 18);
        \u0275\u0275template(27, LoginWithNumberComponent_ng_template_27_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 19)(30, "app-button", 20);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 21)(34, "h6");
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 22)(38, "h4");
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "a", 23);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(44, "div", 24);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const template_r3 = \u0275\u0275reference(28);
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, "login_your_account"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(21, 16, "phone"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 18, "phone_number"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["required"]));
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.codes)("templates", template_r3);
        \u0275\u0275advance(4);
        \u0275\u0275property("id", "send_otp_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 20, "Send Otp"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 22, "or"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(40, 24, "don't_have_an_account"), "?");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(28, _c06));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 26, "sign_up"));
      }
    }, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, BreadcrumbComponent, AlertComponent, ButtonComponent, Select2, TranslatePipe] });
  }
};
__decorate([
  Select(SettingState.setting)
], LoginWithNumberComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginWithNumberComponent, { className: "LoginWithNumberComponent", filePath: "src\\app\\components\\auth\\login-with-number\\login-with-number.component.ts", lineNumber: 19 });
})();

// src/app/components/auth/auth-routing.module.ts
var routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "otp",
    component: OtpComponent
  },
  {
    path: "update-password",
    component: UpdatePasswordComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login-with-number",
    component: LoginWithNumberComponent
  }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static {
    this.\u0275fac = function AuthRoutingModule_Factory(t) {
      return new (t || _AuthRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/components/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static {
    this.\u0275fac = function AuthModule_Factory(t) {
      return new (t || _AuthModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      AuthRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      NgxsModule.forFeature([AuthState]),
      TranslateModule,
      RecaptchaModule,
      RecaptchaFormsModule
    ] });
  }
};
export {
  AuthModule
};
//# sourceMappingURL=chunk-DCFRS6LS.js.map
