import React, { useState } from 'react';
import {
  MdOutlineDashboard,
} from 'react-icons/md';
import {
  BsChevronDown,
  BsServer,
} from 'react-icons/bs';
import { FaPeopleGroup } from "react-icons/fa6";


const Menus = [
  {
    title: 'Personas',
    src: 'Services',
    icon: <FaPeopleGroup/>,
    subMenus: [
      {
        title: 'Service 1',
        src: '/services/services1',
        cName: 'sub-nav',
      },
      {
        title: 'Service 2',
        src: '/services/services2',
        cName: 'sub-nav',
      },
      {
        title: 'Service 3',
        src: '/services/services3',
      },
    ],
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div className="h-screen flex">
      <div
        className={`${
          open ? 'w-48 px-2 ' : 'w-0 '
        } lg:w-72 bg-zinc-400 h-screen relative duration-500 right-0`}
      >
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <>
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
              {Menu.subMenus && subMenuOpen && open && (
                <ul>
                  {Menu.subMenus.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer text-center text-sm text-gray-200 py-1"
                    >
                      {subMenuItem.title}
                    </li>
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
