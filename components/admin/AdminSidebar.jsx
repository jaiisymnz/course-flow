import React from "react";
import { useRouter } from "next/router";
import {
  AdminPanelIcon,
  BookIcon,
  ClipBoardIcon,
  PromoIcon,
  LogoutIcon,
} from "../../assets/icons/admin_icon/adminIcon";
import supabase from "@/lib/supabase";

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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin");
  };

  return (
    <div className="w-72 bg-white h-screen border-r p-4 relative">
      <div
        onClick={() => handleNavigation("/admin/course_list")}
        className="mb-8 cursor-pointer"
      >
        <AdminPanelIcon />
      </div>

      <ul className="space-y-4 pl-0">
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
        onClick={handleLogout}
        className="absolute left-6 bottom-2/4 text-gray-700 font-medium cursor-pointer flex items-center space-x-2 hover:bg-gray-200 pl-6 pr-24 py-2 rounded"
      >
        <div className="flex space-x-2">
          <LogoutIcon />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
