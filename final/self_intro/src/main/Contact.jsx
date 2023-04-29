import "./Contact.css";
import Modal from '../components/Modal';
import thxImg from '../image/kelly-sikkema-fvpgfw3IF1w-unsplash.jpg'

function Contact() {

    return (
        <div className="contact">
            <img className="contact-img" src={thxImg} alt="thanks note" />

            <div className="contact-container">
                <h3 className="contact-title">Let's Get in Touch !</h3>
                <p className="contact-content">Please contact me at [justinzhou0219@gmail.com], </p>
                <p className="contact-content">Or, You can also find me on Social Media in bottom.</p>
                <i className="gg-arrow-bottom-right"></i>
                <Modal />
            </div>
        </div>
    );
}
export default Contact;