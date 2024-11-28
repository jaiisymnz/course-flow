import DecorativeImages from "./decorative-images";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-cover bg-center bg-[url('/assets/image/herobg.png')] md:bg-blue-100 md:bg-none md:h-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 text-black md:max-w-screen-md lg:max-w-screen-lg">
        {/* Text Content */}
        <div className="text-left max-w-md md:shrink-0">
          <h1 className="text-4xl font-semibold pt-10">
            Best Virtual <span className="block">Classroom Software</span>
          </h1>
          <p className="mt-4 relative z-20">
            Welcome to Schooler! The one-stop online class management system
            that caters to all your educational needs!
          </p>
          <button className="bg-blue500 text-white mt-10 px-5 py-3 rounded-xl hover:bg-blue-600 font-semibold text-xl relative z-20">
            Explore Courses
          </button>
        </div>

        {/* Additional Image */}
        <div className="hidden md:block absolute bottom-0 right-0 z-10">
          <img
            src="/assets/image/decoratehero01.png"
            alt="overlay decoration"
            className="w-full opacity-80"
          />
        </div>

        {/* Image */}
        <div className="hidden md:block relative z-20">
          <img
            src="/assets/image/computer.png"
            alt="computer"
            className="max-w-[500px] w-full"
          />
        </div>
      </div>

      {/* Decorative images should appear over the hero section */}
      <DecorativeImages />
    </section>
  );
}
