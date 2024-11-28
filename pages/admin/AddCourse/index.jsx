import { AddCourse } from "@/components/AddCourse";
import SideBar from "@/components/AdminSidebar";
const AddCoursePage = () => {
  return (
    <div className="flex">
      <SideBar />
      <AddCourse className=""/>
    </div>
  );
};

export default AddCoursePage;
