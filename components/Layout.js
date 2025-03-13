import Head from "next/head";
import Header from "./Header";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>Hüseyin Erikci - Portfolio</title>
        <link rel="icon" href="/logo.jpeg" />
        <meta
          name="description"
          content="Hüseyin Erikci's professional portfolio - Frontend Developer specializing in React, JavaScript, and modern web technologies"
        />

        <meta
          name="keywords"
          content="Hüseyin Erikci, Hüseyin Erikci Portfolio, Hüseyin Erikci Blog, Hüseyin Erikci Projects, Hüseyin Erikci Contact"
        />

        <meta property="type" content="website" />
        <meta property="locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@huseyinerikci" />
        <meta name="twitter:creator" content="@huseyinerikci" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://www.huseyinerikci.info" />

        {/* Schema.org yapısal veri işaretlemesi */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.huseyinerikci.info/#person",
                  name: "Hüseyin Erikci",
                  jobTitle: "Frontend Developer",
                  image: "https://www.huseyinerikci.info/profile.jpeg",
                  sameAs: [
                    "https://twitter.com/huseyinerikci",
                    "https://github.com/huseyinerikci",
                    "https://www.linkedin.com/in/huseyinerikci",
                  ],
                  knowsAbout: [
                    "React",
                    "JavaScript",
                    "Next.js",
                    "Web Development",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.huseyinerikci.info/#website",
                  url: "https://www.huseyinerikci.info",
                  name: "Hüseyin Erikci - Portfolio",
                  description:
                    "Hüseyin Erikci's professional portfolio - Frontend Developer specializing in React, JavaScript, and modern web technologies",
                  publisher: {
                    "@id": "https://www.huseyinerikci.info/#person",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.huseyinerikci.info/#webpage",
                  url: "https://www.huseyinerikci.info",
                  name: title || "Hüseyin Erikci - Portfolio",
                  description:
                    description ||
                    "Hüseyin Erikci's professional portfolio - Frontend Developer specializing in React, JavaScript, and modern web technologies",
                  isPartOf: {
                    "@id": "https://www.huseyinerikci.info/#website",
                  },
                  about: {
                    "@id": "https://www.huseyinerikci.info/#person",
                  },
                },
              ],
            }),
          }}
        />
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
