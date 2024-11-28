import Image from "next/image";
import DecorativeImages from "./decorative-images";

function InstructorCard({ name, role, imageSrc, altText }) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <img
        src={imageSrc}
        alt={altText}
        className="rounded-lg width={600}
        height={400} "
      />
      <div className="text-center">
        <h2 className="font-semibold">{name}</h2>
        <h2 className="text-xl text-blue-400 font-normal">{role}</h2>
      </div>
    </div>
  );
}

export default function Instructor() {
  const instructors = [
    {
      name: "Jane Copper",
      role: "UX/UI Designer",
      imageSrc: "/assets/image/jane.png",
      altText: "UX/UI Designer",
    },
    {
      name: "Esther Howard",
      role: "Program Manager",
      imageSrc: "/assets/image/howard.png",
      altText: "Program Manager",
    },
    {
      name: "Brooklyn Simmons",
      role: "Software Engineer",
      imageSrc: "/assets/image/simmons.png",
      altText: "Software Engineer",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-2xl font-semibold pt-10">
        Our Professional Instructors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {instructors.map((instructor, index) => (
          <InstructorCard
            key={index}
            name={instructor.name}
            role={instructor.role}
            imageSrc={instructor.imageSrc}
            altText={instructor.altText}
          />
        ))}
      </div>
      <DecorativeImages />
    </section>
  );
}
