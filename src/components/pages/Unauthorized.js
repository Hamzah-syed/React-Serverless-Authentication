import React, { useContext } from "react";
import { AuthContext } from "../../providers/auth-provider";
function Unauthorized() {
  const { auth, token, setToken } = useContext(AuthContext);
  console.log("token", token);
  return <h1>404:Unauthorized</h1>;
}

export default Unauthorized;
