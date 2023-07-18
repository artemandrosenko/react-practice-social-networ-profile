import classes from './CustomButton.module.css';

const CustomButton = ({ children }) => {
    return (
        <button className={classes.btn}>
            {children}
        </button>
    );
}

export default CustomButton;