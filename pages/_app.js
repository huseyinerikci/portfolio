import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { cyan } from "tailwindcss/colors";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress color={cyan[500]} height={4} />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
