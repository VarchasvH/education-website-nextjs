"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The interactive labs and real-world projects helped me apply theoretical knowledge to practical scenarios, enhancing my problem-solving skills.",
    name: "Emily Johnson",
    title: "Data Scientist",
  },
  {
    quote:
      "The flexibility of self-paced learning allowed me to progress at my own speed, accommodating my busy schedule without compromising on quality.",
    name: "David Lee",
    title: "IT Consultant",
  },
  {
    quote:
      "The diverse range of courses provided me with a well-rounded understanding of computer science, enabling me to explore various interests within the field.",
    name: "Jessica Chen",
    title: "Software Developer",
  },
  {
    quote:
      "The supportive community fostered collaboration and networking opportunities, enriching my learning experience and expanding my professional network.",
    name: "Michael Wang",
    title: "Systems Analyst",
  },
  {
    quote:
      "The practical skills and certifications I gained from the courses empowered me to advance my career and pursue new opportunities in the tech industry.",
    name: "Sarah Patel",
    title: "DevOps Engineer",
  },
];

function Testimonials() {
  return (
    <div className=' h-[40rem] w-full dark:bg-slate-950 dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center mb-8 z-10'>
        Embrace our Echo: Testimonials of Triumph
      </h2>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl'>
          <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
