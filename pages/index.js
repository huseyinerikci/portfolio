import React from "react";
import Layout from "../components/Layout";
import Typical from "react-typical";
import About from "@/components/About";
import SocialIcon from "@/components/SocialIcon";

const TypingAnimation = React.memo(() => {
  return (
    <Typical
      loop={Infinity}
      wrapper="p"
      steps={[
        "Frontend Developer",
        2000,
        "React Developer",
        2000,
        "Software Developer",
        2000,
      ]}
    />
  );
});

export default function Home() {
  return (
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
            <img
              src="https://avatars.githubusercontent.com/u/102507139?v=4"
              alt="Me"
              className="hidden lg:block  h-[250px] rounded-full filter brightness-75"
            />
          </div>

          {/* About Area */}
          <About />
        </section>
      </main>
    </Layout>
  );
}
