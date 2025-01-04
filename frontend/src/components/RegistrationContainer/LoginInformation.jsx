import { useState } from "react";
import RememberTick from "../../UI/RememberTick";
import eye from "../../assets/standard-icons/hide-pas.png";
import crosseye from "../../assets/standard-icons/unhide-pas.png";

const LoginInformation = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passCheck, setPassCheck] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const checkPassword = (e) => {
    e.preventDefault(); // Prevent form submission
    if (password !== "abcdpqrs") {
      setPassCheck(false); // Update state correctly
    } else {
      setPassCheck(true); // Reset passCheck on correct password
      alert("Login successful!"); // Example success action
    }
  };

  return (
    <div>
      <form onSubmit={checkPassword}>
        <div>
          {/* Email */}
          <p className="text-semibold text-[12px] xl:text-[14px] font-poppins text-purplesmalltext">
            Email
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="personal-information-container"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <p className="text-semibold text-[12px] xl:text-[14px] font-poppins text-purplesmalltext">
            Password
          </p>
          <div className="flex relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className={`${
                passCheck
                  ? "personal-information-container"
                  : "personal-information-container-negative"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute top-[18px] right-[10px] cursor pointer w-6 h-5 px-[2px] flex items-center bg-purpledark cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={showPassword ? crosseye : eye} alt="eye-icon" />
            </div>
            {!passCheck && (
              <p className="text-[12px] font-poppins text-redwarn mb-[12px]">
                Incorrect Password or Email
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end mb-[16px]">
            <p className="text-[10px] font-poppins text-slate-100 hover:underline cursor-pointer xl:text-[14px]">
              Forgot Password?
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit" // Use type submit for form submission
            className={`${
              email.length > 0 && password.length > 0
                ? "active-button"
                : "inactive-button"
            }`}
            disabled={email.length === 0 || password.length === 0} // Disable button if fields are empty
          >
            Login
          </button>

          {/* Remember Me */}
          <div className="flex justify-start items-center gap-[6px] pt-[6px] relative">
            <div
              className="bg-transparent border border-gray-500 w-[20px] h-[20px] rounded flex items-center justify-center z-1 cursor-pointer"
              onClick={() => setRememberMe(!rememberMe)}
            >
              <div
                className={`absolute z-10 ${rememberMe ? "block" : "hidden"}`}
              >
                <RememberTick />
              </div>
            </div>
            <p className="text-[12px] xl:text-[14px] font-poppins text-slate-100">
              Remember Me
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginInformation;
