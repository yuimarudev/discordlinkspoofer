<script>
  import CheckBox from "$lib/CheckBox.svelte";
  import HoverCip from "$lib/HoverCip.svelte";
  import Input from "$lib/Input.svelte";
  import Margin from "$lib/Margin.svelte";
  import { _ } from "svelte-i18n";

  const redirectBase = "https://l.instagram.com/?e=AT0_Wykr7_1_2JC5Cc-zUv641O4AxU-4ET5-SEiw5xchVDpL_HX2UFVcoqFmbf_wTPa9_ZxROJO-VVuksA39lukuXdkYgUOafhDWrEY&u=";
  const embed = {
    enabled: false,
    title: "",
    url: "",
    image: "",
    description: "",
    siteName: "",
    color: ""
  };
  let src = "";
  let dst = "";
  let url = "";
  let useInstagramRedirectLink = false;
  let hideEmbed = false;

  $: {
    const source = "[" + src.replace("//", "/\u2060\ufe0e/") + "]";
    let destination = dst;

    if (useInstagramRedirectLink) {
      destination = redirectBase + encodeURIComponent(destination);
    }

    if (hideEmbed) {
      destination = "<" + destination + ">";
    }

    destination = "(" + destination + ")";

    if (embed.enabled) {
      destination += `[\ufe0e](${
        location.href +
        "embed?" +
        new URLSearchParams({
          t: embed.title,
          u: embed.url,
          i: embed.image,
          d: embed.description,
          s: embed.siteName,
          c: embed.color
        }).toString()
      })`;
    }

    url = src && dst ? source + destination : "";
  }
</script>

<svelte:head>
  <title>Discord URL Spoofer</title>
  <meta name="description" content=":thinking:" />
  <meta name="theme-color" content="#ffff0f" />
</svelte:head>

<h1>Discord Link Spoofer</h1>

<Input label={$_("text.source")} placeholder="https://discord.gift/..." bind:value={src} />

<Input label={$_("text.destination")} placeholder="https://..." bind:value={dst} />

<HoverCip chipText={$_("text.instagramRedirectChip")}>
  <CheckBox label={$_("text.useInstagramRedirectLink")} bind:checked={useInstagramRedirectLink} />
</HoverCip>
<CheckBox label={$_("text.hideEmbed")} bind:checked={hideEmbed} />
<CheckBox label={$_("text.createEmbed")} bind:checked={embed.enabled} />

{#if embed.enabled}
  <Input
    label={$_("text.createEmbed.title")}
    placeholder={$_("text.createEmbed.freegift.title")}
    bind:value={embed.title}
  />
  <Input
    label={$_("text.createEmbed.url")}
    placeholder="https://discord.gift/..."
    bind:value={embed.url}
  />
  <Input
    label={$_("text.createEmbed.image")}
    placeholder="https://rickroll.gif"
    bind:value={embed.image}
  />
  <Input
    label={$_("text.createEmbed.description")}
    placeholder={$_("text.createEmbed.freegift.description")}
    bind:value={embed.description}
  />
  <Input
    label={$_("text.createEmbed.siteName")}
    placeholder="Discord"
    bind:value={embed.siteName}
  />
  <Input label={$_("text.createEmbed.color")} placeholder="#5865F2" bind:value={embed.color} />
{/if}

<Margin />

<Input label="URL" placeholder={$_("text.clickToCopy")} bind:value={url} clickToCopy />

<Margin />

<div class="wrapper">
  <a href="https://github.com/yuimarudev/discordlinkspoofer">GitHub</a>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
  }
</style>