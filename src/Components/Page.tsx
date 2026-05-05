import "simplebar-react/dist/simplebar.min.css";
import Navbar from "./NavBar";
import Footer from "./Footer";
import MouseTrail from "./MouseTrail";

interface PageProps {
  children?: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div>
      <MouseTrail />
      <Navbar />
      <div className="relative flex flex-col items-center bg-[#4C5F4D] min-h-screen overflow-hidden px-4 md:px-0">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="ambient-blob ambient-blob-1" />
          <div className="ambient-blob ambient-blob-2" />
          <div className="ambient-blob ambient-blob-3" />
        </div>
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
