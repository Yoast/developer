/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Link from "@docusaurus/Link";

export default function ChangelogReadMoreLink( props ) {
	const { changelogTitle, ...linkProps } = props;
	return (
		<Link { ...linkProps }>
			Read the full changelog for { changelogTitle } &raquo;
		</Link>
	);
}
