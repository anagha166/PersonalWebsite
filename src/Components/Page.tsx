import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { baseURL } from "../Utils/info";

interface PageProps {
  children?: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center py-[10vh]">
        {children || (
          <>
            <h2 className="text-center hero-text-shadow mt-10 mb-10 text-[3.75vw]">
              Coming Soon
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
