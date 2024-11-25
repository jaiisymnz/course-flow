import React from "react";
import Sidebar from "@/components/AdminSidebar";
import { TrashIcon, EditIcon } from "@/assets/icons/admin_icon/adminIcon";
import AdminHeaderBar from "@/components/AdminHeaderBar";

const adminPanelAssignments = () => {
  const assignments = [
    {
      id: 1,
      detail: "What are the 4 elem...",
      course: "Service Design Essentials",
      lessons: "Introduction",
      sub_lesson: "4 Levels of Service D...",
      created_date: "12/02/2022 10:30PM",
    },
    {
      id: 2,
      detail: "What are the 4 elem...",
      course: "Software Developer",
      lessons: "Introduction",
      sub_lesson: "4 Levels of Service D...",
      created_date: "12/02/2022 10:30PM",
    },
    {
      id: 3,
      detail: "What are the 4 elem...",
      course: "UX/UI Design Beginner",
      lessons: "Introduction",
      sub_lesson: "4 Levels of Service D...",
      created_date: "12/02/2022 10:30PM",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <AdminHeaderBar title="Assignment" buttonLabel="+ Add Course" />

        <div className="p-6">
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
              {assignments.map((assignment) => (
                <tr key={assignment.id} className="hover:bg-gray-50">
                  <td className="p-2 border-t">{assignment.detail}</td>
                  <td className="p-2 border-t">{assignment.course}</td>
                  <td className="p-2 border-t">{assignment.lessons}</td>
                  <td className="p-2 border-t">{assignment.sub_lesson}</td>
                  <td className="p-2 border-t">{assignment.created_date}</td>
                  <td className="p-2 border-t">
                    <button className="mr-2 hover:scale-110">
                      <TrashIcon />
                    </button>
                    <button className="hover:scale-110">
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default adminPanelAssignments;
