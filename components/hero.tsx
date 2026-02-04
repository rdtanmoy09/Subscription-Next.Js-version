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
    /* Change: min-h-screen ensures the background spreads. 
       Adding bg-app-bg links it to your CSS variables. */
    <header className="relative py-12 px-6 md:px-16 w-full min-h-screen bg-app-bg transition-colors duration-500  font-space max-w-7xl mx-auto">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-purple-500 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          {/* Change: added text-app-fg to make the text flip colors automatically */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-app-fg">
            Unlock Your Potential.
            <br />
            Choose Your Plan.
          </h1>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl flex flex-col border-2 transition-all duration-500 cursor-default
                ${
                  plan.featured
                    ? "bg-pro-theme text-white scale-100 lg:scale-105 z-10 border-transparent shadow-2xl hover:shadow-blue-500/50"
                    : "bg-card border-border-subtle backdrop-blur-md text-app-fg hover:-translate-y-2 hover:shadow-xl dark:hover:border-white/30"
                }`}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">{plan.name}</h2>
                <p className="text-xl opacity-80">{plan.price}</p>
              </div>

              <ul className="space-y-4 mb-8 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
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
      </div>
    </header>
  );
}
