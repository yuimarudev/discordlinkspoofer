<script lang="ts">
  import { fade } from "svelte/transition";

  let isChipVisible = false;
  export let chipText: string;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div on:mouseover={() => (isChipVisible = true)} on:mouseleave={() => (isChipVisible = false)}>
  <slot />

  {#if isChipVisible}
    <div out:fade={{ duration: 1000 }} class="chip"><p>{chipText}</p></div>
  {/if}
</div>

<style lang="scss">
  @use "sass:color";

  .chip {
    position: absolute;
    background-color: #121212;
    width: 240px;
    height: 120px;
    box-shadow: 0 2px 4px -1px color.adjust(#242424, $alpha: 0.8);
    border-radius: 8px;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin: 1em;
  }
</style>
