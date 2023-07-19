import classes from './Msg.module.css';

const Msg = (props) => {
    return (
        <div className={classes.msgContainer}>
            <p className={classes.msg}>{props.review.msg}</p>
        </div>
    );
}

export default Msg;