import React from "react";
import Sidebar from "../../components/AdminSidebar";
import { TrashIcon, EditIcon } from "@/assets/icons/admin_icon/adminIcon";
import AdminHeaderbar from "@/components/AdminHeaderbar";
import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "Service Design Essentials",
    lessons: 6,
    price: 3559.0,
    date: "12/02/2022 10:30PM",
  },
  {
    id: 2,
    name: "Software Developer",
    lessons: 6,
    price: 3559.0,
    date: "12/02/2022 10:30PM",
  },
  {
    id: 3,
    name: "UX/UI Design Beginner",
    lessons: 6,
    price: 3559.0,
    date: "12/02/2022 10:30PM",
  },
];


const adminPanel = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  
  const handleSearch = (results) => {
    setFilteredCourses(results);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <AdminHeaderbar
          title="Course"
          buttonLabel="+ Add Course"
          data={courses}
          onSearch={handleSearch}
        />
        <div className="p-6">
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
              {filteredCourses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="p-2 border-t">{course.id}</td>
                  <td className="p-2 border-t">
                    <div className="w-16 h-16 bg-gray-300"></div>
                  </td>
                  <td className="p-2 border-t">{course.name}</td>
                  <td className="p-2 border-t">{course.lessons} Lessons</td>
                  <td className="p-2 border-t">
                    {course.price.toLocaleString()}
                  </td>
                  <td className="p-2 border-t">{course.date}</td>
                  <td className="p-2 border-t">{course.date}</td>
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

export default adminPanel;
