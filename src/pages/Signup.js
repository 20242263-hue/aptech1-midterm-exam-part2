Signup.js


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    username: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  // REGEX
  const nameRegex = /^[A-Za-z]{2,}$/;
  const usernameRegex = /^[A-Za-z0-9._-]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let newErrors = {};

    if (!nameRegex.test(form.firstName)) {
      newErrors.firstName = "Only letters, min 2 characters";
    }

    if (!nameRegex.test(form.surname)) {
      newErrors.surname = "Only letters, min 2 characters";
    }

    if (!usernameRegex.test(form.username)) {
      newErrors.username = "Only letters, numbers, ., _, -";
    }

    if (!passwordRegex.test(form.password)) {
      newErrors.password =
        "8-16 chars, include uppercase, lowercase, number, special char";
    }

    if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Real-time validation
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      navigate("/success");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup Form</h2>

      <input
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        style={{ border: errors.firstName ? "2px solid red" : "" }}
      />
      <p>{errors.firstName}</p>

      <input
        name="surname"
        placeholder="Surname"
        onChange={handleChange}
        style={{ border: errors.surname ? "2px solid red" : "" }}
      />
      <p>{errors.surname}</p>

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        style={{ border: errors.username ? "2px solid red" : "" }}
      />
      <p>{errors.username}</p>

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        style={{ border: errors.password ? "2px solid red" : "" }}
      />
      <p>{errors.password}</p>

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        style={{ border: errors.email ? "2px solid red" : "" }}
      />
      <p>{errors.email}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;
