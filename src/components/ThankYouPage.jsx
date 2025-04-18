import thankYouIcon from "../assets/images/icon-thank-you.svg"

const ThankYouPage = () => {
 return ( 
  <div className="flex flex-col justify-center items-center space-y-4 my-8 md:my-20  animate-slideIn">
   <img src={thankYouIcon} alt="thank-you-icon" className="w-12 h-12 md:h-16 md:w-16" />
   <h2 className="text-2xl md:text-3xl font-bold text-MarineBlue">Thank you!</h2>
   <p className="text-CoolGray text-center">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
  </div>
  );
}
 
export default ThankYouPage;