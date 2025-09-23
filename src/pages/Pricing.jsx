import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/HeaderHero";
import NullDentalPricing from "../components/NullDentalPricing";

export default function Pricing({
  lang,
  t,
  showQuoteModal,
  setShowQuoteModal,
}) {
  const pricing = t.pricing;
  const [isOneTime, setIsOneTime] = useState(true);

  const plans = [
    pricing.plans.basic,
    pricing.plans.standard,
    pricing.plans.premium,
    pricing.plans.enterprise,
  ];

  return (
    <>
      <Header t={t} pageType="pricing" />
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 py-20 px-6">
        {/* Modal Overlay */}
        {showQuoteModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out" />
        )}
        {/* Animated background particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute block w-1 h-1 bg-white opacity-10 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            ></span>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                {pricing.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {pricing.subtitle}
            </p>

            {/* Toggle Switch */}
            <div className="mt-8 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
                <button
                  onClick={() => setIsOneTime(true)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isOneTime
                      ? "bg-white text-gray-900 shadow-lg"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {pricing.toggle.oneTime}
                </button>
                <button
                  onClick={() => setIsOneTime(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    !isOneTime
                      ? "bg-white text-gray-900 shadow-lg"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {pricing.toggle.annualSupport}
                </button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 ${
                  index === 1 ? "ring-2 ring-purple-400 scale-105" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {plan.name}
                </h2>

                <div className="mb-8">
                  <div className="text-center">
                    <p className="text-lg text-gray-300 mb-2">
                      <strong className="text-white">
                        {isOneTime
                          ? pricing.toggle.oneTime
                          : pricing.toggle.annualSupport}
                        :
                      </strong>
                    </p>
                    <p
                      className={`text-4xl font-bold ${
                        isOneTime ? "text-blue-300" : "text-green-300"
                      }`}
                    >
                      {isOneTime ? plan.monthly : plan.yearly}
                    </p>
                    {(() => {
                      return (
                        <div className="text-sm text-gray-400 mt-1">
                          <p>
                            Add-ons can be purchased individually for the listed
                            monthly prices.
                          </p>
                        </div>
                      );
                    })()}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Incluye:
                  </h3>
                  <ul className="space-y-3">
                    {plan.includes.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <span className="text-gray-200 text-left">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  {isOneTime ? (
                    <button
                      onClick={() => setShowQuoteModal(true)}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {pricing.buttons.payOneTime}
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowQuoteModal(true)}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {pricing.buttons.subscribeAnnual}
                    </button>
                  )}
                  <button
                    onClick={() => setShowQuoteModal(true)}
                    className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {pricing.buttons.requestAddons}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <NullDentalPricing />
    </>
  );
}
