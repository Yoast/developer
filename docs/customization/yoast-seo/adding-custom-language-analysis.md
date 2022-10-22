---
id: adding-custom-language-analysis
title: "Adding custom language to the page analysis"
image: https://yoast.com/shared-assets/opengraph/?title=Yoast%20SEO:%20Adding%20custom%20language%20to%20the%20page%20analysis
---

Our software supports multiple languages. If you wish to add your own custom language analysis, the analysis file needs to be available on the window. There are two ways to include the right language analysis JS file:

1. Make a custom language file yourself and assign it to the window. E.g. `window.yoast.researcher = specific researcher;`

2. Configure webpack the way we have; in that case webpack will create the files for you.
