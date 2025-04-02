// import { useState } from "react";


const StepOne = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 
    
 return (  
  <div>
    <h2 className=" text-2xl font-bold text-MarineBlue">Personal info</h2>
    <p className=" mt-2 mb-4 text-CoolGray max-w-[16rem]">Please provide your name, email address and phone number.</p>
    <form action="">
      <div className="flex justify-between">
        <label className="text-sm text-MarineBlue">Name</label>
        {errors.name && <p className="text-StrawberryRed font-medium text-sm">{errors.name}</p>} {/* Show error */}
      </div>
     
     <input required 
     id='name'
     type="text" 
     name="name"
     placeholder="e.g. Stephen King" 
     className={`step-one-input mb-3`}
     value={formData.name}
     onChange={handleChange}
     />
     
     <div className="flex justify-between">
      <label className="text-sm text-MarineBlue">Email Address</label>
      {errors.email && <p className="text-StrawberryRed font-medium text-sm">{errors.email}</p>} {/* Show error */}
     </div>
     
     <input 
     id='email'
     type="email" 
     name= "email"
     placeholder="e.g. stephenking@lorem.com" className="step-one-input mb-3 "
     value={formData.email}
     onChange={handleChange}
     />

    <div className="flex justify-between">
      <label className="text-sm text-MarineBlue">Phone Number</label>
      {errors.phone && <p className="text-StrawberryRed font-medium text-sm">{errors.phone}</p>} {/* Show error */}
    </div>
     
     <input 
     type="tel"
     name="phone"
     placeholder="e.g. +1 234 567 890" className="step-one-input mb-2"
     value={formData.phone}
     onChange={handleChange}
     />
    </form>    
  </div>
 );
}
 
export default StepOne;