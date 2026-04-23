import {
  Action,
  Checkout,
  DownloadInvoice,
  GetOrders,
  NotificationService,
  OrderTracking,
  PlaceOrder,
  RePayment,
  Selector,
  State,
  ViewOrder,
  environment
} from "./chunk-24LTJJML.js";
import {
  HttpClient,
  Router,
  __decorate,
  __spreadProps,
  __spreadValues,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-MJNPSVHG.js";

// src/app/shared/services/order.service.ts
var OrderService = class _OrderService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getOrders(payload) {
    return this.http.get(`${environment.URL}/order`, { params: payload });
  }
  viewOrder(id) {
    return this.http.get(`${environment.URL}/order/${id}`);
  }
  checkout(payload) {
    return this.http.post(`${environment.URL}/checkout`, payload);
  }
  placeOrder(payload) {
    return this.http.post(`${environment.URL}/order`, payload);
  }
  rePayment(payload) {
    if (!payload.payment_method || !payload.order_number) {
      console.error("rePayment: Invalid payload - missing required fields", payload);
      throw new Error("Payment method and order number are required");
    }
    console.log("rePayment: Sending payload to backend", {
      url: `${environment.URL}/rePayment`,
      payload
    });
    return this.http.post(`${environment.URL}/rePayment`, payload);
  }
  orderTracking(payload) {
    return this.http.get(`${environment.URL}/trackOrder`, { params: payload });
  }
  downloadInvoice(payload) {
    const requestBody = {};
    return this.http.post(`${environment.URL}/order/invoice`, payload, {
      responseType: "blob"
    });
  }
  static {
    this.\u0275fac = function OrderService_Factory(t) {
      return new (t || _OrderService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/state/order.state.ts
var OrderState = class OrderState2 {
  constructor(notificationService, router, orderService) {
    this.notificationService = notificationService;
    this.router = router;
    this.orderService = orderService;
  }
  static order(state) {
    return state.order;
  }
  static selectedOrder(state) {
    return state.selectedOrder;
  }
  static checkout(state) {
    return state.checkout;
  }
  getOrders(ctx, action) {
    return this.orderService.getOrders(action?.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          order: {
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
  viewOrder(ctx, { id }) {
    this.orderService.skeletonLoader = true;
    return this.orderService.viewOrder(id).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          selectedOrder: result
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      },
      complete: () => {
        this.orderService.skeletonLoader = false;
      }
    }));
  }
  checkout(ctx, action) {
    return this.orderService.checkout(action?.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          checkout: result
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  placeOrder(ctx, action) {
    return this.orderService.placeOrder(action?.payload).pipe(tap({
      next: (result) => {
        if ((action.payload.payment_method == "cod" || action.payload.payment_method == "cash_free" || action.payload.payment_method == "sub_paisa" || action.payload.payment_method == "zyaada_pay" || action.payload.payment_method == "bank_transfer" || action.payload.payment_method == "neoKred" || action.payload.payment_method == "ease_buzz" || action.payload.payment_method == "neoKred2" || action.payload.payment_method == "mangal fashion_nabu" || action.payload.payment_method == "pay_drill" || action.payload.payment_method == "star_mangal") && !result.is_guest) {
          this.router.navigateByUrl(`/account/order/details/${result.order_number}`);
        } else if ((action.payload.payment_method == "cod" || action.payload.payment_method == "cash_free" || action.payload.payment_method == "sub_paisa" || action.payload.payment_method == "zyaada_pay" || action.payload.payment_method == "bank_transfer" || action.payload.payment_method == "neoKred" || action.payload.payment_method == "ease_buzz" || action.payload.payment_method == "neoKred2" || action.payload.payment_method == "mangal fashion_nabu" || action.payload.payment_method == "pay_drill" || action.payload.payment_method == "star_mangal") && result.is_guest) {
          this.router.navigate(["order/details"], { queryParams: { order_number: result.order_number, email_or_phone: action?.payload.email } });
        } else {
          window.open(result.url, "_self");
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  rePayment(ctx, action) {
    if (!action.payload.payment_method || !action.payload.order_number) {
      console.error("RePayment payload validation failed:", action.payload);
      this.notificationService.showError("Payment method and order number are required");
      return;
    }
    console.log("RePayment action payload:", action.payload);
    return this.orderService.rePayment(action.payload).pipe(tap({
      next: (result) => {
        console.log("RePayment success result:", result);
        if ((action.payload.payment_method == "cod" || action.payload.payment_method == "bank_transfer") && !result.is_guest) {
          this.router.navigateByUrl(`/account/order/details/${result.order_number}`);
        } else if ((action.payload.payment_method == "cod" || action.payload.payment_method == "bank_transfer") && result.is_guest) {
          this.router.navigate(["order/details"], { queryParams: { order_number: result.order_number, email_or_phone: result.email } });
        } else {
          window.open(result.url, "_self");
        }
      },
      error: (err) => {
        console.error("RePayment error details:", {
          error: err,
          errorMessage: err?.error?.message,
          errorResponse: err?.error,
          payload: action.payload
        });
        const errorMessage = err?.error?.message || "Payment processing failed. Please try again.";
        this.notificationService.showError(errorMessage);
        throw new Error(errorMessage);
      }
    }));
  }
  orderTracking(ctx, action) {
    this.notificationService.notification = false;
    return this.orderService.orderTracking(action.payload).pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          selectedOrder: result
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  downloadInvoice(ctx, action) {
    return this.orderService.downloadInvoice(action.payload).pipe(tap({
      next: (result) => {
        const blob = new Blob([result], { type: "pdf" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `invoice-${action.payload["order_number"]}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function OrderState_Factory(t) {
      return new (t || OrderState2)(\u0275\u0275inject(NotificationService), \u0275\u0275inject(Router), \u0275\u0275inject(OrderService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: OrderState2, factory: OrderState2.\u0275fac });
  }
};
__decorate([
  Action(GetOrders)
], OrderState.prototype, "getOrders", null);
__decorate([
  Action(ViewOrder)
], OrderState.prototype, "viewOrder", null);
__decorate([
  Action(Checkout)
], OrderState.prototype, "checkout", null);
__decorate([
  Action(PlaceOrder)
], OrderState.prototype, "placeOrder", null);
__decorate([
  Action(RePayment)
], OrderState.prototype, "rePayment", null);
__decorate([
  Action(OrderTracking)
], OrderState.prototype, "orderTracking", null);
__decorate([
  Action(DownloadInvoice)
], OrderState.prototype, "downloadInvoice", null);
__decorate([
  Selector()
], OrderState, "order", null);
__decorate([
  Selector()
], OrderState, "selectedOrder", null);
__decorate([
  Selector()
], OrderState, "checkout", null);
OrderState = __decorate([
  State({
    name: "order",
    defaults: {
      order: {
        data: [],
        total: 0
      },
      selectedOrder: null,
      checkout: null
    }
  })
], OrderState);

// src/app/shared/action/state.action.ts
var GetStates = class {
  static {
    this.type = "[State] Get";
  }
  constructor(country_id) {
    this.country_id = country_id;
  }
};

// src/app/shared/services/state.service.ts
var StateService = class _StateService {
  constructor(http) {
    this.http = http;
  }
  getStates() {
    return this.http.get(`${environment.URL}/state`);
  }
  static {
    this.\u0275fac = function StateService_Factory(t) {
      return new (t || _StateService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StateService, factory: _StateService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/state/state.state.ts
var StateState = class StateState2 {
  constructor(stateService) {
    this.stateService = stateService;
  }
  static state(state) {
    return state.state;
  }
  static states(state) {
    return (country_id) => {
      if (country_id)
        return state.state.data.filter((element) => element.country_id == country_id).map((st) => {
          return { label: st?.name, value: st?.id, country_id: st?.country_id };
        });
      else
        return state.state.data.map((st) => {
          return { label: st?.name, value: st?.id, country_id: st?.country_id };
        });
    };
  }
  getStates(ctx, action) {
    const state = ctx.getState();
    if (state?.state?.data?.length) {
      return true;
    }
    return this.stateService.getStates().pipe(tap({
      next: (result) => {
        ctx.patchState({
          state: {
            data: result
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function StateState_Factory(t) {
      return new (t || StateState2)(\u0275\u0275inject(StateService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: StateState2, factory: StateState2.\u0275fac });
  }
};
__decorate([
  Action(GetStates)
], StateState.prototype, "getStates", null);
__decorate([
  Selector()
], StateState, "state", null);
__decorate([
  Selector()
], StateState, "states", null);
StateState = __decorate([
  State({
    name: "state",
    defaults: {
      state: {
        data: []
      }
    }
  })
], StateState);

// src/app/shared/action/order-status.action.ts
var GetOrderStatus = class {
  static {
    this.type = "[Order Status] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/order-status.service.ts
var OrderStatusService = class _OrderStatusService {
  constructor(http) {
    this.http = http;
  }
  getOrderStatus(payload) {
    return this.http.get(`${environment.URL}/orderStatus`, { params: payload });
  }
  static {
    this.\u0275fac = function OrderStatusService_Factory(t) {
      return new (t || _OrderStatusService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderStatusService, factory: _OrderStatusService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/state/order-status.state.ts
var OrderStatusState = class OrderStatusState2 {
  constructor(orderStatusService) {
    this.orderStatusService = orderStatusService;
  }
  static orderStatus(state) {
    return state.orderStatus;
  }
  static orderStatuses(state) {
    return state.orderStatus.data.map((res) => {
      return { label: res?.name, value: res?.id };
    });
  }
  static selectedOrderStatus(state) {
    return state.selectedOrderStatus;
  }
  getOrderStatus(ctx, action) {
    return this.orderStatusService.getOrderStatus(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          orderStatus: {
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
  static {
    this.\u0275fac = function OrderStatusState_Factory(t) {
      return new (t || OrderStatusState2)(\u0275\u0275inject(OrderStatusService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: OrderStatusState2, factory: OrderStatusState2.\u0275fac });
  }
};
__decorate([
  Action(GetOrderStatus)
], OrderStatusState.prototype, "getOrderStatus", null);
__decorate([
  Selector()
], OrderStatusState, "orderStatus", null);
__decorate([
  Selector()
], OrderStatusState, "orderStatuses", null);
__decorate([
  Selector()
], OrderStatusState, "selectedOrderStatus", null);
OrderStatusState = __decorate([
  State({
    name: "orderStatus",
    defaults: {
      orderStatus: {
        data: [],
        total: 0
      },
      selectedOrderStatus: null
    }
  })
], OrderStatusState);

export {
  OrderService,
  OrderState,
  GetStates,
  StateState,
  GetOrderStatus,
  OrderStatusState
};
//# sourceMappingURL=chunk-TEOEL2A5.js.map
