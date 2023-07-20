import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.msgContainer}>
            <p className={classes.msg}>{props.review.msg}</p>
        </div>
    );
}

export default Message;