import React from "react";
import { MagnifyingIcon } from "@/assets/icons/admin_icon/adminIcon";
import { useState } from "react";

const AdminHeaderbar = ({ title, buttonLabel, data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (onSearch && data) {
      const filteredData = data.filter((item) =>
        Object.values(item).some((field) => {
          if (typeof field === "string") {
            return field.toLowerCase().includes(value.toLowerCase());
          } else if (typeof field === "number") {
            return field.toString().includes(value);
          }
          return false;
        })
      );
      onSearch(filteredData);
    }
  };

  return (
    <div className="flex bg-white justify-between items-center p-6 mb-6 border-b shadow-sm">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex space-x-4">
        <div className="relative">
          <span className="absolute top-4 left-3 flex items-center text-gray-500">
            <MagnifyingIcon />
          </span>
          <input
            className="border rounded-md mt-2 pl-10 pr-4 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {buttonLabel && (
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminHeaderbar;
