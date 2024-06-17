import {useContext, useEffect, useState}  from 'react'

import ChatContent from "./ChatContent";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import { AuthContext } from '../../context/auth-context';

const ChatWindow = () => {
  const [messages,setMessages] = useState([]);
  const {token} = useContext(AuthContext);

  useEffect(()=>{
    const fetchMessages = async () => {
      try {
      
        const res = await fetch(`${import.meta.env.VITE_BE_HOST}/api/message/get-all-messages`,{
          headers: {
              "Authorization": `Bearer ${token}`
          }
      });
        if (res.ok) {
          const { message, msgs } = await res.json();
          console.log(message);
          setMessages(msgs);
        } else {
          const errorData = await res.json();
          console.log(errorData.message || 'Failed to get messages');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchMessages();

    const intervalId = setInterval(fetchMessages, 1000);

    return () => clearInterval(intervalId);

  },[token])

  return (
    <div className=" w-2/3 bg-dark_bg_4 h-screen ">
        <ChatHeader/>
        <ChatContent messages={messages}/>
        <ChatFooter/>
    </div>
  )
}

export default ChatWindow;