import { useContext } from "react";
import Context from "../../context/Context";

const Toggle = () => {
  const { isLogin, setIsLogin } = useContext(Context);

  return (
    <div className="border-[2px] border-slate-500 h-[57px] rounded-2xl flex justify-center items-center w-full ">
      <div className="relative flex w-full h-full font-poppins cursor-pointer">
        {/* Slider Pill */}
        <div
          className={`absolute bg-purplemedium h-full rounded-xl transition-all duration-300 ease-linear ${
            isLogin ? "translate-x-full" : "translate-x-0"
          } w-1/2`}
        ></div>
        {/* Register Button */}
        <div
          className="flex flex-1 justify-center items-center text-white z-10"
          onClick={() => setIsLogin(false)}
        >
          <h3>REGISTER</h3>
        </div>
        {/* Log In Button */}
        <div
          className="flex flex-1 justify-center items-center text-white z-10"
          onClick={() => setIsLogin(true)}
        >
          <h3>LOG IN</h3>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
