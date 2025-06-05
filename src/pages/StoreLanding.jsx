import { Link } from "react-router-dom";
import { Star, Truck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const FeatureCard = ({ Icon, title, description, delay }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <Icon className="mx-auto mb-4 text-green-600" size={40} />
    <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </motion.div>
);

export default function StoreLanding({ lang, t }) {
  const store = t.store;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-16 text-center px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-green-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {store.welcomeTitle}
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {store.welcomeSubtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link to="/store/products">
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition transform hover:scale-105">
              {store.shopNow}
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          {store.whyChooseUsTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <FeatureCard
            Icon={Truck}
            title={store.features.fastShipping.title}
            description={store.features.fastShipping.description}
            delay={0.1}
          />
          <FeatureCard
            Icon={ShieldCheck}
            title={store.features.trustedQuality.title}
            description={store.features.trustedQuality.description}
            delay={0.2}
          />
          <FeatureCard
            Icon={Star}
            title={store.features.customerSatisfaction.title}
            description={store.features.customerSatisfaction.description}
            delay={0.3}
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center text-gray-800 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {store.featuredProductsTitle}
          </motion.h2>
          {/* ... product cards could go here ... */}
          <div className="text-center mt-10">
            <Link to="/store/products">
              <button className="text-green-700 font-medium hover:underline">
                {store.viewAllProducts}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
        {store.footerText}
      </footer>
    </div>
  );
}
