import { useState, useRef } from "react";

export default function VideoPlayer({ videoSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true); // ใช้สำหรับแสดง/ซ่อนปุ่ม
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      handleButtonVisibility(); // เรียกใช้เพื่อเริ่มซ่อนปุ่ม
    }
  };

  const handleButtonVisibility = () => {
    setShowButton(true); // แสดงปุ่มทันทีเมื่อกด
    clearTimeout(timeoutRef.current); // ล้าง timeout ก่อนหน้า
    timeoutRef.current = setTimeout(() => {
      setShowButton(false); // ซ่อนปุ่มหลังจาก 3 วินาที
    }, 3000);
  };

  return (
    <div
      className="relative w-full rounded-lg bg-black overflow-hidden aspect-video"
      onMouseMove={handleButtonVisibility} // แสดงปุ่มเมื่อเลื่อนเมาส์
    >
      {/* วิดีโอ */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover"
        onClick={togglePlayPause}
      ></video>

      {/* ปุ่มเล่น/หยุด */}
      {showButton && (
        <button
          onClick={togglePlayPause}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full w-[52px] h-[52px]  m-auto transition-opacity duration-300"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zM9 5v6a1.5 1.5 0 0 0 3 0V5a1.5 1.5 0 0 0-3 0z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 16 16"
            >
              <path d="M10.804 8 5 5.633v4.734L10.804 8z" />
              <path d="M5.5 4.01a.4.4 0 0 1 .39.005l6.56 3.786a.4.4 0 0 1 0 .698l-6.56 3.786a.4.4 0 0 1-.61-.348V4.353a.4.4 0 0 1 .22-.343z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
