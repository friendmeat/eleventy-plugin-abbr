# Overview
Plugin for [eleventy](https://11ty.dev) using markdown-it-abbr to create `<abbr></abbr>` tags around defined terms.

Define your definitions in a JSON object, the use the `definition` shortcode in your markdown content.

# Usage
in your eleventy config (`.eleventy.js`):
```js
import {AbbrPlugin} from "eleventy-plugin-abbr";

export default function(eleventyConfig){
    // Define your definition map
    const definitions = { 
        "11ty":"Eleventy, a static site generator",
        "HTML":"Hyper-text Markup Language"
    }

    // Hook up the plugin
    eleventyConfig.addPlugin(AbbrPlugin, { definitions: definitions });
}
```

In your Markdown content:
```md

{% definitions %}

# Overview

11ty quickly turns your content and templates in HTML!

```
