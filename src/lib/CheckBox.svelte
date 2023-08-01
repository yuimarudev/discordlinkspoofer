<script lang="ts">
  export let checked: boolean = false;
  export let label: string = "";
</script>

<div>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <input type="checkbox" bind:checked /> <span>{label}</span>
</div>

<style>
  div {
    align-self: baseline;
    display: flex;
    flex-direction: row;
    flex-basis: content;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  span {
    margin-left: 0.5em;
    font-size: larger;
  }

  input {
    border-radius: 0.25rem;
    border-style: solid;
    border-width: 1px;
    background-color: black;
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.5rem;
    font-size: large;
  }
</style>
