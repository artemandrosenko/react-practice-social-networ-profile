import Msg from './Msg';

const MsgsList = () => {
    const msgData = [
        { msg: "Hey Eva! You're cool. Nice pic!" },
        {
            msg: 'Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.',
        },
        {
            msg: 'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?',
        },
    ];

    return (
        <div>
            {msgData.map((review) => (
                <Msg review={review} key={Math.random()} />
            ))}
        </div>
    );
};

export default MsgsList;
