import React from "react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { GrProjects } from "react-icons/gr";
import { motion } from "framer-motion";
import Link from "next/link";
const SocialIcon = () => {
  return (
    <div className="flex w-full items-center max-sm:justify-center  mt-8 space-x-6 md:mt-4 max-sm:ml-20">
      <motion.a
        href="https://github.com/huseyinerikci"
        target="_blank"
        rel="moopenner noreferrer"
        className="flex items-center justify-center text-gray-800 transition-colors duration-300  dark:text-gray-100 dark:hover:text-cyan-200 hover:text-cyan-200"
        whileHover={{ scale: 1.1 }}
      >
        <GithubIcon className={"size-10 fill-current"} />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/huseyinerikci/"
        target="_blank"
        rel="moopenner noreferrer"
        className="flex items-center justify-center text-gray-800 transition-colors duration-300  dark:text-gray-100 dark:hover:text-cyan-200 hover:text-cyan-200"
        whileHover={{ scale: 1.1 }}
      >
        <LinkedinIcon className={"size-10 fill-current"} />
      </motion.a>

      <div className="w-[140px] h-fit">
        <Link href="/projects">
          <span className="flex gap-2 items-center text-gray-800 dark:text-gray-100 dark:hover:text-cyan-200 hover:text-cyan-200 transition duration-300 hover:scale-110 group ">
            <GrProjects className="size-8 fill-current" />
            <span className="hidden group-hover:block  transition duration-300 font-bold ">
              My Projects
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialIcon;
