# Button

The `Button` component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

## Props

| Prop              | Type     | required | Description                                                              |
| ----------------- | -------- | -------- | ------------------------------------------------------------------------ |
| **label**         | string   | yes      | custom label text                                                        |
| **btnType**       | string   | yes      | set button style                                                         |
| **size**          | string   |          | set button size                                                          |
| **isAnimated**    | boolean  | yes      | button animation state                                                   |
| **onButtonClick** | function | yes      | trigger custom function                                                  |
| **iconLeft**      | string   |          | set icon on left side of button                                          |
| **iconRight**     | string   |          | set icon on left side of button                                          |
| **customStyle**   | string   |          | allow to inject extra TW classes if button need to have unique treatment |

## Usage example

```js
<Button
label="save"
style="textOnly"
isAnimated={false}
onButtonClick={() => {
    isMOdalOpen = false
    }}
/>

<Button
abel="delete"
style="textOnly"
isAnimated={false}
onButtonClick={() => {
    deleteItem(item)
    isMOdalOpen = false
    }}
/>

<Button
	size="sm"
	label="text"
	btnType="secondary"
	isAnimated={false}
	onButtonClick={() => {}}
	customStyle="border border-teal-500 !bg-indigo-600 " />
```
