import { AddCourse } from "@/components/admin/AddCourse";
import SideBar from "@/components/admin/AdminSidebar";
const AddCoursePage = () => {
  return (
    <div className="flex">
      <SideBar />
      <AddCourse className="" />
    </div>
  );
};

export default AddCoursePage;
