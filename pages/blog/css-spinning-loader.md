---
title: Creating a CSS Spinning Loader Animation
description: Here's how to build a Twitter-like CSS spinning loader animation. We also make heavy use of CSS variables, to show you how powerful they can be.
---

{% section .blog%}

# {% $markdoc.frontmatter.title %} {% .post-title %}

A slow network isn’t the worst thing in the world - it put me in front of the Twitter spinning loader animation for long enough for me to think: “I could create something like this”. And that’s what this post is about, creating a simple CSS spinning loader animation similar to Twitter’s.

Although **Twitter’s** is made from an *`SVG`*, it can also be created out of pure *`CSS`* using a simple CSS keyframe animation, with nothing but a single HTML element. As you’ll see, we’ll make heavy use of [CSS variables](https://alligator.io/css/css-variables/) to make our resulting CSS more flexible and extensible.

Let’s just get to it.

📌 Note that the example in this post is not meant to be 100% identical to Twitter's loading animation.

{% callout title="Hey you!" type="caution"%}

Note that the example in this post is not meant to be 100% identical to Twitter's loading animation.

{% /callout %}

---

## The Idea

My initial thought was to:
- Create a circle
- `Rotate` the circle indefinitely from `0` to `360deg`, and
- Find a way to indicate that the circle is being *rotated*

In CSS pseudocode (if you will), this roughly means:

- Draw a square with a *border radius* of at least *50%*
- Animate a circle continually from `0` to `360 degrees`
- Indicate that the circle is indeed rotating

## First, some initial setup

```css
/* css file */
:root {
  --s-loader-wrapper-bg-color: rgb(21, 22, 43);
  --s-loader-width: 20px;
  --s-loader-height: var(--s-loader-width);
  --s-loader-border-color-trans: rgba(29, 161, 242, 0.2);
  --s-loader-border-color-full: rgb(29, 161, 242);
}

body {
  margin: 0;
  background: var(--s-loader-wrapper-bg-color, rgb(21, 22, 43));
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## What’s going on with the initial setup?

On the `:root` pseudo-class, we defined some `CSS variables`:

- `-s-loader-wrapper-bg-color`: the background color for the loader’s parent container
- `-s-loader-width`: the loader width
- `-s-loader-height`: the loader height (notice how we can assign a variable to another variable)
- `-s-loader-border-color-trans`: an opaque version of the loader border color
- `-s-loader-border-color-full`: a non-opaque version of the loader border color (this will do the trick of indicating the loader rotation)

On the `body` element, we:

- Removed the browser default margin on the `body` element
- Applied a background color (`rgb(21, 22, 43)` is a fallback for `-s-loader-wrapper-bg-color`)
- We set the width and height
- The `display`, `align-items` and `justify-content` centers the *children* of the `body` (the spinning loader - in this case)

📌 You can read on viewport units and centering with flex or grid

---

## The Spinning Loader Element

```css
.spinning-loader {
	width: var(--s-loader-width);
	height: var(--s-loader-height);
	border: 5px solid var(--s-loader-border-color-trans);
	border-left-color: var(--s-loader-border-color-full);
	border-radius: 50%;
	background: transparent;
	animation-name: rotate-s-loader;
	animation-iteration-count: infinite;
	animation-duration: 1s;
	animation-timing-function: linear;
	position: relative;
}
```

## What’s going on here with the spinning loader?

We set an equal width and height on the spinning loader so we can get a perfect square.

Then we:

- Create a `border` for the 4 sides with sufficient opacity.
- Reduce the `opacity` on all border sides except for one of them (the left one in this case). That’ll serve as a *spinning-indicator*. The different color on only one of the border sides is the secret sauce here.
- Create a perfect circle by applying a `border-radius` of 50% to the square.
- Make the `background` of the div transparent.
- `animation-name` - a reference to the animation name (we’ll define that next).
- `animation-iteration-count`: how many cycles should the animation go?
- `animation-duration`: how long should each cycle take?
- `animation-timing-function`: this defines the speed of an animation over time. Here, a timing function of `linear` works for our needs because the speed will be constant.

---

Next we define the actual animation using the @keyframes at-rule - applying a rotation transformation from 0 to 360 degrees:

```css
@keyframes rotate-s-loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
```

We rotate the loader infinitely from 0deg to 360deg. You can omit the deg in 0deg. Pretty much any unit in CSS can be omitted if its value is 0. Also, using the from and to keywords is another way of writing 0% and 100%.

## The Full Code at a Glance

First, the HTML markup. As promised, only one `div` 😉:

```html
<div class="spinning-loader"></div>
```

And next comes the CSS styling:

```css
:root {
  --s-loader-wrapper-bg-color: rgb(21, 22, 43);
  --s-loader-width: 20px;
  --s-loader-height: var(--s-loader-width);
  --s-loader-border-color-trans: rgba(29, 161, 242, 0.2);
  --s-loader-border-color-full: rgb(29, 161, 242);
}

body {
  margin: 0;
  background: var(--s-loader-wrapper-bg-color, rgb(21, 22, 43));
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinning-loader {
  width: var(--s-loader-width);
  height: var(--s-loader-height);
  border: 5px solid var(--s-loader-border-color-trans);
  border-left-color: var(--s-loader-border-color-full);
  border-radius: 50%;
  background: transparent;
  animation-name: rotate-s-loader;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: linear;
  position: relative;
}

@keyframes rotate-s-loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
```

👍 And, there you have it! There are many ways of creating different kinds of loaders. This is just one of them. Once you start to break down the different parts that make up a loader, you can create them fairly easily. Of course, the only limit is your imagination 🌈. So there, I hope your spinner keeps on rotating!

{% /section %}
