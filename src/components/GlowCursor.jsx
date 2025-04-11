import { useEffect, useState } from "react";

const GlowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveGlow = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-96 h-96 rounded-full bg-[#3668ad] opacity-20 blur-[125px] transform -translate-x-1/2 -translate-y-1/2"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    ></div>
  );
};

export default GlowCursor;
