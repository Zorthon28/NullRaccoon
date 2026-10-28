import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FloatingButtons from "./FloatingButtons";

test("contact controls dock in the footer without losing the language action", () => {
  const originalObserver = window.IntersectionObserver;
  let visibilityChanged;
  const disconnect = jest.fn();
  window.IntersectionObserver = class {
    constructor(callback) { visibilityChanged = callback; }
    observe() {}
    disconnect() { disconnect(); }
  };
  const setLang = jest.fn();
  try {
    const { container, unmount } = render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><footer className="studio-footer"><div id="footer-controls-dock" /></footer><FloatingButtons lang="en" setLang={setLang} /></MemoryRouter>);
    const dock = container.querySelector("#footer-controls-dock");
    expect(dock.querySelector("aside")).toBeNull();
    act(() => visibilityChanged([{ isIntersecting: true }]));
    expect(dock.querySelector("aside")).toHaveClass("studio-floating--docked");
    fireEvent.click(screen.getByRole("button", { name: "Ver en español" }));
    expect(setLang).toHaveBeenCalledWith("es");
    act(() => visibilityChanged([{ isIntersecting: false }]));
    expect(dock.querySelector("aside")).toBeNull();
    expect(screen.getByRole("link", { name: "Let’s talk on WhatsApp" })).toBeInTheDocument();
    unmount();
    expect(disconnect).toHaveBeenCalled();
  } finally {
    window.IntersectionObserver = originalObserver;
  }
});
