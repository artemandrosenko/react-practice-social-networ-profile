import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.msgContainer}>
            <p>
                <strong>{props.review.name}</strong>
                <span className={classes.msg_date}>{props.review.date}</span>
            </p>
            <p className={classes.msg}>{props.review.msg}</p>
        </div>
    );
};

export default Message;
