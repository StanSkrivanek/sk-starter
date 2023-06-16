<script lang="ts">
	import type { SvelteComponent } from "svelte"; // for adding icons to button
	export let btnType: "primary" | "secondary" | "destructive" | "outlined" | "textOnly" = "primary";
	export let size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" = "md";
	export let label: string;
	export let isAnimated = true;
	export let iconLeft: (new (...args: any[]) => SvelteComponent) | null = null;
	export let iconRight: (new (...args: any[]) => SvelteComponent) | null = null;
	export let onButtonClick: () => void;

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
			return conditions.filter(Boolean).join(" ");
		}
	}

	// function btnSize(size: string) {
	// 	const condition = [
	// 		size === "xs",
	// 		size === "sm",
	// 		size === "md",
	// 		size === "lg",
	// 		size === "xl",
	// 		size === "xxl"
	// 	];
	// 	const result = [
	// 		"px-2 py-1 text-xs font-medium rounded",
	// 		"px-2 py-1 text-sm font-medium rounded",
	// 		"px-2.5 py-1.5 text-sm font-medium rounded",
	// 		"px-3 py-2 text-sm font-medium rounded",
	// 		"px-3.5 py-2.5 text-sm font-medium rounded ",
	// 		"px-6 py-3 text-base font-medium rounded"
	// 	];
	// 	return result[condition.indexOf(true)];
	// }

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
			"rounded bg-primaryColor/90  text-white hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
			// secondary
			"bg-secondaryColor/90 text-white hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
			// destructive
			"bg-red-600 text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
			// outlined
			"border border-brandColor text-brandColor hover:bg-brandColor hover:text-white",
			// textOnly
			"bg-transparent px-0 text-brandColor no-underline hover:underline"
		];
		return result[condition.indexOf(true)];
	}
	export let customStyle: "" | string = "";
	function twCustom(customStyle: string) {
		if (!customStyle) {
			return;
		}

		return customStyle;
	}

	// export let className: string = '';
	// export let type: string = 'button';
	// export let disabled: boolean = false;
	//   class:short={height === 'short'}
	// flex relative whitespace-nowrap rounded-sm px-5 py-2 font-sansSerif text-base font-medium lg:px-10 lg:py-3 lg:text-xl
</script>

<button
	class={` ${btnSize(size)} ${btnTypes(btnType)} ${twCustom(customStyle)}`}
	class:isAnimated
	on:click|preventDefault={() => onButtonClick()}>
	{#if iconLeft}
		<div class="">
			<svelte:component this={iconLeft} />
		</div>
	{/if}
	{label}
	{#if iconRight}
		<div class="">
			<svelte:component this={iconRight} class="" />
		</div>
	{/if}
</button>

<style lang="postcss">
	/* .isAnimated {
    @apply translate-y-0 shadow-colored transition-all duration-300 ease-in-out;
  } */
	/* .isAnimated:hover {
    @apply -translate-y-0.5 shadow-coloredHover; 
  } */

	.short {
		@apply !py-1;
	}
</style>
