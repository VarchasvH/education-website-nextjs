import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function HeroSection() {
  const words = [
    {
      text: "Master",
    },
    {
      text: "the",
    },
    {
      text: "Art",
    },
    {
      text: "of",
    },
    {
      text: "Programming.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-10'>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20'
        fill='white'
      />
      <div className='p-4 relative z-10 w-full text-center'>
        <div className='flex items-center justify-center'>
          <TypewriterEffectSmooth words={words} />
        </div>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
          Delve into the intricate world of Computer Science and unlock
          boundless possibilities. Whether you&apos;re a beginner or an
          experienced enthusiast, our curated courses empower you to grasp
          fundamental concepts and hone your skills.
        </p>
        <div className='mt-4 '>
          <Link href='/'>
            <Button
              borderRadius='1.75rem'
              className='bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800'
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
