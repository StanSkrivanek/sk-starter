<script lang="ts">
	import type { SvelteComponent } from "svelte"; // for adding icons to button
	export let btnType: "primary" | "secondary" | "destructive" | "outlined" | "textOnly" = "primary";
	export let size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" = "md";
	export let label: string;
	export let isAnimated = true;
	export let iconLeft: (new (...args: any[]) => SvelteComponent) | null = null;
	export let iconRight: (new (...args: any[]) => SvelteComponent) | null = null;
	export let onButtonClick: () => void;
	export let customStyle: "" | string = "";
	// export const disabled: boolean = false;
	// export let type: string = 'button';
	let isPointerEnter = false;

	// BUTTON SIZE
	function btnSize(size: string) {
		const conditions = [
			size === "xs" && "px-2 py-1 text-xs font-medium rounded",
			size === "sm" && "px-2 py-1 text-sm font-medium rounded",
			size === "md" && "px-2.5 py-1.5 text-sm font-medium rounded",
			size === "lg" && "px-3 py-2 text-sm font-medium rounded",
			size === "xl" && "px-3.5 py-2.5 text-sm font-medium rounded ",
			size === "xxl" && "px-6 py-3 text-base font-medium rounded"
		];
		if (conditions) {
			return conditions.filter(Boolean);
		}
	}
	
	// BUTTON TYPE
	function btnTypes(btnType: string) {
		const condition = [
			btnType === "primary",
			btnType === "secondary",
			btnType === "destructive",
			btnType === "outlined",
			btnType === "textOnly"
		];
		const result = [
			// primary
			"rounded bg-primaryColor/90 text-white hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
			// secondary
			"bg-secondaryColor/90 text-white hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
			// destructive
			"bg-red-600 text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
			// outlined
			"border border-brandColor text-brandColor hover:bg-brandColor   hover:text-white",
			// textOnly
			"bg-transparent px-0 text-brandColor no-underline hover:underline"
		];
		return result[condition.indexOf(true)];
	}

	// BUTTON ICON SIZE
	function iconSize(size: string) {
		const conditions = [
			size === "" && "w-4 h-4",
			size === "xs" && "w-[.7rem] h-[.7rem]",
			size === "sm" && "w-[0.85rem] h-[0.85rem]",
			size === "md" && "w-[1rem] h-[1rem]",
			size === "lg" && "w-[1rem] h-[1rem]",
			size === "xl" && "w-[1.1rem] h-[1.1rem]",
			size === "xxl" && "w-[1.25rem] h-[1.25rem]"
		];
		if (conditions) {
			return conditions.filter(Boolean);
		}
	}

	// INJECT CUSTOM TAILWIND STYLES
	function twCustom(customStyle: string) {
		if (!customStyle) {
			return;
		}
		return customStyle;
	}

	function btnAnimation(isAnimated: boolean) {
		const condition = [
			isAnimated === true && " transition-all duration-600 ease-in-out"
		];
		if (condition) {
			return condition.filter(Boolean);
		}
	}
	let elem = {} as HTMLButtonElement;
	// Handler for button hover 
	function handlePointerEnter(this: any,  ev: any) {
		isPointerEnter = true;
		this?.classList.add("btn-shadow");
	}
	function handlePointerLeave(this: any, ev: any) {
		isPointerEnter = false;
		this?.classList.remove("btn-shadow");
	}
</script>

<button
	class={`button ${btnSize(size)} ${btnTypes(btnType)} ${twCustom(customStyle)} ${btnAnimation(
		isAnimated
	)}`}
	on:click|preventDefault={() => onButtonClick()}
	on:pointerenter={handlePointerEnter}
	on:pointerleave={handlePointerLeave}
	on:pointerdown={handlePointerLeave}
	on:pointerup={handlePointerEnter}
	>
	{#if iconLeft}
		<div class={`mr-1 ${iconSize(size)}`}>
			<svelte:component this={iconLeft} />
		</div>
	{/if}
	{label}
	{#if iconRight}
		<div class={`ml-1 ${iconSize(size)}`}>
			<svelte:component this={iconRight} />
		</div>
	{/if}
</button>

<style lang="postcss">
	.button {
		@apply inline-flex transform items-center justify-center whitespace-nowrap uppercase;
	}

	.btn-shadow {
		box-shadow: rgba(0, 0, 0, 0.25) 2px 3px 5px;
	}

</style>
