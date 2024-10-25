import React, { useState } from "react";
import "./login.scss";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email format" }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 6) {
            setErrors((prevErrors) => ({ ...prevErrors, password: "Password must be at least 6 characters" }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrors({
                email: !email ? "Email is required" : errors.email,
                password: !password ? "Password is required" : errors.password,
            });
            return;
        }

        if (!errors.email && !errors.password) {
            alert("Login successful!");
        }
    };

    return (
        <div className="container">
            <div className="form__container">
                <h2 className="title">LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <p className="title__input">Email</p>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="input"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}

                    <p className="title__input">Password</p>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="input"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}

                    <button type="submit" className="button">LOGIN</button>
                </form>
            </div>
        </div>
    );
};
