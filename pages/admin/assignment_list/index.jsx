import React from "react";
import Sidebar from "@/components/admin/AdminSidebar";
import { TrashIcon, EditIcon } from "@/assets/icons/admin_icon/adminIcon";
import AdminHeaderbar from "@/components/admin/AdminHeaderbar";
import { useState, useEffect } from "react";
import axios from "axios";
import formatDate from "@/utils/formatDate";
import { useRouter } from "next/router";

const adminPanelAssignments = () => {
  const router = useRouter;
  const [allAssignments, setAllAssignments] = useState([]);
  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/assignments");
        setAllAssignments(response.data);
        setFilteredAssignments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load courses.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (results) => {
    setFilteredAssignments(results);
  };


  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <AdminHeaderbar
          title="Assignments"
          buttonLabel="+ Add Assignment"
          apiEndpoint="/api/assignments"
          searchParam="description"
          onSearch={handleSearch}
          
        />
        <div className="p-6">
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-10">
              <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
            </div>
          )}
          <table className="w-11/12 text-left border border-gray-200 m-8 rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-300">
                <th className="p-2 ">Assignment detail</th>
                <th className="p-2 ">Course</th>
                <th className="p-2 ">Lesson</th>
                <th className="p-2 ">Sub-lesson</th>
                <th className="p-2 ">Created date</th>
                <th className="p-2 ">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredAssignments.length > 0 ? (
                filteredAssignments.map((assignment, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-2 border-t">{assignment.description}</td>
                    <td className="p-2 border-t">{assignment.course_name}</td>
                    <td className="p-2 border-t">{assignment.lesson_name}</td>
                    <td className="p-2 border-t">
                      {assignment.sub_lesson_name}
                    </td>
                    <td className="p-2 border-t">
                      {formatDate(assignment.created_at)}
                    </td>
                    <td className="p-2 border-t">
                      <button className="mr-2 hover:scale-110">
                        <TrashIcon />
                      </button>
                      <button className="hover:scale-110">
                        <EditIcon />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="p-4 text-center text-gray-500 border-t"
                  >
                    No Assignments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default adminPanelAssignments;
