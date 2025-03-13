/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.huseyinerikci.info",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://www.huseyinerikci.info/server-sitemap.xml"],
  },
};
