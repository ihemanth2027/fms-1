import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
   
    const navigate = useNavigate();
    function navigatePage(event) {
        event.preventDefault();
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-lg" style={{ padding: 0 }}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarTogglerDemo01" aria-expanded="false">
                <ul className="navbar-nav listItems">
                    <li className="nav-item active" >
                        <Link className="nav-link" to="/" name="home" >Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/about" name="about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/departments" name="contact">Departments</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/contact" name="contact">Contact us</Link>
                    </li>
                    
                    <li>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-secondary" id="login" type="submit" onClick={navigatePage}>Login</button>
                        </form>
                    </li>

                </ul>

            </div>
        </nav>);

}
export default NavBar;