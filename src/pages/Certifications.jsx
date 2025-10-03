import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Certifications = ({ t }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(t.certificationsList.map((cert) => cert.category)),
  ];

  const filteredCerts =
    selectedCategory === "All"
      ? t.certificationsList
      : t.certificationsList.filter(
          (cert) => cert.category === selectedCategory
        );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Professional Certifications",
    description: "Collection of professional certifications and achievements",
    itemListElement: t.certificationsList.map((cert, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EducationalOccupationalCredential",
        name: cert.name,
        description: cert.description,
        dateCreated: cert.date,
        url: cert.url,
        provider: {
          "@type": "Organization",
          name: "Codecademy",
        },
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <section className="certifications-section px-8 py-16">
        <h2 className="text-4xl font-extrabold mb-10 text-white text-center tracking-tight">
          {t.certificationsTitle}
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {filteredCerts.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] p-6 text-center w-full max-w-sm min-h-[380px] flex flex-col overflow-hidden border border-white/10 hover:border-blue-300/50"
            >
              <div className="flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {cert.category}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>

                <img
                  src={cert.imgSrc}
                  alt={`${cert.name} - ${cert.description}`}
                  className="w-full max-h-32 min-h-20 object-contain mb-4 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />

                <h3 className="text-lg font-semibold text-zinc-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                  {cert.name}
                </h3>

                <p className="text-sm text-gray-600 flex-grow mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Verification Link */}
                <div className="mt-auto">
                  <span className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verify Certificate
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Certifications;
