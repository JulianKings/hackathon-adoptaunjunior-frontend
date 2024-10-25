import React from "react";
import "./login.scss"; 

export const Login = () => {
    return (
        <div className="container">
            <div className="form__container"> 
                <h2 className="title">LOGIN</h2>
                <form>
                    <p className="title__input">username</p>
                    <input type="text" placeholder="your username" className="input" />
                    <p  className="title__input">password</p>
                    <input type="password" placeholder="your password" className="input" />
                    <button type="submit" className="button">LOGIN</button>
                </form>
            </div>
        </div>
    );
}
