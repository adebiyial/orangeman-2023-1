---
title: How I adapt reusable UI components to different contexts
description: ...
---

{% section .blog%}

# {% $markdoc.frontmatter.title %} {% .post-title #overview %}

{% toc %}
1. [Overview](#overview)
1. [Functional Context](#functional-context)
1. [Design Context](#design-context)
	1. [With the HTML class attribute](#with-the-html-class-attribute)
	1. [With HTML custom data attributes](#with-html-custom-data-attributes)
	1. [With Styled Components](#with-styled-components)
	1. [With Tailwind CSS](#with-tailwind-css)
{% /toc %}

I've built several reusable user-interface (UI) components, and they always serve the
single purpose of “acting as a baseline in which more complex use-cases can be formed.”

To make sure newly generated use-cases can adapt to different **functional (how it works)** and **design (how it looks)**
contexts, base components must first do two things:

1. keep the base or common properties abstracted, and,
2. make sure the instance or unique properties are extended-able and/or override-able.

## Functional Context
With **functional contexts**, extending and/or overriding the base component is obvious and relatively
straightforward. For example, let's assume we have a base button component called `Button` that accepts
a series of props like `type` and `onClick`:

```ts
interface IButtonProps {
	type: "button" | "submit";
	onClick?: () => void;
	children: React.ReactNode;
  classNames?: string;
}

// The props `type`, `onClick`, and `children`
// will be different for every instance of <Button/>

function Button({type = "button", onClick, children}: IButtonProps) {
	return (
		<button {...{type, onClick}}>
			{children}
		</button>
	)
}
```

We can use the base `Button` component like so:
```ts
<Button {...{type: "submit", onClick: handleClick}}>
	Reset Password
</Button>
```

{% callout title="Tip" type="tip"%}

The base button component can be re-written with the `props`
spread out, so that there isn't a need for explicit declarations.

```ts
function Button({children, ...props}: IButtonProps) {
	return (
		<button {...props}>
			{children}
		</button>
	)
}
```
{% /callout %}

## Design Context
There are four ways I go about adapting (extending and/or overriding) UI elements to different **design contexts**.

1. [With the HTML class attribute.](#with-the-html-class-attribute)
1. [With HTML custom data attributes.](#with-html-custom-data-attributes)
1. [With Styled Components.](#with-styled-components)
1. [With Tailwind CSS.](#with-tailwind-css)

{% callout title="Learn more about:" type="info"%}

1. [HTML custom data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
1. [Styled Components](https://www.smashingmagazine.com/2020/07/styled-components-react)
1. [Tailwind CSS](https://tailwindcss.com/docs)

{% /callout %}

### With the HTML class attribute

This is the simplest way to go. If we rewrite the `Button` component from the
[example above](#functional-context):

```ts
function Button({ classNames, children, ...props }: IButtonProps) {
  return (
    <button {...{class: classNames, ...props}}>
			{children}
		</button>
  );
}
```

we can pass in class names like so:

```ts
<Button type="button" classNames="is-loading full-width">
  Reset Password
</Button>
```

The pattern above works if you want to **override** the class names in the base `Button` component. However, if
what you're looking to do is **extend** the class names, instead, you would need a package like
[classnames](https://www.npmjs.com/package/classnames), so you can define the base class like so:

```ts
import cn from 'classnames';

function Button({classNames, children, ...props}) {
	return (
		<button {...{ class: cn(`btn`, classNames), ...props}}>
			{children}
		</button>
	)
}
```

Then use it:

```ts
<Button type="button" classNames="is-loading full-width">
  Reset Password
</Button>
```

React will render:

```ts
<button type="button" class="btn is-loading full-width">
	Reset Password
</button>
```

{% callout title="With regards..." type="info"%}
to styling the `Button` component, the examples in
[With the HTML class attribute](#with-the-html-class-attribute) assumes that you are indeed
styling your button with the class attribute. Something like:

```css
.btn {}

.is-loading {}

.full-width {
	width: 100%;
}
```
{% /callout %}

### With HTML custom data attributes
This is similar to [With the HTML class attribute](#with-the-html-class-attribute) except that
using custom data attributes can be more semantic and readable.

Consider the `Button` component below, alongside the `data-*` attributes.

```ts
interface IButtonProps {
  type: 'button' | 'submit';
  children: React.ReactNode;
}

function Button({ children, ...props }: IButtonProps) {
  return (
   <button data-is-loading="false" data-full-width="false" {...props}>
	 	{children}
		</button>
  );
}
```

You can use the `Button` component like so:

```ts
<Button type="button" data-is-loading="true" data-full-width="true">
  Reset Password
</Button>
```

React will render:

```ts
<button
	data-is-loading="true"
	data-full-width="true"
	type="button"
>
  Reset Password
</button>
```


{% callout title="Also, the..." type="info"%}
examples for [With HTML custom data attributes](#with-html-custom-data-attributes),
the assumption is that you're styling your button component with styles like:

```css
[data-is-loading="true"] {}
[data-full-width="true"] {}
```

{% callout title="The `props`..." type="info"%}
`data-is-loading` and `data-full-width` will be **overriden**
because of the `{...props}` declaration at the end of the list
of props for `button` in the `Button` component. Ideally, this is often
what you want, an **override**. Data attributes are more "distinct" in
nature and typically will be used for a single purpose. I haven't found
a use-case where going through the trouble to  extend them is worth it.
Until then 🤞.
{% /callout %}

{% /callout %}

### With Styled Components

We can also use Styled Components.

**Firstly**, we'll have a base `button` as usual. But this time,
we'll replace `button` with the styled component `StyledButton`.
```ts
import styled from 'styled-components';

const StyledButton = styled.button`
	/* Some base styles */
`;

function Button({children, ...props}) {
	return (
		<StyledButton {...props}>
			{children}
		</StyledButton>
	)
}
```
**Secondly**, we'll make `StyledButton` dynamic by accepting, as a prop,
a customizable styled button component. let's call it `CustomStyledButton`.
```ts
import styled from 'styled-components';

export const StyledButton = styled.button`
	/* Some base styles */
`;

function Button({
	CustomStyledButton = StyledButton,
	children,
	...props
	}){
		return (
			// If the`CustomStyledButton` prop is passed in,
			// it will override `StyledButton`, if not, it
			// defaults to `StyledButton`
			<CustomStyledButton {...props}>
				{children}
			</CustomStyledButton>
		)
}
```

**Thirdly**, we'll adapt the base button style by overriding or extending it.

// overriding:
```ts
import styled from 'styled-components';

const StyledLoginButton = styled.button`
	/* Specific styles for the login button
		 and general styles for all buttons
	*/
`;

export function LoginForm() {
	return (
		<form>
			{/* Other elements */}
			{/* `StyledLoginButton` AKA `CustomStyledButton`
					will override `StyledButton` in the `Button`
					component
			*/}
			<Button CustomStyledButton={StyledLoginButton}>
				 Log in
			</Button>
		</form>
	)
}
```

// extending:
```ts
import styled from 'styled-components';
import {StyledButton} from '~/ui/Button';

// `StyledRegisterButton` will extend `StyledButton`
const StyledRegisterButton = styled(Button)`
	/* Specific styles for the register button */
`;

export function RegisterForm() {
	return (
		<form>
			{/* Other elements */}
			<Button CustomStyledButton={StyledRegisterButton}>
				 Log in
			</Button>
		</form>
	)
}
```

### With Tailwind CSS

This is similar to [With the HTML class attribute](#with-the-html-class-attribute) in that you can define a list of
class names for the base component, then use a package like [classnames](https://www.npmjs.com/package/classnames) to
merge them together.

---

{% callout title="🙏" type="info"%}
Please send me a DM on [Twitter](https://twitter.com/adebiyial) to correct any error(s) that you may have found or if you have any suggestions to help improve this article.
{% /callout %}
