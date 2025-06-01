import React from 'react';

const Certifications = ({ t }) => {
  return (
    <section className="certifications-section px-8 py-16">
      <h2 className="text-4xl font-extrabold mb-10 text-white text-center tracking-tight">
        {t.certificationsTitle}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {t.certificationsList.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] p-6 text-center w-full max-w-sm min-h-[300px] flex flex-col justify-between"
          >
            <img
              src={cert.imgSrc}
              alt={cert.name}
              className="w-full max-h-36 min-h-24 object-contain mb-4 transition-opacity duration-300 group-hover:opacity-90"
            />
            <h3 className="text-lg font-semibold text-zinc-800 group-hover:text-red-600 transition-colors duration-300">
              {cert.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
