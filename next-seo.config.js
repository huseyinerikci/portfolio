export default {
  titleTemplate: "%s | Hüseyin Erikci",
  defaultTitle: "Hüseyin Erikci - Frontend Developer",
  description:
    "Hüseyin Erikci's professional portfolio - Frontend Developer specializing in React, JavaScript, and modern web technologies",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.huseyinerikci.info/",
    siteName: "Hüseyin Erikci - Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hüseyin Erikci - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    handle: "@huseyinerikci",
    site: "@huseyinerikci",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "keywords",
      content:
        "frontend developer, react developer, javascript, web development, portfolio, software engineer, web developer, react.js, next.js, tailwindcss",
    },
    {
      name: "author",
      content: "Hüseyin Erikci",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "language",
      content: "Turkish",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/logo.jpeg",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "canonical",
      href: "https://www.huseyinerikci.info",
    },
  ],
};
