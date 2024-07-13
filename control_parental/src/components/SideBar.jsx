import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";

const Menus = [
  {
    title: "Personas",
    src: "Services",
    icon: <FaPeopleGroup />,
    subMenus: [
      { title: "Hijos", path: "/dashboard/hijos" },
      { title: "Padres", path: "/dashboard/padres" },
      { title: "Profesores", path: "/dashboard/profesores" },
    ],
  },
  {
    title: "Salones",
    icon: <SiGoogleclassroom />,
    path: "/dashboard/salones",
  },
];

const bottomMenu = {
  title: "Cambiar Contraseña",
  icon: <RiLockPasswordLine />,
  path: "/dashboard/profile",
};

const Sidebar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-zinc-600">
      <div className="lg:w-72 w-48 p-2 flex-grow">
        <ul className="pt-6 h-full">
          {Menus.map((Menu, index) => (
            <React.Fragment key={index}>
              <li className="flex flex-col">
                <Link to={Menu.path}>
                  <div
                    className={`flex rounded-md p-2 cursor-pointer hover:bg-zinc-500 text-white text-md items-center gap-x-4 ${
                      Menu.gap ? "mt-9" : "mt-2"
                    }`}
                  >
                    {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                    <span className="flex-1">{Menu.title}</span>
                    {Menu.subMenus && (
                      <BsChevronDown
                        className={`${subMenuOpen && "rotate-180"}`}
                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                      />
                    )}
                  </div>
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
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
