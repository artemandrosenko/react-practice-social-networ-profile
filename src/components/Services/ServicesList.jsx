import classes from './ServicesList.module.css';
import Service from './Service';

const ServicesList = () => {
    const servicesData = [
        { title: 'Manual tour booking', value: 11 },
        { title: 'Package tours', value: 3 },
        { title: 'Hotels', value: 1 },
    ];
    const serviceValue = servicesData.map(service => service.value);

    let total = 0;
    
    serviceValue.forEach(elem => {
        total += elem;
    });

    const maxValue = Math.max(...serviceValue);

    return (
        <div className={classes.servicesList}>
            <div className={classes.servicesList__header}>Services</div>
            {servicesData.map((service) => (
                <Service info={service} key={Math.random()} maxValue={maxValue} />
            ))}
            <div className={classes.total__box}>
                <div className="total">
                    <strong>Total</strong>
                </div>
                <div className={classes.total__value}>{total}</div>
            </div>
        </div>
    );
};

export default ServicesList;
