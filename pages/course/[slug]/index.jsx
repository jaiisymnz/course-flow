//pages\course\[slug]\index.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/navbar";
import VideoPlayer from "@/components/video-presentation";
import SubscritonFloat from "@/components/subscription-float";
import Footer from "@/components/footer";
import Checkout from "@/components/checkout-course";
import CourseList from "@/components/course-card";

export default function CourseDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [course, setCourse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // ใช้สำหรับแสดงสถานะการโหลด
  const [openLesson, setOpenLesson] = useState(null); // เก็บ id ของ lesson ที่เปิด

  const getCourseById = async () => {
    setLoading(true); // เริ่มการโหลด
    try {
      const response = await axios.get(`/api/courseById?slug=${slug}`);
      setCourse(response.data.data);
      setLoading(false); // เสร็จสิ้นการโหลด
    } catch (err) {
      console.error("Error fetching course:", err);
      setError(err.response?.data?.message || "Error fetching course");
      setLoading(false); // เสร็จสิ้นการโหลด
    }
  };

  const toggleAccordion = (id) => {
    setOpenLesson((prev) => (prev === id ? null : id)); // เปิด/ปิด accordion
  };

  useEffect(() => {
    if (slug) {
      getCourseById(); // เรียกฟังก์ชันที่ต้องการเมื่อ slug มีค่า
    }
  }, [slug]); // ตรวจสอบว่า useEffect จะทำงานเมื่อ slug หรือ getCourseById เปลี่ยนแปลง

  return (
    <div>
      <nav className="border-b-[1px]">
        <Navbar />
      </nav>

      <div className="all-content box-border flex flex-col relative items-center px-3">
        {error ? (
          <div className="error-message text-red-500">
            <p>{error}</p>
            <button
              onClick={() => router.replace(`/course`)}
              className="box-border lg:h-[60px] flex flex-row justify-center items-center px-2 py-2 gap-2 bg-[#2F5FAC] text-white shadow-[4px_4px_24px_rgba(0,0,0,0.08)] rounded-[12px] flex-none order-1 flex-grow"
            >
              Back to Course
            </button>
          </div>
        ) : loading ? (
          // แสดง loading spinner หรือ pulse เมื่อกำลังโหลด
          <div className="loading-pulse border border-blue-300 shadow rounded-md p-4 w-3/4 mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ) : course ? (
          <>
            <article className="flex flex-col relative lg:flex-row lg:items-start items-center">
              <div className="article-content lg:w-[740px] bg-white">
                {/* back to all course */}
                <button
                  className="back-to-course flex items-center gap-2 mt-4 mb-3 w-fit"
                  onClick={() => router.replace(`/course`)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5273 7.33641H5.08066L8.334 4.08307C8.594 3.82307 8.594 3.39641 8.334 3.13641C8.074 2.87641 7.654 2.87641 7.394 3.13641L3.00066 7.52974C2.74066 7.78974 2.74066 8.20974 3.00066 8.46974L7.394 12.8631C7.654 13.1231 8.074 13.1231 8.334 12.8631C8.594 12.6031 8.594 12.1831 8.334 11.9231L5.08066 8.66974H12.5273C12.894 8.66974 13.194 8.36974 13.194 8.00307C13.194 7.63641 12.894 7.33641 12.5273 7.33641Z"
                      fill="#2F5FAC"
                    />
                  </svg>
                  <p className="font-bold text-base text-[#2F5FAC]  mb-0">
                    Back
                  </p>
                </button>

                {/* video display */}
                <div className="flex flex-col gap-8 lg:gap-[100px] ">
                  <VideoPlayer videoSrc={course.video_file} />
                  <div className="course-header gap-[16px]  lg:gap-[24px] w-full flex flex-col">
                    <h3 className="font-medium text-2xl lg:text-4xl m-0">
                      Course Detail
                    </h3>
                    <p className="detail m-0 font-normal text-sm lg:text-base text-[#646D89]">
                      {course.detail}
                    </p>

                    {/* accordion */}
                    <div className="accordion w-full h-fit mt-8 lg:mt-[76px] lg:mb-9 pb-4 ">
                      <h2 className="font-medium text-2xl lg:text-4xl lg:mb-6">
                        Lesson Samples
                      </h2>
                      {Array.isArray(course.lessons) &&
                        course.lessons.map((lesson) => (
                          <div
                            className="accordion-item !border-0 "
                            key={lesson.lesson_id}
                          >
                            <div className="accordion-header">
                              <button
                                className="accordion-button bg-white !text-xl lg:!text-2xl !font-normal"
                                type="button"
                                onClick={() =>
                                  toggleAccordion(lesson.lesson_id)
                                }
                              >
                                {lesson.lesson_name}
                              </button>
                            </div>
                            <div
                              className={`accordion-collapse ${
                                openLesson === lesson.lesson_id
                                  ? "show"
                                  : "collapse"
                              }`}
                            >
                              <div className="accordion-body !px-10 ">
                                {Array.isArray(lesson.sub_lessons) &&
                                  lesson.sub_lessons.map((subLesson, index) => (
                                    <div
                                      key={index}
                                      className="text-base text-[#646D89]"
                                    >
                                      <p>• {subLesson.sub_lesson_name}</p>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                    {/* end of accordion */}
                  </div>
                </div>
              </div>
              <div className="hidden lg:grid lg:sticky lg:top-0 mt-10">
                <SubscritonFloat course={course} />
              </div>
            </article>
          </>
        ) : null}
      </div>
      <div className="other-course flex flex-col gap-8 lg:gap-14 items-center bg-[#F6F7FC] py-10 lg:pt-36 lg:pb-24">
        <p className="other-course-header font-medium text-2xl lg:text-4xl m-0 ">
          Other Interesting Course
        </p>
        <CourseList />
      </div>
      <div className="sub-float-mobile sticky bottom-0 lg:hidden">
        <SubscritonFloat course={course} />
      </div>
      <div className="">
        <Checkout />
      </div>

      <Footer />
    </div>
  );
}
