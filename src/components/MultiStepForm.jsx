import { useState } from "react";
import StepIndicator from "./StepIndicator";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo"; // Import StepTwo
import StepThree from "./StepThree"; // Import StepThree
import StepFour from "./StepFour"; // Import StepFour

const MultiStepForm = () => { 
  const [currentStep, setCurrentStep] = useState(0);
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


  const steps = [<StepOne formData={formData} setFormData={setFormData} errors={errors} />, <StepTwo />, <StepThree />, <StepFour />];

 
  return (
    <div className="max-w-lg min-h-screen bg-Magnolia flex flex-col">
      <StepIndicator currentStep={currentStep} steps={steps} />


     {/*Display the step component  */}
      <div className="-mt-20 rounded-lg p-6 mx-4 bg-white shadow-md">
        {steps[currentStep]}
      </div>

        {/* step buttons */}
      <div className="mt-auto flex justify-between bg-white p-5">
        {currentStep > 0 && (
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
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
