import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const Message = ({content,senderId}) => {
const {userId} = useContext(AuthContext);

  return (
    <li className={`w-max p-[10px] rounded-t-lg ${senderId===userId ? "bg-blue_1 self-end rounded-bl-lg": "bg-blue_2 self-start rounded-br-lg" }`} >{content}</li>
  )
}

Message.propTypes = {
    content: PropTypes.string.isRequired,
    senderId: PropTypes.number.isRequired
};
  

export default Message;