import { useEffect, useRef, useState } from "react";
import { useMotion } from "../context/MotionContext";
export default function ShopReveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);
  const motion = useMotion();
  useEffect(() => {
    if (motion?.reducedMotion || typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    setVisible(false);
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setVisible(true); observer.disconnect(); }
    }, { threshold: .08 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [motion?.reducedMotion]);
  return <div ref={ref} className={"shop-reveal " + className} data-visible={visible} style={{ "--reveal-delay": delay + "ms" }}>{children}</div>;
}
