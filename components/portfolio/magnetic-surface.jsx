import { useMotionValue, useSpring, motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function MagneticSurface({
  children,
  className,
  strength = 18,
  onMouseMove,
  onMouseLeave,
  ...props
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.25 });

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - bounds.left - bounds.width / 2;
        const offsetY = event.clientY - bounds.top - bounds.height / 2;

        x.set(offsetX / strength);
        y.set(offsetY / strength);
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        x.set(0);
        y.set(0);
        onMouseLeave?.(event);
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
