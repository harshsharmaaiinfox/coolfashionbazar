import {
  Action,
  Selector,
  State,
  environment
} from "./chunk-24LTJJML.js";
import {
  HttpClient,
  __decorate,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-MJNPSVHG.js";

// src/app/shared/action/tag.action.ts
var GetTags = class {
  static {
    this.type = "[Tag] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/tag.service.ts
var TagService = class _TagService {
  constructor(http) {
    this.http = http;
  }
  getTags(payload) {
    return this.http.get(`${environment.URL}/tag`, { params: payload });
  }
  static {
    this.\u0275fac = function TagService_Factory(t) {
      return new (t || _TagService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TagService, factory: _TagService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/state/tag.state.ts
var TagState = class TagState2 {
  constructor(tagService) {
    this.tagService = tagService;
  }
  static tag(state) {
    return state.tag;
  }
  getTags(ctx, action) {
    return this.tagService.getTags(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          tag: {
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
    this.\u0275fac = function TagState_Factory(t) {
      return new (t || TagState2)(\u0275\u0275inject(TagService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: TagState2, factory: TagState2.\u0275fac });
  }
};
__decorate([
  Action(GetTags)
], TagState.prototype, "getTags", null);
__decorate([
  Selector()
], TagState, "tag", null);
TagState = __decorate([
  State({
    name: "tag",
    defaults: {
      tag: {
        data: [],
        total: 0
      }
    }
  })
], TagState);

export {
  GetTags,
  TagState
};
//# sourceMappingURL=chunk-Q3RMF2HO.js.map
