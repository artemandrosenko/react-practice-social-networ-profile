import { useState } from 'react';
import CustomTextArea from './UI/textarea/CustomTextArea';
import CustomButton from './UI/button/CustomButton';
import classes from './CreateNewMessage.module.css';

const CreateNewMessage = (props) => {

    const [msg, setMsg] = useState('');

    const messageChangeHandler = (event) => {
        setMsg(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const newMsg = { msg: msg };

        props.onAddMessage(newMsg);

        setMsg('');
    };

    return (
        <footer className={classes.footer}>
            <form onSubmit={submitHandler}>
                <CustomTextArea rows="4" onChange={messageChangeHandler} value={msg} />
                <CustomButton type="submit">Send a message</CustomButton>
            </form>
        </footer>
    );
};

export default CreateNewMessage;
