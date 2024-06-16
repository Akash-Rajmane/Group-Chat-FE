// import React from 'react'

import ChatContent from "./ChatContent";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";

const ChatWindow = () => {
  return (
    <div className=" w-2/3 bg-dark_bg_4 h-screen ">
        <ChatHeader/>
        <ChatContent/>
        <ChatFooter/>
    </div>
  )
}

export default ChatWindow;