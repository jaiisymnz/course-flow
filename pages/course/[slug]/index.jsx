//pages\course\[slug]\index.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="box-border flex flex-col px-4">
        {!course ? (
          <p>Loading course details...</p>
        ) : (
          <>
            {" "}
            <div className="back-to-course flex items-center">
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
              <p className="font-bold text-base text-blue-600 px-2 py-1 gap-2">
                Back
              </p>
            </div>
            <div className="video w-full h-[214px] bg-slate-500 rounded-lg text-center"></div>
            <div className="course-header">
              <h3 className="font-medium text-2xl">Course Detail</h3>
              <p className="detail font-normal text-sm text-gray-700">
                {course.detail}
              </p>
            </div>
            <p>Price: {course.price}</p>
          </>
        )}
      </div>
    );
}
