---
id: overview
title: Schema - Overview
sidebar_label: Overview
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/overview.md
description: This documentation describes how we construct and output schema.org data in the Yoast SEO plugin(s).
---
This documentation describes how we construct and output [schema.org](http://schema.org/) data in [Yoast SEO](https://yoast.com/wordpress/plugins/seo/), as well as our broader approach to structured data.

## Overview
* Our [specification document](functional-specification.md) explains the high level workings of our schema.org output. It's not simple, so take your time and read through how pieces are connected to each other.
* Our [pieces documentation](pieces.md) describes the specific logic and output of each node which we construct in our graph. It's a good place to read up if you have questions about specific parts of our approach.
* All of our output can be changed, managed and extended using our [Schema API](api.md). Please follow our [integration guide](integration-guidelines.md) when you're building on that API.

## You're a developer and unsure where to start?
Want to extend, integrate or modify our schema.org output? We recommend reading in this order:

1. [Our Schema specification](functional-specification.md)
2. [Our integration guide](integration-guidelines.md)
3. [Our Schema API docs](api.md)
