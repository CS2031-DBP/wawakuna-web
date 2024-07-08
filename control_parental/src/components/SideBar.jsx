import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';
import { SiGoogleclassroom } from 'react-icons/si';
import { Typography } from '@mui/material';
import { RiLockPasswordLine } from 'react-icons/ri';

const Menus = [
  {
    title: 'Personas',
    src: 'Services',
    icon: <FaPeopleGroup />,
    subMenus: [
      {
        title: 'Hijos',
        path: '/dashboard/hijos',
      },
      {
        title: 'Padres',
        path: '/dashboard/padres',
      },
      {
        title: 'Profesores',
        path: '/dashboard/profesores',
      },
    ],
  },
  {
    title: 'Salones',
    icon: <SiGoogleclassroom />,
    path: '/dashboard/salones',
  },
];

const bottomMenu = {
  title: 'Cambiar Contraseña',
  icon: <RiLockPasswordLine />,
  path: '/dashboard/profile',
};

const Sidebar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div className="h-dvh flex flex-col">
      {/* Top section with main menus */}
      <div className="lg:w-72 w-48 px-2 bg-zinc-600 flex-grow">
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <React.Fragment key={index}>
              <Link to={Menu.path}>
                <li
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-zinc-500 text-white text-md items-center gap-x-4 ${
                    Menu.gap ? 'mt-9' : 'mt-2'
                  }`}
                >
                  {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                  <span className="flex-1">{Menu.title}</span>
                  {Menu.subMenus && (
                    <Typography
                      className="flex w-8 justify-center h-full"
                      onClick={() => setSubMenuOpen(!subMenuOpen)}
                    >
                      <BsChevronDown className={`${subMenuOpen && 'rotate-180'}`} />
                    </Typography>
                  )}
                </li>
              </Link>
              {Menu.subMenus && subMenuOpen && (
                <ul className="bg-zinc-600">
                  {Menu.subMenus.map((subMenuItem, idx) => (
                    <Link to={subMenuItem.path} key={idx}>
                      <li className="flex px-8 ml-4 cursor-pointer text-center text-md hover:bg-zinc-500 text-white py-1.5">
                        {subMenuItem.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
