import { useState } from "react";
import axios from "axios";

export const Addcourse = () => {
  const [courseData, setCourseData] = useState({
    courseName: "",
    price: "",
    totalTime: "",
    summary: "",
    detail: "",
    image: null,
    videoTrailer: null,
    file: null,
    created_by: 2,
  });
  const [fileName, setFileName] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleClickUploadImage = () => {
    document.getElementById("imageInput").click();
  };

  const handleClickUploadVideo = () => {
    document.getElementById("videoInput").click();
  };

  const handleClickUploadFile = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 5 * 1024 * 1024) {
        setCourseData((prev) => ({
          ...prev,
          image: URL.createObjectURL(file),
        }));
      } else {
        alert("File size exceeds 5 MB");
      }
    }
  };

  const handleRemoveImage = () => {
    setCourseData((prev) => ({
      ...prev,
      image: null,
    }));
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 20 * 1024 * 1024) {
        setCourseData((prev) => ({
          ...prev,
          videoTrailer: URL.createObjectURL(file),
        }));
      } else {
        alert("File size exceeds 50 MB");
      }
    }
  };

  const handleRemoveVideo = () => {
    setCourseData((prev) => ({
      ...prev,
      videoTrailer: null,
    }));
  };

  const handleOptionalFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 10 * 1024 * 1024) {
        setCourseData({
          ...courseData,
          file: URL.createObjectURL(file),
        });
        setFileName(file.name);
      } else {
        alert("File size exceeds 10 MB");
      }
    }
  };

  const handleRemoveFile = () => {
    setCourseData({
      ...courseData,
      file: null,
    });
    setFileName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/courses", courseData);
      alert("Course created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error creating course:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <form className="add-course-page bg-[#F6F7FC]" onSubmit={handleSubmit}>
      <header className="top-bar flex justify-between items-center h-[92px] px-10 py-4 bg-white">
        <h1 className="text-[24px] font-[500]">Add Course</h1>
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

      <main className="course-data-form bg-[#F6F7FC]">
        <div className="bg-white mx-10 my-10 rounded-[16px] px-[100px] pt-[40px] pb-[60px] flex flex-col gap-[40px]">
          {/* Course Name */}
          <section className="course-name">
            <label htmlFor="courseName">Course Name *</label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={courseData.courseName}
              onChange={handleInputChange}
              placeholder="Enter the course name"
              required
              className="w-full mt-1 px-4 py-3 border border-[#D6D9E4] rounded-[8px]"
            />
          </section>

          {/* Price and Total Time */}
          <div className="flex gap-[40px]">
            <section className="price w-[50%]">
              <label htmlFor="price">Price *</label>
              <input
                type="number"
                id="price"
                name="price"
                value={courseData.price}
                onChange={handleInputChange}
                placeholder="Enter the price in THB"
                required
                className="w-full mt-1 px-4 py-3 border border-[#D6D9E4] rounded-[8px]"
              />
            </section>
            <section className="total-time w-[50%]">
              <label htmlFor="totalTime">Total Learning Time *</label>
              <input
                type="number"
                id="totalTime"
                name="totalTime"
                value={courseData.totalTime}
                onChange={handleInputChange}
                placeholder="Enter the total learning time in hours"
                required
                className="w-full mt-1 px-4 py-3 border border-[#D6D9E4] rounded-[8px]"
              />
            </section>
          </div>

          {/* Course Summary */}
          <section className="course-summary">
            <label htmlFor="summary">Course Summary *</label>
            <textarea
              id="summary"
              name="summary"
              value={courseData.summary}
              onChange={handleInputChange}
              placeholder="Write a summary of the course"
              required
              rows="2"
              className="w-full mt-1 px-4 py-3 border border-[#D6D9E4] rounded-[8px]"
            />
          </section>

          {/* Course Details */}
          <section className="course-detail">
            <label htmlFor="detail">Course Detail:</label>
            <textarea
              id="detail"
              name="detail"
              value={courseData.detail}
              onChange={handleInputChange}
              placeholder="Enter detailed information about the course"
              required
              rows="6"
              className="w-full mt-1 px-4 py-3 border border-[#D6D9E4] rounded-[8px]"
            />
          </section>

          {/* Cover Image Section */}
          <section className="cover-image bg-white">
            <h3>Cover Image *</h3>
            <p className="text-[#9AA1B9] mt-2 text-[14px]">
              Supported file types: .jpg, .png, .jpeg. Max file size: 5 MB
            </p>

            <div className="mt-4">
              {!courseData.image ? (
                <button
                  type="button"
                  className="border-dashed w-[240px] h-[240px] bg-[#F6F7FC] rounded-[8px] p-6 text-center cursor-pointer"
                  onClick={handleClickUploadImage}
                >
                  <div className="text-[#5483D0] font-[500] text-[24px]">+</div>
                  <div className="text-[#5483D0] font-[500]">Upload Image</div>
                  <input
                    type="file"
                    id="imageInput"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageFileChange}
                    required
                  />
                </button>
              ) : (
                <div className="relative w-[240px] h-[240px]">
                  <img
                    src={courseData.image}
                    alt="Uploaded Preview"
                    className="w-[240px] h-[240px] object-cover rounded-lg"
                  />
                  <button
                    onClick={handleRemoveImage}
                    className="absolute top-0 right-0 bg-[#9B2FAC] text-white rounded-full flex items-center justify-center w-8 h-8"
                  >
                    x
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Video Section */}
          <section className="cover-video bg-white">
            <h3>Video Trailer *</h3>
            <p className="text-[#9AA1B9] mt-2 text-[14px]">
              Supported file types: .mp4, .mov, .avi Max file size: 20 MB
            </p>

            <div className="mt-4">
              {!courseData.videoTrailer ? (
                <button
                  type="button"
                  className="border-dashed w-[240px] h-[240px] bg-[#F6F7FC] rounded-[8px] p-6 text-center cursor-pointer"
                  onClick={handleClickUploadVideo}
                >
                  <div className="text-[#5483D0] font-[500] text-[24px]">+</div>
                  <div className="text-[#5483D0] font-[500]">Upload Video</div>
                  <input
                    type="file"
                    id="videoInput"
                    className="hidden"
                    accept="video/*"
                    onChange={handleVideoFileChange}
                    required
                  />
                </button>
              ) : (
                <div className="relative w-[240px] h-[240px]">
                  {/* Video Preview */}
                  <video
                    src={courseData.videoTrailer}
                    controls
                    className="w-[240px] h-[240px] object-cover rounded-lg"
                    alt="Uploaded Video Preview"
                  />
                  <button
                    onClick={handleRemoveVideo}
                    className="absolute top-0 right-0 bg-[#9B2FAC] text-white rounded-full flex items-center justify-center w-8 h-8"
                  >
                    x
                  </button>
                </div>
              )}
            </div>
          </section>

          <section className="cover-file bg-white">
            <h3>Attach File (Optional)</h3>
            <p className="text-[#9AA1B9] mt-2 text-[14px]">
              Supported file types: .pdf, .docx, .xlsx, .txt. Max file size: 10
              MB
            </p>

            <div className="mt-4">
              {!courseData.file ? (
                <button
                  type="button"
                  className="border-dashed w-[160px] h-[160px] bg-[#F6F7FC] rounded-[8px] p-6 text-center cursor-pointer"
                  onClick={handleClickUploadFile}
                >
                  <div className="text-[#5483D0] font-[500] text-[24px]">+</div>
                  <div className="text-[#5483D0] font-[500]">Attach File</div>
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    accept=".pdf, .docx, .xlsx, .txt"
                    onChange={handleOptionalFileChange}
                  />
                </button>
              ) : (
                <div className="relative w-[160px] h-[160px]">
                  {/* File Preview */}
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="text-[#9AA1B9] text-sm">
                      {courseData.fileName}
                    </div>
                    <div className="mt-2 text-sm text-[#9AA1B9]">
                      <a
                        href={courseData.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5483D0]"
                      >
                        {fileName}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleRemoveFile}
                    className="absolute top-0 right-0 bg-[#9B2FAC] text-white rounded-full flex items-center justify-center w-8 h-8"
                  >
                    x
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </form>
  );
};
