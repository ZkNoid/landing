import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function Card3D({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const angle = 15;
  const [rotateX, setRotateX] = useState<string>("");
  const [rotateY, setRotateY] = useState<string>("");

  // @ts-ignore
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const x = e.pageX;
    const y = e.pageY;

    if (cardRef.current) {
      const cardCenterX =
        cardRef.current.offsetLeft + cardRef.current.offsetWidth / 2;
      const cardCenterY =
        cardRef.current.offsetTop + cardRef.current.offsetHeight / 2;

      const relativeX = Math.round(x - cardCenterX);
      const relativeY = Math.round(y - cardCenterY);

      setMouseX(relativeX);
      setMouseY(relativeY);
    }
  };

  useEffect(() => {
    if (!cardRef.current) return;
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      const height = cardRef.current.offsetHeight;
      const degX = width / angle;
      const degY = height / angle;
      const rx = -(mouseY / degY);
      const ry = mouseX / degX;

      setRotateX("" + rx + "deg");
      setRotateY("" + ry + "deg");
    }
  }, [mouseX, mouseY]);
  return (
    <div className={className} onMouseMove={handleMouseMove}>
      <motion.div
        ref={cardRef}
        className={"w-full h-full"}
        initial={{
          rotateX: 0,
          rotateY: 0,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
          scale: 1,
        }}
        whileHover={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
          scale: 0.95,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
