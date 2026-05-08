import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header({ t }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const auth = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine current route
  const path = location.pathname;

  // Define nav items for different routes
  const navItems = {
    "/": [
      ...(auth?.canAccessRestricted
        ? [{ name: t.services || "Services", href: "/services" }]
        : [{ name: "Login", href: "/login" }]),
      { name: t.portfolioTitle, href: "#portfolio" },
      {
        name: t.certificationsTitle,
        href: "#certifications",
        className: "hidden md:block",
      },
    ],
    "/services": [
      { name: "Home", href: "/" },
      { name: t.portfolioTitle, href: "/#portfolio" },
    ],
    // Change this key to a more dynamic check
    caseStudy: [
      { name: t.images, href: "#images" },
      { name: t.overview, href: "#overview" },
    ],
    // fallback or other routes
    default: [
      { name: "Home", href: "/" },
      ...(auth?.canAccessRestricted
        ? [{ name: t.services || "Services", href: "/services" }]
        : [{ name: "Login", href: "/login" }]),
    ],
  };

  // Check if the path starts with "/case-study"
  let currentNav = [];
  if (path.startsWith("/case-study")) {
    currentNav = navItems.caseStudy;
  } else if (path.startsWith("/services")) {
    currentNav = navItems["/services"];
  } else {
    // Check for exact path matches for other routes
    currentNav = navItems[path] || navItems.default;
  }

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e, href) => {
    if (!href.startsWith("#")) {
      return;
    }

    e.preventDefault(); // Prevent the default jump behavior
    const targetId = href.substring(1); // Get the ID without the '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 bg-opacity-95 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-8 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
        >
          <img
            src="/logo192.png"
            alt="NullRaccoon Logo"
            className="h-8 md:h-10 lg:h-12"
          />
          <span className="text-white font-extrabold text-xl tracking-tight sm:inline">
            NullRaccoon
          </span>
        </a>

        {/* Dynamic Navigation */}
        {currentNav.length > 0 && (
          <nav role="navigation" aria-label="Main Navigation">
            <ul className="flex space-x-6 items-center">
              {currentNav.map((item) => (
                <li key={item.name} className={item.className || ""}>
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)} // Add the onClick handler
                    className="text-white text-sm md:text-base font-semibold relative group transition-all"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}

              {auth?.isSignedIn && (
                <li>
                  <button
                    type="button"
                    onClick={() => auth.signOut()}
                    className="text-white text-sm md:text-base font-semibold relative group transition-all"
                  >
                    Logout
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
