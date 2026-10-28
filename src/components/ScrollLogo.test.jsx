import { fireEvent, render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./HeaderHero";
import ScrollLogo from "./ScrollLogo";
import translations from "../utils/translations";

test("one hero logo moves into the header slot after scrolling", async () => {
  const originalScroll = window.scrollY;
  Object.defineProperty(window, "scrollY", { configurable: true, value: 0, writable: true });
  const bounds = jest.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function () {
    if (this.hasAttribute("data-header-logo-slot")) return { left: 24, top: 12, width: 40, height: 40 };
    if (this.classList.contains("studio-home-mascot")) return { left: 900, top: 200 - window.scrollY, width: 290, height: 290 };
    return { left: 0, top: 0, width: 0, height: 0 };
  });
  try {
    const { container } = render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Header t={translations.en} heroLogo /><section data-logo-hero><ScrollLogo /></section></MemoryRouter>);
    expect(container.querySelector("header img")).toBeNull();
    const logo = document.querySelector(".studio-traveling-logo");
    expect(document.querySelectorAll(".studio-traveling-logo")).toHaveLength(1);
    expect(logo.style.transform).toContain("900px,200px");
    window.scrollY = 1000;
    fireEvent.scroll(window);
    await waitFor(() => expect(logo.style.transform).toBe("translate3d(24px,12px,0) scale(0.125)"));
  } finally {
    bounds.mockRestore();
    window.scrollY = originalScroll;
  }
});
