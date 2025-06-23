"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Jamming",
    description:
      "Jam with your bandmates in real time—no matter where they are. Create, improvise, and fine-tune your music together with our low-latency collaborative tools designed for musicians.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--indigo-500))] text-white">
        Collaborative Jamming
      </div>
    ),
  },
  {
    title: "Real-time Mixing",
    description:
      "Make changes to your mix and hear the results instantly. Our platform lets you tweak effects, balance tracks, and adjust EQ in real time—no exporting or waiting required.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/mixer.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="real-time mixing interface"
        />
      </div>
    ),
  },
  {
    title: "Track Versioning",
    description:
      "Easily manage different versions of your songs. Save takes, compare edits, and revert to earlier versions without losing creative progress. Perfect for producers and perfectionists alike.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-500),var(--rose-500))] text-white">
        Track Versioning
      </div>
    ),
  },
  {
    title: "Inspiration on Demand",
    description:
      "Stuck in a creative rut? Our AI-powered tools offer chord progressions, lyric ideas, and melody suggestions to spark your next hit. Stay inspired and keep the music flowing.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--sky-500),var(--emerald-500))] text-white">
        Inspiration on Demand
      </div>
    ),
  },
];


const WhyChooseUs = () => {
  return (
    <div className="w-full py-4">
        <StickyScroll
          content={content}
          />
      
    </div>
  );
}

export default WhyChooseUs;
