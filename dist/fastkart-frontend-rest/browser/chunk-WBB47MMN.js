import {
  Action,
  GetRefund,
  NotificationService,
  Selector,
  SendRefundRequest,
  State,
  Store,
  ViewOrder,
  environment
} from "./chunk-24LTJJML.js";
import {
  HttpClient,
  __decorate,
  __spreadProps,
  __spreadValues,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-MJNPSVHG.js";

// src/app/shared/action/notification.action.ts
var GetNotification = class {
  static {
    this.type = "[Notification] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var MarkAsReadNotification = class {
  static {
    this.type = "[Notification] Mark As Read";
  }
  constructor() {
  }
};
var DeleteNotification = class {
  static {
    this.type = "[Notification] Delete";
  }
  constructor(id) {
    this.id = id;
  }
};

// src/app/shared/state/notification.state.ts
var NotificationState = class NotificationState2 {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }
  static notification(state) {
    return state.notification.data;
  }
  getNotification(ctx, action) {
    return this.notificationService.getNotifications(action?.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          notification: {
            data: result.data,
            total: result?.total ? result?.total : result.data.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  markAsRead(ctx) {
    return this.notificationService.markAsReadNotification().pipe(tap({
      next: (result) => {
        ctx.patchState({
          notification: {
            data: result.data,
            total: result?.total ? result?.total : result.data.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  delete(ctx, { id }) {
    return this.notificationService.deleteNotification(id).pipe(tap({
      next: () => {
        const state = ctx.getState();
        let notification = state.notification.data.filter((value) => value.id !== id);
        ctx.patchState(__spreadProps(__spreadValues({}, state), {
          notification: {
            data: notification,
            total: state.notification.total - 1
          }
        }));
      },
      complete: () => {
        this.notificationService.showSuccess("Notification Deleted Successfully.");
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function NotificationState_Factory(t) {
      return new (t || NotificationState2)(\u0275\u0275inject(NotificationService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: NotificationState2, factory: NotificationState2.\u0275fac });
  }
};
__decorate([
  Action(GetNotification)
], NotificationState.prototype, "getNotification", null);
__decorate([
  Action(MarkAsReadNotification)
], NotificationState.prototype, "markAsRead", null);
__decorate([
  Action(DeleteNotification)
], NotificationState.prototype, "delete", null);
__decorate([
  Selector()
], NotificationState, "notification", null);
NotificationState = __decorate([
  State({
    name: "notification",
    defaults: {
      notification: {
        data: [],
        total: 0
      }
    }
  })
], NotificationState);

// src/app/shared/action/wallet.action.ts
var GetUserTransaction = class {
  static {
    this.type = "[Wallet] Transaction Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/wallet.service.ts
var WalletService = class _WalletService {
  constructor(http) {
    this.http = http;
  }
  getUserTransaction(payload) {
    return this.http.get(`${environment.URL}/wallet/consumer`, { params: payload });
  }
  static {
    this.\u0275fac = function WalletService_Factory(t) {
      return new (t || _WalletService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WalletService, factory: _WalletService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/state/wallet.state.ts
var WalletState = class WalletState2 {
  constructor(walletService) {
    this.walletService = walletService;
  }
  static wallet(state) {
    return state.wallet;
  }
  getUserTransations(ctx, { payload }) {
    return this.walletService.getUserTransaction(payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          wallet: {
            balance: result?.balance,
            transactions: {
              data: result?.transactions?.data,
              total: result?.transactions?.total ? result?.transactions?.total : result?.transactions?.data?.length
            }
          }
        });
      },
      error: (err) => {
        ctx.patchState({
          wallet: {
            balance: 0,
            transactions: {
              data: [],
              total: 0
            }
          }
        });
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function WalletState_Factory(t) {
      return new (t || WalletState2)(\u0275\u0275inject(WalletService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: WalletState2, factory: WalletState2.\u0275fac });
  }
};
__decorate([
  Action(GetUserTransaction)
], WalletState.prototype, "getUserTransations", null);
__decorate([
  Selector()
], WalletState, "wallet", null);
WalletState = __decorate([
  State({
    name: "wallet",
    defaults: {
      wallet: {
        balance: 0,
        transactions: {
          data: [],
          total: 0
        }
      }
    }
  })
], WalletState);

// src/app/shared/action/payment-details.action.ts
var GetPaymentDetails = class {
  static {
    this.type = "[Payment Details] Get";
  }
};
var UpdatePaymentDetails = class {
  static {
    this.type = "[Payment Details] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/payment-details.service.ts
var PaymentDetailsService = class _PaymentDetailsService {
  constructor(http) {
    this.http = http;
  }
  getPaymentAccount() {
    return this.http.get(`${environment.URL}/paymentAccount`);
  }
  updatePaymentAccount(payload) {
    return this.http.post(`${environment.URL}/paymentAccount`, payload);
  }
  static {
    this.\u0275fac = function PaymentDetailsService_Factory(t) {
      return new (t || _PaymentDetailsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentDetailsService, factory: _PaymentDetailsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/state/payment-details.state.ts
var PaymentDetailsState = class PaymentDetailsState2 {
  constructor(notificationService, PaymentDetailsService2) {
    this.notificationService = notificationService;
    this.PaymentDetailsService = PaymentDetailsService2;
  }
  static paymentDetails(state) {
    return state.paymentDetails;
  }
  getPaymentDetails(ctx) {
    return this.PaymentDetailsService.getPaymentAccount().pipe(tap({
      next: (result) => {
        ctx.patchState({
          paymentDetails: result
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  updatePaymentDetails(ctx, action) {
    return this.PaymentDetailsService.updatePaymentAccount(action.payload).pipe(tap({
      next: (result) => {
        if (typeof result === "object") {
          const state = ctx.getState();
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            paymentDetails: result
          }));
        }
      },
      complete: () => {
        this.notificationService.showSuccess("Account Details Updated Successfully.");
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function PaymentDetailsState_Factory(t) {
      return new (t || PaymentDetailsState2)(\u0275\u0275inject(NotificationService), \u0275\u0275inject(PaymentDetailsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: PaymentDetailsState2, factory: PaymentDetailsState2.\u0275fac });
  }
};
__decorate([
  Action(GetPaymentDetails)
], PaymentDetailsState.prototype, "getPaymentDetails", null);
__decorate([
  Action(UpdatePaymentDetails)
], PaymentDetailsState.prototype, "updatePaymentDetails", null);
__decorate([
  Selector()
], PaymentDetailsState, "paymentDetails", null);
PaymentDetailsState = __decorate([
  State({
    name: "paymentDetails",
    defaults: {
      paymentDetails: null
    }
  })
], PaymentDetailsState);

// src/app/shared/action/point.action.ts
var GetUserTransaction2 = class {
  static {
    this.type = "[Point] Transaction Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/point.service.ts
var PointService = class _PointService {
  constructor(http) {
    this.http = http;
  }
  getUserTransaction(payload) {
    return this.http.get(`${environment.URL}/points/consumer`, { params: payload });
  }
  static {
    this.\u0275fac = function PointService_Factory(t) {
      return new (t || _PointService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PointService, factory: _PointService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/state/point.state.ts
var PointState = class PointState2 {
  constructor(pointService) {
    this.pointService = pointService;
  }
  static point(state) {
    return state.point;
  }
  getUserTransaction(ctx, { payload }) {
    return this.pointService.getUserTransaction(payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          point: {
            balance: result?.balance,
            transactions: {
              data: result?.transactions?.data,
              total: result?.transactions?.total ? result?.transactions?.total : result?.transactions?.data?.length
            }
          }
        });
      },
      error: (err) => {
        ctx.patchState({
          point: {
            balance: 0,
            transactions: {
              data: [],
              total: 0
            }
          }
        });
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function PointState_Factory(t) {
      return new (t || PointState2)(\u0275\u0275inject(PointService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: PointState2, factory: PointState2.\u0275fac });
  }
};
__decorate([
  Action(GetUserTransaction2)
], PointState.prototype, "getUserTransaction", null);
__decorate([
  Selector()
], PointState, "point", null);
PointState = __decorate([
  State({
    name: "point",
    defaults: {
      point: {
        balance: 0,
        transactions: {
          data: [],
          total: 0
        }
      }
    }
  })
], PointState);

// src/app/shared/services/refund.service.ts
var RefundService = class _RefundService {
  constructor(http) {
    this.http = http;
  }
  getRefunds(payload) {
    return this.http.get(`${environment.URL}/refund`, { params: payload });
  }
  sendRefundRequest(payload) {
    return this.http.post(`${environment.URL}/refund`, payload);
  }
  updaterefundStatus(id, status) {
    return this.http.put(`${environment.URL}/refund/${id}`, { status });
  }
  static {
    this.\u0275fac = function RefundService_Factory(t) {
      return new (t || _RefundService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RefundService, factory: _RefundService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/state/refund.state.ts
var RefundState = class RefundState2 {
  constructor(refundService, store) {
    this.refundService = refundService;
    this.store = store;
  }
  static refund(state) {
    return state.refund;
  }
  getRefund(ctx, action) {
    return this.refundService.getRefunds(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          refund: {
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
  sendRefundStatus(ctx, action) {
    return this.refundService.sendRefundRequest(action.payload).pipe(tap({
      next: (result) => {
        if (typeof result === "object") {
          const state = ctx.getState();
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            refund: {
              data: [...state.refund.data, result],
              total: state.refund.total
            }
          }));
          this.store.dispatch(new ViewOrder(result.order_number));
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function RefundState_Factory(t) {
      return new (t || RefundState2)(\u0275\u0275inject(RefundService), \u0275\u0275inject(Store));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: RefundState2, factory: RefundState2.\u0275fac });
  }
};
__decorate([
  Action(GetRefund)
], RefundState.prototype, "getRefund", null);
__decorate([
  Action(SendRefundRequest)
], RefundState.prototype, "sendRefundStatus", null);
__decorate([
  Selector()
], RefundState, "refund", null);
RefundState = __decorate([
  State({
    name: "refund",
    defaults: {
      refund: {
        data: [],
        total: 0
      }
    }
  })
], RefundState);

// src/app/shared/action/download.action.ts
var Downloads = class {
  static {
    this.type = "[Download] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var DownloadFiles = class {
  static {
    this.type = "[Download] Files";
  }
  constructor(id) {
    this.id = id;
  }
};
var DownloadLicense = class {
  static {
    this.type = "[Download] License";
  }
  constructor(id) {
    this.id = id;
  }
};

// src/app/shared/services/download.service.ts
var DownloadService = class _DownloadService {
  constructor(http) {
    this.http = http;
  }
  downloads(payload) {
    return this.http.get(`${environment.URL}/download`, { params: payload });
  }
  downloadFiles(id) {
    return this.http.post(`${environment.URL}/download/zip/link`, { id });
  }
  downloadLicense(id) {
    return this.http.post(`${environment.URL}/download/key/link`, { id });
  }
  static {
    this.\u0275fac = function DownloadService_Factory(t) {
      return new (t || _DownloadService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DownloadService, factory: _DownloadService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/state/download.state.ts
var DownloadState = class DownloadState2 {
  constructor(downloadService) {
    this.downloadService = downloadService;
  }
  static download(state) {
    return state.download;
  }
  downloads(ctx, action) {
    return this.downloadService.downloads(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          download: {
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
  downloadFiles(ctx, action) {
    return this.downloadService.downloadFiles(action.id).pipe(tap({
      next: (result) => {
        if (result && result.download_link) {
          window.location.assign(result.download_link);
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  downloadLicense(ctx, action) {
    return this.downloadService.downloadLicense(action.id).pipe(tap({
      next: (result) => {
        if (result && result.download_link) {
          window.location.assign(result.download_link);
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function DownloadState_Factory(t) {
      return new (t || DownloadState2)(\u0275\u0275inject(DownloadService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: DownloadState2, factory: DownloadState2.\u0275fac });
  }
};
__decorate([
  Action(Downloads)
], DownloadState.prototype, "downloads", null);
__decorate([
  Action(DownloadFiles)
], DownloadState.prototype, "downloadFiles", null);
__decorate([
  Action(DownloadLicense)
], DownloadState.prototype, "downloadLicense", null);
__decorate([
  Selector()
], DownloadState, "download", null);
DownloadState = __decorate([
  State({
    name: "download",
    defaults: {
      download: {
        data: [],
        total: 0
      }
    }
  })
], DownloadState);

export {
  GetNotification,
  MarkAsReadNotification,
  NotificationState,
  GetUserTransaction,
  WalletState,
  GetPaymentDetails,
  UpdatePaymentDetails,
  PaymentDetailsState,
  GetUserTransaction2,
  PointState,
  RefundState,
  Downloads,
  DownloadFiles,
  DownloadLicense,
  DownloadState
};
//# sourceMappingURL=chunk-WBB47MMN.js.map
