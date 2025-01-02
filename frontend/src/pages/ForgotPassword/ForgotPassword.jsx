import { useState } from "react";
import { useContext } from "react";
import Context from "../../context/Context";
import backarrw from "../../assets/standard-icons/back-arrow.png";
import backarrwxl from "../../assets/standard-icons/back-arrow.png";

const ForgotPassword = () => {
  const [otpTriggered, setOtpTriggered] = useState(false);
  const { isOtpForForgotPasswordVerified, setIsOtpForForgotPasswordVerified } =
    useContext(Context);
  const [newpassword, setNewPassword] = useState(false);
  const [inputOtp, setInputOtp] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const sendOtp = () => {
    setOtpTriggered(true);
    setInputEmail((prev) => "");
  };

  const verifyOtp = (e) => {
    console.log("clicked");
    e.preventDefault();
    if (inputOtp === "1234") {
      setIsOtpForForgotPasswordVerified(true);
      console.log("OTP verified");
    }
  };

  return (
    <div className="w-[361px] h-[258px] xl:w-full xl:pl-[168px] xl:pr-[168px] subcontainer-grad font-poppins text-white">
      <div className="px-[14px] py-[20px] ">
        {/* ... */}
        <div className="flex justify-between xl:justify-start xl:relative">
          <img src={backarrw} alt="" className="xl:absolute xl:invisible" />
          <img
            src={backarrwxl}
            alt=""
            className="absolute left-[-30px] xl:left-[-60px] top-1/2 transform -translate-y-1/2"
          />
          <p className="text-[20px] xl:text-[48px] font-semibold">
            Forgot Password
          </p>
          <img src={backarrw} alt="" className="invisible" />
        </div>

        <div className="mt-[36px]">
          <p className="text-[12px] xl:text-[14px] text-purplesmalltext">
            {otpTriggered ? "OTP" : "Email"}
          </p>
          <input
            type="text"
            name="email"
            placeholder={`${otpTriggered ? "Enter OTP" : "Enter your email"}`}
            className={`${
              otpTriggered
                ? "personal-information-container tracking-otpwide"
                : "personal-information-container"
            } input`}
            value={otpTriggered ? inputOtp : inputEmail}
            onChange={(e) => {
              otpTriggered
                ? setInputOtp(e.target.value)
                : setInputEmail(e.target.value);
            }}
          />
          <button
            className={`${
              otpTriggered && inputOtp.length > 0
                ? "active-button"
                : "inactive-button"
            } mt-[8px] xl:text-[20px]`}
            onClick={(e) => {
              otpTriggered ? verifyOtp(e) : sendOtp();
            }}
          >
            {otpTriggered ? "Submit" : "Send OTP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
