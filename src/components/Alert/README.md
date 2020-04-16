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
