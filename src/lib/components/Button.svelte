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
  class={`button ${className}`}
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
    <div class="ml-2">
      <svelte:component this={iconLeft} />
    </div>
  {/if}
  {label}
  {#if iconRight}
    <div class="ml-2">
      <svelte:component this={iconRight} class="ml-2" />
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
    @apply bg-brandColor text-white;
  }

  /* .secondary {
    @apply bg-gallery text-daisyBush;
  } */

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
</style>