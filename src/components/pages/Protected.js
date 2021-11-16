import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../providers/auth-provider";

function Protected() {
  const { auth, token, setToken } = useContext(AuthContext);
  useEffect(() => {
    const makeAuthCall = async () => {
      try {
        await auth();
      } catch (error) {
        console.log(error);
      }
    };
    makeAuthCall();
  }, [auth, token, setToken]);

  const handleButton = async () => {
    await fetch("/.netlify/functions/checkjwt", { method: "post" });
  };
  return (
    <div>
      {token ? (
        <div>
          <button onClick={() => handleButton()}>Click Me</button>
          <h1>You are in protected page</h1>
        </div>
      ) : (
        <Redirect to="/unauthorized" />
      )}
    </div>
  );
}

export default Protected;
