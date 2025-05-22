import React from 'react';

export default function Portfolio({ t }) {
  return (
    <section id="portfolio" className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">{t.portfolioTitle}</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">{t.portfolioSubtitle}</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.portfolioProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
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
