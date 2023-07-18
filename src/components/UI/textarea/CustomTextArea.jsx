import classes from './CustomTextArea.module.css';

const CustomTextArea = (props) => {
    return (
        <textarea className={classes.msg} {...props}></textarea>
    )
}

export default CustomTextArea;