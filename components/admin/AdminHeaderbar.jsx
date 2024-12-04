import React, { useState } from "react";
import { MagnifyingIcon } from "@/assets/icons/admin_icon/adminIcon";
import { useRouter } from "next/router";

const AdminHeaderbar = ({ title, buttonLabel, onSearch, navigatePath }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="flex bg-[#FFFFFF] justify-between items-center p-6 mb-6 border-b shadow-sm">
      <h1 className="text-2xl font-sans ml-8">{title}</h1>
      <div className="flex mr-8 space-x-4">
        <div className="relative">
          <span
            onClick={handleSearch}
            className="absolute top-5 left-3 flex items-center text-[#9AA1B9] cursor-pointer"
          >
            <MagnifyingIcon />
          </span>
          <input
            className="border rounded-md mt-1 pl-10 pr-20 py-[0.75rem] focus:ring-2 focus:ring-[#2F5FAC] focus:outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
          />
        </div>
        <button
          className="bg-[#2F5FAC] hover:bg-[#3f74ca] text-[#FFFFFF] py-3 px-10 rounded-lg"
          onClick={() => handleNavigation(navigatePath)}
        >
          {buttonLabel || "Search"}
        </button>
      </div>
    </div>
  );
};

export default AdminHeaderbar;
