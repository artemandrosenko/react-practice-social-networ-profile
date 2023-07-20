import Message from './Message';

const MessageList = (props) => {
    return (
        <div>
            {props.review.map((review) => (
                <Message review={review} key={Math.random()} />
            ))}
        </div>
    );
};

export default MessageList;
