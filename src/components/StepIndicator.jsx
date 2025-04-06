const StepIndicator = ({ currentStep, steps }) => {
 return (
  
  <div className="bg-[url('/src/assets/images/bg-sidebar-mobile.svg')] md:bg-center md:bg-[url('/src/assets/images/bg-sidebar-desktop.svg')] bg-cover w-full md:w-1/2  md:rounded-md md:overflow-hidden h-48 md:h-auto  pt-2 font-ubuntu font-medium">   

   <div className="flex md:flex-col justify-center mt-8 gap-4 md:pl-8">
     {steps.map((step, index) => (
      <div className="flex gap-4">
        <div
         key={index}
         className={`w-10 h-10 flex items-center justify-center rounded-full border-2 
           ${index === currentStep  ? "bg-LightBlue text-MarineBlue border-LightBlue" : "border-white text-white"}`
         }
       >
         {index + 1}
        </div>
        <div className="hidden md:block uppercase  justify-center items-center">
         <h2 className="text-xs text-CoolGray font-normal">step {index+1}</h2>
         <p className="text-white text-sm tracking-wider">{step}</p>
        </div>
      </div>
       
     ))}
   </div>
   
  </div>
  
 );
};

export default StepIndicator;
