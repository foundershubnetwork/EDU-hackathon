import { useState } from "react";
import eye from "../../assets/standard-icons/hide-pas.png";
import crosseye from "../../assets/standard-icons/unhide-pas.png";

const PersonalInformation = () => {
  const [isVerifiedClicked, setIsVerifiedClicked] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    otp: "",
    password: "",
  });

  // Mock API call for OTP verification
  const handleVerify = async (e) => {
    e.preventDefault();

    if (!isVerifiedClicked && userData.email) {
      // Simulating OTP sending
      console.log("OTP sent to:", userData.email);
      setIsVerifiedClicked(true); // Show OTP field
    } else if (isVerifiedClicked && userData.otp && userData.otp === "1234") {
      // Simulate OTP validation
      setIsVerified(true); // Mark email as verified
      setIsVerifiedClicked(false); // After verification, no need to ask for OTP again
      setUserData((prevState) => ({
        ...prevState,
        otp: "", // Clear OTP input
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isVerified) {
      console.log("User data to be sent to the DB:", userData);
    } else {
      alert("Please verify the email and OTP before submitting.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="xl:w-full">
        <div className="xl:flex xl:gap-[24px]">
          <div className="xl:flex-1">
            <p className="text-semibold text-[12px] xl:text-[14px] font-poppins text-purplesmalltext">
              First name
            </p>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="personal-information-container"
              value={userData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="xl:flex-1">
            <p className="text-semibold text-[12px] xl:text-[14px] font-poppins text-purplesmalltext">
              Last name
            </p>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              className="personal-information-container"
              value={userData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <p className="text-semibold text-[12px] xl:text-[14px] font-poppins text-purplesmalltext">
          {isVerifiedClicked ? "Enter OTP" : "Email address"}
        </p>
        <div className="flex relative">
          <input
            type={isVerifiedClicked ? "number" : "email"}
            name={isVerifiedClicked ? "otp" : "email"}
            placeholder={
              isVerifiedClicked ? "Enter OTP" : "Enter your email address"
            }
            className={`${
              isVerifiedClicked
                ? "personal-information-container tracking-otpwide"
                : "personal-information-container"
            } input`}
            value={isVerifiedClicked ? userData.otp : userData.email}
            onChange={handleChange}
            required
          />
          <div className="text-sm text-slate-500 hover:text-yellowverf bg-purpledark w-14 flex items-center justify-center text-slate font-poppins absolute right-[10px] top-[18px]">
            <button
              className={`${
                isVerified ? "text-greenverf" : "bg-none"
              } xl:text-[16px]`}
              onClick={handleVerify}
              type="button"
            >
              {isVerified
                ? "Verified"
                : isVerifiedClicked
                ? "Submit"
                : "Verify"}
            </button>
          </div>
        </div>

        <p className="text-semibold text-[12px] xl:text-[14px] font-poppins text-purplesmalltext">
          Set Password
        </p>
        <div className="flex relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className={`${
              userData.password.length >= 8 || userData.password.length === 0
                ? "personal-information-container"
                : "personal-information-container-negative"
            }`}
            value={userData.password}
            onChange={handleChange}
            required
          />
          <div
            className="absolute top-[18px] right-[10px] cursor pointer w-6 h-5 px-[2px] flex items-center bg-purpledark cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={showPassword ? crosseye : eye} alt="eye-icon" />
          </div>
        </div>
        {userData.password.length > 0 && userData.password.length < 8 && (
          <p className="text-[12px] font-poppins text-redwarn mb-[12px]">
            Must contain at least 8 characters
          </p>
        )}

        <button
          className={`${
            isVerified
              ? "bg-gradient-to-t from-purpleactone to-purpleacttwo"
              : "bg-purplebtngray"
          } text-[16px] xl:text-[20px] text-whiteoff font-semibold w-full p-[12px] xl:px-[24px] xl:py-[12px] rounded-xl mt-[8px] font-poppins`}
          disabled={!isVerified}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default PersonalInformation;
