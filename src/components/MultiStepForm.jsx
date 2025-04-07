import { useState } from "react";
import StepIndicator from "./StepIndicator";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo"; // Import StepTwo
import StepThree from "./StepThree"; // Import StepThree
import StepFour from "./StepFour"; // Import StepFour
import ThankYouPage from "./ThankYouPage";

const MultiStepForm = () => { 
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
  });
  const [errors, setErrors] = useState({}); // Track errors
  const [selectedPlan, setSelectedPlan] = useState({});
  const [planError, setPlanError] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);

  // Validate Step 1
  const validateStep1 = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d*$/.test(formData.phone)) {
      newErrors.phone = "Phone numbers must be digits";
    } else if (formData.phone.length !== 11) {
      newErrors.phone = "Phone number must be 11 digits";
    }
   
    setErrors(newErrors);
     // Focus on the first input with an error
  const firstErrorField = Object.keys(newErrors)[0];
  if (firstErrorField) {
    document.getElementById(firstErrorField)?.focus();
  }

  return Object.keys(newErrors).length === 0; 
  };

  
  const handleNext = () => {
    if (currentStep === 0) {
      if (!validateStep1()) return; // Show errors & prevent navigation if invalid
    }
   
      if (currentStep === 1 && Object.keys(selectedPlan).length === 0) {
        setPlanError(true); // Show visual error
        return;
      } else{
        setPlanError(false);  
      }
         
        setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  }; 
  

  const pages = ["Your Info", "Select Plan", "Add-ons", "summary"]


  const steps = [<StepOne formData={formData} setFormData={setFormData} errors={errors} />, <StepTwo selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} planError={planError} setPlanError={setPlanError}  setSelectedAddons={setSelectedAddons}/>, <StepThree isYearly={selectedPlan.billingType === 'yearly'} selectedAddons={selectedAddons} setSelectedAddon= {setSelectedAddons}/>, <StepFour selectedPlan={selectedPlan} selectedAddons={selectedAddons} setCurrentStep={setCurrentStep}/>, <ThankYouPage currentStep={currentStep}/>];

  const submitClick = () => {
    setCurrentStep(4)
  }

 
  return (
    <div className=" h-screen bg-Magnolia flex flex-col md:justify-center md:items-center ">
      <div className="bg-none md:bg-white md:w-[90%] lg:w-[70%] xl:w-[60%] lg:justify-between md:pl-3 md:py-3 flex flex-col md:flex-row md:rounded-lg   animate-fadeIn">
       <StepIndicator currentStep={currentStep === 4 ? 3: currentStep} steps={pages} />

        {/*Display the step component  */}
        <div className="md:mx-8 md:w-full flex justify-center">
          <div className="-mt-20 md:mt-0 rounded-lg md:rounded-none p-6 md:p-2 w-[90%] md:mx-0  bg-white shadow-md md:shadow-none">
              {steps[currentStep]} 

              {/*Display the desktop buttons */}
              <div className={`mt-auto justify-between hidden  mb-4 ${currentStep === 4 ? "hidden" : "md:flex"}`}>
                {currentStep > 0 &&(
                  <button
                    className="font-medium text-CoolGray rounded-md hover:text-MarineBlue"
                    onClick={handlePrev}
                  >Go Back
                  </button>
                )}
                
                {currentStep < steps.length - 2 ? (
                  <button
                    className="bg-MarineBlue hover:bg-MarineBlue/80 font-medium text-Alabaster px-4 py-2 rounded-md ml-auto"
                    onClick={handleNext}
                  >
                    Next Step
                  </button>
                ) : (
                  <button className="bg-PurplishBlue text-white hover:bg-PurplishBlue/80 px-4 py-2 rounded-md ml-auto" onClick={submitClick}>
                    Confirm
                  </button>
                )}
              </div>
          </div>          
        </div>
         
      </div>            

        {/*mobile step buttons */}
      <div className={`mt-auto justify-between bg-white md:hidden p-5 ${currentStep === 4 ? "hidden" : "flex"}`}>
        {currentStep > 0 && (
          <button
            className="font-medium text-CoolGray hover:text-MarineBlue"
            onClick={handlePrev}
          >Go Back
          </button>
        )}
        
        {currentStep < steps.length - 2 ? (
          <button
            className="bg-MarineBlue font-medium text-Alabaster px-4 py-2 rounded-md ml-auto"
            onClick={handleNext}
          >
            Next Step
          </button>
        ) : (
          <button className="bg-PurplishBlue text-white px-4 py-2 rounded-md ml-auto" onClick={submitClick}>
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
