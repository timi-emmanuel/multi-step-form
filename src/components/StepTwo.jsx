import { useState, useEffect } from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg"
import advancedIcon from "../assets/images/icon-advanced.svg"
import proIcon from "../assets/images/icon-pro.svg"

const StepTwo = ({ selectedPlan, setSelectedPlan, planError, setPlanError, setSelectedAddons }) => {
  const [billingType, setBillingType] = useState(selectedPlan.billingType || "monthly");

  const plans = {
    monthly: [
      { id: "arcade", name: "Arcade", price: 9, time: "mo", icon: arcadeIcon },
      { id: "advanced", name: "Advanced", price: 12, time: "mo", icon: advancedIcon },
      { id: "pro", name: "Pro", price: 15, time: "mo", icon: proIcon },
    ],
    yearly: [
      { id: "arcade", name: "Arcade", price: 90, time: "yr", icon: "/src/assets/images/icon-arcade.svg", bonus: "2 months free" },
      { id: "advanced", name: "Advanced", price: 120, time: "yr", icon: "/src/assets/images/icon-advanced.svg", bonus: "2 months free" },
      { id: "pro", name: "Pro", price: 150, time: "yr", icon: "/src/assets/images/icon-pro.svg", bonus: "2 months free" },
    ],
  };

  // Sync billingType back to selectedPlan
  useEffect(() => {
    if (selectedPlan.billingType !== billingType) {
      setSelectedPlan({}); // Clear selected plan when billing type changes
      setSelectedAddons([]); // Clear selected addons too
    }
  }, [billingType, setSelectedPlan, selectedPlan.billingType, setSelectedAddons]);

  const handlePlanClick = (plan) => {
    setSelectedPlan({ ...plan, billingType });
    setPlanError(false);
  };

  return (
    <div className={`pb-2 md:py-4 animate-slideIn`}>
      <h2 className="text-2xl md:text-3xl font-bold text-MarineBlue">Select your plan</h2>
      <p className="text-CoolGray mt-2 md:text-sm mb-4 md:mb-8 max-w-[16rem] md:max-w-none">
        You have the option of monthly or yearly billing.
      </p>

      {planError && <p className="text-StrawberryRed text-sm font-medium">Please select a plan</p>}

      {/* Plan Options */}
      <div className="mt-4 flex flex-col md:flex-row gap-4">
        {plans[billingType].map((plan) => (
          <div
            key={plan.id}
            className={`border flex-1 px-4 py-3 rounded-md cursor-pointer h-auto md:w-32 hover:border-PurplishBlue  ${
              planError ? "border-StrawberryRed" : selectedPlan.id === plan.id ? "border-PurplishBlue bg-Alabaster" : "border-LightGray"
            }`}
            onClick={() => handlePlanClick(plan)}
          >
            <div className="flex md:flex-col items-center md:items-baseline md:gap-10">
              <span className="mr-3">
                <img src={plan.icon} alt={`${plan.name} icon`} />
              </span>
              <div>
                <div>
                  <h3 className="font-medium text-MarineBlue">{plan.name}</h3>
                  <p className="text-sm text-CoolGray">${`${plan.price}/${plan.time}`}</p>
                </div>
                {plan.bonus && <p className="text-xs text-MarineBlue">{plan.bonus}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Billing Toggle */}
      <div className="mt-6 md:mt-8 md:mb-8 flex items-center justify-center gap-5 bg-gray-100 p-2 rounded-md">
        <span className={`${billingType === "monthly" ? "font-medium text-MarineBlue" : "text-CoolGray"}`}>
          Monthly
        </span>
        <button
          onClick={() => setBillingType(billingType === "monthly" ? "yearly" : "monthly")}
          className="w-10 h-5 bg-MarineBlue rounded-full relative"
        >
          <span
            className={`absolute w-3 h-3 bg-white rounded-full transition-transform top-1/2 left-1 transform -translate-y-1/2 ${
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
