export async function GET() {
  const baseUrl = "https://erpbizapps.com";

  const articles = [
    {
      title: "Business Central vs. QuickBooks: When It's Time to Upgrade",
      slug: "business-central-vs-quickbooks",
      date: "2026-03-10",
      description: "Compare Business Central and QuickBooks to determine when your growing business needs to upgrade from basic accounting to a full ERP platform.",
    },
    {
      title: "5 Signs Your Business Has Outgrown Spreadsheets",
      slug: "signs-outgrown-spreadsheets",
      date: "2026-03-05",
      description: "Recognize the warning signs that spreadsheets are holding your business back and learn when it's time to adopt a proper ERP system.",
    },
    {
      title: "The ROI of Business Central for Small Businesses",
      slug: "roi-business-central",
      date: "2026-02-28",
      description: "Understand the real return on investment small businesses can expect from implementing Microsoft Dynamics 365 Business Central.",
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ERP Biz Apps Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Insights, guides, and best practices for ERP, CRM, and business technology.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${articles
  .map(
    (article) => `    <item>
      <title>${article.title}</title>
      <link>${baseUrl}/blog/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${article.slug}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <description>${article.description}</description>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
