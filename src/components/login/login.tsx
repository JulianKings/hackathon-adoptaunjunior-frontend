import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./login.scss";
import { attemptLogin } from "../../session/sessionManager";
import { LoginAttempt } from "../../interfaces/session";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });
    const navigate = useNavigate(); 

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
        if (e.target.value.length < 4) {
            setErrors((prevErrors) => ({ ...prevErrors, password: "Password must be at least 4 characters" }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrors({
                email: !email ? "Email is required" : errors.email,
                password: !password ? "Password is required" : errors.password,
            });
            return;
        }

        if (!errors.email && !errors.password) {
            const result: LoginAttempt | null = await attemptLogin(email, password);
            if(result && result.status === 'valid')
            {
                // logged in succesfully
                navigate("/");
            } else if(result) {
                // an error happened
                if(result.errors)
                {
                    result.errors.forEach(error => {
                        if(error.path === 'email')
                        {
                            setErrors((prevErrors) => ({ ...prevErrors, email: error.msg }));
                        } else if(error.path === 'password')
                        {
                            setErrors((prevErrors) => ({ ...prevErrors, password: error.msg }));
                        }
                    });
                }
            } else {
                // no internet connection?
            }
            console.log(result);
        }
    };

    const handleRegisterClick = () => {
        navigate("/signup"); 
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

                    <div className="button__group">
                        <button type="submit" className="button">LOGIN</button>
                        <button type="button" className="button register-button" onClick={handleRegisterClick}>SIGN UP</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
