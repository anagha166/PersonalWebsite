import React from 'react'
import { SiGmail } from "react-icons/si";

const Footer = () => {
    const btnClass =
    "btn rounded-full text-white text-lg w-12 p-0 border-none bg-[#202020] hover:bg-[#282828] glow";

  return (
    <div className="bg-[#181818]">
      <div className="flex flex-col flex-1 gap-3 items-center">
        <div className="flex flex-col gap-2 items-center text-sm font-medium">
          <span>Made with ❤️ by <a href="https://github.com/anagha166/Projects" target="_blank" className="hover:underline">Anagha</a></span>
        </div>
      </div>
    </div>
  );
}

export default Footer
