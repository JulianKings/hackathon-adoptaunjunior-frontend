import React, { useEffect, useState } from "react";
import "./signup.scss";
import { useNavigate } from "react-router-dom";
import { LoginAttempt, RegisterAttempt } from "../../interfaces/session";
import { attemptLogin, attemptRegister } from "../../session/sessionManager";
import { hash } from "bcrypt-ts";
import { useApiSelector } from "../../redux/store";
import { selectSession } from "../../redux/slices/session";

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [experience, setExperience] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", password: "", experience: "" });
    const navigate = useNavigate();
    const session = useApiSelector(selectSession);

    useEffect(() => {
        if(session)
        {
            navigate('/');
        }
    }, [session])

    const handleNameChange = (e) => {
        setName(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, name: e.target.value ? "" : "Name is required" }));
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value) ? "" : "Invalid email format",
        }));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: e.target.value.length >= 4 ? "" : "Password must be at least 4 characters",
        }));
    };

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, experience: e.target.value ? "" : "Experience is required" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password || !experience) {
            setErrors({
                name: !name ? "Name is required" : errors.name,
                email: !email ? "Email is required" : errors.email,
                password: !password ? "Password is required" : errors.password,
                experience: !experience ? "Experience is required" : errors.experience,
            });
            return;
        }

        if (!errors.name && !errors.email && !errors.password && !errors.experience) {
            const result: RegisterAttempt | null = await attemptRegister(email, password, name, experience);
            if(result && result.status === 'valid')
            {
                // registered successfully
                const loginResult: LoginAttempt | null = await attemptLogin(email, password);
                if(loginResult && loginResult.status === 'valid')
                {
                    // logged in successfully
                    navigate(0);
                } else {
                    // how?
                    navigate("/login");
                }
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
                        } else if(error.path === 'name')
                        {
                            setErrors((prevErrors) => ({ ...prevErrors, name: error.msg }));
                        } else if(error.path === 'experience')
                        {
                            setErrors((prevErrors) => ({ ...prevErrors, experience: error.msg }));
                        }
                    });
                }
            } else {
                // no internet connection?
            }
        }
    };

    return (
        <div className="container">
            <div className="form__container">
                <h2 className="title">SIGN UP</h2>
                <form onSubmit={handleSubmit}>
                    <p className="title__input">Name</p>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="input"
                        value={name}
                        onChange={handleNameChange}
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}

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

                    <p className="title__input">Experience</p>
                    <select
                        className="input"
                        value={experience}
                        onChange={handleExperienceChange}
                    >
                        <option value="" disabled>Select your experience</option>
                        <option value="student">Student</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                        <option value="manager">Product Manager</option>
                    </select>
                    {errors.experience && <p className="error-message">{errors.experience}</p>}

                    <button type="submit" className="button">SIGN UP</button>
                </form>
            </div>
        </div>
    );
};
