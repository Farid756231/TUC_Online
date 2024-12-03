import React from "react";
import "./LoginSignup.css";

import {email_icon} from "../../assets/email1.png";

function LoginSignup() {
  return (
    <div className="container">
      <div className="header">
        <div className="text">
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src="{user_icon}" alt="" />
            <input type="text" />
          </div>
          <div className="input">
            <img src="{email_icon}" alt="" />
            <input type="email" />
          </div>
          <div className="input">
            <img src="{password_icon}" alt="" />
            <input type="password" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
