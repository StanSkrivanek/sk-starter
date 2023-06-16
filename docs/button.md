# Button

The `Button` component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

## Props

| Prop              | Type     | required | Description                     |
| ----------------- | -------- | -------- | ------------------------------- |
| **label**         | string   | yes      | custom label text               |
| **style**         | string   | yes      | set button style                |
| **isAnimated**    | boolean  | yes      | button animation state          |
| **onButtonClick** | function | yes      | trigger custom function         |
| **height**        | string   |          | set size of button              |
| **iconLeft**      | string   |          | set icon on left side of button |
| **iconRight**     | string   |          | set icon on left side of button |
| **className**     | string   |          |                                 |

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
```
