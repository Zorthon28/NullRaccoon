import { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useMotion } from "../context/MotionContext";

// One image moves between the hero's reserved space and the header's reserved space.
export default function ScrollLogo({ className = "studio-home-mascot" }) {
  const motion = useMotion();
  const anchor = useRef(null);
  const logo = useRef(null);
  useLayoutEffect(() => {
    const target = document.querySelector("[data-header-logo-slot]");
    if (!target || !anchor.current || !logo.current) return;
    let frame = 0;
    let lastTime = 0;
    let current = null;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)") || { matches: false };
    const paint = (timestamp = performance.now()) => {
      frame = 0;
      const origin = anchor.current.getBoundingClientRect();
      const destination = target.getBoundingClientRect();
      const hero = anchor.current.closest("[data-logo-hero]");
      const header = target.closest("header");
      const end = Math.max(140, (hero?.offsetTop || 0) + (hero?.offsetHeight || 400) - (header?.offsetHeight || 72) - 90);
      const progress = origin.width ? Math.min(1, Math.max(0, window.scrollY / end)) : 1;
      const blend = (motion?.reducedMotion ?? reduced.matches) ? (progress > .5 ? 1 : 0) : progress * progress * (3 - 2 * progress);
      const size = origin.width + (destination.width - origin.width) * blend;
      const x = origin.left + (destination.left - origin.left) * blend;
      const y = origin.top + (destination.top - origin.top) * blend;
      const targetPose = { x, y, scale: size / 320 };
      const reduce = motion?.reducedMotion ?? reduced.matches;
      const elapsed = lastTime ? Math.min(timestamp - lastTime, 64) : 16;
      const ease = reduce ? 1 : 1 - Math.exp(-elapsed / 75);
      if (!current || reduce) current = targetPose;
      else current = { x: current.x + (x - current.x) * ease, y: current.y + (y - current.y) * ease, scale: current.scale + (targetPose.scale - current.scale) * ease };
      const moving = !reduce && (Math.abs(current.x - x) > .15 || Math.abs(current.y - y) > .15 || Math.abs(current.scale - targetPose.scale) > .0005);
      if (!moving) current = targetPose;
      logo.current.style.transform = "translate3d(" + current.x + "px," + current.y + "px,0) scale(" + current.scale + ")";
      logo.current.style.visibility = "visible";
      lastTime = timestamp;
      if (moving) frame = requestAnimationFrame(paint);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : null;
    observer?.observe(anchor.current);
    observer?.observe(target);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener?.("change", schedule);
    paint();
    return () => { observer?.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); reduced.removeEventListener?.("change", schedule); };
  }, [motion?.reducedMotion]);
  // The fixed image is outside the hero anchor, so hiding the hero on mobile keeps the header logo available.
  return <><span ref={anchor} className={className} aria-hidden="true" />{typeof document !== "undefined" && createPortal(<img ref={logo} className="studio-traveling-logo" src="/logo512.png" alt="" aria-hidden="true" width="320" height="320" />, document.body)}</>;
}
