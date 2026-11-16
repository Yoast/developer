---
id: text-alignment
title: "Assessments: Text alignment"
sidebar_label: Text alignment
description: How the Text alignment assessment of the Yoast SEO Premium readability analysis works and how it is scored.
---
The **Text alignment** assessment checks whether the text uses too much center alignment. By default, it checks for the `.has-text-align-center` class. This can be changed in the researcher configuration (`centerClasses`).

| **Text alignment** | |
|---|---|
| **Name in code** | [`TextAlignmentAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/readability/TextAlignmentAssessment.js) |
| **Title URL** | [https://yoa.st/assessment-alignment](https://yoa.st/assessment-alignment) |
| **Call to action URL** | [https://yoa.st/assessment-alignment-cta](https://yoa.st/assessment-alignment-cta) |
| **When it applies** | When at least one center-aligned paragraph or heading is longer than 50 characters. In WordPress, only in the block editor. |
| **Product** | Yoast SEO Premium. Also in Yoast SEO for Google Docs. |
| **Content types** | **WordPress**: added by Yoast SEO Premium, only in the block editor (not in the classic editor or Elementor)<br/>**Shopify**: not available<br/>**Google Docs**: documents |
| **Languages** | All languages. The feedback is different for languages written from right to left (see the scoring table). |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ✅ Highlights the center-aligned text |

## Scoring
* LTR: the feedback for languages written from left to right.
* RTL: the feedback for languages written from right to left.

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 2 | One center-aligned element that is longer than 50 characters | LTR: **Alignment**: There is a long section of center-aligned text. **We recommend making it left-aligned**. <br/> RTL: **Alignment**: There is a long section of center-aligned text. **We recommend making it right-aligned**. |
| Red | 2 | Multiple center-aligned elements that are longer than 50 characters | LTR: **Alignment**: There are X long sections of center-aligned text. **We recommend making them left-aligned**. <br/> RTL: **Alignment**: There are X long sections of center-aligned text. **We recommend making them right-aligned**. |
