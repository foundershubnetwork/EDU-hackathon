import Context from "./Context";
import { useState } from "react";

const Provider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOtpForForgotPasswordVerified, setIsOtpForForgotPasswordVerified] =
    useState(false);
  return (
    <Context.Provider
      value={{
        isLogin,
        setIsLogin,
        isOtpForForgotPasswordVerified,
        setIsOtpForForgotPasswordVerified,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
