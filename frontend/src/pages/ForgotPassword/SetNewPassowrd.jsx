import { useState, useCallback } from "react";
import backarrw from "../../assets/standard-icons/back-arrow.png";
import backarrwxl from "../../assets/standard-icons/back-arrow.png";
const SetNewPassword = () => {
  const [newpassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkMatch, setCheckMatch] = useState(true);

  // UseCallback to check passwords match in real-time
  const handleConfirmPasswordChange = useCallback(
    (value) => {
      setConfirmPassword(value);
      setCheckMatch(value === newpassword);
    },
    [newpassword]
  );

  const CheckNewOtp = () => {
    console.log("finalized");
  };

  const equality = newpassword.length > 0 && confirmPassword.length > 0;

  return (
    <div className="h-[344px] w-[361px] xl:w-full xl:pl-[168px] xl:pr-[168px] subcontainer-grad font-poppins text-white">
      <div className="px-[14px] py-[20px] xl:px-0 xl:py-0">
        <div className="flex justify-between xl:justify-start xl:relative">
          <img src={backarrw} alt="" className="xl:absolute xl:invisible" />
          <img
            src={backarrwxl}
            alt=""
            className="absolute left-[-30px] xl:left-[-60px] top-1/2 transform -translate-y-1/2"
          />
          <p className="text-[20px] xl:text-[48px] font-semibold">
            Change Password
          </p>
          <img src={backarrw} alt="" className="invisible" />
        </div>
        <div className="mt-[36px]">
          <p className="text-semibold text-xs xl:text-[14px] font-poppins text-purplesmalltext">
            New Password
          </p>
          <input
            type="text"
            name="new password"
            placeholder="Enter new password"
            id="np"
            className={`${
              newpassword.length >= 8 || newpassword.length === 0
                ? "personal-information-container"
                : "personal-information-container-negative"
            }`}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {newpassword.length > 0 && newpassword.length < 8 && (
            <p className="text-[12px] font-poppins text-redwarn mb-[12px]">
              Must contain at least 8 characters
            </p>
          )}
          <p className="text-semibold text-xs xl:text-[14px] font-poppins text-purplesmalltext">
            Confirm Password
          </p>
          <input
            type="text"
            name="confirm password"
            placeholder="Re-enter password"
            id="cnp"
            className={`${
              checkMatch
                ? "personal-information-container"
                : "personal-information-container-negative"
            }`}
            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          />
          {!checkMatch && (
            <p className="text-[12px] font-poppins text-redwarn">
              Passwords do not match
            </p>
          )}
        </div>
        <button
          className={`${
            equality ? "active-button" : "inactive-button"
          } mt-[8px] xl:text-[20px]`}
          onClick={CheckNewOtp}
          disabled={!equality || !checkMatch}
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default SetNewPassword;
