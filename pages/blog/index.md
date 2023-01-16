---
title: 📋 Blog Posts
description: My technical articles, published on this site.
---

{% hero %}
# {% $markdoc.frontmatter.title %} {% .hero-title %}
{% $markdoc.frontmatter.description %} {% .hero-sub %}
{% /hero %}

{% section .publications%}
1. [Creating a CSS Spinning Loader Animation](/blog/css-spinning-loader)
1. [Using JavaScript's sort Method for Sorting Arrays of Strings](/blog/js-sort-string-array)
1. [Using JavaScript's sort Method for Sorting Arrays of Numbers](/blog/js-sort-number-array)
{% /section %}