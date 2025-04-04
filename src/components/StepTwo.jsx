import { useState } from "react";

const StepTwo = ({ selectedPlan, setSelectedPlan }) => {
  const [billingType, setBillingType] = useState("monthly");

  const plans = {
    monthly: [
      { id: "arcade", name: "Arcade", price: "$9/mo", icon: "/src/assets/images/icon-arcade.svg" },
      { id: "advanced", name: "Advanced", price: "$12/mo", icon: "/src/assets/images/icon-advanced.svg" },
      { id: "pro", name: "Pro", price: "$15/mo", icon: "/src/assets/images/icon-pro.svg" },
    ],
    yearly: [
      { id: "arcade", name: "Arcade", price: "$90/yr", icon: "/src/assets/images/icon-arcade.svg", bonus: "2 months free" },
      { id: "advanced", name: "Advanced", price: "$120/yr", icon: "/src/assets/images/icon-advanced.svg", bonus: "2 months free" },
      { id: "pro", name: "Pro", price: "$150/yr", icon: "/src/assets/images/icon-pro.svg", bonus: "2 months free" },
    ],
  };

  return (
    <div className=" pb-2 md:py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-MarineBlue">Select your plan</h2>
      <p className="text-CoolGray mt-2 md:text-sm mb-4 md:mb-8  max-w-[16rem] md:max-w-none">You have the option of monthly or yearly billing.</p>

      {/* Plan Options */}
      <div className="mt-4 flex flex-col md:flex-row gap-4 ">
        {plans[billingType].map((plan) => (
          <div
            key={plan.id}
            className={`border flex-1 px-4 py-3 rounded-md cursor-pointer h-auto md:w-32 ${
              selectedPlan.id === plan.id ? "border-PurplishBlue bg-Alabaster " : "border-gray-300"
            }`}
            onClick={() => setSelectedPlan({ ...plan, billingType })}
          >
            <div className="flex md:flex-col items-center md:items-baseline md:gap-10">
              <span className=" mr-3 "><img src={plan.icon} alt={`${plan.name} icon`}/></span>
              <div>
                <div>
                  <h3 className="font-medium text-MarineBlue">{plan.name}</h3>
                  <p className="text-sm text-CoolGray">{plan.price}</p>
                </div>                
                {plan.bonus && <p className="text-xs text-MarineBlue">{plan.bonus}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Billing Toggle */}
      <div className="mt-6 md:mt-8 md:mb-20 flex items-center justify-center gap-5 bg-gray-100 p-2 rounded-md">
        <span className={`${billingType === "monthly" ? "font-medium text-MarineBlue"  : "text-CoolGray"}`}>
          Monthly
        </span>
        <button
          onClick={() => setBillingType(billingType === "monthly" ? "yearly" : "monthly")}
          className="w-10 h-5 bg-MarineBlue rounded-full relative"
        >
          <span
            className={`absolute w-3 h-3 bg-white rounded-full transition-transform top-1/2 left-1 transform   -translate-y-1/2 ${
              billingType === "yearly" ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <span className={`${billingType === "yearly" ? "font-medium text-MarineBlue" : "text-gray-500"}`}>
          Yearly
        </span>
      </div>
    </div>
  );
};

export default StepTwo;
