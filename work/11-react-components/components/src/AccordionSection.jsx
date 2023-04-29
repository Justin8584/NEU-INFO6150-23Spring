import { useState } from 'react';
import "./AccordionSection.css";

function AccordionSection({ title, children }) {

    const [show, hide] = useState(false);
    const openClass = show ? "accordion-section__title-show" : "";

    return (
        <div className={"accordion-section"} >
            <button
                className={`accordion-section__title ${openClass}`}
                onClick={() => hide(!show)}
                aria-expanded={show ? 'true' : 'false'}
            >
                <span>{title}</span>
            </button>

            {show ? <div className="accordion-section__content">{children}</div> : null}
        </div>
    );
}
export default AccordionSection; 