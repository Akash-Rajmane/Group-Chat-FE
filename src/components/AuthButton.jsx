import PulseLoader from "react-spinners/PulseLoader";
import PropTypes from "prop-types";

const AuthButton = ({label,type,loading=false}) => {
  return (
    <button
    className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide
      font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300 my-8"
    type={type}
  >
    {loading ? (
      <PulseLoader color="#fff" size={16} />
    ) : (
      label
    )}
  </button>
  )
}

AuthButton.propTypes = {
    label: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired,
    loading: PropTypes.bool,
  };

export default AuthButton