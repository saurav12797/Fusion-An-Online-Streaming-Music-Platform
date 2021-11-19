import React from "react";
import "./Login.css";

import { loginUrl } from "../../../views/spotify/Index";

function login() {
  return (
    <div className="login">
      {/* spotify logo */}

      <img src="https://i.ibb.co/Cm33pKb/fusion-logo.png" alt="fusion-logo" />

      {/* spotify with login button */}
      <a href={loginUrl}>LOGIN WTH Fusion</a>
    </div>
  );
}

export default login;
