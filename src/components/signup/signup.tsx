import React, { useState } from "react";
import "./signup.scss";

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [experience, setExperience] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", password: "", experience: "" });

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
            password: e.target.value.length >= 6 ? "" : "Password must be at least 6 characters",
        }));
    };

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, experience: e.target.value ? "" : "Experience is required" }));
    };

    const handleSubmit = (e) => {
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
            alert("Registration successful!");
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
