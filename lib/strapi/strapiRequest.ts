"use server";

export async function strapiRequest({
  pluralApi,
  populate,
  fetchConfig,
  cache,
}: {
  pluralApi: string;
  populate?: boolean;
  fetchConfig?: NextFetchRequestConfig;
  cache?: RequestCache;
}) {
  const response = await fetch(
    `${process.env.STRAPI_URL}${pluralApi}${populate ? "?populate=*" : ""}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_KEY}`,
      },
      next: fetchConfig,
      cache: cache,
    },
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
}
