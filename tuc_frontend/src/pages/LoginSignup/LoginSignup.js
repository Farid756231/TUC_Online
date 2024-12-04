import React from "react";
import "./LoginSignup.css";

import userIcon from "../../assets/user1.png";
import email_icon from "../../assets/email1.png";
import password_icon from "../../assets/padlock1.png";

function LoginSignup() {
  const [action, setAction] = React.useState("Logga in");

  return (
    <div className="container">
      <div className="header">
        <h1 className="text">
          {action}
          <div className="underline"></div>
        </h1>
        <div className="inputs">
          {action === "Logga in" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={userIcon} alt="" />
              <input type="text" placeholder="Namn" />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="E-post" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Lösenord" />
          </div>
        </div>
        {action === "Skapa konto" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Glömt lösenord? <span>Klicka här</span>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === "Logga in" ? "submit gray" : "submit"}
            onClick={() => setAction("Logga in")}
            role="button"
            aria-label="Logga in"
          >
            Logga in
          </div>
          <div
            className={action === "Skapa konto" ? "submit gray" : "submit"}
            onClick={() => setAction("Skapa konto")}
            role="button"
            aria-label="Skapa konto"
          >
            Skapa konto
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
