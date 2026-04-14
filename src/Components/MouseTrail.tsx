import { useEffect, useMemo, useRef, useState } from "react";

const TRAIL_COUNT = 8;

const MouseTrail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [points, setPoints] = useState(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }))
  );
  const target = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setIsReducedMotion(mediaQuery.matches);

    updateReducedMotion();
    mediaQuery.addEventListener("change", updateReducedMotion);

    const onMouseMove = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      mediaQuery.removeEventListener("change", updateReducedMotion);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    if (isReducedMotion) {
      return undefined;
    }

    const tick = () => {
      setPoints((currentPoints) => {
        const nextPoints = [...currentPoints];
        const firstPoint = nextPoints[0];
        firstPoint.x += (target.current.x - firstPoint.x) * 0.22;
        firstPoint.y += (target.current.y - firstPoint.y) * 0.22;

        for (let i = 1; i < nextPoints.length; i += 1) {
          nextPoints[i].x += (nextPoints[i - 1].x - nextPoints[i].x) * 0.26;
          nextPoints[i].y += (nextPoints[i - 1].y - nextPoints[i].y) * 0.26;
        }

        return nextPoints;
      });

      animationFrame.current = window.requestAnimationFrame(tick);
    };

    animationFrame.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [isReducedMotion]);

  const cursorClassName = useMemo(() => {
    return isVisible ? "mouse-glow visible" : "mouse-glow";
  }, [isVisible]);

  if (isReducedMotion) {
    return null;
  }

  return (
    <>
      <div
        className={cursorClassName}
        style={{
          transform: `translate(${points[0].x}px, ${points[0].y}px) translate(-50%, -50%)`,
        }}
      />
      {points.map((point, index) => (
        <div
          key={index}
          className="mouse-dot"
          style={{
            transform: `translate(${point.x}px, ${point.y}px) translate(-50%, -50%) scale(${1 - index * 0.07})`,
            opacity: isVisible ? Math.max(0.14, 0.55 - index * 0.06) : 0,
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        />
      ))}
    </>
  );
};

export default MouseTrail;
