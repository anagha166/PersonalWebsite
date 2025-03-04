import { useEffect } from "react";

const Eyes = () => {
  useEffect(() => {
    const pupils = document.querySelectorAll(".eye .pupil");
    
    if (pupils.length === 0) {
      console.warn("No pupils found in the DOM.");
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      pupils.forEach((pupil) => {
        const rect = pupil.getBoundingClientRect();
        const x = (e.pageX - rect.left) / 80 + "px";
        const y = (e.pageY - rect.top) / 80 + "px";

        console.log(`x: ${x}, y: ${y}`);

        (pupil as HTMLDivElement).style.transform =
          `translate3d(${x}, ${y}, 0px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes">
      <div className="eye">
        <div className="pupil"></div>
      </div>
      <div className="eye">
        <div className="pupil"></div>
      </div>
    </div>
  );
};

export default Eyes;

