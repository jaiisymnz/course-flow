import React from "react";
import { MagnifyingIcon } from "@/assets/icons/admin_icon/adminIcon";

const AdminHeaderBar = ({ title, buttonLabel }) => {
  return (
    <div className="flex bg-white justify-between items-center p-6 mb-6 border-b shadow-sm">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex space-x-4">
        <div className="relative top-2">
          <span className="absolute top-2 left-3 flex items-center text-gray-400">
            <MagnifyingIcon />
          </span>
          <input
            className="border rounded-md pl-10 pr-4 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Search..."
          />
        </div>
        {buttonLabel && (
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminHeaderBar;
