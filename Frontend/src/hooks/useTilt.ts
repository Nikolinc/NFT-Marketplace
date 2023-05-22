import React from "react";

function useTilt(active: boolean) {
  const ref = React.useRef<HTMLImageElement | HTMLDivElement>(null);
  console.log("ref");

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    let rect: any;
    let mouseX: number;
    let mouseY: number;

    const handleMouseMove = (e: any) => {
      if (!ref.current) return;

      if (!rect) {
        rect = ref?.current?.getBoundingClientRect() as DOMRect;
      }
      mouseX = e.clientX;
      mouseY = e.clientY;
      const px = `${((mouseX - rect.left) / rect.width - 0.5) * 45}deg`;
      const py = `${-((mouseY - rect.top) / rect.height - 0.5) * 45}deg`;

      ref?.current?.style.setProperty("--px", px);
      ref?.current?.style.setProperty("--py", py);
    };

    ref?.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      ref?.current?.removeEventListener("mousemove", handleMouseMove);
    };

    
  }, [active]);

  return ref;
}

export default useTilt;
