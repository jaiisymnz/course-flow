import React, { useState } from "react";
import { MagnifyingIcon } from "@/assets/icons/admin_icon/adminIcon";
import axios from "axios";

const AdminHeaderbar = ({
  title,
  buttonLabel,
  onSearch,
  apiEndpoint,
  searchParam = "name",
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(apiEndpoint, {
        params: { [searchParam]: searchQuery },
      });
      onSearch(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex bg-white justify-between items-center p-6 mb-6 border-b shadow-sm">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex space-x-4">
        <div className="relative">
          <span
            onClick={handleSearch}
            className="absolute top-4 left-3 flex items-center text-gray-500 cursor-pointer"
          >
            <MagnifyingIcon />
          </span>
          <input
            className="border rounded-md mt-2 pl-10 pr-4 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
          />
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          onClick={handleSearch}
        >
          {buttonLabel || "Search"}
        </button>
      </div>
    </div>
  );
};

export default AdminHeaderbar;
