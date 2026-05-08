import React from "react";
import { render, screen } from "@testing-library/react";

// These dependencies are ESM-only in node_modules and break CRA's Jest runtime.
// The app doesn't need them for a basic render smoke test.
jest.mock("yet-another-react-lightbox", () => {
  return function LightboxMock() {
    return null;
  };
});

jest.mock(
  "yet-another-react-lightbox/plugins",
  () => {
    return {
      Slideshow: () => null,
      Fullscreen: () => null,
      Thumbnails: () => null,
      Zoom: () => null,
    };
  },
  { virtual: true },
);

jest.mock("yet-another-react-lightbox/plugins/thumbnails.css", () => ({}), {
  virtual: true,
});

jest.mock("yet-another-react-lightbox/styles.css", () => ({}), {
  virtual: true,
});

import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

test("renders the home page", () => {
  render(
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>,
  );

  // Header logo on the home route.
  expect(screen.getAllByAltText(/NullRaccoon Logo/i).length).toBeGreaterThan(0);
});
