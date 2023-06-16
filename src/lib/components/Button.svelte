<script lang="ts">
  import type { SvelteComponent } from 'svelte'; // for adding icons to button
  export let label: string;
  export let isAnimated = true;
  export let style:
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'outlined'
    | 'textOnly'
    | 'textOnlyDestructive' = 'primary';
  export let height: 'short' | 'regular' = 'regular';
  export let onButtonClick: () => void;
  export let iconLeft: (new (...args: any[]) => SvelteComponent) | null = null;
  export let iconRight: (new (...args: any[]) => SvelteComponent) | null = null;
  export let className: string = '';
  // export let type: string = 'button';
  // export let disabled: boolean = false;
</script>

<button
  class={` flex relative whitespace-nowrap rounded-sm px-5 py-2 font-sansSerif text-base font-medium lg:px-10 lg:py-3 lg:text-xl ${className}`}
  
  class:primary={style === 'primary'}
  class:secondary={style === 'secondary'}
  class:destructive={style === 'destructive'}
  class:outlined={style === 'outlined'}
  class:textOnly={style === 'textOnly'}
  class:textOnlyDestructive={style === 'textOnlyDestructive'}
  class:isAnimated
  class:short={height === 'short'}
  on:click|preventDefault={() => onButtonClick()}
>
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
    @apply bg-primaryColor/90 text-white hover:bg-primaryColor;
  }

  .secondary {
    @apply bg-secondaryColor/90 hover:bg-secondaryColor text-white;
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
  .short {
    @apply !py-1;
  }
</style>