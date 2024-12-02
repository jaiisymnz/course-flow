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
    <div className="w-72 bg-[#FFFFFF] h-screen border-r pl-0 relative">
      <div
        onClick={() => handleNavigation("/admin/course_list")}
        className="ml-4 mt-2 mb-8 cursor-pointer"
      >
        <AdminPanelIcon />
      </div>

      <ul className="space-y-4 pl-0">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleNavigation(item.path)}
            className={`text-[#424C6B] cursor-pointer flex items-center space-x-2 px-8 py-3 mt-0 ${
              router.pathname === item.path
                ? "bg-[#F1F2F6]"
                : "hover:bg-[#F1F2F6]"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      <div
        onClick={handleLogout}
        className="mt-64 font-semibold text-[#424C6B] cursor-pointer flex items-center space-x-2 hover:bg-[#F1F2F6]  pr-24 py-2"
      >
        <div className="flex space-x-2 pl-8">
          <LogoutIcon />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
