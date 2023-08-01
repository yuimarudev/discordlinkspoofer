<script>
  import CheckBox from "$lib/CheckBox.svelte";
  import HoverCip from "$lib/HoverCip.svelte";
  import Input from "$lib/Input.svelte";
  import Margin from "$lib/Margin.svelte";
  import { _ } from "svelte-i18n";

  const redirectBase = "https://www.youtube.com/redirect?event=&redir_token=&q=";
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
  let useYoutubeRedirectLink = false;
  let hideEmbed = false;
  let embedUrl = "";

  $: {
    const source = "[" + src.replace("//", "/\u2060\ufe0e/") + "]";
    let destination = dst;

    if (useYoutubeRedirectLink) {
      destination = redirectBase + encodeURIComponent(destination);
    }

    if (hideEmbed) {
      destination = "<" + destination + ">";
    }

    destination = "(" + destination + ")";

    if (embed.enabled) {
      destination += ` [_ \ufe0e _](${
        location.href +
        "embed?" +
        new URLSearchParams({
          t: embed.title,
          url: embed.url,
          i: embed.image,
          d: embed.description,
          s: embed.siteName,
          c: embed.color
        }).toString()
      })`;
    }

    url = src && dst ? source + destination : "";
  }

  $: {
    if (embed.enabled) {
      embedUrl = location.href;
    }
  }
</script>

<h1>Discord Link Spoofer</h1>

<Input label={$_("text.source")} placeholder="https://discord.gift/..." bind:value={src} />

<Input label={$_("text.destination")} placeholder="https://..." bind:value={dst} />

<HoverCip chipText={$_("text.youtubeRedirectChip")}>
  <CheckBox label={$_("text.useYoutubeRedirectLink")} bind:checked={useYoutubeRedirectLink} />
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
