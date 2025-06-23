"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const webinars = [
  {
    title: "Mastering the Mix: Live Production Tips for Modern Musicians",
    description:
      "Join top audio engineers as they walk through real-time mixing techniques using our collaborative platform. Perfect for producers, DJs, and home studio artists.",
    slug: "mastering-the-mix",
    isFeatured: true,
  },
  {
    title: "AI in Music: From Inspiration to Composition",
    description:
      "Discover how AI is revolutionizing the songwriting process. This session explores tools that spark creativity and streamline your workflow.",
    slug: "ai-in-music",
    isFeatured: true,
  },
  {
    title: "Remote Collaboration for Bands",
    description:
      "Learn how bands are overcoming distance to rehearse, record, and perform together online. Featuring real case studies and gear recommendations.",
    slug: "remote-collaboration-for-bands",
    isFeatured: false,
  },
  {
    title: "Building a Home Studio on a Budget",
    description:
      "Setting up your first home studio doesn’t have to break the bank. We’ll cover affordable gear, soundproofing basics, and software recommendations.",
    slug: "home-studio-on-a-budget",
    isFeatured: true,
  },
  {
    title: "Licensing 101: Music Rights for Independent Artists",
    description:
      "Understand the essentials of music licensing, royalties, and copyright so you can protect your work and monetize your music the right way.",
    slug: "licensing-101",
    isFeatured: false,
  },
];


const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={webinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link:'/'

            }
          ))}/>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="px-4 py-2 rounded border border-teal-600 text-neutral-700 bg-white hover:bg-gray-200 transition duration-200"
          >
            View all Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
