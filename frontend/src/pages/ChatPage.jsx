import { useState, useEffect } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get('/api/chat');

    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
      <h1>
        {chats.map((chat) => (
          <div>{chat.chatName}</div>
        ))}
      </h1>
    </>
  );
};

export default ChatPage;
