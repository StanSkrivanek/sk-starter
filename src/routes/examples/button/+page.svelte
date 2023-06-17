<script lang="ts">
	import Button from "$components/Button.svelte";
	import Cogwheel from "$components/icons/btn/Cogwheel.svelte";
	import Trash from "$components/icons/btn/Trash_btn.svelte";
	// function PointerEterHandler() {
	// 	throw new Error("Function not implemented.");
	// }

	// function handleResize() {
	// 	throw new Error("Function not implemented.");
	// }
	// let thisBtn: any;
	// $: console.log("THIS",thisBtn);
</script>

<Button size="xs" label="delete" btnType="outlined" isAnimated={false} onButtonClick={() => {}} />
<Button
	size="sm"
	label="delete"
	btnType="outlined"
	isAnimated={false}
	onButtonClick={() => {}}
	iconLeft={Trash} />
<Button
	size="md"
	label="delete"
	btnType="secondary"
	isAnimated={false}
	onButtonClick={() => {}}
	iconLeft={Trash} />
<Button
	size="lg"
	label="delete"
	btnType="primary"
	isAnimated={true}
	onButtonClick={() => {}}
	iconLeft={Trash} />
<Button
	size="xl"
	label="delete"
	btnType="outlined"
	isAnimated={true}
	onButtonClick={() => {}}
	iconLeft={Trash} />

<Button
	size="xxl"
	label=""
	btnType="outlined"
	onButtonClick={() => {}}
	isAnimated={true}
	resize={true}
	iconLeft={Cogwheel}
	shape="circle" />

<Button
	size="xxl"
	label=""
	btnType="outlined"
	color="secondary"
	onButtonClick={() => {}}
	isAnimated={true}
	resize={true}
	iconRight={Cogwheel}
	shape="circle" />

<Button
	size="xxl"
	label="label"
	btnType="outlined"
	onButtonClick={() => {}}
	isAnimated={true}
	resize={true}
	iconRight={Cogwheel}
	iconLeft={Cogwheel}
	shape="circle" />

<Button
	btnType="primary"
	size="xxl"
	label="text"
	isAnimated={true}
	onButtonClick={() => {}}
	iconLeft={Trash}
	customStyle="flex justify-center items-center bg-indigo-500 border border-teal-400 border-4 hover:bg-teal-300" />
