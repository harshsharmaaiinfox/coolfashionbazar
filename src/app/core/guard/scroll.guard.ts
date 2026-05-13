import { Injectable } from '@angular/core';
import { Event, Scroll, Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollPositionGuard {

  private initialized = false;
  private previousUrl = '';

  constructor(private viewportScroller: ViewportScroller, private router: Router) {}

  canActivate(): boolean {
    if (!this.initialized) {
      this.initialized = true;

      // Track previous URL to detect same-page navigations
      this.router.events.pipe(
        filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd)
      ).subscribe((e) => {
        this.previousUrl = e.urlAfterRedirects;
      });

      this.router.events.pipe(
        filter((e: Event): e is Scroll => e instanceof Scroll)
      ).subscribe((e) => {
        const currentUrl = this.router.url;

        // Extract base path without query params for comparison
        const currentBase = currentUrl.split('?')[0];
        const previousBase = this.previousUrl.split('?')[0];

        // Check if both current and previous URLs are within collections
        const isCollectionsNav = currentBase.startsWith('/collections');
        const wasCollectionsNav = previousBase.startsWith('/collections');

        // Check if both current and previous URLs are within account
        const isAccountNav = currentBase.startsWith('/account');
        const wasAccountNav = previousBase.startsWith('/account');

        // Skip scrolling when staying within the same section (filter/sort/category changes)
        if ((isCollectionsNav && wasCollectionsNav) || (isAccountNav && wasAccountNav)) {
          return;
        }

        // Scroll to top for full page navigations
        this.viewportScroller.scrollToPosition([0, 0]);
      });
    }
    return true;
  }
}
