import React from "react";
import "./Login.css";
import { useState } from "react";

function Login() {

    const [action, setAction] = useState("");

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })
    const [isValid, setMsg] = useState("");

    function handleChange(event) {
        setCredentials(prevValue => {
            return {
                ...prevValue,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.returnValue = true
        if (credentials.username === "cvr" && credentials.password === "cvr123") {
            setAction("/admin");
        }
        else {
            event.preventDefault();
            setMsg("Invalid username/password");
        }
    }
    return (
        <div className="rootPage">
            <div className="loginPage">
                <div className="leftside">
                    <div className="welcome">
                        <h1>Welcome</h1>
                        <p>Sign in to continue</p>
                    </div>
                </div>
                <div class="rightside">
                    <h2>Sign in</h2>
                    <form action={action} onSubmit={handleSubmit} className="input-container" method="get">
                        <div className="input">
                            <i className="fa fa-user"></i>
                            <input type="text" placeholder=" Username" required onChange={handleChange} name="username" />
                        </div>
                        <div className="input">
                            <i className="fa fa-lock"></i>
                            <input type="password" placeholder=" Password" required onChange={handleChange} name="password" />
                        </div>
                        <input type="submit" className="login" value="Sign in" />
                        <input type="submit" className="signup" value="Sign up" />
                    </form>
                    <div className="isValid">
                        {isValid}
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Login;