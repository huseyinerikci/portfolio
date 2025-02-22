import Link from "next/link";
import { GrProjects } from "react-icons/gr";
const About = () => {
  return (
    <article className="  prose md:mt-4 md:prose-xl dark:prose-dark">
      <div className="lg:max-w-[1000px] md:max-w-[850px]">
        <pre>
          <code className="language-js">
            <div className="flex items-center py-4 my-0 space-x-5 text-gray-500 font-semibold flex-wrap">
              {/* <!-- Metin bölümü --> */}
              <div className="flex-1">
                <span className="text-base">// About Me</span>
                <p className="overflow-hidden text-wrap text-sm md:text-base">
                  <span className="text-gray-500">//</span>{" "}
                  <span className="text-gray-500 text-sm lg:text-base">
                    I am a Frontend developer with the necessary competencies in
                    web and mobile application development. I design and develop
                    websites and applications in a user-friendly and aesthetic
                    way. Creating user-oriented projects with modern
                    technologies such as HTML, CSS, JavaScript, React,
                    TypeScript has always been my priority. I also create
                    stylish and responsive designs using CSS frameworks such as
                    TailwindCSS and Bootstrap. By constantly following
                    technology, I continue to improve myself as a better
                    software developer every day. The projects in my portfolio
                    are a reflection of the experiences I have gained in this
                    process.
                  </span>
                </p>
              </div>

              {/* <!-- Resim bölümü --> */}
              <div className="flex-shrink-0 lg:hidden">
                <img
                  src="https://avatars.githubusercontent.com/u/102507139?v=4"
                  alt="Me"
                  className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full filter brightness-75"
                />
              </div>
            </div>

            <div className="text-xs md:text-[13px] lg:text-[15px] text-wrap mt-4">
              <p className="mb-2">
                <span className="text-cyan-300">{">"}</span> const{" "}
                <span className="font-bold text-cyan-300">mySkills</span> =
                <span
                  className="
                leading-5"
                >
                  {" [ "}
                  "HTML", "CSS", "JavaScript", "Bootstrap", "React",
                  "TypeScript", "Nextjs"
                  {" ];"}
                </span>
              </p>

              <p className="mb-2 lg:text-[14px]">
                <span className="text-cyan-300">{">"}</span> const{" "}
                <span className="font-bold text-cyan-300">myEducation</span>{" "}
                <span className="leading-5 -ml-1 ">
                  {"= [{ "}department: "Biomedical Engineering", institution:
                  "Zonguldak BEU University"{" }];"}
                </span>
              </p>

              <p className="mb-2">
                <span className="text-cyan-300">{">"}</span> const{" "}
                <span className="font-bold text-cyan-300">
                  myWorkExperience
                </span>
                {" = ["}
                <span className="block mt-1 ml-52 md:ml-56 lg:ml-64">
                  {"{ "}company: "Emaartechs", role: "Frontend Developer",
                  duration: "1 Year"{" },"}
                </span>
                <span className="block mt-2 ml-52 md:ml-56 lg:ml-64">
                  {"{ "}company: "TABAŞ", role: "Biomedical Engineer", duration:
                  "2 years"{" },"}
                </span>
                <span className="block mt-2 mb-1 ml-52 md:ml-56 lg:ml-64">
                  {"{ "}company: "Maya Computer", role: "Intern", duration: "60
                  days"{" }"}
                </span>
                <span className="block ml-[198px] md:ml-[214px] lg:ml-[246px]">
                  {"]"};
                </span>
              </p>
            </div>
          </code>
        </pre>
      </div>
    </article>
  );
};

export default About;
