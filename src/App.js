import React, { useState } from 'react';
import MessageList from './components/Messages/MessagesList';
import CreateNewMessage from './components/CreateNewMessage';
import ServicesList from './components/Services/ServicesList';
import classes from './App.module.css';

function App() {
    const [review, setReview] = useState([
        {
            name: 'Samuel Jackson',
            msg: "Hey Eva! You're cool. Nice pic!",
            date: '13 Apr 2022'
        },
        {
            name: 'Angela Deimon',
            msg: 'Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.',
            date: '10 Apr 2022'
        },
        {
            name: 'Roland Harris',
            msg: 'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?',
            date: '8 Apr 2022'
        },
    ]);

    const addNewMessage = (newMessage) => {
        setReview([...review, newMessage]);
    };

    return (
        <div className={classes.wrapper}>
            <ServicesList />
            <MessageList review={review} />
            <CreateNewMessage onAddMessage={addNewMessage} />
        </div>
    );
}

export default App;
