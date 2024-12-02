import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import arrowBack from "../assets/arrow_back.svg";


export const AddLesson = () => {
  const courseName = "my super ultimate demoCourse";
  const [lessonName, setLessonName] = useState("");
  const [subLessonData, setSubLessonData] = useState([]);
  const [newSubLessonData, setNewSubLessonData] = useState({
    subLessonName: "",
    videoUrl: "",
  });

  const handleSubLessonInput = (e) => {
    const { name, value } = e.target;
    setNewSubLessonData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLessonInput = (e) => {
    setLessonName(e.trget.value)
  }

  useEffect(() => {
    if (newSubLessonData.subLessonName && newSubLessonData.videoUrl) {
     
      setSubLessonData((prev) => [...prev, newSubLessonData]);

      
      setNewSubLessonData({ name: '', videoUrl: '' });
    }
  }, [newSubLessonData]); 

console.log(newSubLessonData)

  return (
    <form className="add-lesson-page bg-[#F6F7FC]">
      <header className="top-bar flex justify-between items-center h-[92px] px-10 py-4 bg-white">
        <div className="flex gap-4 items-center">
          <div>
            <div className="cursor-pointer">
              {/* dont forget add onclick and navigate to previous page */}
              <Image src={arrowBack} alt="Description of image" />
            </div>
          </div>
          <div className="text-[14px]">
            <span className=" text-[#9AA1B9] mr-1">Course</span> '{courseName}'
            <h1 className="text-[24px] font-[500]">Add Lesson</h1>
          </div>
        </div>
        <div className="button flex gap-4">
          <button className="cancel-button px-8 py-[18px] text-[#F47E20] font-[700] border border-[#F47E20] rounded-[12px]">
            Cancel
          </button>
          <button
            type="submit"
            className="create-button px-8 py-[18px] text-[#FFFFFF] bg-[#2F5FAC] font-[700] rounded-[12px]"
          >
            Create
          </button>
        </div>
      </header>

      <main className="lesson-data-form bg-[#F6F7FC]">
        <div className="bg-white mx-10 my-10 rounded-[16px] px-[100px] pt-[40px] pb-[60px] flex flex-col gap-[40px]">
          <section className="lesson-name">
            <label htmlFor="lessonName">Lesson Name *</label>
            <input
              type="text"
              id="lessonName"
              name="courseName"
              value={lessonName}
              onChange={handleLessonInput}
              placeholder="Enter the lesson name"
              required
              className="w-full mt-1 px-4 py-3 border border-[#D6D9E4] rounded-[8px]"
            />
          </section>

          <section className="sub-lesson border-t border-[#D6D9E4]">
            <h2 className="text-[#646D89] text-[20px] font-[600] mt-8">
              Sub-Lesson
            </h2>
            <div className="sub-lesson-data-fill"></div>
          </section>
        </div>
      </main>
    </form>
  );
};
