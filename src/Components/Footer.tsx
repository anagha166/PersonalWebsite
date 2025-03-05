import React from "react";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";

const Footer = () => {
  const btnClass =
    "btn rounded-full text-white text-lg w-12 p-0 border-none bg-[#202020] hover:bg-[#282828] glow";

  return (
    <div className="bg-[#748877] w-full flex justify-between p-4">
      <div className="flex justify-start flex-col gap-2 items-center text-sm font-medium">
        <span className="text-white flex gap-2">
          Made with <FaHeart className="hover:cursor-pointer hover:rotate-2 hover:scale-120"/> by
          <a
            href="https://github.com/anagha166/Projects"
            target="_blank"
            className="hover:underline"
          >
            Anagha
          </a>
        </span>
      </div>
      <div className="size-xl text-2xl text-white flex justify-end gap-4 items-center font-medium">
        <a title="Gmail">
          <SiGmail className="hover:cursor-pointer hover:rotate-2 hover:scale-120" />
        </a>

        <a
          href="https://www.linkedin.com/in/anagha166/"
          target="_blank"
          title="LinkedIn"
        >
          <BsLinkedin className="hover:cursor-pointer hover:rotate-2 hover:scale-120" />
        </a>

        <a href="https://github.com/anagha166" target="_blank" title="Github">
          <BsGithub className="hover:cursor-pointer hover:rotate-2 hover:scale-120" />
        </a>  

        <a
          href="https://www.instagram.com/_anagha_/"
          target="_blank"
          title="Instagram"
        >
          <BsInstagram className="hover:cursor-pointer hover:rotate-2 hover:scale-120" />
        </a>

        <a href="https://www.devpost.com/anagha166" target="_blank" title="Art Account">
          <FaPaintBrush className="hover:cursor-pointer hover:rotate-2 hover:scale-120" />
        </a>

      </div>
    </div>
  );
};

export default Footer;
