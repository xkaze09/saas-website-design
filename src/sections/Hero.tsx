import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png"; // Updated path to match the correct assets directory
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]">
      <div className="container">
        <div className="md:flex items-center">
        <div className="md:w-[478px]">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here!</div>
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Pathway to productivity</h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>
                Learn more
              </span>
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <Image src={cogImage} alt="Cog Image" className="md:absolutte md:h-full md:w-auto md:max-w-none"/>
        </div>
        </div>
      </div>
    </section>
  )
};
