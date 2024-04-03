import { useState } from "react";
import FormRow from "../components/FormRow";
import { Link } from "react-router-dom";

import "./RegistrationForm.css";

function Register() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function registerUser(e) {
    e.preventDefault();
    setLoading(true);

    const userObj = extractFormData(e);

    try {
      const response = await fetch("/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const { msg, success } = await response.json();
      setMessage(msg);

      if (success) {
        e.target.reset();
      }
    } catch (error) {
      console.error("Error registering:", error);
      setMessage("Registration failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  function extractFormData(e) {
    const userForm = new FormData(e.target);
    return Object.fromEntries(userForm.entries());
  }

  return (
    <div className='form form-register'>
      <h3 className='title-form'>Register</h3>
      <form
        className='form form-register'
        onSubmit={(e) => {
          registerUser(e);
        }}
      >
        <FormRow type={"text"} name={"firstName"} labelText={"First Name"} />
        <FormRow type={"text"} name={"lastName"} labelText={"Last Name"} />
        <FormRow
          type={"date"}
          name={"dateOfBirth"}
          labelText={"Date of Birth"}
        />
        <FormRow type={"text"} name={"city"} labelText={"City"} />
        <FormRow
          type={"tel"}
          name={"contactNumber"}
          labelText={"Contact number"}
        />
        <FormRow type={"email"} name={"email"} labelText={"E-mail Address"} />
        <FormRow type={"text"} name={"username"} labelText={"Username"} />
        <FormRow type={"password"} name={"password"} labelText={"Password"} />
        <button type='submit' className='btn btn-register' disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        <div>
          Already a member?{" "}
          <Link to='/login' className='register-login-link'>
            Login
          </Link>
        </div>
        <div className='register-landing-link-container'>
          <Link to='/' className='register-landing-link'>
            landing Page
          </Link>
        </div>
        {message && <h3 className='error-message'>{message}</h3>}
      </form>
    </div>
  );
}

export default Register;
