import React, { useState } from "react";
import "./LoginSignup.css";
import { jwtDecode } from "jwt-decode";
import email_icon from "../../assets/email1.png";
import password_icon from "../../assets/padlock1.png";

function LoginSignup() {
  const [action, setAction] = useState("Logga in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

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

  const handleAction = async () => {
    if (action === "Logga in") {
      try {
        const response = await fetch("http://localhost:5268/api/Auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }

        const data = await response.json();
        localStorage.setItem("authToken", data.jwtToken);

        const decodedToken = decodeToken(data.jwtToken);
        const userRole = decodedToken?.role;

        window.location.href = userRole === "Admin" ? "/admin-dashboard" : "/";
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    } else if (action === "Skapa konto") {
      if (password !== confirmPassword) {
        setError("Lösenorden matchar inte");
        return;
      }
      setError("");

      try {
        const response = await fetch("http://localhost:5268/api/Auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, confirmPassword }),
        });

        if (!response.ok) {
          throw new Error("Signup failed");
        }

        const data = await response.json();
        localStorage.setItem("authToken", data.jwtToken);

        const decodedToken = decodeToken(data.jwtToken);
        const userRole = decodedToken?.role;

        window.location.href = userRole === "Admin" ? "/admin-dashboard" : "/";
      } catch (err) {
        console.error("Signup Error:", err);
        setError(err.message);
      }
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
          <div className="input">
            <img src={email_icon} alt="Email icon" />
            <input
              type="email"
              placeholder="E-post"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="Password icon" />
            <input
              type="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {action === "Skapa konto" && (
            <div className="input">
              <img src={password_icon} alt="Confirm Password icon" />
              <input
                type="password"
                placeholder="Bekräfta lösenord"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="forgot-password">
          Glömt lösenord? <span>Klicka här</span>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="submit-container">
          <div className="submit" onClick={() => setAction(action === "Logga in" ? "Skapa konto" : "Logga in")}>
            {action === "Logga in" ? "Skapa konto" : "Logga in"}
          </div>
          <div className="submit" onClick={handleAction}>
            {action}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;