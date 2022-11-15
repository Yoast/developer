/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import styles from './styles.module.css';
import clsx from "clsx";

function ChangelogItemHeaderTitle({className}) {
    const {metadata, frontMatter, isBlogPostPage} = useBlogPost();
    const {permalink, title} = metadata;
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    return (
        <TitleHeading className={clsx(styles.title, className)}>
            {isBlogPostPage ? (
                frontMatter.keywords + ' ' + title
            ) : (
                <Link to={permalink}>
                    {frontMatter.keywords} {title}
                </Link>
            )}
        </TitleHeading>
    );
}

// Reduce changelog title size, but only on list view
function ChangelogTitle() {
  const {isBlogPostPage} = useBlogPost();
  return (
    <ChangelogItemHeaderTitle
      className={isBlogPostPage ? undefined : styles.changelogItemTitleList}
    />
  );
}

export default function ChangelogItemHeader(): JSX.Element {
  return (
    <header>
      <ChangelogTitle />
      <BlogPostItemHeaderInfo />
    </header>
  );
}
