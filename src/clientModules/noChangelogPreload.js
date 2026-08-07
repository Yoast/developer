/**
 * Prevents Docusaurus from preloading changelog route chunks on mouseover.
 *
 * Docusaurus's <Link> component calls window.docusaurus.preload() on
 * onMouseEnter/onTouchStart, which eagerly loads ALL JS chunks for the
 * target route. With 9 changelog products, each with many posts, this means
 * hovering over a changelog link triggers a large number of chunk downloads.
 *
 * This patches preload (and prefetch) to be a no-op for changelog routes.
 * Chunks are still loaded normally on actual navigation (click).
 */

if (typeof document !== 'undefined') {
  const MAX_ATTEMPTS = 60; // ~1s at 60fps

  /**
   * Patches window.docusaurus — retries until it's initialized.
   */
  function patch(attempt = 0) {
    if (!window.docusaurus) {
      if (attempt < MAX_ATTEMPTS) {
        requestAnimationFrame(() => patch(attempt + 1));
      }
      return;
    }

    const originalPreload = window.docusaurus.preload;
    const originalPrefetch = window.docusaurus.prefetch;

    function isChangelogRoute(path) {
      return typeof path === 'string' && path.startsWith('/changelog/');
    }

    window.docusaurus = Object.freeze({
      ...window.docusaurus,
      preload(routePath) {
        if (isChangelogRoute(routePath)) {
          return Promise.resolve();
        }
        return originalPreload(routePath);
      },
      prefetch(routePath) {
        if (isChangelogRoute(routePath)) {
          return false;
        }
        return originalPrefetch(routePath);
      },
    });
  }

  // window.docusaurus may not exist yet when clientModules are evaluated
  // (webpack static import hoisting). Defer with requestAnimationFrame and
  // retry until ready so clientEntry.js has had a chance to set it up.
  requestAnimationFrame(() => patch());
}
