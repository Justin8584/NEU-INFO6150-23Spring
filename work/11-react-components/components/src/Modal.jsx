import './Modal.css';
import { useRef, useId, useState } from 'react';
import Button from './Button';

function Modal() {

    const dialogRef = useRef();
    const id = useId();

    const [modalOpen, setModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [luckyNum, setLuckyNum] = useState('');

    return (
        <div className='modal'>
            <Button
                className="modal-button"
                type="button"
                visual="link"
                onClick={() => {
                    dialogRef.current.showModal();
                    setModalOpen(true);
                    // console.log("Modal Opened");
                }}
            >
                Open the Modal
            </Button>

            <p className='modal-content'>
                Typing: Your name is {' '}
                <span className='modal-output'>
                    {name}
                </span>
                , and Your lucky number is {' '}
                <span className='modal-output'>
                    {luckyNum}
                </span>
            </p>

            <dialog className='modal-dialog' ref={dialogRef}>

                <form
                    className='modal-form'
                    onSubmit={(e) => {
                        e.preventDefault();
                        dialogRef.current.close();
                        setModalOpen(false); // the modal is closed at the submit of the form, not the "submit" button
                        // console.log({ name, luckyNum });
                    }}
                    action="/submit"
                    method="POST"
                >

                    <label htmlFor={`${id}-name`}>Name:</label>
                    <input id={`${id}-name`} value={name} onInput={(e) => { setName(e.target.value) }} />

                    <label htmlFor={`${id}-luckyNum`}>Choose your Lucky Num:</label>
                    <select id={`${id}-luckyNum`} value={luckyNum} onChange={(e) => setLuckyNum(e.target.value)}>
                        <option value="please select">--Please Select--</option>
                        <option value="Five">5</option>
                        <option value="Four">4</option>
                        <option value="Three">3</option>
                        <option value="Two">2</option>
                        <option value="One">1</option>
                    </select>

                    <Button
                        type='submit'
                        visual='link'
                    >
                        Submit
                    </Button>

                    <Button
                        type="button"
                        visual="button"
                        onClick={() => {
                            dialogRef.current.close();
                            setModalOpen(false);
                            // console.log('Model Closed');
                        }}
                    >
                        Close
                    </Button>

                </form>
            </dialog>

            <p>
                Model Window is <span className='modal-output'>{modalOpen ? 'Open' : 'Closed'}</span>
            </p>

        </div>
    );
}
export default Modal;