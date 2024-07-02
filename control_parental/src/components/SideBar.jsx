import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdOutlineDashboard,
} from 'react-icons/md';
import {
  BsChevronDown,
} from 'react-icons/bs';
import { FaPeopleGroup } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";

const Menus = [
  {
    title: 'Personas',
    src: 'Services',
    icon: <FaPeopleGroup/>,
    subMenus: [
      {
        title: 'Hijos',
        path: '/dashboard/hijos' 
      },
      {
        title: 'Padres',
        path: '/dashboard/padres'
      },
      {
        title: 'Profesores',
        path: '/dashboard/profesores'
      },
    ],
  },
  {
    title: 'Salones',
    icon: <SiGoogleclassroom />,
    path: '/dashboard/salones',
  }
  ];

const Sidebar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div className="h-screen flex">
      <div
        className="lg:w-72 w-48 px-2 bg-zinc-400 h-screen relative duration-500 right-0" 
      >
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <>
              <Link to={Menu.path}>
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-zinc-300 text-white text-md items-center gap-x-4 ${
                  Menu.gap ? 'mt-9' : 'mt-2'
                }`}
              >
                {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                <span className="flex-1">{Menu.title}</span>
                {Menu.subMenus && (
                  <BsChevronDown
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                    className={`${subMenuOpen && 'rotate-180'}`}
                  />
                )}
              </li>
              </Link>
              {Menu.subMenus && subMenuOpen && (
                <ul>
                  {Menu.subMenus.map((subMenuItem, idx) => (
                    <Link to ={subMenuItem.path} >
                    <li
                      key={idx}
                      className="flex px-8 ml-4 cursor-pointer text-center text-md hover:bg-zinc-300 text-white py-1.5"
                    >
                      {subMenuItem.title}
                    </li>
                    </Link>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
