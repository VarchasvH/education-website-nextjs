"use client";
import Image from "next/image";

import { StickyScroll } from "./ui/sticky-scroll-reveal";
const content = [
  {
    title: "Expert Instructors",
    description:
      "Learn from industry professionals and experienced educators who bring real-world insights and practical knowledge to the classroom.",
    content: (
      <div className='h-full w-full flex items-center justify-center text-white hide no-scrollbar'>
        <Image
          src='https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: "Hands-On Learning",
    description:
      "Dive into interactive labs, projects, and assignments that allow you to apply theoretical concepts to practical scenarios, ensuring a deeper understanding of the material.",
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <Image
          src='https://images.unsplash.com/photo-1417733403748-83bbc7c05140?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='hands on learning'
        />
      </div>
    ),
  },
  {
    title: "Supportive Community",
    description:
      "Join a vibrant community of learners, instructors, and industry experts who are passionate about sharing knowledge, collaborating on projects, and supporting each other's growth.",
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <Image
          src='https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='supportive community'
        />
      </div>
    ),
  },
];
function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
