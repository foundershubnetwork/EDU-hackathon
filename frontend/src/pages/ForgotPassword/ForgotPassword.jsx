import { useState } from "react";
import { useContext } from "react";
import Context from "../../context/Context";
import backarrw from "../../assets/standard-icons/back-arrow.png";
import backarrwxl from "../../assets/standard-icons/back-arrow.png";

const ForgotPassword = () => {
  // State to track whether OTP input is triggered
  const [otpTriggered, setOtpTriggered] = useState(false);

  // Context values for OTP verification status and its setter
  const { isOtpForForgotPasswordVerified, setIsOtpForForgotPasswordVerified } =
    useContext(Context);

  // State to manage new password visibility
  const [newpassword, setNewPassword] = useState(false);

  // State to store user input for OTP and email
  const [inputOtp, setInputOtp] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  // Function to handle OTP sending
  const sendOtp = () => {
    setOtpTriggered(true); // Set OTP input mode
    setInputEmail((prev) => ""); // Clear email input
  };

  // Function to handle OTP verification
  const verifyOtp = (e) => {
    console.log("clicked");
    e.preventDefault(); // Prevent form submission default behavior
    if (inputOtp === "1234") {
      // Simulate OTP verification (hardcoded OTP)
      setIsOtpForForgotPasswordVerified(true);
      console.log("OTP verified");
    }
  };

  return (
    <div className="w-[361px] h-[258px] xl:w-full xl:pl-[168px] xl:pr-[168px] subcontainer-grad font-poppins text-white">
      <div className="px-[14px] py-[20px] ">
        {/* Header section with back arrow and title */}
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
          {/* Display label based on input type (OTP or Email) */}
          <p className="text-[12px] xl:text-[14px] text-purplesmalltext">
            {otpTriggered ? "OTP" : "Email"}
          </p>

          {/* Input field for either OTP or email based on current mode */}
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
                ? setInputOtp(e.target.value) // Update OTP input
                : setInputEmail(e.target.value); // Update email input
            }}
          />

          {/* Button to send OTP or submit OTP based on mode */}
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
