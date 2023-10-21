import "./SignUp.css"
import { SignUpLeft, FacebookIcon, GoogleIcon } from "./index"
import Button from "../Button/Button"
import { NavLink } from "react-router-dom"

const SignUp = () => {
    return (
        <div className="sign-up-container">
            <div className="left">
                <img src={SignUpLeft} alt="" />
            </div>
            <div className="right">
                <form action="" method="POST">
                    <input type="text" name="full-name" placeholder="Full name" className="text-box" required />
                    <input type="text" name="username" placeholder="Username" className="text-box" required/>
                    <input type="email" name="email" placeholder="Enter your email" className="text-box" required/>
                    <input type="password" name="password" minLength="8" placeholder="********" className="text-box"required/>
                    <div>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">I agree to terms and condition</label>
                    </div>
                    <Button type="submit" className="pad-default primary rounded-sm sign-up-button">
                        Sign Up
                    </Button>
                </form>
                <p>Already have an account 
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </p>
                <div className="line">
                    <hr />
                    <span>OR</span>
                    <hr />
                </div>
                <div className="signup-alt-container">
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

export default SignUp;