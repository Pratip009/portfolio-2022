import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I’m organized and detail- oriented, work well under
pressure and deadlines, enjoy working with a verity
of people and have great attitude. I’m looking for a
creative, challenging, growth-oriented position
and would like the opportunity to learn more
about corporation.

        </p>

        <br />

      </div>
    </div>
  );
};

export default About;
