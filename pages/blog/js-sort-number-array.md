---
title: Using JavaScript's sort Method for Sorting Arrays of Numbers
description: It can be tricky at first to understand the rules for the array sort method in JavaScript. This post should help with that!
---

{% section .blog%}

# {% $markdoc.frontmatter.title %} {% .post-title %}

The `sort` method available on the Array prototype allows you to sort the elements of an array and control how the sorting should be done. The aim of this post is to explain to you why, why not and how the `sort` method works when sorting an **array of numbers**.

<aside>
🍼 **TL;DR —** Sort an array of numbers in ascending order using:`myArray.sort((a, b) => a - b);`

</aside>

Arrays in JavaScript are data  structures consisting of a collection of data items. Because Javascript is not a typed language, Javascript arrays can contain different types
of elements - strings, numbers, undefined, etc. It’s most often a good idea to have all items in an array be of the same type however.

One of the many operations that can be performed on an array is **sorting**. Whether you need to know the best students from a collection of grades, the big winners of Wall Street, how much data you’ve been consuming lately, it all involves organizing a collection through sorting.

In the code examples below. We’ll get a collection of eggs in our nest, then sort them both in ascending and descending order. Ready?  Let’s do it!

## Filling an Array

We declare and initialize a `nest` array and prefill it with `null` values - for the moment:

```jsx
let eggsInNest = new Array(10).fill(null);
```

We use the static [fill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) method available on the `Array` constructor method. Next, let’s fill the 10 elements each with random values ranging from 1 - 200:

```jsx
eggsInNest = eggsInNest.map(() => (Math.floor(Math.random() * 200) + 1));
```

## Sorting

We can then sort simply by calling the `sort` method on our array without arguments:

```jsx
eggsInNest.sort();

// e.g.: [109, 136, 156, 188, 19, 190, 2, 34, 55, 90]
```

<aside>
🍼 As you can see, there’s a slight problem and sorting didn’t quite work out as you might have expected. Read on to learn why and how to fix it.

</aside>

By default the `sort()` method sorts the array:

1. In ascending order
2. With the items casted to strings

To do this, the `sort` method calls the `String()` casting method on every array element and then compares the equivalent strings to determine the correct order.

It would have been that easy, except for the fact that items are compared as strings, which has items sorted as if they were strings of characters instead of numbers. In short, most times, using the `sort` method without a callback method doesn’t quite work, because `sort` doesn’t sort the way we expect. Instead, it needs to be explicitly told how to do so - with a **callback function**.

The **callback function** or, technically, **comparison function** receives two arguments (called `a` and `b` by convention) and should return **1** if the first argument should preceed the second, **1** if the second argument should preceed the first and **0** if they are equal. Whew! 😓

Let’s create a `sortEggsInNest` comparison function:

```jsx
function sortEggsInNest(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
}
```

If you want to be a hotshot 😎, you could reduce the `sortEggsInNest` comparison function with a ternary operator like so:

```jsx
function sortEggsInNest(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}
```

Then we can call the `sort` method again but this time passing in the `sortEggsInNest` comparison function:

```jsx
eggsInNest.sort(sortEggsInNest);
```

## Descending order

Need to sort in descending order? Just swap the **return 1** in the comparison function with **return -1** like so:

```jsx
function sortEggsInNest(a, b) {
  if (a > b) {
    return -1;;
  } else if (b > a) {
    return 1;;
  } else {
    return 0;
  }
}
```

Or, the short version using ternary operators:

```jsx
function sortEggsInNest(a, b) {
  return a > b ? -1 : b > a ? 1 : 0;
}
```

## A Shorter Way with Numbers

Finally, there’s even a shorter way to write the comparison function. Here:

```jsx
eggsInNest.sort((a, b) => a - b);
```

<aside>
🍼 This is only Ok because the comparison function only returns **1, -1 or 0**. and subtracting the two intermediate values yields exactly that.
However keep in mind - this can only be used with numeric types or
objects whose `valueOf()` method returns numeric values (such as the Date object).

</aside>


{% /section %}
