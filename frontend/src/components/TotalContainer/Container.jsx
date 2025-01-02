import WalletConnect from "../../pages/connectWalletPage/WalletConnect";
import BrandContainer from "../BrandContainer/BrandContainer";
import RegistrationContainer from "../RegistrationContainer/RegistrationContainer";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import { useContext } from "react";
import Context from "../../context/Context";
import SetNewPassowrd from "../../pages/ForgotPassword/SetNewPassowrd";
const Container = () => {
  const { isOtpForForgotPasswordVerified } = useContext(Context);
  return (
    <div className="min-h-screen  bg-purplemax xl:flex xl:w-full">
      <div
        className="
  flex justify-center pt-[53px] pb-[23.5px] 
  xl:order-last xl:items-center xl:w-1/2
  bg-none 
  xl:bg-gradient-to-br xl:from-purpledark/50 xl:to-purpledark/50 xl:via-purplemax 
  xl:bg-[length:200%_200%] xl:rounded-xl xl:mt-[20px] xl:mb-[20px]
"
      >
        <BrandContainer />
      </div>

      <div className="flex justify-center xl:w-1/2 ">
        <RegistrationContainer />
      </div>
      {/* <div className="flex xl:flex-col justify-center xl:items-center h-screen mt-[156px] xl:w-1/2 xl:mt-0">
        <WalletConnect />
      </div> */}
      {/* <div
        className={`flex xl:flex-col xl:items-center justify-center h-screen mt-[156px] xl:w-1/2 xl:mt-0`}
      >
        {isOtpForForgotPasswordVerified ? (
          <SetNewPassowrd />
        ) : (
          <ForgotPassword />
        )}
      </div> */}
    </div>
  );
};

export default Container;
