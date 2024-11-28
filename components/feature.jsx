import Image from "next/image";
import DecorativeImages from "./decorative-images";

export default function Feature() {
  const FeatureBlock = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
      <Image
        src={icon}
        alt={title}
        className="w-12 h-12"
        width={48}
        height={48}
      />
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="text-gray-600 mt-2">{description}</span>
      </div>
    </div>
  );

  return (
    <section className="relative flex flex-col items-center justify-center space-y-20 p-6">
      {/* Decorative Images */}
      <DecorativeImages />

      {/* First Feature Block */}
      <div className="flex flex-col md:flex-row items-start w-full space-y-6 md:space-y-0 md:space-x-10 lg:max-w-screen-lg">
        {/* Image */}
        <Image
          src="/assets/image/featureimage01.png"
          alt="feature1"
          width={600}
          height={400}
          className="w-full md:w-1/2"
        />
        {/* Title and Feature Blocks */}
        <div className="flex flex-col md:w-1/2 space-y-6">
          <h1 className="font-semibold text-3xl text-left">
            Learning experience has been enhanced with new technologies
          </h1>
          <div className="flex flex-col space-y-6">
            <FeatureBlock
              icon="/assets/icon/secure.png"
              title="Secure & Easy"
              description="Duis aute irure dolor in reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla pariatur. Excepteur sint."
            />
            <FeatureBlock
              icon="/assets/icon/support.png"
              title="Supports All Students"
              description="Duis aute irure dolor in reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla pariatur. Excepteur sint."
            />
          </div>
        </div>
      </div>

      {/* Second Feature Block */}
      <div className="flex flex-col md:flex-row items-start w-full space-y-6 md:space-y-0 md:space-x-10 lg:max-w-screen-lg">
        {/* Title and Feature Blocks */}
        <div className="flex flex-col md:w-1/2 space-y-6">
          <h1 className="font-semibold text-3xl text-left">
            Interactions between the tutor and the learners
          </h1>
          <div className="flex flex-col space-y-6">
            <FeatureBlock
              icon="/assets/icon/collab.png"
              title="Purely Collaborative"
              description="Duis aute irure dolor in reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla pariatur. Excepteur sint."
            />
            <FeatureBlock
              icon="/assets/icon/support.png"
              title="Supports All Students"
              description="Duis aute irure dolor in reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla pariatur. Excepteur sint."
            />
          </div>
        </div>
        {/* Image */}
        <Image
          src="/assets/image/featureimage02.png"
          alt="feature2"
          width={600}
          height={400}
          className="w-full md:w-1/2"
        />
      </div>
    </section>
  );
}
