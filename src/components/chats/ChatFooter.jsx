//import React from 'react'

const ChatFooter = () => {
    
  return ( 
    <div className="min-h-[70px] bg-green_4 fixed bottom-0 w-full flex place-items-center gap-[15px] px-[15px]">
        <button className="w-[40px] h-[40px] rounded-lg bg-dark_bg_3">📎</button>
        <input type="text" className="text-neutral-700 rounded-lg outline-none min-h-[40px] px-2 input-width"/>
        <button className="w-[40px] h-[40px] rounded-lg bg-dark_bg_3">➤</button>
    </div>

  )
}

export default ChatFooter