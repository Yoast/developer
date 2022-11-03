import React from 'react';
import {useWindowSize} from '@docusaurus/theme-common';
import BlogSidebarDesktop from '@theme/BlogSidebar/Desktop';
import BlogSidebarMobile from '@theme/BlogSidebar/Mobile';
export default function BlogSidebar({sidebar}) {
  if (!sidebar?.items.length) {
    return null;
  }
  const windowSize = useWindowSize();
  // Desktop sidebar visible on hydration: need SSR rendering
  const shouldRenderSidebarDesktop =
      windowSize === 'desktop' || windowSize === 'ssr';
  // Mobile sidebar not visible on hydration: can avoid SSR rendering
  const shouldRenderSidebarMobile = windowSize === 'mobile';
  return (
      <>
        {shouldRenderSidebarDesktop && <BlogSidebarDesktop {...props} />}
        {shouldRenderSidebarMobile && <BlogSidebarMobile {...props} />}
      </>
  );
}
