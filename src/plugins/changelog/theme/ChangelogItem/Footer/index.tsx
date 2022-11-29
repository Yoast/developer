/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import ChangelogReadMoreLink from './ReadMoreLink';
import styles from './styles.module.css';

export default function ChangelogItemFooter() {
    const {metadata, isBlogPostPage, frontMatter} = useBlogPost();
    const {tags, title, editUrl, hasTruncateMarker} = metadata;
    let changelogTitle = frontMatter.keywords + ' ' + title;
    // A post is truncated if it's in the "list view" and it has a truncate marker
    const truncatedPost = !isBlogPostPage && hasTruncateMarker;
    const tagsExists = tags.length > 0;
    const renderFooter = tagsExists || truncatedPost || editUrl;
    if (!renderFooter) {
        return null;
    }
    return (
        <footer
            className={styles.changelogFooter}>

            {truncatedPost && (
                <div className='col text--right'>
                    <ChangelogReadMoreLink changelogTitle={changelogTitle} to={metadata.permalink} />
                </div>
            )}
        </footer>
    );
}
