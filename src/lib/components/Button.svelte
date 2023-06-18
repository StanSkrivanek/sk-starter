<script lang="ts">
	import type { SvelteComponent } from "svelte"; // for adding icons to button
	import { onMount } from "svelte";
	export let btnType: "primary" | "secondary" | "destructive" | "outlined" | "textOnly" = "primary";
	export let size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" = "md";
	export let shape: "base" | "rounded" | "pill" | "circle" = "rounded";
	// export let color: "primary" | "secondary" | "soft" | "cta" | "textOnly" = "primary";
	export let label: string;
	export let isAnimated = true;
	export let iconLeft: (new (...args: any[]) => SvelteComponent) | null = null;
	export let iconRight: (new (...args: any[]) => SvelteComponent) | null = null;
	export let onButtonClick: () => void;
	export let resize: boolean = false;
	// export let resize: () => void = () => {};
	export let customStyle: "" | string = "";
	// export const disabled: boolean = false;
	// export let type: string = 'button';
	let isPointerEnter = false;

	// BUTTON SHAPE
	function btnShape(shape: string) {
		const conditions = [
			shape === "base" && "rounded-none",
			shape === "rounded" && "rounded",
			shape === "pill" && "rounded-full",
			shape === "circle" &&
				(size === "xxl" || size === "xl" || size === "lg") &&
				" rounded-full !px-3 !py-3",
			shape === "circle" &&
				(size === "md" || size === "sm" || size === "xs") &&
				" rounded-full !px-2 !py-2"
		];
		if (conditions) {
			return conditions.filter(Boolean);
		}
	}

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
			"rounded bg-brandColor text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
			// secondary
			"bg-secondaryColor text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
			// destructive
			"bg-red-600 text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
			// outlined
			"border border-brandColor text-brandColor hover:bg-brandColor hover:text-white",
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
		const condition = [isAnimated === true && "transition-all duration-600 ease-in-out"];
		if (condition) {
			return condition.filter(Boolean);
		}
	}
	// TODO: add disabled button
	// TODO: check docs for setPointerCapture(ev.pointerId) and releasePointerCapture(ev.pointerId)
	// Handler for button hover
	function handlePointerEnter(this: HTMLButtonElement, ev: any) {
		isPointerEnter = true;
		this?.setPointerCapture(ev.pointerId);
		this?.classList.add("btn-shadow");
		this.style.opacity = "0.9";
	}
	function handlePointerLeave(this: HTMLButtonElement, ev: any) {
		isPointerEnter = false;
		this?.releasePointerCapture(ev.pointerId);
		this?.classList.remove("btn-shadow");
		this.style.opacity = "1";
	}

	// Handler for button click
	// function handlePointerDown(this: HTMLButtonElement, ev: any) {
	// 	if (isPointerEnter) {
	// 		this?.classList.remove("btn-shadow");
	// 	}
	// }

	// change button size on viewport resize
	export function handleResize() {
		if (resize) {
			if (window.innerWidth < 640) {
				size = "xs";
			} else if (window.innerWidth < 768) {
				size = "sm";
			} else if (window.innerWidth < 1024) {
				size = "md";
			} else if (window.innerWidth < 1280) {
				size = "lg";
			} else if (window.innerWidth < 1536) {
				size = "xl";
			} else {
				size = "xxl";
			}
		}
	}

	onMount(() => {
		resize && handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});
</script>

<button
	class={`button ${btnSize(size)} ${btnShape(shape)} ${btnTypes(btnType)}  ${twCustom(
		customStyle
	)} ${btnAnimation(isAnimated)}`}
	on:click|preventDefault={() => onButtonClick()}
	on:pointerenter={handlePointerEnter}
	on:pointerleave={handlePointerLeave}
	on:pointerdown={handlePointerLeave}
	on:pointerup={handlePointerEnter}>
	{#if iconLeft && !label}
		<div class={` ${iconSize(size)}`}>
			<svelte:component this={iconLeft} />
		</div>
	{:else if iconLeft && label}
		<div class={`mr-1 ${iconSize(size)}`}>
			<svelte:component this={iconLeft} />
		</div>
	{/if}
	{#if label !== ""}
		<span>{label}</span>
	{/if}

	{#if iconRight && !label}
		<div class={` ${iconSize(size)}`}>
			<svelte:component this={iconRight} />
		</div>
	{:else if iconRight && label}
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
		box-shadow: rgba(0, 0, 0, 0.25) 2px 3px 4px;
	}
	/* .rounded {
		@apply rounded-full w-0 h-0 mr-0 ml-0;
	} */
</style>
