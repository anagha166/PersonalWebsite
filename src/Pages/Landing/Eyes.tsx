import { useEffect, useRef, useState } from "react";
import { generateNormalRandom, clamp } from "../../Utils/functions";

const Eyes = () => {
  const [blinkWaitTime, setBlinkWaitTime] = useState(3000);
  const [blinking, setBlinking] = useState(false);
  const eyeContainer = useRef<HTMLDivElement>(null!);
  const eyePos = useRef("translate3d(0px, 0px, 0px)");

  const blink = () => {
    if (!eyeContainer.current) return;

    setBlinking(true);

    eyeContainer.current!.style.transform = `scaleY(0.1) ${eyePos.current}`;

    setTimeout(() => {
      eyeContainer.current!.style.transform = `scaleY(1) ${eyePos.current}`;
      setBlinking(false);
    }, 150);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (blinking || !eyeContainer.current) return;

      const rect = eyeContainer.current.getBoundingClientRect();
      const x = `${clamp((e.clientX - rect.left - rect.width / 2) / 30, -5, 5)}px`;
      const y = `${clamp((e.clientY - rect.top - rect.height / 2) / 30, -5, 5)}px`;

      eyePos.current = `translate3d(${x}, ${y}, 0px)`;

      requestAnimationFrame(() => {
        eyeContainer.current!.style.transform = eyePos.current;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [blinking]);

  useEffect(() => {
    const interval = setInterval(() => {
      blink();
      setBlinkWaitTime(1000 * generateNormalRandom(3, 2));
    }, blinkWaitTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={eyeContainer}
      className="flex gap-[4.2vw] justify-center items-center w-full"
    >
      <div className="eye w-[1vw] h-[1.2vw] rounded-full bg-black" />
      <div className="eye w-[1vw] h-[1.2vw] rounded-full bg-black" />
    </div>
  );
};

export default Eyes;
