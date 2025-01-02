import React from "react";
// Import OCConnect
// @ts-ignore
import { OCConnect } from "@opencampus/ocid-connect-js";

import TotalContainer from "./components/TotalContainer/Container";
import Provider from "./context/Provider";

function App() {
  const opts = {
    redirectUri: "http://localhost:8080/redirect", // Set this to your desired redirect URI
    referralCode: "TEST123", // Example referral code
  };

  return (
    // Wrap your app with OCConnect
    <OCConnect opts={opts} sandboxMode={true}>
      <Provider>
        <TotalContainer />
      </Provider>
    </OCConnect>
  );
}

export default App;
