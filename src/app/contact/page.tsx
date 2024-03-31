"use client ";
import { Input } from "@/components/ui/input";

function page() {
  return (
    <div className='flex justify-center items-center'>
      <Input type='email' placeholder='Your Email' />
      <Input type='text' placeholder='Message' />
    </div>
  );
}

export default page;
