import React, {useState} from 'react';
import CustomLink from './UI/link/CustomLink';
import classes from './Filter.module.css';

const Filter = () => {

    const [all, setAll] = useState(true);

    const clickHandler = () => {

        setAll(!all);
    }

    return (
        <div className={classes.filter}>
            <div className={classes.review}>
                <CustomLink
                    onClick={clickHandler}
                    active={all}
                    link="#"
                    text="Latest reviews"
                />
                <CustomLink
                    className={classes["all-review"]}
                    onClick={clickHandler}
                    active={!all}
                    link="#"
                    text="All reviews"
                />
            </div>
            <div className={classes.social}>

            </div>
        </div>
    );
};

export default Filter;
