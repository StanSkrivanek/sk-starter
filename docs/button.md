# Button

The `Button` component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

## Props

| Prop              | Type     | required    | Description                            | Options                                                                |
| ----------------- | -------- | ----------- | -------------------------------------- | ---------------------------------------------------------------------- |
| **label**         | string   | yes         | custom label text                      |                                                                        |
| **onButtonClick** | function | yes         | trigger custom function                |                                                                        |
| **size**          | string   |             | set button size                        | xs, sm, md, lg, xl, xxl (base: md)                                     |
| **btnType**       | string   |             | set button style                       | primary , secondary , destructive , outlined, textOnly (base: primary) |
| **iconLeft**      | string   |             | set icon on left side of button        |                                                                        |
| **iconRight**     | string   |             | set icon on left side of button        |                                                                        |
| **isAnimated**    | boolean  | in progress | button animation state                 | for now animation is set on All                                        |
| **customStyle**   | string   |             | allow to inject extra Tailwind classes |                                                                        |

All buttons have a default size of `md` and a default style of `primary`. The `btnType` prop can be used to change the style of the button. The `size` prop can be used to change the size of the button. The `customStyle` prop can be used to inject extra Tailwind classes to individual button if you need to do so.

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
