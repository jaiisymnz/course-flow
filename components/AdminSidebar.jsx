import React from "react";
import { useRouter } from "next/router";
import {
  AdminPanelIcon,
  BookIcon,
  ClipBoardIcon,
  PromoIcon,
  LogoutIcon,
} from "../assets/icons/admin_icon/adminIcon";

const menuItems = [
  { name: "Course", icon: <BookIcon />, path: "/admin/course_list" },
  {
    name: "Assignment",
    icon: <ClipBoardIcon />,
    path: "/admin/assignment_list",
  },
  { name: "Promo code", icon: <PromoIcon />, path: "/admin/promo_code" },
];

const Sidebar = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="w-64 bg-white h-screen border-r p-4 relative">
      <div
        onClick={() => handleNavigation("/admin/course_list")}
        className="mb-8 cursor-pointer"
      >
        <AdminPanelIcon />
      </div>

      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleNavigation(item.path)}
            className="text-gray-800 w-full font-medium cursor-pointer flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 rounded"
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      <div
        onClick={() => handleNavigation("/logout")}
        className="absolute bottom-12 left-4 text-gray-700 font-medium cursor-pointer flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 w-56 rounded"
      >
        <LogoutIcon />
        <span>Log out</span>
      </div>
    </div>
  );
};

export default Sidebar;
