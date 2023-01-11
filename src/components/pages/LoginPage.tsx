import "../../styles/LoginPage/LoginPage.css";
import logo from "../../assets/login-logo.png";
import image from "../../assets/login-image.png";
import { Link, useNavigation } from "react-router-dom";
import { useState } from "react";
import { SyncLoader } from "react-spinners";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const { state } = navigation;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="login-page-container">
      <div className="left-side">
        <img className="lendsqr-logo" src={logo} alt="lendsqr logo" />
        <br />
        <img src={image} alt="lendsqr logo" className="lendsqr-image" />
      </div>
      <div className="right-side">
        <img className="right-side-image" src={logo} alt="lendsqr logo" />
        <h2 className="welcome">Welcome!</h2>
        <p className="login-text">Enter details to login.</p>

        <form action="">
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="email-input"
            onChange={handleChange}
          />

          <div className="password-section">
            <input
              required
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="password-input"
              onChange={handleChange}
            />
            <button
              disabled={password.length === 0}
              className="show-password-btn"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>
          <p className="forgot-text">FORGOT PASSWORD?</p>
          {!email || !password ? (
            <Link to={"/"} className="btn-link">
              LOGIN
            </Link>
          ) : (
            <Link to={"/dashboard"} className="link">
              {state === "loading" ? (
                <SyncLoader size={"0.8rem"} color="#ffffff" />
              ) : (
                "LOG IN"
              )}
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
