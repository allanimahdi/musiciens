/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NEXT, PARENT, QUERIES } from './view';
/** *
 * Below are constants for LContainer indices to help us look up LContainer members
 * without having to remember the specific indices.
 * Uglify will inline these when minifying so there shouldn't be a cost.
  @type {?} */
export const ACTIVE_INDEX = 0;
/** @type {?} */
export const VIEWS = 4;
/** @type {?} */
export const RENDER_PARENT = 5;
/**
 * The state associated with an LContainerNode.
 *
 * This is an array so that its structure is closer to LViewData. This helps
 * when traversing the view tree (which is a mix of containers and component
 * views), so we can jump to viewOrContainer[NEXT] in the same way regardless
 * of type.
 * @record
 */
export function LContainer() { }
/** @type {?} */
export const unusedValueExportToPlacateAjd = 1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9pbnRlcmZhY2VzL2NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBWSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7O0FBT3hELGFBQWEsWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFHOUIsYUFBYSxLQUFLLEdBQUcsQ0FBQyxDQUFDOztBQUN2QixhQUFhLGFBQWEsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQXdFL0IsYUFBYSw2QkFBNkIsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TEVsZW1lbnROb2RlLCBMVmlld05vZGV9IGZyb20gJy4vbm9kZSc7XG5pbXBvcnQge0xRdWVyaWVzfSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB7TFZpZXdEYXRhLCBORVhULCBQQVJFTlQsIFFVRVJJRVN9IGZyb20gJy4vdmlldyc7XG5cbi8qKlxuICogQmVsb3cgYXJlIGNvbnN0YW50cyBmb3IgTENvbnRhaW5lciBpbmRpY2VzIHRvIGhlbHAgdXMgbG9vayB1cCBMQ29udGFpbmVyIG1lbWJlcnNcbiAqIHdpdGhvdXQgaGF2aW5nIHRvIHJlbWVtYmVyIHRoZSBzcGVjaWZpYyBpbmRpY2VzLlxuICogVWdsaWZ5IHdpbGwgaW5saW5lIHRoZXNlIHdoZW4gbWluaWZ5aW5nIHNvIHRoZXJlIHNob3VsZG4ndCBiZSBhIGNvc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBBQ1RJVkVfSU5ERVggPSAwO1xuLy8gUEFSRU5ULCBORVhULCBhbmQgUVVFUklFUyBhcmUgaW5kaWNlcyAxLCAyLCBhbmQgMy5cbi8vIEFzIHdlIGFscmVhZHkgaGF2ZSB0aGVzZSBjb25zdGFudHMgaW4gTFZpZXdEYXRhLCB3ZSBkb24ndCBuZWVkIHRvIHJlLWNyZWF0ZSB0aGVtLlxuZXhwb3J0IGNvbnN0IFZJRVdTID0gNDtcbmV4cG9ydCBjb25zdCBSRU5ERVJfUEFSRU5UID0gNTtcblxuLyoqXG4gKiBUaGUgc3RhdGUgYXNzb2NpYXRlZCB3aXRoIGFuIExDb250YWluZXJOb2RlLlxuICpcbiAqIFRoaXMgaXMgYW4gYXJyYXkgc28gdGhhdCBpdHMgc3RydWN0dXJlIGlzIGNsb3NlciB0byBMVmlld0RhdGEuIFRoaXMgaGVscHNcbiAqIHdoZW4gdHJhdmVyc2luZyB0aGUgdmlldyB0cmVlICh3aGljaCBpcyBhIG1peCBvZiBjb250YWluZXJzIGFuZCBjb21wb25lbnRcbiAqIHZpZXdzKSwgc28gd2UgY2FuIGp1bXAgdG8gdmlld09yQ29udGFpbmVyW05FWFRdIGluIHRoZSBzYW1lIHdheSByZWdhcmRsZXNzXG4gKiBvZiB0eXBlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIExDb250YWluZXIgZXh0ZW5kcyBBcnJheTxhbnk+IHtcbiAgLyoqXG4gICAqIFRoZSBuZXh0IGFjdGl2ZSBpbmRleCBpbiB0aGUgdmlld3MgYXJyYXkgdG8gcmVhZCBvciB3cml0ZSB0by4gVGhpcyBoZWxwcyB1c1xuICAgKiBrZWVwIHRyYWNrIG9mIHdoZXJlIHdlIGFyZSBpbiB0aGUgdmlld3MgYXJyYXkuXG4gICAqIEluIHRoZSBjYXNlIHRoZSBMQ29udGFpbmVyIGlzIGNyZWF0ZWQgZm9yIGEgVmlld0NvbnRhaW5lclJlZixcbiAgICogaXQgaXMgc2V0IHRvIG51bGwgdG8gaWRlbnRpZnkgdGhpcyBzY2VuYXJpbywgYXMgaW5kaWNlcyBhcmUgXCJhYnNvbHV0ZVwiIGluIHRoYXQgY2FzZSxcbiAgICogaS5lLiBwcm92aWRlZCBkaXJlY3RseSBieSB0aGUgdXNlciBvZiB0aGUgVmlld0NvbnRhaW5lclJlZiBBUEkuXG4gICAqL1xuICBbQUNUSVZFX0lOREVYXTogbnVtYmVyfG51bGw7XG5cbiAgLyoqXG4gICAqIEFjY2VzcyB0byB0aGUgcGFyZW50IHZpZXcgaXMgbmVjZXNzYXJ5IHNvIHdlIGNhbiBwcm9wYWdhdGUgYmFja1xuICAgKiB1cCBmcm9tIGluc2lkZSBhIGNvbnRhaW5lciB0byBwYXJlbnRbTkVYVF0uXG4gICAqL1xuICBbUEFSRU5UXTogTFZpZXdEYXRhfG51bGw7XG5cbiAgLyoqXG4gICAqIFRoaXMgYWxsb3dzIHVzIHRvIGp1bXAgZnJvbSBhIGNvbnRhaW5lciB0byBhIHNpYmxpbmcgY29udGFpbmVyIG9yIGNvbXBvbmVudFxuICAgKiB2aWV3IHdpdGggdGhlIHNhbWUgcGFyZW50LCBzbyB3ZSBjYW4gcmVtb3ZlIGxpc3RlbmVycyBlZmZpY2llbnRseS5cbiAgICovXG4gIFtORVhUXTogTFZpZXdEYXRhfExDb250YWluZXJ8bnVsbDtcblxuICAvKipcbiAgICogUXVlcmllcyBhY3RpdmUgZm9yIHRoaXMgY29udGFpbmVyIC0gYWxsIHRoZSB2aWV3cyBpbnNlcnRlZCB0byAvIHJlbW92ZWQgZnJvbVxuICAgKiB0aGlzIGNvbnRhaW5lciBhcmUgcmVwb3J0ZWQgdG8gcXVlcmllcyByZWZlcmVuY2VkIGhlcmUuXG4gICAqL1xuICBbUVVFUklFU106IExRdWVyaWVzfG51bGw7XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiB0aGUgY29udGFpbmVyJ3MgY3VycmVudGx5IGFjdGl2ZSBjaGlsZCB2aWV3cy4gVmlld3Mgd2lsbCBiZSBpbnNlcnRlZFxuICAgKiBoZXJlIGFzIHRoZXkgYXJlIGFkZGVkIGFuZCBzcGxpY2VkIGZyb20gaGVyZSB3aGVuIHRoZXkgYXJlIHJlbW92ZWQuIFdlIG5lZWRcbiAgICogdG8ga2VlcCBhIHJlY29yZCBvZiBjdXJyZW50IHZpZXdzIHNvIHdlIGtub3cgd2hpY2ggdmlld3MgYXJlIGFscmVhZHkgaW4gdGhlIERPTVxuICAgKiAoYW5kIGRvbid0IG5lZWQgdG8gYmUgcmUtYWRkZWQpIGFuZCBzbyB3ZSBjYW4gcmVtb3ZlIHZpZXdzIGZyb20gdGhlIERPTSB3aGVuIHRoZXlcbiAgICogYXJlIG5vIGxvbmdlciByZXF1aXJlZC5cbiAgICovXG4gIFtWSUVXU106IExWaWV3Tm9kZVtdO1xuXG4gIC8qKlxuICAgKiBQYXJlbnQgRWxlbWVudCB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIGxvY2F0aW9uIHdoZXJlIGFsbCBvZiB0aGUgVmlld3Mgd2lsbCBiZVxuICAgKiBpbnNlcnRlZCBpbnRvIHRvLlxuICAgKlxuICAgKiBJZiBgcmVuZGVyUGFyZW50YCBpcyBgbnVsbGAgaXQgaXMgaGVhZGxlc3MuIFRoaXMgbWVhbnMgdGhhdCBpdCBpcyBjb250YWluZWRcbiAgICogaW4gYW5vdGhlciBgTFZpZXdOb2RlYCB3aGljaCBpbiB0dXJuIGlzIGNvbnRhaW5lZCBpbiBhbm90aGVyIGBMQ29udGFpbmVyTm9kZWAgYW5kXG4gICAqIHRoZXJlZm9yZSBpdCBkb2VzIG5vdCB5ZXQgaGF2ZSBpdHMgb3duIHBhcmVudC5cbiAgICpcbiAgICogSWYgYHJlbmRlclBhcmVudGAgaXMgbm90IGBudWxsYCB0aGVuIGl0IG1heSBiZTpcbiAgICogLSBzYW1lIGFzIGBMQ29udGFpbmVyTm9kZS5wYXJlbnRgIGluIHdoaWNoIGNhc2UgaXQgaXMganVzdCBhIG5vcm1hbCBjb250YWluZXIuXG4gICAqIC0gZGlmZmVyZW50IGZyb20gYExDb250YWluZXJOb2RlLnBhcmVudGAgaW4gd2hpY2ggY2FzZSBpdCBoYXMgYmVlbiByZS1wcm9qZWN0ZWQuXG4gICAqICAgSW4gb3RoZXIgd29yZHMgYExDb250YWluZXJOb2RlLnBhcmVudGAgaXMgbG9naWNhbCBwYXJlbnQgd2hlcmUgYXNcbiAgICogICBgTENvbnRhaW5lci5wcm9qZWN0ZWRQYXJlbnRgIGlzIHJlbmRlciBwYXJlbnQuXG4gICAqXG4gICAqIFdoZW4gdmlld3MgYXJlIGluc2VydGVkIGludG8gYExDb250YWluZXJOb2RlYCB0aGVuIGByZW5kZXJQYXJlbnRgIGlzOlxuICAgKiAtIGBudWxsYCwgd2UgYXJlIGluIGBMVmlld05vZGVgIGtlZXAgZ29pbmcgdXAgYSBoaWVyYXJjaHkgdW50aWwgYWN0dWFsXG4gICAqICAgYHJlbmRlclBhcmVudGAgaXMgZm91bmQuXG4gICAqIC0gbm90IGBudWxsYCwgdGhlbiB1c2UgdGhlIGBwcm9qZWN0ZWRQYXJlbnQubmF0aXZlYCBhcyB0aGUgYFJFbGVtZW50YCB0byBpbnNlcnRcbiAgICogICBgTFZpZXdOb2RlYHMgaW50by5cbiAgICovXG4gIFtSRU5ERVJfUEFSRU5UXTogTEVsZW1lbnROb2RlfG51bGw7XG59XG5cbi8vIE5vdGU6IFRoaXMgaGFjayBpcyBuZWNlc3Nhcnkgc28gd2UgZG9uJ3QgZXJyb25lb3VzbHkgZ2V0IGEgY2lyY3VsYXIgZGVwZW5kZW5jeVxuLy8gZmFpbHVyZSBiYXNlZCBvbiB0eXBlcy5cbmV4cG9ydCBjb25zdCB1bnVzZWRWYWx1ZUV4cG9ydFRvUGxhY2F0ZUFqZCA9IDE7XG4iXX0=