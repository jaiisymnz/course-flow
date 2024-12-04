import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/admin/AdminSidebar";
import AdminHeaderbar from "@/components/admin/AdminHeaderbar";
import { TrashIcon, EditIcon } from "@/assets/icons/admin_icon/adminIcon";
import axios from "axios";
import formatDate from "@/utils/formatDate";

const AdminPanelAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchAssignments(currentPage);
  }, [currentPage]);

  const fetchAssignments = async (page) => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/admin/assignments", {
        params: { page, limit: 6 },
      });
      setAssignments(data.data);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Error fetching assignments data:", err);
      setError("Failed to load assignments data.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchQuery) => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/admin/assignments", {
        params: { description: searchQuery, page: 1, limit: 6 },
      });
      setAssignments(data.data);
      setTotalPages(data.totalPages);
      setCurrentPage(1);
    } catch (err) {
      console.error("Error fetching assignments data:", err);
      setError("Failed to load assignments data.");
    } finally {
      setLoading(false);
    }
  };

  const renderPagination = () => {
    return (
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mx-2 bg-[#2F5FAC] hover:bg-[#3f74ca] rounded text-[#FFFFFF]"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="px-4 py-2 mx-2 bg-[#2F5FAC] hover:bg-[#3f74ca] rounded text-[#FFFFFF]"
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next
        </button>
      </div>
    );
  };

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

  const renderTableBody = () => {
    return assignments.map((assignment) => (
      <tr key={assignment.assignment_id} className="hover:bg-[#F6F7FC]">
        <td className="p-4 border-t border-[#F1F2F6]">
          {assignment.description}
        </td>
        <td className="p-4 border-t border-[#F1F2F6]">
          {assignment.course_name}
        </td>
        <td className="p-4 border-t border-[#F1F2F6]">
          {assignment.lesson_name}
        </td>
        <td className="p-4 border-t border-[#F1F2F6]">
          {assignment.sub_lesson_name}
        </td>
        <td className="p-4 border-t border-[#F1F2F6]">
          {formatDate(assignment.created_at)}
        </td>
        <td className="p-4 border-t border-[#F1F2F6]">
          <button className="hover:scale-110">
            <TrashIcon />
          </button>
          <button className="hover:scale-110">
            <EditIcon />
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#F6F7FC]">
        <AdminHeaderbar
          title="Assignments"
          buttonLabel="+ Add Assignment"
          apiEndpoint="/api/assignments"
          onSearch={handleSearch}
        />
        <div className="p-6">
          {loading ? (
            <div className="absolute inset-0 bg-[#FFFFFF] bg-opacity-80 flex items-center justify-center z-10">
              <div className="loader border-t-4 border-[#2F5FAC] w-12 h-12 rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <table className="w-[80vw]  text-left m-8 rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-[#E4E6ED]">
                  <tr>{renderTableHeaders()}</tr>
                </thead>
                <tbody className="bg-[#FFFFFF]">
                  {assignments.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center text-[#6B7280]">
                        Assignments Not Found
                      </td>
                    </tr>
                  ) : (
                    renderTableBody()
                  )}
                </tbody>
              </table>
              {renderPagination()}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanelAssignments;
