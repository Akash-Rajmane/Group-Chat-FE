import PropTypes from "prop-types";
import Message from "./Message";

const ChatContent = ({messages}) => {
  return (
    <ul className="chat-content list-none bg-dark_bg_2 p-[12px] overflow-y-scroll flex flex-col gap-[8px]">
      { 
        messages.map(el => <Message
                            key={el.id}
                            content={el.content}
                            senderId={el.userId}
                          />
                    )
      }
    </ul>
  )
}

ChatContent.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatContent