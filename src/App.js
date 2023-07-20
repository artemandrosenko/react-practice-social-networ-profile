import React, { useState } from 'react';
import MessageList from './components/Messages/MessagesList';
import CreateNewMessage from './components/CreateNewMessage';

function App() {
    const [review, setReview] = useState([
        { msg: "Hey Eva! You're cool. Nice pic!" },
        {
            msg: 'Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.',
        },
        {
            msg: 'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?',
        }
    ]);
  
  const addNewMessage = (newMessage) => { 
    setReview([...review, newMessage]);
  };

    return (
        <div>
            <MessageList review={review} />
        <CreateNewMessage onAddMessage={ addNewMessage } />
        </div>
    );
}

export default App;
