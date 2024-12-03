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
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data } = await axios.get("/api/admin/courses");
      setAllCourses(data);
      setFilteredCourses(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load courses.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (results) => setFilteredCourses(results);

  const renderTableRows = () => {
    if (filteredCourses.length === 0) {
      return (
        <tr>
          <td colSpan="8" className="p-4 text-center text-[#424C6B] border-t">
            No courses found.
          </td>
        </tr>
      );
    }

    return filteredCourses.map((course, index) => (
      <tr key={course.course_id} className="hover:bg-[#F6F7FC]">
        <td className="p-2 border-t border-[#F1F2F6]">{index + 1}</td>
        <td className="p-2 border-t border-[#F1F2F6]">
          <div className="w-16 h-16 bg-gray-300"></div>
        </td>
        <td className="p-2 border-t border-[#F1F2F6]">{course.course_name}</td>
        <td className="p-2 border-t border-[#F1F2F6]">
          {course.lesson_count} Lessons
        </td>
        <td className="p-2 border-t border-[#F1F2F6]">
          {course.price.toLocaleString()}
        </td>
        <td className="p-2 border-t border-[#F1F2F6]">
          {formatDate(course.created_at)}
        </td>
        <td className="p-2 border-t border-[#F1F2F6]">
          {formatDate(course.updated_at)}
        </td>
        <td className="p-2 border-t border-[#F1F2F6]">
          <button className="mr-2 hover:scale-110">
            <TrashIcon />
          </button>
          <button className="hover:scale-110">
            <EditIcon />
          </button>
        </td>
      </tr>
    ));
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">{error}</div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#F6F7FC]">
        <AdminHeaderbar
          title="Course"
          buttonLabel="+ Add Course"
          apiEndpoint="/api/courses"
          onSearch={handleSearch}
          navigatePath="/admin/AddCourse"
        />
        <div className="p-6">
          {loading ? (
            <div className="absolute inset-0 bg-[#FFFFFF] bg-opacity-80 flex items-center justify-center z-10">
              <div className="loader border-t-4 border-[#2F5FAC] w-12 h-12 rounded-full animate-spin"></div>
            </div>
          ) : (
            <table className="w-[80vw] text-left m-8 rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#E4E6ED]">
                  {[
                    "",
                    "Image",
                    "Course name",
                    "Lesson",
                    "Price",
                    "Created date",
                    "Updated date",
                    "Action",
                  ].map((header, idx) => (
                    <th key={idx} className="p-2 text-[#424C6B] font-normal">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-[#FFFFFF]">{renderTableRows()}</tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
