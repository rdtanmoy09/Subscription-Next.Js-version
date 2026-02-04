import Btn from "@/components/button";

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
    <header className="mx-16 my-8 font-space">
      <div className="mb-12">
        <h1 className="text-[3rem] font-extrabold leading-tight">
          Unlock Your Potential.
          <br />
          Choose Your Plan.
        </h1>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 w-full gap-10 items-stretch">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl flex flex-col border-2 transition-all duration-300
              ${
                plan.featured
                  ? "bg-pro_theme text-white scale-105 shadow-2xl z-10 border-transparent"
                  : "bg-col_ofsta_eta border-bor_of_sta_ent backdrop-blur-md shadow-lg mt-8"
              }`}
          >
            <div className="text-center mb-8">
              <h2 className="text-[2rem] font-bold">{plan.name}</h2>
              <h3 className="text-[1.5rem] opacity-90">{plan.price}</h3>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> {feature}
                </li>
              ))}
            </ul>

            {/* mt-auto pushes the button to the absolute bottom of the card */}
            <div className="mt-auto flex justify-center">
              <Btn />
            </div>
          </div>
        ))}
      </section>
    </header>
  );
}
