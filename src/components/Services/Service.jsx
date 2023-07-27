import classes from './Service.module.css';

const Service = (props) => {
    const { title, value } = props.info;
    // const cls = value === props.maxValue ? {[classes.fill, classes.max].join(' ')} : {classes.fill};

    let fillWidth = Math.round(+value / props.maxValue * 100) + '%';

    return (
        <div className={classes.service}>
            {value === props.maxValue ? (
                <div
                    className={[classes.fill, classes.max].join(' ')}
                    style={{ width: fillWidth }}
                >
                    <span>{title}</span>
                </div>
            ) : (
                <div className={classes.fill} style={{ width: fillWidth }}>
                    <span>{title}</span>
                </div>
            )}
            <div className={classes.value}>{value}</div>
        </div>
    );
}

export default Service;