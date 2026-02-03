import Btn from "@/components/button";

export default function Hero() {
  return (
    <header className="mx-16 my-8 font-space">
      <p className="text-[3rem] font-extrabold">
        Unlock Your Potential.
        <br />
        Choose Your Plan.
      </p>
      <section className="grid grid-cols-3 w-full justify-center items-center gap-10 ">
        <div className="border-bor_of_sta_ent bg-col_ofsta_eta rounded-2xl p-5 flex-col justify-between items-center overflow-hidden border-2   backdrop-blur-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] mt-24 flex-1 flex min-w-0">
          <div className="text-center py-8">
            <h2 className="text-[2rem]">Starter</h2>
            <h3 className="text-[1.5rem]">$19/month</h3>
          </div>
          <ul className="list-disc">
            <li>Basic Analysis</li>
            <li>Upto Five user</li>
            <li>Email support</li>
            <li>Cloud Storage(100gb)</li>
          </ul>
          <Btn />
        </div>
        <div className="bg-pro_theme text-white rounded-xl  scale-[1.05] shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex flex-col justify-between items-center p-5 flex-1 min-w-0">
          <div className="text-center py-8">
            <h2 className="text-[2rem]">Pro</h2>
            <h3 className="text-[1.5rem]">$49/month</h3>
          </div>
          <ul className="list-disc">
            <li>Advanced Analytics</li>
            <li>Unlimited Users</li>
            <li>Priority Email & Chat Support</li>
            <li>Cloud Storage(500gb)</li>
          </ul>
          <Btn />
        </div>
        <div className="border-bor_of_sta_ent bg-col_ofsta_eta rounded-2xl p-5 flex-col justify-between items-center overflow-hidden border-2   backdrop-blur-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] mt-24 flex-1 flex min-w-0">
          <div className="text-center py-8">
            <h2 className="text-[2rem]">Enterprise</h2>
            <h3 className="text-[1.5rem]">Contact Us</h3>
          </div>
          <ul className="list-disc">
            <li>Enterprise Analytics</li>
            <li>Unlimited Users</li>
            <li>24/7 Dedicated Support</li>
            <li>Cloud Storage(Unlimited)</li>
            <li>API Access</li>
          </ul>
          <Btn />
        </div>
      </section>
    </header>
  );
}
