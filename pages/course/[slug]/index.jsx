//pages\course\[slug]\index.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/navbar";
import VideoPlayer from "@/components/video-presentation";
import SubscritonFloat from "@/components/subscription-float";

export default function CourseDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [course, setCourse] = useState(null);
  const [error, setError] = useState("");

  const getCourseById = async () => {
    try {
      const response = await axios.get(`/api/courseById?slug=${slug}`);
      setCourse(response.data.data);
      console.log(response);
    } catch (err) {
      console.error("Error fetching course:", err);
      setError(err.response?.data?.message || "Error fetching course");
    }
  };

  useEffect(() => {
    if (slug) {
      getCourseById();
    }
  }, [slug]);

  return (
    <>
      <Navbar />
      <div className="box-border flex flex-col items-center px-3">
        {error ? (
          <div className="error-message text-red-500">
            <p>{error}</p>
            <button onClick={getCourseById} className="retry-btn">
              Retry
            </button>
          </div>
        ) : course ? (
          <article className="flex flex-col lg:flex-row lg:items-start items-center">
            <div className="article-content lg:w-[740px] bg-white">
              {/* back to all course */}
              <button
                className="back-to-course flex items-center gap-2 mt-4 w-fit mb-4"
                onClick={() => {
                  router.replace(`/course`);
                }}
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
                <p className="font-bold text-base text-[#2F5FAC] mb-0">Back</p>
              </button>
              {/* video display */}
              <div className="flex flex-col lg:gap-[100px] gap-4">
                <VideoPlayer videoSrc={course.video_file} />
                <div className="course-header w-full flex flex-col gap-4">
                  <h3 className="font-medium text-2xl">Course Detail</h3>
                  <p className="detail font-normal text-sm text-[#646D89]">
                    {course.detail}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-fit lg:mt-16">
              <SubscritonFloat course={course} />
            </div>
          </article>
        ) : (
          // loading pulse
          <div class="loading-pulse border border-blue-300 shadow rounded-md p-4 w-3/4 mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-700 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </>
  );
}
