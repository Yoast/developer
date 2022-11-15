/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ChangelogItemHeader from '@theme/ChangelogItem/Header';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemContent from '@theme/BlogPostItem/Content';

import styles from './styles.module.css';
import ChangelogItemFooter from "./Footer";

export default function ChangelogItem(Props): JSX.Element {
    return (
    <BlogPostItemContainer className={styles.changelogItemContainer}>
        <ChangelogItemHeader />
        <BlogPostItemContent>{Props.children}</BlogPostItemContent>
        <ChangelogItemFooter />
    </BlogPostItemContainer>
  );
}
