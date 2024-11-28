import Link from "next/link";
export default function Checkout() {
  return (
    <section className="h-auto bg-gradient-to-r from-blue-500 to-blue-400 mt-4 flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:py-10 lg:px-16">
      {/* Text and Button */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <h1 className="text-white py-10 text-3xl font-normal lg:py-0">
          Want to start learning?
        </h1>
        <Link
          href="/register"
          className="text-orange-500 border-1 border-orange-500 bg-white py-2 px-6 rounded-md hover:bg-orange-500 lg:mt-4 no-underline"
        >
          Register Here
        </Link>
      </div>

      {/* Image */}
      <img
        src="/assets/image/learning.png"
        alt="Learning"
        className="h-auto w-auto max-w-xs mt-6 lg:mt-0 lg:max-w-md"
      />
    </section>
  );
}
