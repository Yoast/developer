---
id: adding-custom-language-analysis
title: Adding custom language to the page analysis
custom_edit_url: https://github.com/Yoast/developer/edit/main/docs/customization/yoast-seo/adding-custom-language-analysis.md
---

Our software supports multiple languages. If you wish to add your own custom language analysis, the analysis file needs to be available on the window. There are two ways to include the right language analysis JS file:

1. Make a custom language file yourself and assign it to the window. E.g. `window.yoast.researcher = specific researcher;`

2. Configure webpack the way we have; in that case webpack will create the files for you.
