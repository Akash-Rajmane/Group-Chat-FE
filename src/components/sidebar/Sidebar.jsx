//import React from 'react'

import List from "./List"
import SidebarHeader from "./SidebarHeader"
import SidebarSearch from "./SidebarSearch"

const Sidebar = () => {
  return (
      <div className="w-1/3 bg-dark_bg_4">
        <SidebarHeader/>
        <SidebarSearch/>
        <List/>
      </div>
  )
}

export default Sidebar