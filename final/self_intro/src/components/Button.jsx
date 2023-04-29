import './Button.css';

function Button({ onClick, children, visual, type, labelText }) {

    const buttonClass = (visual === "link") ? "button-link" : 'button';
    const buttonType = (type === "button") ? "button" : 'submit';

    return (
        <button
            className={buttonClass}
            aria-label={labelText}
            type={buttonType}
            onClick={onClick}
        > {children}
        </button>
    );
}
export default Button;