<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <meta property="og:title" content={data.title} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={data.url} />
  <meta property="og:image" content={data.imageUrl} />
  <meta property="og:site_name" content={data.siteName} />
  <meta property="og:description" content={data.description} />
  <meta name="theme-color" content={data.color} />
</svelte:head>
