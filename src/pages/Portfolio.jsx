import React from "react";

export default function Portfolio({ t }) {
  // Update your portfolio projects to include case study links
  const portfolioProjects = [
    {
      title: "E-commerce Platform",
      description:
        "A modern online store with cart, checkout, and admin panel.",
      image: "/images/ecommerce-project.jpg",
      type: "CaseStudy",
      link: "/case-study/ecommerce-platform", // Link to case study
    },
    {
      title: "Medical Equipment Management",
      description:
        "Inventory and maintenance system for medical center with QR tracking",
      image: "/images/medtech-premier-thumbnail.png",
      type: "CaseStudy",
      link: "/case-study/medtech-premier",
    },
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio site for a creative freelancer.",
      image: "/images/portfolio-project.jpg",
      link: "#", // Regular project link
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">{t.portfolioTitle}</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          {t.portfolioSubtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : "_self"}
              rel={project.link.startsWith("http") ? "noopener noreferrer" : ""}
              className="bg-white/5 hover:bg-white/10 rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                {project.type === "CaseStudy" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      Case Study Available
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
