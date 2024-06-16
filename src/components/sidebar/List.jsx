//import React from 'react'

import ListItem from "./ListItem";

const List = () => {
    const arr = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve",
        "Frank",
        "Grace",
        "Hannah",
        "Isaac",
        "Jack",
        "Karen",
        "Liam",
        "Mona",
        "Nathan",
        "Olivia"
    ];
  return (
    <ul className="list-none list overflow-y-scroll px-[5px]">
        {arr.map(el=>
        <ListItem
            name={el}
            key={el}
        />)}
    </ul>
  )
}

export default List