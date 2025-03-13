import React from "react";
import Layout from "../components/Layout";
import About from "@/components/About";
import SocialIcon from "@/components/SocialIcon";
import { Typewriter } from "react-simple-typewriter";
import { NextSeo } from "next-seo";
import Image from "next/image";

const TypingAnimation = React.memo(() => {
  return (
    <Typewriter
      words={["Frontend Developer", "React Developer", "Software Developer"]}
      loop={0} // sonsuz döngü için 0
      cursor
      cursorStyle="|"
      typeSpeed={100} // yazma hızı (ms cinsinden)
      deleteSpeed={50} // silme hızı
      delaySpeed={2000} // kelimeler arası bekleme süresi
    />
  );
});

export default function Home() {
  return (
    <>
      <NextSeo
        title="Ana Sayfa"
        description="Hüseyin Erikci - Frontend Developer Portfolio. React, JavaScript ve modern web teknolojileri ile profesyonel web uygulamaları geliştiriyorum."
        canonical="https://www.huseyinerikci.info/"
        openGraph={{
          url: "https://www.huseyinerikci.info/",
          title: "Hüseyin Erikci - Frontend Developer Portfolio",
          description:
            "React, JavaScript ve modern web teknolojileri ile profesyonel web uygulamaları geliştiriyorum.",
          images: [
            {
              url: "/og-image.png",
              width: 1200,
              height: 630,
              alt: "Hüseyin Erikci - Frontend Developer Portfolio",
            },
          ],
        }}
        twitter={{
          handle: "@huseyinerikci",
          site: "@huseyinerikci",
          cardType: "summary_large_image",
        }}
      />
      <Layout title={"Portfolio"} description={"My Portfolio"}>
        <main className="w-full h-full">
          <section className=" max-w-5xl mx-auto pt-16 md:pt-8">
            <div className="flex items-center justify-between ">
              <div className="w-full h-full flex flex-col max-sm:items-center max-sm:mx-auto ">
                <h4 className="text-2xl font-[600] text-gray-800 dark:text-white">
                  <span>Hello, </span>
                  I'm
                </h4>
                <h1 className="text-gray-800 mt-5 text-3xl font-extrabold tracking-normal uppercase md:text-4xl md:mt-3 dark:text-white">
                  Hüseyin Erikci
                </h1>

                <div className="mt-5 w-full h-full max-sm:flex max-sm:items-center max-sm:justify-center text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
                  <TypingAnimation />
                </div>

                {/* Social Icon*/}
                <SocialIcon />
              </div>
              <Image
                src="/profile.jpeg"
                alt="Hüseyin Erikci - Frontend Developer Portfolio Profil Fotoğrafı"
                width={250}
                height={250}
                priority
                className="hidden lg:block h-[250px] rounded-full filter brightness-75"
                unoptimized
              />
            </div>

            {/* About Area */}
            <About />
          </section>
        </main>
      </Layout>
    </>
  );
}
