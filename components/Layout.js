import Head from "next/head";
import Header from "./Header";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Hüseyin Erikci - Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@huseyinerikci" />
        <meta name="twitter:creator" content="@huseyinerikci" />
        <link rel="icon" href="/logo.jpeg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://www.huseyinerikci.info" />
      </Head>
      <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-gray-900 dark:text-white">
        <div className="w-full h-full">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
