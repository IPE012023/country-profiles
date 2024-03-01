import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn(
        "flex items-center justify-center flex-col",
        headingFont.className,
      )}>
        <div className="mb-12 mt-28 sm:mt-16 flex flex-col items-center justify-center text-center">
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
            <span className='text-[#FF3366]'>Taxing Tobacco:</span>{' '}
            Tax plans for a smoke-free world.
          </h1>
        </div>
        <p className='mt-5 max-w-prose text-700 sm:text-lg'>
            <span> Country-specific tax plans and country profiles, ready-made for engaging with political decision makers</span>.
          </p>
      </div>
      <Image className="opacity-80"
          src= "/ipe-solution-business-optimization-rgb.png"  
          width={2084}
          height={959}
          alt="IPE Business Solutions"
        />
    </div>
  );
};

export default MarketingPage;