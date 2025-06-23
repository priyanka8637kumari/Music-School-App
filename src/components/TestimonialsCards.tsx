"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { div } from "motion/react-client";
import { cn } from "@/utils/cn";

const testimonials = [
    {
        quote:
            "This platform completely transformed the way my band records remotely. We laid down an entire EP across three continents without a single hitch. It's like being in the same studio—without the jet lag.",
        name: "Alex Rivera",
        title: "Guitarist, The Echo Frames",
    },
    {
        quote:
            "As a solo artist, I’ve always struggled with inspiration. The AI-powered songwriting assistant helped me break through writer’s block and finish three tracks in one weekend. Mind blown!",
        name: "Luna Grey",
        title: "Indie Singer-Songwriter",
    },
    {
        quote:
            "I’ve tried every DAW collaboration tool out there, and nothing compares. Real-time mixing with my producer felt seamless. We finished mastering our latest track in one session.",
        name: "Marcus Lee",
        title: "Music Producer, LoFi Labs",
    },
    {
        quote:
            "Whether it's laying down vocals or jamming live with my crew, this app makes it feel like we’re together—even when we’re miles apart. It’s the future of remote music creation.",
        name: "Samantha Rhodes",
        title: "Vocalist, Blue Horizon",
    },
    {
        quote:
            "I’m not even a musician—I’m just a fan. But using this app to remix my favorite songs and share them with friends has been ridiculously fun. Highly recommend for music lovers!",
        name: "Jordan Kim",
        title: "Music Enthusiast & Hobby DJ",
    },
];


const TestimonialsCards = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black relative flex flex-col items-center justify-center overflow-hidden">
         <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
            <h2 className="text-white text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>

    );
}

export default TestimonialsCards;
