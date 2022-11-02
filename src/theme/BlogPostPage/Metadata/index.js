import React from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import {useBlogPost} from '@docusaurus/theme-common/internal';

export default function BlogPostPageMetadata() {
  const {assets, metadata} = useBlogPost();
  const {description, date, tags, authors, frontMatter} = metadata;
  const blogTitle = tags[0].label;
  const {keywords} = frontMatter;
  const title = blogTitle + ' ' + metadata.title + ' changelog';
  const image = "https://yoast.com/shared-assets/opengraph/?title=" + encodeURIComponent( blogTitle + ' ' + metadata.title );
  return (
    <PageMetadata
      title={title}
      description={description}
      keywords={keywords}
      image={image}>
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={date} />
      {/* TODO double check those article meta array syntaxes, see https://ogp.me/#array */}
    </PageMetadata>
  );
}
