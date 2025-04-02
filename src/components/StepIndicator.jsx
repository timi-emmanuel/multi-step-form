const StepIndicator = ({ currentStep, steps }) => {
 return (
  <div className="bg-[url('/src/assets/images/bg-sidebar-mobile.svg')] bg-cover h-48 w-full pt-2 font-ubuntu font-medium">  
   <div className="flex justify-center  mt-8 gap-4">
     {steps.map((_, index) => (
       <div
         key={index}
         className={`w-10 h-10 flex items-center justify-center rounded-full border-2 
           ${index === currentStep ? "bg-LightBlue text-MarineBlue border-LightBlue" : "border-white text-white"}`
         }
       >
         {index + 1}
       </div>
     ))}
   </div>
  </div>
  
 );
};

export default StepIndicator;
