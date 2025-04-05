import React from "react";

const addonsList = [
  {
    name: "Online service",
    monthlyPrice: 1,
    yearlyPrice: 10,
    description: "Access to multiplayer games",
  },
  {
    name: "Larger storage",
    monthlyPrice: 2,
    yearlyPrice: 20,
    description: "Extra 1TB of cloud save",
  },
  {
    name: "Customizable profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
    description: "Custom theme on your profile",
  },
];

const StepThree = ({ isYearly, selectedAddons, setSelectedAddon }) => {
  const handleCheckboxChange = (addon) => {
    const exists = selectedAddons.find((item) => item.name === addon.name);
    if (exists) {
      // Remove it if already selected
      setSelectedAddon(selectedAddons.filter((item) => item.name !== addon.name));
    } else {
      // Add to selection
      const price = isYearly ? addon.yearlyPrice : addon.monthlyPrice;
      setSelectedAddon([...selectedAddons, { name: addon.name, price }]);
    }
  };

  const isChecked = (addonName) => {
    return selectedAddons.some((item) => item.name === addonName);
  };

  return (
    <div className="md:mb-16 md:py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-MarineBlue">Pick add-ons</h2>
      <p className="text-CoolGray mb-6 md:mt-2">Add-ons help enhance your gaming experience.</p>

      <div className="space-y-4">
        {addonsList.map((addon) => {
          const price = isYearly ? addon.yearlyPrice : addon.monthlyPrice;
          return (
            <label
              key={addon.name}
              className={`flex items-center border md:w-[28rem] px-4 py-3 rounded-lg cursor-pointer ${
                isChecked(addon.name) ? "border-PurplishBlue bg-Alabaster" : "border-LightGray"
              }`}
            >
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-MarineBlue mr-4"
                checked={isChecked(addon.name)}
                onChange={() => handleCheckboxChange(addon)}
              />
              <div className="flex flex-col">
                <span className="font-medium text-MarineBlue">{addon.name}</span>
                <span className="text-CoolGray text-xs md:text-sm">{addon.description}</span>
              </div>
              <span className="ml-auto text-PurplishBlue text-sm">
                +${price}/{isYearly ? "yr" : "mo"}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default StepThree;
