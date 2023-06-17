# Button

The `Button` component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

## Props

| Prop              | Type     | required    | Description                               | Options                                                                |
| ----------------- | -------- | ----------- | ----------------------------------------- | ---------------------------------------------------------------------- |
| **label**         | string   | yes         | custom label text                         |                                                                        |
| **onButtonClick** | function | yes         | trigger custom function                   |                                                                        |
| **size**          | string   |             | set button size                           | xs, sm, md, lg, xl, xxl (base: md)                                     |
| **btnType**       | string   |             | set button style                          | primary , secondary , destructive , outlined, textOnly (base: primary) |
| **iconLeft**      | string   |             | set icon on left side of button           |                                                                        |
| **iconRight**     | string   |             | set icon on left side of button           |                                                                        |
| **isAnimated**    | boolean  | in progress | button animation state                    | for now animation is set on All                                        |
| **customStyle**   | string   |             | allow to inject extra Tailwind classes    |                                                                        |
| **resize**        | boolean  |             | allow button to be responsive to viewport | true, false                                                            |

- All buttons have a default size of `md` and a default style of `primary`.
- The `btnType` prop can be used to change the style of the button.
- The `size` prop can be used to change the size of the button.
- The `customStyle` prop can be used to inject extra Tailwind classes to individual button if you need to do so.
- The `resize` prop can be used to make the button responsive to viewport.

## Usage example

**Basic usage**

```js
// Mandatory props
<Button label="save" onButtonClick={() => {}} />
```

**Add button label, size and type**

```js
<Button size="sm" label="delete" btnType="textOnly" onButtonClick={() => {}} />
```

**Add button icon**

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

**Add functions**

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

**Custom style Injection**

```js
// cutom style Insjection
<Button
	size="sm"
	label="text"
	btnType="secondary"
	isAnimated={true}
	onButtonClick={() => {}}
	customStyle="border border-teal-500 !bg-indigo-600 "
/>
```

**Responsive button**

```js
// Responsive button
<Button label="save" btnType="secondary" isAnimated={true} onButtonClick={() => {}} resize={true} />
```
