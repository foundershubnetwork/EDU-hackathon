import React, { useCallback } from "react";

import { LoginButton, useOCAuth } from "@opencampus/ocid-connect-js";

const Home = () => {
  const { authState, ocAuth, OCId, ethAddress } = useOCAuth();

  const handleLogout = useCallback(async () => {
    await authSdk.logout("http://localhost:8080");
  }, []);

  return (
    <div>
      {!authState || !authState.isAuthenticated ? (
        <LoginButton />
      ) : (
        <div>
          <h4>User Info</h4>
          <pre>{OCId}</pre>
          <pre>{ethAddress}</pre>
          <pre>{ocAuth.getStateParameter()}</pre>
          <pre>{JSON.stringify(authState)}</pre>
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
