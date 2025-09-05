import "simplebar-react/dist/simplebar.min.css";
import Navbar from "./NavBar";
import Footer from "./Footer";

interface PageProps {
  children?: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center bg-[#3D4B3F] min-h-screen overflow-hidden px-4 md:px-0">
        {children || (
          <>
            <h2 className="text-center hero-text-shadow mt-10 mb-10 text-3xl md:text-[3.75vw]">
              Coming Soon
            </h2>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
