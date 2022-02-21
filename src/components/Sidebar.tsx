import React from "react";

import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import {AiFillHome} from 'react-icons/ai'

import { FaFire, FaPoo,FaHome } from "react-icons/fa";

interface PropsTypes {
  text: string;
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarIcon text="Tooltip">
        <BsFillLightningFill size={28} />
      </SidebarIcon>
      <SidebarIcon text="BsPlus">
        <BsPlus size={28} />
      </SidebarIcon>
      <SidebarIcon text="Tooltip">
        <FaFire size={28} />
      </SidebarIcon>
      <SidebarIcon text="Tooltip">
        <FaPoo size={28}/>
      </SidebarIcon>
    </div>
  );
};

const SidebarIcon: React.FC<PropsTypes> = ({ text, children }) => {
  return (
    <div className="sidebar-icon group">
      {children}
      <div className="sidebar-tooltip group-hover:scale-100">{text}</div>
    </div>
  );
};

export default Sidebar;
