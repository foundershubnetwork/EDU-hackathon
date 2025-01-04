import PersonalInformation from "./PersonalInformation";
import SocialSignUp from "./SocialSignUp";
import Toggle from "../EntryFlip/Toggle";
import LoginInformation from "./LoginInformation";
import { useContext } from "react";
import Context from "../../context/Context";
import OCIDInt from "../OCIDInt/OCIDInt";

const RegistrationContainer = () => {
  const { isLogin } = useContext(Context);
  return (
    <div
      className={`${
        isLogin ? "h-[557] " : "h-[652px]"
      } w-[361px] rounded-xl fhn-gradient-sm xl:w-full xl:pl-[168px] xl:pr-[168px] xl:h-full xl:flex xl:flex-col border-b-[1px] border-b-purplesmalltext xl:bg-none xl:border-none`}
    >
      <h1 className="hidden xl:block text-[48px] text-white font-semibold font-poppins xl:mt-40 xl:mb-[16px]">
        Create an Account
      </h1>
      <div className="login-container xl:px-0 xl:py-0">
        <Toggle />
      </div>
      <div className="pt-[16px] px-[14px]  xl:px-0 xl:py:0 ">
        {isLogin ? <LoginInformation /> : <PersonalInformation />}
      </div>
      <div className="flex items-center justify-center w-full gap-[12px] mt-[36px] mb-[36px]">
        {/* reduced from mt & mb 32px to 22px */}

        <div className="h-[1px] w-[25%] bg-purplestroke "></div>
        <p className="text-[12px] text-white">OR</p>
        <div className="h-[1px] w-[25%] bg-purplestroke "></div>
      </div>
      <div className="pb-[20px] ">
        <SocialSignUp />
        <OCIDInt />
      </div>
    </div>
  );
};

export default RegistrationContainer;
