import * as cheerio from "cheerio";

export async function parseArticles(html: string) {
  const $ = cheerio.load(html);

  const articlesCount = $("body")
    .children('div[class="site-main"]')
    .children('div[class="surface"]')
    .children("div[class='screenContent']")
    .children("div")
    .last()
    .children("div")
    .children("div")
    .children("div")
    .children("div")
    .last()
    .children("div")
    .last()
    .children().length;

  return articlesCount;
}
