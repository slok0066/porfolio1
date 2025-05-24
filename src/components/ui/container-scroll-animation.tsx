"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [0.9, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  const cardBgOpacity = useTransform(scrollYProgress, [0, 0.4], [0.6, 1]);

  return (
    <div
      className="h-[45rem] md:h-[50rem] flex items-center justify-center relative p-2 md:p-8"
      ref={containerRef}
    >
      <div
        className="py-8 md:py-16 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} opacity={opacity} />
        <Card 
          rotate={rotate} 
          translate={translate} 
          scale={scale} 
          opacity={opacity}
          bgOpacity={cardBgOpacity}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent, opacity }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        opacity: opacity,
      }}
      className="div max-w-3xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  opacity,
  bgOpacity,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  opacity: MotionValue<number>;
  bgOpacity: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        opacity,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      } as any}
      className="max-w-3xl -mt-8 mx-auto h-[28rem] md:h-[32rem] w-full border border-zinc-700 p-2 md:p-4 bg-zinc-900 rounded-2xl shadow-2xl"
    >
      <motion.div 
        className="h-full w-full overflow-hidden rounded-xl bg-zinc-900 md:rounded-xl md:p-4 border border-zinc-800"
        style={{
          opacity: bgOpacity
        } as any}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}; 