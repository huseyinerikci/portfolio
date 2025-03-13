import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({
  project: { title, description, tags, image, source },
}) => {
  return (
    <motion.a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl w-full max-w-md md:max-w-md max-md:mx-auto   bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1 hover:cursor-pointer shadow-lg"
      whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.4 } }}
    >
      <div className="w-full h-full p-4 bg-white rounded-lg dark:bg-gray-900">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-full h-[250px]">
            <Image
              src={image.url}
              alt={`${title} - Hüseyin Erikci Portfolio Projesi`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg"
              unoptimized
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-md">{description}</p>

          <div className="flex items-center flex-wrap gap-3 !mt-4">
            {tags.map((tag, key) => (
              <span
                key={key}
                className="px-2 py-1 text-xs text-center font-bold  text-white bg-cyan-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
