import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormRow from "../components/FormRow.jsx";

import "./LoginForm.css";

const Login = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userForm = new FormData(e.target);
    const username = userForm.get("username");
    const password = userForm.get("password");
    const userObject = { username, password };

    try {
      const response = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObject),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      if (responseData.success) {
        localStorage.setItem("userId", responseData.id);
        navigate("/dashboard");
      } else {
        setMessage(responseData.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='form form-login'>
      <h3 className='title-form'>Login</h3>
      <form onSubmit={(e) => loginUser(e)}>
        <FormRow type={"text"} name={"username"} labelText={"Username: "} />
        <FormRow type={"password"} name={"password"} labelText={"Password: "} />
        <button type='submit' className='btn btn-login' disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <div>
          not a member yet?{" "}
          <Link to='/register' className='login-register-link'>
            register
          </Link>
        </div>
        <div className="login-landing-link-container">
          <Link to='/' className='login-landing-link'>
            landing page
          </Link>
        </div>
      </form>
      {message && <h3 className='error-message'>{message}</h3>}
    </div>
  );
};
export default Login;
