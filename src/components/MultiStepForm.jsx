import { useState } from "react";
import StepIndicator from "./StepIndicator";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo"; // Import StepTwo
import StepThree from "./StepThree"; // Import StepThree
import StepFour from "./StepFour"; // Import StepFour

const MultiStepForm = () => { 
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
  });
  const [errors, setErrors] = useState({}); // Track errors

  // Validate Step 1
  const validateStep1 = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    console.log(Object.keys(newErrors))

    setErrors(newErrors);
     // Focus on the first input with an error
  const firstErrorField = Object.keys(newErrors)[0];
  if (firstErrorField) {
    document.getElementById(firstErrorField)?.focus();
  }

  return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleNext = () => {
    if (currentStep === 0) {
      if (!validateStep1()) return; // Show errors & prevent navigation if invalid
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  }; 
  

  const pages = ["Your Info", "Select Plan", "Add-ons", "summary"]


  const steps = [<StepOne formData={formData} setFormData={setFormData} errors={errors} />, <StepTwo selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />, <StepThree />, <StepFour />,];

 
  return (
    <div className=" min-h-screen bg-Magnolia flex flex-col md:justify-center md:items-center ">
      <div className="bg-none md:bg-white flex flex-col md:flex-row h-full md:rounded-lg  animate-fadeIn">
       <StepIndicator currentStep={currentStep} steps={pages} />

        {/*Display the step component  */}
        <div className="-mt-20 md:mt-0 rounded-lg md:rounded-none p-6 md:p-2 mx-4 md:mx-20 bg-white shadow-md md:shadow-none">
            {steps[currentStep]} 

            {/*Display the desktop buttons */}
            <div className="mt-auto justify-between hidden md:flex mb-4">
              {currentStep > 0 && (
                <button
                  className="font-medium text-CoolGray px-4 py-2 rounded-md"
                  onClick={handlePrev}
                >Go Back
                </button>
              )}
              
              {currentStep < steps.length - 1 ? (
                <button
                  className="bg-MarineBlue hover:bg-MarineBlue/80 font-medium text-Alabaster px-4 py-2 rounded-md ml-auto"
                  onClick={handleNext}
                >
                  Next Step
                </button>
              ) : (
                <button className="bg-red-600 text-white px-4 py-2 rounded-md ml-auto">
                  Submit
                </button>
              )}
            </div>
        </div> 
      </div>            

        {/*mobile step buttons */}
      <div className="mt-auto flex justify-between bg-white md:hidden p-5 ">
        {currentStep > 0 && (
          <button
            className="font-medium text-CoolGray px-4 py-2 rounded-md"
            onClick={handlePrev}
          >Go Back
          </button>
        )}
        
        {currentStep < steps.length - 1 ? (
          <button
            className="bg-MarineBlue font-medium text-Alabaster px-4 py-2 rounded-md ml-auto"
            onClick={handleNext}
          >
            Next Step
          </button>
        ) : (
          <button className="bg-green-600 text-white px-4 py-2 rounded-md ml-auto">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
