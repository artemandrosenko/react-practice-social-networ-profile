import classes from './CustomLink.module.css';

const CustomLink = (props) => {

    const { link, text } = props;

    return (
        <a href={link} className={classes.a}>{ text }</a>
    );
}

export default CustomLink;