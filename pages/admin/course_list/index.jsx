import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/admin/AdminSidebar";
import { TrashIcon, EditIcon } from "@/assets/icons/admin_icon/adminIcon";
import AdminHeaderbar from "@/components/admin/AdminHeaderbar";
import axios from "axios";
import formatDate from "@/utils/formatDate";

const AdminPanel = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/courses");
        setAllCourses(response.data);
        setFilteredCourses(response.data);
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
    setFilteredCourses(results);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <AdminHeaderbar
          title="Course"
          buttonLabel="+ Add Course"
          apiEndpoint="/api/courses"
          onSearch={handleSearch}
        />
        <div className="p-6 relative">
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-10">
              <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
            </div>
          )}
          <table className="w-11/12 text-left border border-gray-200 m-8 rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-300">
                <th className="p-2 "></th>
                <th className="p-2 ">Image</th>
                <th className="p-2 ">Course name</th>
                <th className="p-2 ">Lesson</th>
                <th className="p-2 ">Price</th>
                <th className="p-2 ">Created date</th>
                <th className="p-2 ">Updated date</th>
                <th className="p-2 ">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-2 border-t">{course.id}</td>
                    <td className="p-2 border-t">
                      <div className="w-16 h-16 bg-gray-300"></div>
                    </td>
                    <td className="p-2 border-t">{course.course_name}</td>
                    <td className="p-2 border-t">
                      {course.lesson_count} Lessons
                    </td>
                    <td className="p-2 border-t">
                      {course.price.toLocaleString()}
                    </td>
                    <td className="p-2 border-t">
                      {formatDate(course.created_at)}
                    </td>
                    <td className="p-2 border-t">
                      {formatDate(course.updated_at)}
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
                    No courses found.
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

export default AdminPanel;
