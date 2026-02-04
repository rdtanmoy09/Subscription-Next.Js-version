import Btn from "@/components/button";
import { Check } from "lucide-react"; // Import the sharp icon

const pricingPlans = [
  {
    name: "Starter",
    price: "$19/month",
    features: [
      "Basic Analysis",
      "Up to 5 users",
      "Email support",
      "Cloud Storage (100gb)",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$49/month",
    features: [
      "Advanced Analytics",
      "Unlimited Users",
      "Priority Email & Chat Support",
      "Cloud Storage (500gb)",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: [
      "Enterprise Analytics",
      "Unlimited Users",
      "24/7 Dedicated Support",
      "Cloud Storage (Unlimited)",
      "API Access",
    ],
    featured: false,
  },
];

export default function Hero() {
  return (
    <header className="py-12 px-6 md:px-16 font-space max-w-7xl mx-auto w-full">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Unlock Your Potential.
          <br />
          Choose Your Plan.
        </h1>
      </div>

      {/* GRID FIX: 
        1. grid-cols-1: Stack cards on mobile (prevents "noodle" look)
        2. lg:grid-cols-3: Only go 3-wide on large screens
        3. items-stretch: Ensures all cards stay the same height
      */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-3xl flex flex-col border-2 transition-all duration-500 cursor-default
              ${
                plan.featured
                  ? "bg-pro_theme text-white scale-100 lg:scale-105 z-10 border-transparent shadow-2xl hover:shadow-blue-500/50"
                  : "bg-col_ofsta_eta border-bor_of_sta_ent backdrop-blur-md hover:-translate-y-2 hover:shadow-xl hover:border-white/50"
              }`}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">{plan.name}</h2>
              <p className="text-xl opacity-80">{plan.price}</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                  {/* The Icon: It grows and turns brighter blue when you hover the line */}
                  <Check
                    size={18}
                    className="text-blue-500 mt-1 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:text-blue-400"
                  />
                  <span className="text-sm md:text-base opacity-90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex justify-center w-full">
              <Btn />
            </div>
          </div>
        ))}
      </section>
    </header>
  );
}
