import React, { useState } from "react";
import "./LoginSignup.css";
import { jwtDecode } from "jwt-decode";
import userIcon from "../../assets/user1.png";
import email_icon from "../../assets/email1.png";
import password_icon from "../../assets/padlock1.png";

function LoginSignup() {
  const [action, setAction] = useState("Logga in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  }

  function decodeToken(token) {
    try {
      const decoded = jwtDecode(token);
      const roleClaim = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
      const role = decoded[roleClaim];
      return { ...decoded, role };
    } catch (e) {
      console.error("Token decoding error", e);
      return null;
    }
  }

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setEmailError("Ogiltig e-postadress");
      return;
    }
    setEmailError("");

    if (!validatePassword(password)) {
      setPasswordError(
        "Lösenordet måste vara minst 8 tecken långt och innehålla stora bokstäver, små bokstäver, siffror och specialtecken."
      );
      return;
    }
    setPasswordError("");

    try {
      const response = await fetch("http://localhost:5268/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.jwtToken);

      const decodedToken = decodeToken(data.jwtToken);
      const userRole = decodedToken?.role;

      if (userRole === "Admin") {
        window.location.href = "/admin-dashboard";
      } else if (userRole === "User") {
        window.location.href = "/";
      } else {
        setError("Unauthorized role");
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleSignup = async () => {
    if (!validateEmail(email)) {
      setEmailError("Ogiltig e-postadress");
      return;
    }
    setEmailError("");

    if (!validatePassword(password)) {
      setPasswordError(
        "Lösenordet måste vara minst 8 tecken långt och innehålla stora bokstäver, små bokstäver, siffror och specialtecken."
      );
      return;
    }
    setPasswordError("");

    if (username.trim() === "") {
      setUsernameError("Användarnamn krävs");
      return;
    }
    setUsernameError("");

    try {
      const response = await fetch("http://localhost:5268/api/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.token);

      const userRole = decodeToken(data.token)?.role;

      if (userRole === "Admin") {
        window.location.href = "/admin-dashboard";
      } else if (userRole === "User") {
        window.location.href = "/user-dashboard";
      } else {
        setError("Unauthorized role");
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

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
              <input
                type="text"
                placeholder="Namn"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && <div className="error-message">{usernameError}</div>}
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="E-post"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <div className="error-message">{passwordError}</div>}
          </div>
        </div>
        <div className="forgot-password">
          Glömt lösenord? <span>Klicka här</span>
        </div>
        {error && <div className="error-message">{error}</div>}
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
        {action === "Logga in" && (
          <div className="submit" onClick={handleLogin} role="button">
            Logga in
          </div>
        )}
        {action === "Skapa konto" && (
          <div className="submit" onClick={handleSignup} role="button">
            Skapa konto
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
