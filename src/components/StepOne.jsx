// import { useState } from "react";


const StepOne = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 
    
 return (  
  <div className="md:py-4 ">
    <h2 className="text-2xl md:text-3xl font-bold text-MarineBlue">Personal info</h2>
    <p className=" mt-2 md:mt-1 mb-4  text-CoolGray  max-w-[16rem] md:max-w-[28rem] tracking-normal">Please provide your name, email address and phone number.</p>
    <form action="" className="md:mb-16 w-full space-y-6"> 
       {/* name*/}
      <div className="space-y-1">
        <div className="flex justify-between">
          <label className="text-sm text-MarineBlue">Name</label>
          {errors.name && <p className="text-StrawberryRed font-medium text-sm">{errors.name}</p>} {/* Show error */}
        </div>
     
        <input required 
        id='name'
        type="text" 
        name="name"
        placeholder="e.g. Stephen King" 
        className={`step-one-input ${errors.name ? "focus:ring-StrawberryRed" : "focus:ring-PurplishBlue"}`}
        value={formData.name}
        onChange={handleChange}
        />
      </div>

      {/* email*/}
      <div className="space-y-1"> 
      <div className="flex justify-between">
        <label className="text-sm text-MarineBlue">Email Address</label>
        {errors.email && <p className="text-StrawberryRed font-medium text-sm">{errors.email}</p>} {/* Show error */}
      </div>

      <input 
      id='email'
      type="email" 
      name= "email"
      placeholder="e.g. stephenking@lorem.com" 
      className={`step-one-input  ${ errors.email ? "focus:ring-StrawberryRed" : "focus:ring-PurplishBlue"}}`}
      value={formData.email}
      onChange={handleChange}
      />

      </div>   

     {/* Phone number*/}
      <div className="space-y-1">
      <div className="flex justify-between">
        <label className="text-sm text-MarineBlue">Phone Number</label>
        {errors.phone && <p className="text-StrawberryRed font-medium text-sm">{errors.phone}</p>} {/* Show error */}
      </div>

      <input 
      type="tel"
      name="phone"
      placeholder="e.g. +1 234 567 890" 
      className={`step-one-input ${errors.phone ? "focus:ring-StrawberryRed" : "focus:ring-PurplishBlue"}`}
      value={formData.phone}
      onChange={handleChange}
      />
      </div>     
    </form>    
  </div>
 );
}
 
export default StepOne;