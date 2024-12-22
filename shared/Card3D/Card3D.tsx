import { motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function Card3D({
  children,
  className,
  hasViewAnimation,
}: {
  children: ReactNode;
  className?: string;
  hasViewAnimation?: boolean;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [rotateX, setRotateX] = useState<string>("");
  const [rotateY, setRotateY] = useState<string>("");
  const cardRef = useRef<HTMLDivElement>(null);
  const angle = 15;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

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

  useEffect(() => {
    const checkIsMobile = () => {
      window.innerWidth >= 1024 ? setIsMobile(false) : setIsMobile(true);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div ref={ref} className={className} onMouseMove={handleMouseMove}>
      <motion.div
        ref={cardRef}
        className={"w-full h-full"}
        animate={
          hasViewAnimation && !isMobile
            ? isInView
              ? {
                  y: 0,
                  transition: {
                    duration: 4,
                    type: "spring",
                    ease: "linear",
                    stiffness: 50,
                  },
                }
              : {
                  y: "10vw",
                  transition: {
                    duration: 4,
                    type: "spring",
                    ease: "linear",
                    stiffness: 50,
                  },
                }
            : undefined
        }
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
