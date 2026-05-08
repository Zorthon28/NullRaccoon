import React from "react";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SocialIcon = ({ href, label, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-400 hover:text-green-400 transition-colors duration-300 ease-in-out"
  >
    <Icon className="w-6 h-6" />
  </a>
);

const SocialIconsList = () => {
  const socialLinks = [
    { href: "https://github.com/Zorthon28", label: "GitHub", Icon: Github },
    {
      href: "https://www.linkedin.com/in/gustavotellodev/",
      label: "LinkedIn",
      Icon: Linkedin,
    },
    {
      href: "https://www.instagram.com/nullraccoontj/",
      label: "Instagram",
      Icon: Instagram,
    },
    {
      href: "https://www.facebook.com/NullRaccoon/",
      label: "Facebook",
      Icon: Facebook,
    },
  ];

  return (
    <div className="flex items-center space-x-6 md:space-x-8">
      {socialLinks.map(({ href, label, Icon }) => (
        <SocialIcon key={label} href={href} label={label} Icon={Icon} />
      ))}
    </div>
  );
};

export default function Footer({ t }) {
  const privacyLabel = t?.privacyPolicy || "Privacy Policy";
  const termsLabel = t?.termsAndConditions || "Terms & Conditions";

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "NullRaccoon",
            url: "https://www.nullraccoon.com",
            logo: "https://www.nullraccoon.com/logo192.png",
            sameAs: [
              "https://github.com/Zorthon28",
              "https://www.linkedin.com/in/gustavotellodev/",
              "https://www.instagram.com/nullraccoontj/",
              "https://www.facebook.com/NullRaccoon/",
            ],
          })}
        </script>
      </Helmet>

      <footer className="w-full bg-gray-900 text-white py-12">
        <div className="max-w-screen-xl mx-auto px-4 text-center flex flex-col items-center justify-center space-y-4">
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

          <SocialIconsList />

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href="/privacy"
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 ease-in-out"
            >
              {privacyLabel}
            </a>
            <a
              href="/terms"
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 ease-in-out"
            >
              {termsLabel}
            </a>
          </div>

          <p className="text-sm text-gray-500"> {t.footerText}</p>
        </div>
      </footer>
    </>
  );
}
