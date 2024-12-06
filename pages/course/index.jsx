import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";


export default function Course() {
  const [inputName, setInputName] = useState("");
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  const getCourse = async (query) => {
    try {
      const response = await axios.get(`/api/courses`, {
        params: { keywords: query || "" },
      });
      setCourses(response.data.data);
    
      
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };



  useEffect(() => {
    getCourse(inputName);
  }, [inputName]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        {/* Our courses */}
        <div className="relative w-full">
          {/* gliter */}
          <svg
            width="100%"
            height="157"
            viewBox="0 0 375 157"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-10 md:hidden"
          >
            <circle cx="369" cy="139" r="18" fill="#C6DCFF" />
            <path
              d="M300.372 20.5449L318.99 17.7062L312.139 35.249L300.372 20.5449Z"
              stroke="#FBAA1C"
              strokeWidth="3"
            />
            <circle
              cx="40.2011"
              cy="4.28073"
              r="2.78073"
              stroke="#2F5FAC"
              strokeWidth="3"
            />
            <circle cx="0.253627" cy="56.1735" r="10.2536" fill="#C6DCFF" />
            <path
              d="M80.2176 137.001L76.3218 151.54"
              stroke="#2FAC61"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M71 142.322L85.5393 146.217"
              stroke="#2FAC61"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <svg
            width="100%"
            height="190"
            viewBox="0 0 1397 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-10 hidden md:block"
          >
            <circle cx="64.5" cy="5.5" r="4" stroke="#2F5FAC" strokeWidth="3" />
            <circle cx="1381" cy="153" r="37" fill="#C6DCFF" />
            <circle cx="13.1741" cy="72.1741" r="13.1741" fill="#C6DCFF" />
            <path
              d="M1231.36 45.9099L1257.15 41.9774L1247.66 66.28L1231.36 45.9099Z"
              stroke="#FBAA1C"
              strokeWidth="3"
            />
            <path
              d="M248.843 132L243.838 150.68"
              stroke="#2FAC61"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M237 138.838L255.68 143.843"
              stroke="#2FAC61"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          {/* search bar */}
          <div className="search-bar w-full h-[198px] flex flex-col gap-8 justify-center items-center px-4">
            <h3 className="font-medium text-2xl">Our Courses</h3>
            <div className="search-box w-[343px] md:w-[357px] bg-white flex flex-row border-[1px] rounded-lg px-4 py-3 gap-[10px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.7994 4.19968C9.04899 4.19968 7.37025 4.89504 6.13251 6.13278C4.89477 7.37052 4.19941 9.04925 4.19941 10.7997C4.19941 12.5501 4.89477 14.2288 6.13251 15.4666C7.37025 16.7043 9.04899 17.3997 10.7994 17.3997C12.5498 17.3997 14.2286 16.7043 15.4663 15.4666C16.7041 14.2288 17.3994 12.5501 17.3994 10.7997C17.3994 9.04925 16.7041 7.37052 15.4663 6.13278C14.2286 4.89504 12.5498 4.19968 10.7994 4.19968ZM2.39941 10.7997C2.39953 9.45649 2.72175 8.1329 3.33905 6.93996C3.95635 5.74701 4.85073 4.7195 5.94716 3.9436C7.04359 3.1677 8.3101 2.66605 9.64045 2.48073C10.9708 2.29541 12.3262 2.43181 13.5929 2.87851C14.8597 3.32521 16.0008 4.06917 16.9207 5.04798C17.8405 6.0268 18.5122 7.21193 18.8794 8.50395C19.2466 9.79598 19.2986 11.1572 19.0311 12.4735C18.7636 13.7898 18.1843 15.0227 17.3418 16.0689L21.3354 20.0637C21.4238 20.1461 21.4948 20.2454 21.544 20.3558C21.5931 20.4662 21.6196 20.5854 21.6217 20.7063C21.6239 20.8271 21.6016 20.9471 21.5564 21.0592C21.5111 21.1713 21.4437 21.2731 21.3583 21.3585C21.2728 21.444 21.171 21.5114 21.0589 21.5566C20.9469 21.6019 20.8268 21.6241 20.706 21.622C20.5851 21.6199 20.466 21.5934 20.3556 21.5442C20.2452 21.495 20.1458 21.4241 20.0634 21.3357L16.0686 17.3421C14.8345 18.3361 13.3443 18.9608 11.7702 19.144C10.1961 19.3271 8.60236 19.0613 7.17295 18.3771C5.74354 17.693 4.53682 16.6184 3.69214 15.2776C2.84747 13.9368 2.39931 12.3844 2.39941 10.7997Z"
                  fill="#646D89"
                />
              </svg>
              <input
                placeholder="Search..."
                onChange={handleInputChange}
                className="z-50 w-fit"
              ></input>
            </div>
          </div>
        </div>

        {/* course card */}
        <div className="course-card flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 w-full md:w-fit gap-8 px-4">
          {courses.length > 0 ? (
            courses.map((course, course_id) => (
              <div
                key={course_id}
                className="card h-[475px] w-[343px] rounded-lg flex flex-col gap-2  bg-white drop-shadow-xl overflow-hidden hover:shadow-lg hover:cursor-pointer"
                onClick={() => {
                  router.push(`course/${course.course_id}`);
                }}
              >
                <img
                  src={course.image_file}
                  alt={course.course_name}
                  className="w-full h-[240px] object-cover"
                />

                <div className="course-content h-[122px] px-3 pt-2 flex flex-col gap-1">
                  <p className="m-0 text-orange-500 font-normal text-xs">
                    Course
                  </p>
                  <p className="m-0 course-name font-normal text-xl">
                    {course.course_name}
                  </p>
                  <p className="course-detial font-normal text-sm text-gray-700">
                    {course.summary.length > 50
                      ? `${course.summary.substring(0, 200)}... `
                      : course.summary}
                  </p>
                </div>
                <div className="course-footer border-t-[1px] flex flex-row gap-6 p-3">
                  <div className="lesson flex items-center">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 5.53501C8.62634 4.30281 6.84533 3.62246 5 3.62501C4.12333 3.62501 3.28167 3.77501 2.5 4.05167V15.9267C3.30302 15.6434 4.14847 15.4991 5 15.5C6.92083 15.5 8.67333 16.2225 10 17.41M10 5.53501C11.3736 4.30274 13.1547 3.62238 15 3.62501C15.8767 3.62501 16.7183 3.77501 17.5 4.05167V15.9267C16.697 15.6434 15.8515 15.4991 15 15.5C13.1547 15.4975 11.3737 16.1778 10 17.41M10 5.53501V17.41"
                        stroke="#5483D0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    &#160; {course.lesson_count} Lesson
                  </div>
                  <div className="hour flex items-center">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 5.5V10.5H13.75M17.5 10.5C17.5 11.4849 17.306 12.4602 16.9291 13.3701C16.5522 14.2801 15.9997 15.1069 15.3033 15.8033C14.6069 16.4997 13.7801 17.0522 12.8701 17.4291C11.9602 17.806 10.9849 18 10 18C9.01509 18 8.03982 17.806 7.12987 17.4291C6.21993 17.0522 5.39314 16.4997 4.6967 15.8033C4.00026 15.1069 3.44781 14.2801 3.0709 13.3701C2.69399 12.4602 2.5 11.4849 2.5 10.5C2.5 8.51088 3.29018 6.60322 4.6967 5.1967C6.10322 3.79018 8.01088 3 10 3C11.9891 3 13.8968 3.79018 15.3033 5.1967C16.7098 6.60322 17.5 8.51088 17.5 10.5Z"
                        stroke="#5483D0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    &#160; {course.total_time} Hours
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
