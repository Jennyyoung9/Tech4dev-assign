import { LoginLeft, FacebookIcon, GoogleIcon } from "./index"
import { NavLink } from "react-router-dom"
import Button from "../Button/Button"
import "./Login.css"

const Login = () => {
    return (
        <div className="login-container">
            <div className="left">
                <img src={LoginLeft} alt="image of fruits" />
            </div>
            <div className="right">
                <form action="" method="POST">
                    <input type="email" name="email" placeholder="Enter your email" className="text-box" required/>
                    <input type="password" name="password" minLength="8" placeholder="********" className="text-box" required/>
                    <div>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">I agree to terms and condition</label>
                    </div>
                    <Button type="submit" className="pad-default primary rounded-sm login-button">
                        Login
                    </Button>
                </form>
                <p>Already have an account 
                    <NavLink to="/sign-up">
                        Sign Up
                    </NavLink>
                </p>
                <div className="line">
                    <hr />
                    <span>OR</span>
                    <hr />
                </div>
                <div className="login-alt-container">
                    <Button className="pad-default border transparent rounded-sm social-icon">
                        <img src={GoogleIcon} alt="Colored Google Icon" />
                        <span>
                            Sign Up with Google
                        </span>
                    </Button>
                    <Button className="pad-default border transparent rounded-sm social-icon">
                        <img src={FacebookIcon} alt="Colored Facebook Icon" />
                        <span>
                            Sign Up with Facebook
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login;