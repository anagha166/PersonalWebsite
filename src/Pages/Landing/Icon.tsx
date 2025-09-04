import Eyes from "./Eyes";
import icon from "/src/assets/Landing/My_Icon.png";

const Icon = () => {
  return (
    <div className="flex flex-1 justify-center items-center mt-6 md:mt-0">
      {/* Wrapper to control positioning */}
      <div className="relative w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] flex justify-center items-center">
        {/* Eyes positioned ABOVE the image */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center gap-[4%] z-20">
          <Eyes />
        </div>

        {/* Image */}
        <img
          src={icon}
          alt="icon"
          className="w-full h-full object-contain z-10"
        />

        {/* Outer circle effect */}
        <div className="absolute top-7 border-6 rounded-full w-[55vw] h-[55vw] md:w-[28vw] md:h-[28vw] bg-[#748877] border-amber-50 transition-shadow hover:shadow-2xl z-0" />
      </div>
    </div>
  );
};

export default Icon;
