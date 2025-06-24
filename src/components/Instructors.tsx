import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const musicInstructors = [
  {
    id: 1,
    name: "Alice Harmon",
    designation: "Piano Instructor",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "James Lee",
    designation: "Guitar Instructor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    designation: "Vocal Coach",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Daniel Kim",
    designation: "Drums Instructor",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 5,
    name: "Sophia Chen",
    designation: "Violin Instructor",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 6,
    name: "Robert Singh",
    designation: "Music Theory Specialist",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Instructors = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={musicInstructors} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
