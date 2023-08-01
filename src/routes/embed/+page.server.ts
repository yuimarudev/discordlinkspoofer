import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ url }) => {
  const params = url.searchParams;

  return {
    title: params.get("t") || "",
    url: params.get("u") || "",
    imageUrl: params.get("i") || "",
    description: params.get("d") || "",
    siteName: params.get("s") || "",
    color: params.get("c") || ""
  };
};
