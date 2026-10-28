export default function Guarantees({ t }) {
  return (
    <section
      id="garantias"
      aria-labelledby="guarantees-title"
      className="mt-20 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 px-6 py-12 md:px-10"
      style={{ scrollMarginTop: "6rem" }}
    >
      <h2 id="guarantees-title" className="text-3xl md:text-4xl font-bold text-white mb-10">
        {t.guaranteesTitle}
      </h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left">
        {t.guarantees.map((guarantee) => (
          <div key={guarantee.title} className="border-t border-gray-700 pt-6">
            <dt className="text-xl font-semibold text-blue-200 mb-3">
              {guarantee.title}
            </dt>
            <dd className="text-gray-300 leading-relaxed">
              {guarantee.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
