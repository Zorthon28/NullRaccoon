import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { MotionProvider, MotionControl } from "./MotionContext";

const originalMatchMedia = window.matchMedia;
afterEach(() => {
  cleanup();
  localStorage.clear();
  window.matchMedia = originalMatchMedia;
});

test("device reduced motion is respected until the visitor explicitly enables animations", () => {
  window.matchMedia = () => ({ matches: true, addEventListener() {}, removeEventListener() {} });
  render(<MotionProvider><MotionControl lang="en" /></MotionProvider>);
  expect(document.documentElement.dataset.motion).toBe("reduced");
  expect(screen.getByText("Your browser requests reduced motion.")).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Animations"), { target: { value: "full" } });
  expect(document.documentElement.dataset.motion).toBe("full");
  expect(localStorage.getItem("nullraccoon-motion")).toBe("full");
  cleanup();
  render(<MotionProvider><MotionControl lang="en" /></MotionProvider>);
  expect(screen.getByLabelText("Animations")).toHaveValue("full");
  expect(document.documentElement.dataset.motion).toBe("full");
});

test("reduced motion can also be chosen when the device allows animations", () => {
  window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
  render(<MotionProvider><MotionControl lang="es" /></MotionProvider>);
  expect(document.documentElement.dataset.motion).toBe("full");
  fireEvent.change(screen.getByLabelText("Animaciones"), { target: { value: "reduced" } });
  expect(document.documentElement.dataset.motion).toBe("reduced");
  fireEvent.change(screen.getByLabelText("Animaciones"), { target: { value: "system" } });
  expect(document.documentElement.dataset.motion).toBe("full");
});

test("the local design preview enables motion without changing the device preference", () => {
  const previousEnvironment = process.env.NODE_ENV;
  window.matchMedia = () => ({ matches: true, addEventListener() {}, removeEventListener() {} });
  try {
    process.env.NODE_ENV = "development";
    render(<MotionProvider><MotionControl lang="en" /></MotionProvider>);
    expect(screen.getByLabelText("Animations")).toHaveValue("full");
    expect(document.documentElement.dataset.motion).toBe("full");
    expect(window.matchMedia().matches).toBe(true);
  } finally {
    process.env.NODE_ENV = previousEnvironment;
  }
});
