import propTypes from "prop-types";
import "./Button.css";

const Button = ({children,  type, className}) => {
    return(
        <button type = {type ?? "button"}
        className={`btn ${className}`}>
            {children} 
        </button>
    );
};

Button.propTypes = {
    children: propTypes.node,
    type: propTypes.string,
    className: propTypes.string,
}
;
export default Button;