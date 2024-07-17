import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Card = ({
  title = "",
  description = "",
  featuredImg = "",
  platform = "",
  tech = "",
  repository = "",
}) => {
  return (
    <div className="bg-white border rounded-lg pb-[100%] relative overflow-hidden shadow-xl">
      <Image
        src={featuredImg}
        className="absolute top-0 object-scale-down object-top h-full"
        alt=""
        width={600}
        height={600}
      />
      <div className="absolute transition ease-out duration-300 bottom-0 translate-y-[60px] hover:-translate-y-0 h-[calc(100%+60px)] w-full bg-gradient-to-t from-white via-[#ffffffd3] flex flex-col justify-end">
        <div className="px-4 py-3">
          <h4 className="mb-2 text-xl font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="h-[60px] px-4 flex items-center gap-2">
          <div className="p-2 border rounded-md">
            <p className="text-sm font-semibold leading-tight text-gray-600">
              {platform}
            </p>
            <p className="text-xs leading-none text-gray-400 font-regular">
              Platform based
            </p>
          </div>
          <div className="p-2 border rounded-md">
            <p className="text-sm font-semibold leading-tight text-gray-600">
              {tech}
            </p>
            <p className="text-xs leading-none text-gray-400 font-regular">
              Tech stack
            </p>
          </div>
          <div className="absolute right-0 p-4 mx-4 border rounded-md">
            <Link
              href={repository}
              className="text-xs leading-none font-regular"
              target="_blank"
            >
              <FaGithub title={title} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
