import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  PatternValidator,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-UJVGNNHA.js";
import {
  CommonModule,
  NgIf,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-MJNPSVHG.js";

// src/app/contact-us/contact-us.component.ts
function ContactUsComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, " Only letters and spaces allowed ");
    \u0275\u0275elementEnd();
  }
}
function ContactUsComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, " Enter a valid email ");
    \u0275\u0275elementEnd();
  }
}
function ContactUsComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, " Must be 10 digits ");
    \u0275\u0275elementEnd();
  }
}
function ContactUsComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, " Please enter a message ");
    \u0275\u0275elementEnd();
  }
}
var ContactUsComponent = class _ContactUsComponent {
  constructor(fb) {
    this.fb = fb;
    this.contactForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern("^[A-Za-z ]+$")]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      message: ["", Validators.required]
    });
  }
  filterSpecialCharacters(event, fieldName) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.contactForm.get(fieldName)?.setValue(filteredValue);
    }
  }
  filterEmailCharacters(event) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/[^a-zA-Z0-9._\-+@]/g, "");
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.contactForm.get("email")?.setValue(filteredValue);
    }
  }
  filterPhoneNumber(event) {
    const input = event.target;
    const value = input.value;
    const filteredValue = value.replace(/\D/g, "").slice(0, 10);
    if (value !== filteredValue) {
      input.value = filteredValue;
      this.contactForm.get("phone")?.setValue(filteredValue);
    }
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log("Form submitted", this.contactForm.value);
      alert("Form submitted successfully!");
      this.contactForm.reset();
    } else {
      alert("Please fill all fields correctly before submitting.");
    }
  }
  static {
    this.\u0275fac = function ContactUsComponent_Factory(t) {
      return new (t || _ContactUsComponent)(\u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactUsComponent, selectors: [["app-contact-us"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 98, vars: 6, consts: [[1, "kfc-hero"], [1, "container-fluid-lg"], [1, "kfc-hero-inner"], [1, "kfc-eyebrow"], [1, "kfc-hero-sub"], [1, "kfc-cards"], [1, "kfc-cards-grid"], [1, "kfc-card"], [1, "ri-mail-line"], ["href", "mailto: info@kahuafashionclub.com"], [1, "ri-phone-line"], ["href", "tel:+918368711465"], [1, "ri-map-pin-line"], [1, "kfc-main"], [1, "kfc-layout"], [1, "kfc-form-side"], [3, "ngSubmit", "formGroup"], [1, "kfc-field"], ["type", "text", "placeholder", "Your full name", "formControlName", "name", "pattern", "[a-zA-Z\\s]+", 3, "input"], ["class", "kfc-error", 4, "ngIf"], [1, "kfc-field-row"], ["type", "email", "placeholder", "you@example.com", "formControlName", "email", "pattern", "[a-zA-Z0-9._\\-+@]+", 3, "input"], ["type", "tel", "placeholder", "10-digit number", "formControlName", "phone", "maxlength", "10", "pattern", "[0-9]{10}", 3, "input"], ["placeholder", "How can we help?", "rows", "5", "formControlName", "message"], ["type", "submit", 1, "kfc-submit", 3, "disabled"], [1, "kfc-info-side"], [1, "kfc-table"], [1, "kfc-td-label"], ["href", "https://kahuafashionclub.com/", "target", "_blank"], [1, "kfc-error"]], template: function ContactUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4, "Get In Touch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "We'd love to");
        \u0275\u0275element(7, "br");
        \u0275\u0275text(8, "hear from you");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 4);
        \u0275\u0275text(10, "Questions, feedback, or just want to say hello? Reach out and we'll get back to you within 24 hours.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "section", 5)(12, "div", 1)(13, "div", 6)(14, "div", 7);
        \u0275\u0275element(15, "i", 8);
        \u0275\u0275elementStart(16, "h4");
        \u0275\u0275text(17, "Email Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 9);
        \u0275\u0275text(19, " info@kahuafashionclub.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 7);
        \u0275\u0275element(21, "i", 10);
        \u0275\u0275elementStart(22, "h4");
        \u0275\u0275text(23, "Call Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "a", 11);
        \u0275\u0275text(25, "+91 83687 11465");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 7);
        \u0275\u0275element(27, "i", 12);
        \u0275\u0275elementStart(28, "h4");
        \u0275\u0275text(29, "Visit Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31, "FF-202, Gaur City Center\nGreater Noida, Gautam Buddh Nagar");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(32, "section", 13)(33, "div", 1)(34, "div", 14)(35, "div", 15)(36, "p", 3);
        \u0275\u0275text(37, "Send a Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "h2");
        \u0275\u0275text(39, "Drop us a line");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "form", 16);
        \u0275\u0275listener("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_40_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(41, "div", 17)(42, "label");
        \u0275\u0275text(43, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "input", 18);
        \u0275\u0275listener("input", function ContactUsComponent_Template_input_input_44_listener($event) {
          return ctx.filterSpecialCharacters($event, "name");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, ContactUsComponent_span_45_Template, 2, 0, "span", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 20)(47, "div", 17)(48, "label");
        \u0275\u0275text(49, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "input", 21);
        \u0275\u0275listener("input", function ContactUsComponent_Template_input_input_50_listener($event) {
          return ctx.filterEmailCharacters($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(51, ContactUsComponent_span_51_Template, 2, 0, "span", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 17)(53, "label");
        \u0275\u0275text(54, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "input", 22);
        \u0275\u0275listener("input", function ContactUsComponent_Template_input_input_55_listener($event) {
          return ctx.filterPhoneNumber($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(56, ContactUsComponent_span_56_Template, 2, 0, "span", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 17)(58, "label");
        \u0275\u0275text(59, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "textarea", 23);
        \u0275\u0275template(61, ContactUsComponent_span_61_Template, 2, 0, "span", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "button", 24);
        \u0275\u0275text(63, " Send Message ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 25)(65, "p", 3);
        \u0275\u0275text(66, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "h2");
        \u0275\u0275text(68, "Kahua Systems Pvt Ltd");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "table", 26)(70, "tr")(71, "td", 27);
        \u0275\u0275text(72, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "td");
        \u0275\u0275text(74, "KAHUA SYSTEMS PRIVATE LIMITED");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "tr")(76, "td", 27);
        \u0275\u0275text(77, "Website");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "td")(79, "a", 28);
        \u0275\u0275text(80, "kahuafashionclub.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "tr")(82, "td", 27);
        \u0275\u0275text(83, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "td")(85, "a", 9);
        \u0275\u0275text(86, " info@kahuafashionclub.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "tr")(88, "td", 27);
        \u0275\u0275text(89, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "td")(91, "a", 11);
        \u0275\u0275text(92, "+91 83687 11465");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(93, "tr")(94, "td", 27);
        \u0275\u0275text(95, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "td");
        \u0275\u0275text(97, "KAHUA SYSTEMS PRIVATE LIMITED\nFF-202, Gaur City Center\nGreater Noida, Gautam Buddh Nagar\nUttar Pradesh - 201301");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(40);
        \u0275\u0275property("formGroup", ctx.contactForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.touched));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.contactForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.contactForm.get("email")) == null ? null : tmp_2_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.contactForm.get("phone")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.contactForm.get("phone")) == null ? null : tmp_3_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.contactForm.get("message")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.contactForm.get("message")) == null ? null : tmp_4_0.touched));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.contactForm.invalid);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, FormGroupDirective, FormControlName], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family: inherit;\n}\n.kfc-hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 80px 0 72px;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  overflow: hidden;\n}\n.kfc-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -60px;\n  right: 5%;\n  width: 360px;\n  height: 360px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(30, 127, 201, 0.26) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.kfc-hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -40px;\n  left: -20px;\n  width: 260px;\n  height: 260px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(179, 138, 72, 0.12) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n@media (max-width: 768px) {\n  .kfc-hero[_ngcontent-%COMP%] {\n    padding: 56px 0 52px;\n  }\n}\n.kfc-hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 640px;\n}\n.kfc-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 10.5px;\n  font-weight: 800;\n  letter-spacing: 3.5px;\n  text-transform: uppercase;\n  color: #B38A48;\n  margin: 0 0 18px;\n}\n.kfc-eyebrow[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 22px;\n  height: 2px;\n  background: #B38A48;\n  border-radius: 2px;\n}\n.kfc-hero[_ngcontent-%COMP%]   .kfc-eyebrow[_ngcontent-%COMP%] {\n  color: #B38A48;\n}\n.kfc-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 56px !important;\n  font-weight: 900 !important;\n  color: #fff !important;\n  line-height: 1 !important;\n  margin: 0 0 20px !important;\n  letter-spacing: -2px;\n}\n@media (max-width: 768px) {\n  .kfc-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px !important;\n    letter-spacing: -1.2px;\n  }\n}\n@media (max-width: 480px) {\n  .kfc-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n  }\n}\n.kfc-hero-sub[_ngcontent-%COMP%] {\n  font-size: 15.5px;\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 1.72;\n  margin: 0;\n  max-width: 520px;\n}\n.kfc-cards[_ngcontent-%COMP%] {\n  padding: 0;\n  background: #F8F9FB;\n  position: relative;\n  z-index: 2;\n  margin-top: -40px;\n}\n.kfc-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  padding: 0 0 60px;\n}\n@media (max-width: 768px) {\n  .kfc-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n    padding-bottom: 48px;\n  }\n}\n.kfc-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E6E8EC;\n  border-radius: 20px;\n  padding: 28px 26px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 14px 36px rgba(15, 23, 32, 0.09);\n  transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n  position: relative;\n  overflow: hidden;\n}\n.kfc-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 24px;\n  right: 24px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #1E7FC9,\n      #B38A48);\n  border-radius: 0 0 3px 3px;\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.kfc-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: rgba(30, 127, 201, 0.25);\n  box-shadow: 0 4px 10px rgba(15, 23, 32, 0.05), 0 24px 56px rgba(30, 127, 201, 0.18);\n}\n.kfc-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.kfc-card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  background: #1E7FC9 !important;\n  border-color: #135a95 !important;\n  color: #fff !important;\n  transform: scale(1.1) rotate(-8deg);\n  box-shadow: 0 8px 20px rgba(30, 127, 201, 0.4);\n}\n.kfc-card[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%] {\n  color: #1E7FC9 !important;\n}\n.kfc-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px !important;\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  background: #EAF3FB;\n  border: 1px solid rgba(30, 127, 201, 0.2);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #1E7FC9 !important;\n  transition: all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);\n  flex-shrink: 0;\n}\n.kfc-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  font-weight: 800 !important;\n  color: #0F1720 !important;\n  margin: 0 !important;\n  letter-spacing: -0.2px;\n  transition: color 0.3s ease;\n}\n.kfc-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .kfc-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #6B7280;\n  text-decoration: none;\n  line-height: 1.5;\n  white-space: pre-line;\n}\n.kfc-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .kfc-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #1E7FC9;\n}\n.kfc-main[_ngcontent-%COMP%] {\n  padding: 0 0 80px;\n  background: #F8F9FB;\n}\n@media (max-width: 768px) {\n  .kfc-main[_ngcontent-%COMP%] {\n    padding: 0 0 60px;\n  }\n}\n.kfc-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 36px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .kfc-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n}\n.kfc-form-side[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E6E8EC;\n  border-radius: 22px;\n  padding: 36px 36px 32px;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 14px 36px rgba(15, 23, 32, 0.08);\n}\n.kfc-form-side[_ngcontent-%COMP%]   .kfc-eyebrow[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.kfc-form-side[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px !important;\n  font-weight: 800 !important;\n  color: #0F1720 !important;\n  letter-spacing: -0.7px;\n  margin: 0 0 28px !important;\n}\n@media (max-width: 480px) {\n  .kfc-form-side[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px !important;\n  }\n}\n.kfc-form-side[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n@media (max-width: 575px) {\n  .kfc-form-side[_ngcontent-%COMP%] {\n    padding: 24px 20px 22px;\n    border-radius: 18px;\n  }\n}\n.kfc-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.kfc-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  font-weight: 800 !important;\n  letter-spacing: 2px !important;\n  text-transform: uppercase;\n  color: #0F1720;\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.kfc-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .kfc-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  padding: 0 16px !important;\n  border: 1.5px solid #D1D5DB !important;\n  border-radius: 12px !important;\n  font-size: 14px !important;\n  font-weight: 600;\n  color: #0F1720 !important;\n  background: #F8F9FB !important;\n  font-family: inherit;\n  outline: none !important;\n  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1) !important;\n  box-shadow: 0 1px 3px rgba(15, 23, 32, 0.04) !important;\n}\n.kfc-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .kfc-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #D1D5DB !important;\n  font-size: 13.5px !important;\n}\n.kfc-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .kfc-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #1E7FC9 !important;\n  background: #FFFFFF !important;\n  box-shadow: 0 0 0 4px rgba(30, 127, 201, 0.12), 0 4px 12px rgba(30, 127, 201, 0.08) !important;\n  transform: translateY(-1px);\n}\n.kfc-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: auto;\n  padding: 14px 16px !important;\n  resize: vertical;\n  min-height: 120px;\n  line-height: 1.65;\n}\n.kfc-field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 480px) {\n  .kfc-field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.kfc-error[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #E7475A;\n  padding: 6px 12px;\n  background: #FDECEE;\n  border: 1px solid rgba(231, 71, 90, 0.25);\n  border-radius: 8px;\n  animation: _ngcontent-%COMP%_kfcErrIn 0.3s ease;\n}\n.kfc-error[_ngcontent-%COMP%]::before {\n  content: "\\ec07";\n  font-family: "remixicon";\n  font-size: 13px;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_kfcErrIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.kfc-submit[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  height: 56px;\n  padding: 0 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #1E7FC9 0%,\n      #135a95 100%);\n  color: #fff;\n  border: none;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 2.5px;\n  text-transform: uppercase;\n  cursor: pointer;\n  overflow: hidden;\n  align-self: flex-start;\n  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);\n  box-shadow: 0 4px 12px rgba(30, 127, 201, 0.28), 0 14px 32px rgba(30, 127, 201, 0.2);\n}\n.kfc-submit[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0F1720 0%,\n      #2B3240 100%);\n  transform: translateX(-101%);\n  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.kfc-submit[_ngcontent-%COMP%]::after {\n  content: "\\ed30";\n  font-family: "remixicon";\n  font-size: 16px;\n  position: relative;\n  z-index: 1;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.kfc-submit[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.kfc-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(15, 23, 32, 0.25), 0 18px 40px rgba(15, 23, 32, 0.2);\n}\n.kfc-submit[_ngcontent-%COMP%]:hover:not(:disabled)::before {\n  transform: translateX(0);\n}\n.kfc-submit[_ngcontent-%COMP%]:hover:not(:disabled)::after {\n  transform: translateX(4px) rotate(-8deg);\n}\n.kfc-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 480px) {\n  .kfc-submit[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.kfc-info-side[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E6E8EC;\n  border-radius: 22px;\n  padding: 36px 36px 32px;\n  box-shadow: 0 2px 4px rgba(15, 23, 32, 0.03), 0 14px 36px rgba(15, 23, 32, 0.08);\n}\n.kfc-info-side[_ngcontent-%COMP%]   .kfc-eyebrow[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.kfc-info-side[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px !important;\n  font-weight: 800 !important;\n  color: #0F1720 !important;\n  letter-spacing: -0.4px;\n  margin: 0 0 24px !important;\n}\n@media (max-width: 575px) {\n  .kfc-info-side[_ngcontent-%COMP%] {\n    padding: 24px 20px 22px;\n    border-radius: 18px;\n  }\n}\n.kfc-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.kfc-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #E6E8EC;\n  transition: background 0.2s ease;\n}\n.kfc-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.kfc-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(30, 127, 201, 0.025);\n}\n.kfc-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 6px;\n  font-size: 13.5px;\n  vertical-align: top;\n  line-height: 1.65;\n  white-space: pre-line;\n  color: #2B3240;\n}\n.kfc-table[_ngcontent-%COMP%]   .kfc-td-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #6B7280;\n  width: 90px;\n  padding-top: 16px;\n  white-space: nowrap;\n  vertical-align: top;\n}\n.kfc-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1E7FC9;\n  text-decoration: none;\n  font-weight: 700;\n}\n.kfc-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .kfc-cards[_ngcontent-%COMP%] {\n    margin-top: -28px;\n  }\n  .kfc-cards-grid[_ngcontent-%COMP%] {\n    padding-bottom: 36px;\n  }\n  .kfc-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px !important;\n  }\n  .kfc-hero-sub[_ngcontent-%COMP%] {\n    font-size: 14.5px;\n  }\n}\n@media (max-width: 480px) {\n  .kfc-card[_ngcontent-%COMP%] {\n    padding: 22px 20px;\n    border-radius: 16px;\n  }\n  .kfc-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n    border-radius: 12px;\n    font-size: 19px !important;\n  }\n  .kfc-submit[_ngcontent-%COMP%] {\n    height: 52px;\n    font-size: 11.5px;\n  }\n}\n/*# sourceMappingURL=contact-us.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactUsComponent, { className: "ContactUsComponent", filePath: "src\\app\\contact-us\\contact-us.component.ts", lineNumber: 12 });
})();

// src/app/contact-us/contact-us-routing.module.ts
var routes = [
  { path: "", component: ContactUsComponent }
];
var ContactUsRoutingModule = class _ContactUsRoutingModule {
  static {
    this.\u0275fac = function ContactUsRoutingModule_Factory(t) {
      return new (t || _ContactUsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactUsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/contact-us/contact-us.module.ts
var ContactUsModule = class _ContactUsModule {
  static {
    this.\u0275fac = function ContactUsModule_Factory(t) {
      return new (t || _ContactUsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactUsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ContactUsRoutingModule
    ] });
  }
};
export {
  ContactUsModule
};
//# sourceMappingURL=chunk-REPG4ERR.js.map
