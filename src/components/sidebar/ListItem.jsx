//import React from 'react';
import PropTypes from "prop-types";

const ListItem = ({name}) => {
  return (
    <li className="h-[70px] bg-gray-50 text-slate-950 font-bold text-lg p-[2px] my-[1px] hover:bg-gray-200">
        {name}
    </li>
  )
}

ListItem.propTypes = {
    name: PropTypes.string.isRequired, 
};

export default ListItem;

