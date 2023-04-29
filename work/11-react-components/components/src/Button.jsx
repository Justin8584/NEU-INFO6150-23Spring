import './Button.css';

function Button({ onClick, children, visual, type }) {

    // let buttonClass = '';
    // if (visual === "link") {
    //     buttonClass = "button-link";
    // } else if (visual === "button") {
    //     buttonClass = "button";
    // }

    const buttonClass = (visual === "link") ? "button-link" : 'button';
    const buttonType = (type === "button") ? "button" : 'submit';

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            type={buttonType}
        > {children}
        </button>
    );
}
export default Button;