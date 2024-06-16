//import React from 'react'

import ChatWindow from "../components/chats/ChatWindow";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-row gap-1 h-screen" >
      <Sidebar/>
      <ChatWindow/>
    </div>
  )
}

export default Home;