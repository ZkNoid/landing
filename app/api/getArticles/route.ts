import { parseArticles } from "@/lib/articlesParser";
import { headers } from "next/headers";

export async function GET() {
  const headersData = await headers();
  const tag = headersData.get("tag");

  if (!tag)
    return new Response("No Tag found", {
      status: 400,
    });

  const res = await fetch(`https://medium.com/zknoid/tagged/${tag}`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  });
  if (!res.ok) {
    return new Response("Internal Server Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
  const articlesCount = await parseArticles(await res.text());
  return new Response(JSON.stringify(articlesCount), {
    status: 200,
    statusText: "OK",
  });
}
