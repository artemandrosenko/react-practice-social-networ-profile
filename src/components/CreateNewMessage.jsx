import CustomTextArea from './UI/textarea/CustomTextArea';
import CustomButton from './UI/button/CustomButton';
import classes from './CreateNewMessage.module.css';

const CreateNewMessage = () => {
    return (
        <footer className={classes.footer}>
            <CustomTextArea rows="4" />
            <CustomButton>Send a message</CustomButton>
        </footer>
    );
};

export default CreateNewMessage;
