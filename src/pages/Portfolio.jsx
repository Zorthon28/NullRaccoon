import React from "react";

export default function Portfolio({ t }) {
  return (
    <section id="portfolio" className="mt-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">{t.portfolioTitle}</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          {t.portfolioSubtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.portfolioProjects.map((project, index) => (
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
                      {t.casestudyavailable}
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
