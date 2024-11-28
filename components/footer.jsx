export default function Footer() {
  return (
    <footer className="bg-[#1E2A47] py-8">
      <div className="container mx-auto flex flex-col items-start space-y-8 md:flex-row md:justify-between md:items-center md:space-y-0 md:h-32">
        {/* Logo Section */}
        <a href="#" className="md:flex-shrink-0">
          <img
            src="/assets/icon/courseflow.png"
            alt="CourseFlow Logo"
            className="w-48 h-auto"
          />
        </a>

        {/* Links Section */}
        <div>
          <ul className="space-y-2 m-0 p-0 text-left md:space-y-0 md:flex md:space-x-6">
            <li>
              <a
                href="#"
                className="text-white no-underline hover:text-blue-400"
              >
                All Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline hover:text-blue-400"
              >
                Bundle Package
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            className="text-white hover:text-blue-400"
          >
            <img
              src="/assets/icon/fb.png"
              alt="Facebook"
              className="w-10 h-10"
            />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            className="text-white hover:text-blue-400"
          >
            <img
              src="/assets/icon/ig.png"
              alt="Instagram"
              className="w-10 h-10"
            />
          </a>
          {/* Twitter */}
          <a
            href="https://www.twitter.com"
            className="text-white hover:text-blue-400"
          >
            <img
              src="/assets/icon/tw.png"
              alt="Twitter"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
