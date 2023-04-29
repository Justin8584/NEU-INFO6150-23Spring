import './Modal.css';
import Button from './Button';
import { useState, useId, useRef } from 'react';

function Modal() {

    const dialogRef = useRef();
    const id = useId();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [comment, setComment] = useState('');

    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [emailConfirmErr, setEmailConfirmErr] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        setNameErr(null);
        setEmailErr(null);
        setEmailConfirmErr(null);

        if (!name || !email) {
            setNameErr(name ? '' : '* "Name" field is required. Please enter your name.');
            setEmailErr(email ? '' : '* "Email" field is required. Please enter your email.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailErr('* Please enter the Valid Email, including "@".')
            return;
        }
        if (email !== emailConfirm) {
            setEmailConfirmErr('* Your Email Does NOT match. Please double CHECK your email.')
            return;
        }
        dialogRef.current.close();
    };

    return (
        <div className='modal'>

            <Button type="button" visual="link" onClick={() => { dialogRef.current.showModal(); }}>
                Please also Consider a Quick Connection.
            </Button>

            <dialog className='modal-dialog' ref={dialogRef}>

                <form className='modal-form' onSubmit={onSubmit} action="/submit" method="POST">

                    <label className='modal-form__label' htmlFor={`${id}-name`}>
                        <span className='label__text'>Your Name:</span>
                        <input className='input-name' id={`${id}-name`} value={name} onInput={(e) => { setName(e.target.value) }} />
                    </label>
                    {nameErr && <div className='modal-form__err'>{nameErr}</div>}

                    <label className='modal-form__label' htmlFor={`${id}-email`}>
                        <span className='label__text'>Your Email:</span>
                        <input className='input-email' id={`${id}-email`} value={email} onInput={(e) => { setEmail(e.target.value) }}></input>
                    </label>
                    {emailErr && <div className='modal-form__err'>{emailErr}</div>}

                    <label className='modal-form__label' htmlFor={`${id}-emailConfirm`}>
                        <span className='label__text'>Confirm Your Email:</span>
                        <input className='input-emailConfirm' id={`${id}-emailConfirm`} value={emailConfirm} onInput={(e) => { setEmailConfirm(e.target.value) }}></input>
                    </label>
                    {emailConfirmErr && <div className='modal-form__err'>{emailConfirmErr}</div>}

                    <label className='modal-form__label' htmlFor={`${id}-ageRange`}>
                        <span className='label__text'>Choose your Age:</span>
                        <select id={`${id}-ageRange`} value={ageRange} onChange={(e) => setAgeRange(e.target.value)}>
                            <option value="please select">--Please Select--</option>
                            <option value="<10">less than 10</option>
                            <option value="10~17">10~17</option>
                            <option value="18~24">18~24</option>
                            <option value="25~34">25~34</option>
                            <option value="35~50">35~50</option>
                            <option value="51~65">51~65</option>
                            <option value=">65">Above 65</option>
                        </select>
                    </label>

                    <label className='modal-form__label' htmlFor={`${id}-Satisfaction`} aria-label="Do you like my Page?">
                        <span className='label__text'>Satisfaction Level of my page:</span>
                        <select id={`${id}-Satisfaction`}>
                            <option value="please select">--Please Select--</option>
                            <option value="very Like">Very Like</option>
                            <option value="like">Like</option>
                            <option value="middle">Emmm...Middle</option>
                            <option value="dislike">Dislike</option>
                            <option value="very dislike">Very Dislike</option>
                        </select>
                    </label>

                    <label className='modal-form__label' htmlFor={`${id}-comment`}>
                        <span className='label__text'>Comment:</span>
                        <input className='input-comment' id={`${id}-comment`} value={comment} onInput={(e) => { setComment(e.target.value) }}></input>
                    </label>

                    <div className='modal-form__buttons'>
                        <Button type='submit' visual='button'>
                            Submit
                        </Button>

                        <Button type="button" visual="button" onClick={() => { dialogRef.current.close(); }}>
                            Close
                        </Button>
                    </div>

                </form>
            </dialog>

        </div>
    );
}
export default Modal;