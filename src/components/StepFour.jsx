const StepFour = ({selectedPlan, selectedAddons, setCurrentStep}) => {
  const change = () =>{
   setCurrentStep(1)
  }
 return ( 
  <div className="md:mb-2 md:py-4 animate-slideIn">
     <h2 className="text-2xl md:text-3xl font-bold text-MarineBlue">Finishing up</h2>
      <p className="text-CoolGray mt-2 md:text-sm mb-4 md:mb-8 min-w-[16rem] md:max-w-none">
        Double-check everything looks OK before confirming. 
      </p>
      <div className="p-4 bg-Alabaster rounded-lg md:min-w-[28rem] ">
        <div className="border-b border-LightGray ">
           <div className="flex justify-between text-MarineBlue font-bold"> 
            <p className="capitalize  ">{selectedPlan.name} {`(${selectedPlan.billingType})`}</p>
            <p className="">${selectedPlan.price}/{selectedPlan.time}</p>
           </div>          
          <a className="text-CoolGray cursor-pointer hover:underline hover:text-PurplishBlue" onClick={change}>change</a>
        </div>
        <div>
          {selectedAddons.map( addon => (
            <div className="flex justify-between mt-4 gap-1 text-CoolGray">
              <p>{addon.name}</p>
              <p className="text-MarineBlue">+${addon.price}/{selectedPlan.time}</p>              
            </div>            
          ))}
        </div>
    </div>

      <div className="p-4 flex justify-between ">
          <p className="text-CoolGray">Total{ selectedPlan.time === "mo"? " (per month)" : " (per year)" }</p>
          <p className="font-bold text-PurplishBlue tracking-wider">+${selectedPlan.price + selectedAddons.reduce((total, addon) => total + addon.price, 0)}/{selectedPlan.time}</p>
        </div>
  </div>
  );
}
 
export default StepFour;