import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#748877] w-full flex justify-between p-4">
      <div className="flex justify-start flex-col gap-2 items-center text-sm font-medium">
        <span className="text-white flex gap-2">
          <span className="hidden sm:inline">Made with </span>
          <FaHeart className="mt-[0.2vw] l hover:cursor-pointer hover:rotate-2 hover:scale-120" />
          <span className="hidden sm:inline"> by Anagha</span>
        </span>
      </div>
      <div className="size-xl text-2xl text-white flex justify-end gap-4 items-center font-medium">
        <a title="Gmail" href="mailto:anagha.kamath@gmail.com"
          target="_blank">
          <SiGmail className="hover:cursor-pointer hover:rotate-2 hover:scale-120" />
        </a>

        <a
          href="https://www.linkedin.com/in/anagha-k-b00117266/"
          target="_blank"
          title="LinkedIn"
        >
          <BsLinkedin className="hover:cursor-pointer hover:rotate-2 hover:scale-120" />
        </a>

        <a href="https://github.com/anagha166" target="_blank" title="Github">
          <BsGithub className="hover:cursor-pointer hover:rotate-2 hover:scale-120" />
        </a>

        <a
          href="https://www.instagram.com/anagha_kamath/?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr#"
          target="_blank"
          title="Instagram"
        >
          <BsInstagram className="hover:cursor-pointer hover:rotate-2 hover:scale-120" />
        </a>

        <a
          href="https://www.instagram.com/art.by.anagha/?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr#"
          target="_blank"
          title="Art Account"
        >
          <FaPaintBrush className="hover:cursor-pointer hover:rotate-2 hover:scale-120" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
