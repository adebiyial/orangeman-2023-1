---
title: Using JavaScript's sort Method for Sorting Arrays of Strings
description: In this post we're digging into the array sort method for sorting strings, especially when it comes to strings with mixed cases.
---

{% section .blog%}

# {% $markdoc.frontmatter.title %} {% .post-title %}


The `sort` method available on the **Array prototype** allows you to sort the elements of an array. It accepts an optional callback function that you could use to tailor the sorting mechanism to
your specific needs.

For arrays of numbers, refer to our previous post on [sorting array of numbers](https://www.notion.so/Using-JavaScript-s-sort-Method-for-Sorting-Arrays-of-Numbers-cecd49edd0c5448597264026414dac3a).

Sorting strings can get quite opinionated because of how the `sort` method works.

First of, the **ECMAScript** standard does not specify a particular sorting algorithm, it all depends on each browser vendor.

Second, casing plays a vital role when sorting. For sorting to work, there must be a sequential arrangement of things and this is obtainable with numbers - numbers are naturally sequential ( 1, 2 , 3, 4…). When strings are being compared, they are converted to their equivalent **Unicode value** - which unsurprisingly are numbers, then sorted sequentially, in ascending order by default.

## Unicode Values for Characters

To grab the Unicode value of each character - lower or uppercase, we use the `charCodeAt` string method to access the character code of a specified character index.

Stay with me.

We&apos;ll start by creating utility functions that helps get the **unicode values** of characters as well as the characters. We will refer to them as we go.

```jsx
// get Unicode values of character items in an array
function getCharactersUnicodeValue(characters) {
  const unicodeChart = new Map();
  characters.forEach(character => {
    unicodeChart.set(
      character,
      character.charCodeAt(character.indexOf(character))
    );
  });
  console.table(unicodeChart);
}

// get unicode values of a single character
function getCharacterUnicodeValue(character) {
  const value = character.charCodeAt(character.indexOf(character));
  console.log(value);
}
```

Notice the use of [Maps](https://www.digitalocean.com/community/tutorials/js-maps-introduction) here.

We&apos;ll call the utility functions like:

```jsx
getCharactersUnicodeValue("ABCDEFabcdef".split("")); // array of characters: [ 'A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f' ]
// Result: {character → Unicode Value}
// { A → 65, B → 66, C → 67, D → 68, E → 69, F → 70, a → 97, b → 98, c → 99, d → 100, e → 101, f → 102 }

getCharacterUnicodeValue("A");
// Result: {character → Unicode Value}
// { A → 65 }
```

And here&apos;s yet another example:

```jsx
const crocodilian = "crOCoDiliaN".split(""); // array of characters i.e [ 'c', 'r', 'O', 'C', 'o', 'D', 'i', 'l', 'i', 'a', 'N' ]

getCharactersUnicodeValue(crocodilian);

// Result: {character → Unicode Value}
// { c → 99, r → 114, O → 79, C → 67, o → 111, D → 68, i → 105, l → 108, a → 97, N → 78 }
```

Notice that the UPPERCASE characters appear before the lowercase characters. And they&apos;ll come sequentially. That is sorted like: `['Eggs', 'Tail', 'eggs']`. Notice how `Tail` comes before `eggs`? That&apos;s expected because:

```jsx
getCharactersUnicodeValue(["Eggs", "Tail", "eggs"]);

// Result: {character → Unicode Value}
// { Eggs → 69, Tail → 84, eggs → 101 }
// 84 (T) of Tail comes numerically before 101 (e) of eggs
```

**TL;DR**: Sorting when a string is formed only with the same case (all upper or all lower) is easy. The challenge only comes with mixed cases.

## Sorting Mixed Case Strings

Most of the time we&apos;ll want our **array of mixed case strings** to be sorted regardless of the **casing**.

`const things = [ 'nest', 'Eggs', 'bite', 'gator', 'caYman', 'Grip', 'grips', 'Jaw', 'crocodilian', 'Bayou' ];`

Should eventually be sorted as:

`[ 'Bayou', 'bite', 'caYman', 'crocodilian', 'Eggs', 'gator', 'Grip', 'grips', 'Jaw', 'nest' ]`

And not:

`[ 'Bayou', 'Eggs', 'Grip', 'Jaw', 'bite', 'caYman', 'crocodilian', 'gator', 'grips', 'nest' ]`

## Attempt One: Without a Comparison Function

Calling the sort method without a comparison function wouldn&apos;t work:

```jsx
things.sort();

// ['Bayou', 'Eggs', 'Grip', 'Jaw', 'bite', 'caYman', 'crocodilian', 'gator', 'grips', 'nest']
```

## Attempt Two: With a Comparison Function

```jsx
function sortThings(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  }
}
```

Then sort with the `comparison function`:

```jsx
things.sort(sortThings);

// [ 'Bayou', 'Eggs', 'Grip', 'Jaw', 'bite', 'caYman', 'crocodilian', 'gator', 'grips', 'nest' ]
```

Still, it doesn&apos;t work. In fact, we might as well not have written a comparison function.

## Attempt Three: With a Comparison Function and a Common Case

The problem is that the sorting still uses the default mixed cases of the things array elements what we need to do is convert the cases to a common case - either lowercase or UPPERCASE will do.

```jsx
function sortThings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  }
}
```

Or, using ternary operators:

```jsx
function sortThings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return a > b ? -1 : b > a ? 1 : 0;
}
```

Then sort again with the `comparison function`:

```jsx
things.sort(sortThings);

// ['Bayou', 'bite', 'caYman', 'crocodilian', 'Eggs', 'gator', 'Grip', 'grips', 'Jaw', 'nest' 'eggz']
```

<aside>
🍼 And yippee it works now!

</aside>

---

## But Wait, There&apos;s More

Although browser vendors have their specific sorting algorithm, there are some techniques that we should be familiar with. Sorting is done on a `charCodeAt(index)` basis. In a scenario where two comparison items are almost similar, their `charCodeAt(index)` is being compared continuously. Where index starts from 0 until there&apos;s a difference.

Take `eggs` and `Eggz` for example:

1. Without converting to a lowercase, `Eggz` will come before `eggs` because the Unicode value of `E → 69` comes before that of `e → 101`.
2. When there&apos;s a conversion to a similar case - lowercase for example - we are essentially comparing `eggs` and `eggz`. `e → 101` and `e → 101` are equal.

Running:

```jsx
['Eggz', 'eggs'].sort(sortThings);

// ['eggs', 'Eggz']
```

Sorts correctly with the last characters `s → 115 and z → 122` being the deterministic characters.

The check goes as follows:

- [e → 101 ]ggs and [e → 101]ggz / 101 === 101, we move to the next characters
- e[g → 103]gs and e[g → 103]gz / 103 === 103, we move to the next characters
- eg[g → 103]s and eg[g → 103]z / 103 === 103, we move to the next characters
- egg[s → 115] and egg[z → 122] / obviously, 115 comes before 122.

Et voilà, that decides the duel!

## Descending Order

If you need to sort in descending order, just swap the return 1 in the comparison function with return -1 like so:

```jsx
function sortThings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) {
    return -1;
  } else if (b > a) {
    return 1;
  } else {
    return 0;
  }
}
```

or:

```jsx
function sortThings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a > b ? -1 : b > a ? 1 : 0;
}
```

Or just `reverse` the sorted array with the `reverse` array method, which obviously reverses the array to the opposite sequence:

```jsx
things.sort(sortThings).reverse();
```

## Alternative: Using localeCompare

Although the [localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) string method can compare characters without regard for the case used, it&apos;s a string method so it can&apos;t be used directly on an array. To sort our `things` array with the `localeCompare` string method, we pass the `localeCompare` as the comparison function like so:

```jsx
things.sort((a, b) => a.localeCompare(b));

// [ 'Bayou', 'bite', 'caYman', 'crocodilian', 'Eggs', 'gator', 'Grip', 'grips', 'Jaw', 'nest' ]
```

## The code at a glance

```js
const things = [
  "nest",
  "Eggs",
  "bite",
  "gator",
  "caYman",
  "Grip",
  "grips",
  "Jaw",
  "crocodilian",
  "Bayou"
];
console.log(`unsorted: ${things.join(", ")}`);

function sortThings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a > b ? 1 : b > a ? -1 : 0;
}

console.log(`sorted:  ${things.sort(sortThings).join(", ")}`);
```

Remember, keep-on sorting, the world needs it.

{% /section %}
