<script lang="ts">
  export let value: string;
  export let clickToCopy: boolean = false;
  export let placeholder: string = "";
  export let label: string;

  const handler = async () => {
    if (clickToCopy) {
      const error = await navigator.clipboard.writeText(value).catch((e) => e);

      if (error) {
        alert("Error: " + error);
      } else {
        alert("Copied!");
      }
    }
  };
</script>

<div>
  <!-- :rage: -->
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>{label}</label>
  <input {placeholder} bind:value on:click={handler} />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  label {
    margin-bottom: 0.5em;
    font-size: larger;
  }

  input {
    border-radius: 0.25rem;
    border-style: solid;
    border-width: 1px;
    background-color: black;
    color: white;
    width: 30vw;
    height: 2rem;
    padding: 0.5rem;
    font-size: large;
  }
</style>
