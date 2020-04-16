# Alert component

The Alert component allows you to add alerts to you pages, similar to how Bootstrap allows you to add sections to grab the user's attention.

## Usage

To use the Alert component in your Markdown files, ensure you have properly included it at the top of your document, as per the following example:

```jsx
// This is where you doc header would end...

import Alert from '../../../../developer-site/src/components/Alert';

// ...

<Alert>

This is an alert!
</Alert>
```

**Please note:** There is an extra line-break after the opening tag. This is, due to a quirk in MDX, necessary if you plan on using Markdown syntax within the component.

### Supported types

Currently, the component supports the following types, which can be passed along by defining the `type` property on the component:

* `info` - Shows a blue alert, used for informing readers about important changes etc. (Default)
* `success` - Shows a green alert, used for informing readers about something positive / good.
* `error` - Shows a red alert, used for informing readers about bad practices, common mistakes etc.
* `warning` - Shows a yellow alert, used for informing readers about upcoming changes etc.
