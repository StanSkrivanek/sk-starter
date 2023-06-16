<script lang="ts">
	import type { SvelteComponent } from "svelte"; // for adding icons to button
	export let label: string;
	export let isAnimated = true;
	export let btnType:
		| "primary"
		| "secondary"
		| "destructive"
		| "outlined"
		| "textOnly"
		| "textOnlyDestructive" = "primary";

	function btnSize(size: string) {
		const condition = [
			size === "xs",
			size === "sm",
			size === "md",
			size === "lg",
			size === "xl",
			size === "xxl"
		];
		const result = [
			"px-2 py-1 text-xs font-medium rounded",
			"px-2 py-1 text-sm font-medium rounded",
			"px-2.5 py-1.5 text-sm font-medium rounded",
			"px-3 py-2 text-sm font-medium rounded",
			"px-3.5 py-2.5 text-sm font-medium rounded",
			"px-5 py-3.5 text-base font-medium rounded"
		];
		return result[condition.indexOf(true)];

		// switch (size) {
		//   case 'xs':
		//     return 'px-2 py-1 text-xs font-medium border rounded';
		//   case 'sm':
		//     return 'px-3 py-2 text-sm font-medium border rounded';
		//   case 'md':
		//     return 'px-4 py-3 text-base font-medium border rounded';
		//   case 'lg':
		//     return 'px-5 py-2 text-base font-medium border rounded';
		//   case 'xlg':
		//     return 'px-8 py-4 text-base font-medium border rounded';
		//   default:
		//     return 'px-4 py-3 text-base font-medium border rounded';
		// }
	}

	export let size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" = "md";
	export let onButtonClick: () => void;
	export let iconLeft: (new (...args: any[]) => SvelteComponent) | null = null;
	export let iconRight: (new (...args: any[]) => SvelteComponent) | null = null;
	// export let className: string = '';
	// export let type: string = 'button';
	// export let disabled: boolean = false;
	//   class:short={height === 'short'}
	// flex relative whitespace-nowrap rounded-sm px-5 py-2 font-sansSerif text-base font-medium lg:px-10 lg:py-3 lg:text-xl
	//   class:xs={size === 'xs'}
	// class:sm={size === 'sm'}
	// class:md={size === 'md'}
	// class:lg={size === 'lg'}
	// class:xlg={size === 'xlg'}
</script>

<button
	class={` ${btnSize(size)}`}
	class:primary={btnType === "primary"}
	class:secondary={btnType === "secondary"}
	class:destructive={btnType === "destructive"}
	class:outlined={btnType === "outlined"}
	class:textOnly={btnType === "textOnly"}
	class:textOnlyDestructive={btnType === "textOnlyDestructive"}
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

	.primary {
		/* @apply bg-primaryColor/90 text-white hover:bg-primaryColor; */
		@apply rounded bg-primaryColor/90  text-white hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600;
	}

	.secondary {
		@apply bg-secondaryColor/90 text-white hover:bg-secondaryColor;
	}

	/* .destructive {
    @apply bg-scarlet text-goldenFizz;
  } */
	.outlined {
		@apply border border-brandColor text-brandColor hover:bg-brandColor hover:text-white;
	}
	.textOnly {
		@apply bg-transparent px-0 text-brandColor no-underline hover:underline;
	}
	/* .textOnlyDestructive {
    @apply bg-transparent px-0 text-scarlet underline hover:no-underline;
  } */
	/* .short {
    @apply md:py-2;
  } */

	/* .xlg {
    @apply px-8 py-4 text-base font-medium border rounded ;
  }
  .lg {
    @apply px-4 py-3 text-base font-medium border rounded ;
  } */
	.short {
		@apply !py-1;
	}
</style>
