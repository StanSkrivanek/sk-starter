<script>
	import Button from "$components/Button.svelte";
	import Trash from "$components/icons/Trash.svelte";
</script>

<h1>Welcome to SvelteKit</h1>
<h2>Welcome to SvelteKit</h2>
<h3>Welcome to SvelteKit</h3>
<h4>Welcome to SvelteKit</h4>
<h5>Welcome to SvelteKit</h5>
<h6>Welcome to SvelteKit</h6>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<label for="email">email</label>
<input type="email" name="" id="" />
<label for="name">name</label>
<input type="text" name="name" id="" /><br />

<Button
	label="delete"
	style="primary"
	height="short"
	isAnimated={false}
	onButtonClick={() => {}}
	iconLeft={Trash} />
<Button label="save" style="secondary" isAnimated={false} onButtonClick={() => {} }/>
<Button label="save" style="outlined" isAnimated={false} onButtonClick={() => {}} />
<Button label="save" style="textOnly" isAnimated={false} onButtonClick={() => {}} />
