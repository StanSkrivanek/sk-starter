# Button

The `Button` component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

## Props

| Prop              | Type     | required | Description                               | Options                                                 |
| ----------------- | -------- | -------- | ----------------------------------------- | ------------------------------------------------------- |
| **label**         | string   | yes      | custom label text                         |                                                         |
| **onButtonClick** | function | yes      | trigger custom function                   |                                                         |
| **size**          | string   |          | set button size                           | xs, sm, md, lg, xl, xxl (base: md)                      |
| **btnType**       | string   |          | set button style                          | primary , secondary, outlined, textOnly (init: primary) |
| **iconLeft**      | string   |          | set icon on left side of button           |                                                         |
| **iconRight**     | string   |          | set icon on left side of button           |                                                         |
| **isAnimated**    | boolean  |          | allow button custom animations            |                                                         |
| **customStyle**   | string   |          | allow to inject extra Tailwind classes    |                                                         |
| **resize**        | boolean  |          | allow button to be responsive to viewport | true, false                                             |
| **shape**         | string   |          | allow change button shape                 | base , rounded, pill, circle                            |

- All buttons have a default size of `md` and a default style of `primary`.
- The `label` prop is used to set the button label and tis prop is mandatory.
- The prop `onButtonClick` is used to trigger a custom functions and this prop is mandatory.
- The `size` prop can be used to change the size of the button.
- The `btnType` prop can be used to set button importance. Initial is `primary` if not set otherwise. THe `primary` , `outlined` and `textOnly` buttons will have primary (brand) color. The `secondary` button will have secondary color. To change the color of the button you can always use `customStyle` prop or set values in `tailwind.config.cjs`.
- The props `iconLeft` and `iconRight` can be used to set icon on left and/or right side of button. The icon used in button should have set `width` and `height` to `100%` to make it responsive based on button size.
- The `customStyle` prop can be used to inject extra Tailwind classes to individual button if you need to do so.
- The `isAnimated` prop can be used to allow button custom animations.
- The `resize` prop can be used to make the button responsive to viewport.
- The `shape` prop can be used to change the shape of the button. Default `base` is standard rectangle if not set in `customStyle` otherwise. The shape `circle` should be used if only icon is used in button. The shape `pill` should be used if icon and/or label is used in button. Icons can be used on left and/or right side of button or on both sides.

## CSS color variables and tailwind.config.cjs

An example color settings in `globas.postcss` or `app.css` _(depend on your preferences)_

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
:root {
	/* colors in HSL to work with extend opacity */
	/* GLOBAL COLORS  VARIABLES*/
	--clr-primary: 359 79% 58%;
	--clr-sky: 200 100% 50%;
	--clr-space: 180 2% 16%;
	--clr-catSkillWhite: 69 21% 94%;
	--clr-pavlova: 40 43% 73%;
	--clr-sky: 197 75% 61%;
	--clr-purple: 259 100% 50%;

	/* COLORS USED IN Tailwind.config - theme/extend */
	--color-brand: var(--clr-primary);
	--color-primary: var(--clr-primary);
	--color-secondary: var(--clr-sky);
	--color-text: var(--clr-space);
	--color-background: var(--clr-catSkillWhite);

}
```

An example using color variables in `tailwind.config.cjs` settings

```js
module.exports = {
	theme: {
		extend: {
			colors: {
				// allow set color with the alpha value (optional) e.g. `bg-brandcolor` mean opacity 100% or `bg-brandcolor/50` mean opacity 50%
				brandColor: "hsl(var(--color-brand) / <alpha-value>)",
				secondaryColor: "hsl(var(--color-secondary) / <alpha-value>)",
				textColor: "hsl(var(--color-text) / <alpha-value>)",

				primaryColor: "hsl(var(--clr-purple) / <alpha-value>)",

				bgColor: "hsl(var(--color-background) / <alpha-value>)",
				neutralColor: "hsl(var(--clr-pavlova) / <alpha-value>)"
			}
		}
	}
};
```

## Usage example

### Basic Button

The `label` prop is used to set the button label and `onButtonClick` is used to trigger a custom functions and these props are mandatory.

```js
// Mandatory props
<Button label="save" onButtonClick={() => {}} />
```

---

### Add Button label, size and type

The `size` prop can be used to change the size of the button. The `btnType` prop can be used to set button importance. Initial is `primary` if not set otherwise. THe `primary` , `outlined` and `textOnly` buttons will have primary (brand) color. The `secondary` button will have secondary color. To change the color of the button you can always use `customStyle` prop or set values in `tailwind.config.cjs`.

```js
<Button size="sm" label="delete" btnType="textOnly" onButtonClick={() => {}} />
```

---

### Add Button icon

The props `iconLeft` and `iconRight` can be used to set icon on left and/or right side of button.

```js
<Button label="delete" btnType="textOnly" iconLeft={Trash} onButtonClick={() => {}} />
```

The icon used in button should have set `width` and `height` to `100%` to make it responsive based on button size.

```html
<svg
	width="100%"
	height="100%"
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor">
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
```

---

**Note:**

I'm mention this only because I usually use different approach on icons be able to change their size by including `width` and `height` in `svg` as props.

```html
<script lang="ts">
	export let width: number = 20,
		height: number = 20;
</script>

<svg
	{width}
	{height}
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	...
</svg>
```

With approach above we can't use `width` and `height` props in `iconLeft` and `iconRight` as only icon name is passed as prop eg.`iconLeft={Trash}`.

---

### Add Button functions

The prop `onButtonClick` is used to trigger a custom functions and this prop is mandatory.

```js
<Button
	label="delete"
	btnType="textOnly"
	isAnimated={false}
	onButtonClick={() => {
		deleteItem(item);
		isMOdalOpen = false;
	}}
/>
```

---

### Inject Custom style

The `customStyle` prop can be used to inject extra Tailwind classes to individual button if you need to do so.

```js
// custom style Insjection
<Button
	size="sm"
	label="text"
	btnType="secondary"
	isAnimated={true}
	onButtonClick={() => {}}
	customStyle="border border-teal-500 !bg-indigo-600 "
/>
```

---

### Set Button resize functionality

The `resize` prop can be used to make the button responsive to viewport.

```js
// Responsive button
<Button label="save" btnType="secondary" isAnimated={true} onButtonClick={() => {}} resize={true} />
```

---

### Change button shape

The `shape` prop can be used to change the shape of the button. Default `base` is standard rectangle if not set in `customStyle` otherwise. The shape `circle` should be used if only icon is used in button. The shape `pill` should be used if icon and/or label is used in button. Icons can be used on left and/or right side of button or on both sides.

```js
// Change button shape
<Button
	label="save"
	btnType="secondary"
	isAnimated={true}
	onButtonClick={() => {}}
	resize={true}
	shape="pill"
	iconLeft={Done}
	iconRight={Smile} //(optional)
/>
```
