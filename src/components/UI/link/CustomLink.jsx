import classes from './CustomLink.module.css';

const CustomLink = (props) => {
    const { link, text } = props;

    const linkHandler = (e) => {
        e.preventDefault();

        if (props.active) return;
        props.onClick();
    }

    return (
        <a
            href={link}
            onClick={linkHandler}
            className={
                props.active ? `${classes.active} ${classes.a}` : `${classes.a}`
            }
        >
            {text}
        </a>
    );
};

export default CustomLink;
