export default function Navbar() {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#">
          <img src="/assets/icon/CourseFlow.png" alt="courseflow" />
        </a>

        {/* Navigation Links and Button */}
        <div className="flex items-center space-x-8 md:space-x-4">
          {/* Navigation Links */}
          <ul className="flex items-center text-gray-700 font-medium m-0">
            <li>
              <a
                href="#"
                className="hover:text-blue-500 text-darkBlue500 font-bold no-underline text-xs md:text-base"
              >
                Our Courses
              </a>
            </li>
          </ul>

          {/* Button */}
          <button className="bg-blue500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 font-bold">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
}
