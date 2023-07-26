import classes from './ServicesList.module.css';
import Service from './Service';

const ServicesList = () => {
    const servicesData = [
        { title: 'Manual tour booking', value: 11 },
        { title: 'Package tours', value: 3 },
        { title: 'Hotels', value: 1 },
    ];
    return (
        <div className={classes.servicesList}>
            <div className={classes.servicesList__header}>Services</div>
            {servicesData.map((service) => (
                <Service info={service} key={Math.random()} />
            ))}
        </div>
    );
};

export default ServicesList;
