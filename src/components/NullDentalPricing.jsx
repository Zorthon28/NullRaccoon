import React, { useState } from "react";
import {
  Check,
  Users,
  Calendar,
  Mail,
  FileText,
  BarChart3,
  Settings,
  Building,
  Stethoscope,
  CreditCard,
  Zap,
  Shield,
  Palette,
  Globe,
} from "lucide-react";

const NullDentalPricing = () => {
  const [showFeatures, setShowFeatures] = useState(true);

  const featuresData = [
    {
      feature: {
        icon: <Users className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "Patient Registry",
      },
      basic: <Check className="w-4 h-4 text-green-400 inline" />,
      standard: <Check className="w-4 h-4 text-green-400 inline" />,
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Core patient data",
    },
    {
      feature: {
        icon: <Calendar className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "Appointments / Scheduling",
      },
      basic: <Check className="w-4 h-4 text-green-400 inline" />,
      standard: <Check className="w-4 h-4 text-green-400 inline" />,
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Email reminders included",
    },
    {
      feature: {
        icon: <Mail className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "Email / Messaging (basic)",
      },
      basic: <Check className="w-4 h-4 text-green-400 inline" />,
      standard: <Check className="w-4 h-4 text-green-400 inline" />,
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Limited messages included",
    },
    {
      feature: {
        icon: <FileText className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "Treatment Plans",
      },
      basic: "–",
      standard: <Check className="w-4 h-4 text-green-400 inline" />,
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Optional extra for Basic",
    },
    {
      feature: {
        icon: <BarChart3 className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "Simple Dashboard / Reports",
      },
      basic: <Check className="w-4 h-4 text-green-400 inline" />,
      standard: <Check className="w-4 h-4 text-green-400 inline" />,
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Key metrics included",
    },
    {
      feature: {
        icon: <BarChart3 className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "Advanced Reporting & Analytics",
      },
      basic: "–",
      standard: "–",
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Standard/Basic can add as extra",
    },
    {
      feature: {
        icon: <Settings className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "User Roles / Permissions",
      },
      basic: "–",
      standard: "–",
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Fine-grained control; optional extra for lower tiers",
    },
    {
      feature: {
        icon: <Building className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "Multi-location Support",
      },
      basic: "–",
      standard: "–",
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Included for Premium/Enterprise, optional extra for Standard",
    },
    {
      feature: {
        icon: <Stethoscope className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "Odontogram Module",
      },
      basic: "–",
      standard: "–",
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Base module optional for lower tiers",
    },
    {
      feature: {
        icon: <Stethoscope className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "Advanced Odontogram",
      },
      basic: "–",
      standard: "–",
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Extra detail; optional for all tiers",
    },
    {
      feature: {
        icon: <CreditCard className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "Insurance & Billing Module",
      },
      basic: "–",
      standard: "–",
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes:
        "Premium/Enterprise include basic billing; optional extra for lower tiers",
    },
    {
      feature: {
        icon: <Zap className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "Custom Workflows / Automation",
      },
      basic: "–",
      standard: "–",
      premium: "–",
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Optional extra for Premium, Enterprise",
    },
    {
      feature: {
        icon: <Shield className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "Dedicated Support SLA",
      },
      basic: "–",
      standard: "–",
      premium: "–",
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Optional extra for Enterprise",
    },
    {
      feature: {
        icon: <Palette className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "White-labeling / Branding",
      },
      basic: "–",
      standard: "–",
      premium: "–",
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Optional extra for Enterprise",
    },
    {
      feature: {
        icon: <Globe className="w-4 h-4 text-blue-400 inline mr-2" />,
        text: "API / Integrations Package",
      },
      basic: "–",
      standard: "–",
      premium: "–",
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Optional extra for Premium/Enterprise",
    },
  ];

  const addonsData = [
    {
      addon: "Odontogram Module",
      basic: "1,500 MXN",
      standard: "1,500 MXN",
      premium: "1,500 MXN",
      enterprise: "1,500 MXN",
      notes: "Visual tooth chart",
    },
    {
      addon: "Advanced Odontogram",
      basic: "2,500 MXN",
      standard: "2,500 MXN",
      premium: "2,500 MXN",
      enterprise: "2,500 MXN",
      notes: "Optional even for Premium/Enterprise",
    },
    {
      addon: "Extra Messaging / Email Bundle (5k)",
      basic: "500 MXN",
      standard: "500 MXN",
      premium: "500 MXN",
      enterprise: "500 MXN",
      notes: "Optional extra messages/emails",
    },
    {
      addon: "Additional Messaging / Email Bundle (15k)",
      basic: "1,000 MXN",
      standard: "1,000 MXN",
      premium: "1,000 MXN",
      enterprise: "1,000 MXN",
      notes: "Optional extra messages/emails",
    },
    {
      addon: "Imaging / X-ray Storage Upgrade (10 GB)",
      basic: "1,000 MXN",
      standard: "1,000 MXN",
      premium: "1,000 MXN",
      enterprise: "1,000 MXN",
      notes: "Optional extra storage",
    },
    {
      addon: "Additional Imaging Storage (30 GB)",
      basic: "2,000 MXN",
      standard: "2,000 MXN",
      premium: "2,000 MXN",
      enterprise: "2,000 MXN",
      notes: "Optional extra storage",
    },
    {
      addon: "Multi-location Support",
      basic: "–",
      standard: "2,000 MXN",
      premium: "✅",
      enterprise: "✅",
      notes: "Optional extra for Standard; included in higher tiers",
    },
    {
      addon: "Insurance & Billing Module",
      basic: "–",
      standard: "1,500 MXN",
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Optional extra for Standard; included in higher tiers",
    },
    {
      addon: "Advanced Reporting & Analytics",
      basic: "–",
      standard: "1,000 MXN",
      premium: <Check className="w-4 h-4 text-green-400 inline" />,
      enterprise: <Check className="w-4 h-4 text-green-400 inline" />,
      notes: "Optional extra for Standard; included in higher tiers",
    },
    {
      addon: "Custom Workflows / Automation",
      basic: "–",
      standard: "–",
      premium: "2,500 MXN",
      enterprise: "2,500 MXN",
      notes: "Optional extra for Premium/Enterprise",
    },
    {
      addon: "Dedicated Support SLA",
      basic: "–",
      standard: "–",
      premium: "–",
      enterprise: "3,000 MXN",
      notes: "Optional extra for Enterprise",
    },
    {
      addon: "White-labeling / Branding",
      basic: "–",
      standard: "–",
      premium: "–",
      enterprise: "2,500 MXN",
      notes: "Optional extra for Enterprise",
    },
    {
      addon: "API / Integrations Package",
      basic: "–",
      standard: "–",
      premium: "2,000 MXN",
      enterprise: "2,000 MXN",
      notes: "Optional extra for Premium/Enterprise",
    },
    {
      addon: "Advanced User Roles & Permissions",
      basic: "–",
      standard: "–",
      premium: "1,000 MXN",
      enterprise: "1,000 MXN",
      notes: "Optional extra for Premium/Enterprise",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 py-20 px-6">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="absolute block w-1 h-1 bg-white opacity-10 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              transform: "translateZ(0)",
            }}
          ></span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              NullDental Pricing Details
            </span>
          </h1>

          {/* Toggle Switch */}
          <div className="mt-8 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
              <button
                onClick={() => setShowFeatures(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  showFeatures
                    ? "bg-white text-gray-900 shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Features Table
              </button>
              <button
                onClick={() => setShowFeatures(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  !showFeatures
                    ? "bg-white text-gray-900 shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Add-ons Table
              </button>
            </div>
          </div>
        </div>

        {showFeatures ? (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Features Table
            </h2>
            <div className="overflow-x-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-white/20">
                    <th className="p-4 text-center text-white font-semibold border-b border-white/30">
                      Feature
                    </th>
                    <th className="p-4 text-center text-white font-semibold border-b border-white/30">
                      Basic
                    </th>
                    <th className="p-4 text-center text-white font-semibold border-b border-white/30 relative">
                      Standard
                      <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </th>
                    <th className="p-4 text-center text-white font-semibold border-b border-white/30">
                      Premium
                    </th>
                    <th className="p-4 text-center text-white font-semibold border-b border-white/30">
                      Enterprise
                    </th>
                    <th className="p-4 text-center text-white font-semibold border-b border-white/30">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featuresData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <td className="p-4 text-gray-200 border-b border-white/10">
                        {row.feature.icon}
                        {row.feature.text}
                      </td>
                      <td className="p-4 text-green-400 border-b border-white/10">
                        {row.basic}
                      </td>
                      <td className="p-4 text-green-400 border-b border-white/10">
                        {row.standard}
                      </td>
                      <td className="p-4 text-green-400 border-b border-white/10">
                        {row.premium}
                      </td>
                      <td className="p-4 text-green-400 border-b border-white/10">
                        {row.enterprise}
                      </td>
                      <td
                        className="p-4 text-gray-400 border-b border-white/10"
                        title={row.notes}
                      >
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Add-ons Table
            </h2>
            <div className="overflow-x-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-white/20">
                    <th className="p-4 text-center text-white font-semibold border-b border-white/30">
                      Add-on Feature
                    </th>
                    <th className="p-4 text-center text-white font-semibold border-b border-white/30">
                      Basic
                    </th>
                    <th className="p-4 text-center text-white font-semibold border-b border-white/30 relative">
                      Standard
                      <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </th>
                    <th className="p-4 text-center text-white font-semibold border-b border-white/30">
                      Premium
                    </th>
                    <th className="p-4 text-center text-white font-semibold border-b border-white/30">
                      Enterprise
                    </th>
                    <th className="p-4 text-center text-white font-semibold border-b border-white/30">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {addonsData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <td className="p-4 text-gray-200 border-b border-white/10">
                        {row.addon}
                      </td>
                      <td className="p-4 text-yellow-300 border-b border-white/10">
                        {row.basic}
                      </td>
                      <td className="p-4 text-yellow-300 border-b border-white/10">
                        {row.standard}
                      </td>
                      <td className="p-4 text-green-400 border-b border-white/10">
                        {row.premium}
                      </td>
                      <td className="p-4 text-green-400 border-b border-white/10">
                        {row.enterprise}
                      </td>
                      <td
                        className="p-4 text-gray-400 border-b border-white/10"
                        title={row.notes}
                      >
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NullDentalPricing;
