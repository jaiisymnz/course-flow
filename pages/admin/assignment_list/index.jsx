import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/admin/AdminSidebar";
import AdminHeaderbar from "@/components/admin/AdminHeaderbar";
import { TrashIcon, EditIcon } from "@/assets/icons/admin_icon/adminIcon";
import axios from "axios";
import formatDate from "@/utils/formatDate";

const AdminPanelAssignments = () => {
  const router = useRouter();
  const [assignments, setAssignments] = useState([]);
  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const { data } = await axios.get("/api/admin/assignments");
        setAssignments(data);
        setFilteredAssignments(data);
      } catch (err) {
        console.error("Error fetching assignments:", err);
        setError("Failed to load assignments.");
      } finally {
        setLoading(false);
      }
    };
    fetchAssignments();
  }, []);

  const handleSearch = (results) => setFilteredAssignments(results);

  const renderTableHeaders = () => {
    const headers = [
      "Assignment Detail",
      "Course",
      "Lesson",
      "Sub-Lesson",
      "Created Date",
      "Action",
    ];
    return headers.map((header) => (
      <th key={header} className="p-2 text-[#424C6B] font-normal">
        {header}
      </th>
    ));
  };

  const renderTableBody = () => (
    <>
      {filteredAssignments.length > 0 ? (
        filteredAssignments.map((assignment) => (
          <tr key={assignment.assignment_id} className="hover:bg-[#F6F7FC]">
            <td className="p-2 border-t border-[#F1F2F6]">
              {assignment.description}
            </td>
            <td className="p-2 border-t border-[#F1F2F6]">
              {assignment.course_name}
            </td>
            <td className="p-2 border-t border-[#F1F2F6]">
              {assignment.lesson_name}
            </td>
            <td className="p-2 border-t border-[#F1F2F6]">
              {assignment.sub_lesson_name}
            </td>
            <td className="p-2 border-t border-[#F1F2F6]">
              {formatDate(assignment.created_at)}
            </td>
            <td className="p-2 border-t border-[#F1F2F6]">
              <button className="hover:scale-110">
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
          <td colSpan="6" className="p-4 text-center text-[#424C6B] border-t">
            No Assignments found.
          </td>
        </tr>
      )}
    </>
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#F6F7FC]">
        <AdminHeaderbar
          title="Assignments"
          buttonLabel="+ Add Assignment"
          apiEndpoint="/api/assignments"
          searchParam="description"
          onSearch={handleSearch}
        />
        <div className="p-6">
          {loading ? (
            <div className="absolute inset-0 bg-[#FFFFFF] bg-opacity-80 flex items-center justify-center z-10">
              <div className="loader border-t-4 border-[#2F5FAC] w-12 h-12 rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="text-center">{error}</div>
          ) : (
            <table className="w-[80vw]  text-left m-8 rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-[#E4E6ED]">
                <tr>{renderTableHeaders()}</tr>
              </thead>
              <tbody className="bg-[#FFFFFF]">{renderTableBody()}</tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanelAssignments;
