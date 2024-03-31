"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export const upcomingWebinars = [
  {
    title: "Exploring Docker Containers",
    description:
      "Join us for an in-depth exploration of Docker containers and their role in modern software development.",
    link: "https://example.com/webinar/docker",
  },
  {
    title: "Kubernetes: Managing Containerized Applications",
    description:
      "Learn how to effectively manage containerized applications with Kubernetes in this informative webinar.",
    link: "https://example.com/webinar/kubernetes",
  },
  {
    title: "Introduction to DevOps Practices",
    description:
      "Discover the fundamentals of DevOps practices and their impact on software development and deployment.",
    link: "https://example.com/webinar/devops",
  },
  {
    title: "Machine Learning Workshop: From Theory to Practice",
    description:
      "Join our machine learning experts for a hands-on workshop covering theory, algorithms, and real-world applications.",
    link: "https://example.com/webinar/machine-learning",
  },
  {
    title: "Cybersecurity Best Practices for Developers",
    description:
      "Learn essential cybersecurity practices for developers to protect applications and data from online threats.",
    link: "https://example.com/webinar/cybersecurity",
  },
];

function UpcomingVideos() {
  return (
    <div className='p-12 bg-slate-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
            FEATURED WEBINARS
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
            Enhance Your Musical Journey
          </p>
        </div>
        <div className='mt-10'>
          <HoverEffect items={upcomingWebinars} />
        </div>
        <div className='mt-10 text-center'>
          <Link href={"/"}>
            <button className='p-[3px] relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-600 rounded-lg' />
              <div className='px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
                View All webinars
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingVideos;
