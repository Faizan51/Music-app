import Link from "next/link"
import { text } from "stream/consumers"
import { Spotlight } from "./spotlight"
import { Button } from "../ui/moving-border";

function HeroSection() {
  return (
    <div className="text-white h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative
     overflow-hidden mx-auto py-10 md:py-0   ">
        
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white "
      />

     <div className="p-4 relative z-10 w-full text-center">
        <h1
        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from bg-neutral-50 to-neutral-600
        ">Master the art of Music
    </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >Dive into our comprehesnsive music courses and trnasform your musical journey  today.
            Wheater you are a Beginner or looking to refine your skills , join us to unlock your ture potential.
        </p>
        <div className="mt-4">
            <Link href={"/courses"}>
            <Button borderRadius="1.75rem" 
            className="bg-black dark:bg-black text-white dark:text-white border-neutral-200 dark:border-slate-800">
              Explore Courses
            </Button>

            </Link>
        </div>
     </div>

    </div>
  )
}

export default HeroSection
