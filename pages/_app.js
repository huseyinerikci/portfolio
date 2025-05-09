import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { cyan } from "tailwindcss/colors";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <NextNProgress color={cyan[500]} height={4} />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
