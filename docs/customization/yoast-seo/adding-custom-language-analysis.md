---
id: adding-custom-language-analysis
title: "Yoast SEO: Adding language support to the content analysis"
sidebar_label: Adding language support to the content analysis
---

Our software supports multiple languages. If you wish to add your own custom language analysis, the analysis file needs to be available on the window. There are two ways to include the right language analysis JS file:

1. Make a custom language file yourself and assign it to the window. E.g. `window.yoast.researcher = specific researcher;`
2. Configure webpack the way we have; in that case webpack will create the files for you.
