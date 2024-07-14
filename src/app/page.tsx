import { LampContainer } from "../components/ui/lamp";

import { FlipWords } from "../components/ui/flip-words";
import { IoIosCall } from "react-icons/io";
import { FaSuitcase } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
  const words = ["Designer", "Developer"];

  const portfolioData = [{
    title: "Chat App Landing Page",
    description: "I designed the user interface for Chat App, a chat application aimed at providing seamless and secure communication for users. The goal was to create an intuitive and visually appealing interface that enhances the user experience across various devices.",
    image: "./Portfoliovda1.png"
  }, {
    title: "Landing page for Content creator",
    description: "This is lead capturing landing page for content creator. The goal was to create an intuitive and visually appealing interface that enhances the user experience across various devices.",
    image: "./Portfoliovda2.png"
  },
  {
    title: "It is templated created for a client",
    description: "It is template created for content creator to drag and drop and create their own website. ",
    image: "./Portfoliovda3.png"
  }, {
    title: "VR webinars and Courses Landing page",
    description: "VR webinars and Courses landing page for Content creator",
    image: "./Portfoliovda4.png"
  }]

  return (
    <div className="flex flex-col">
      <LampContainer >
        {""}
      </LampContainer>
      <div className="relative h-[400px] flex flex-col items-center justify-center">
        <div className="absolute px-4 top-0 w-full flex flex-col  gap-4  leading-snug">
          <h1 className="text-5xl p-4 w-full md:w-[500px] mx-auto font-bold text-gray-800 dark:text-gray-300">Hey Vivek here,<br /> I&apos;m a{" "}
            Web<FlipWords words={words} />
          </h1>
          <p className="text-md px-4 font-normal w-full md:w-[500px] mx-auto text-gray-500">Get the Perfect Website Design to Grow Your Business!</p>
          <div className="flex px-4 w-full md:w-[500px] mx-auto my-4">
            <Link href="https://calendly.com/vdamarketingmedia/strategy-call-for-web-design-and-web-development" className="flex gap-2 items-center text-black font-bold bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-400 dark:focus:ring-sky-600 rounded-full text-sm pl-3 pr-4 py-3 text-center me-2 mb-2 transition-all">
              <IoIosCall className="text-lg" />Book a Strategy Call</Link>
            <Link href="/portfolio" className="flex gap-2 items-center text-white border border-sky-500 hover:border-sky-600 rounded-full text-sm px-4 py-3 text-center me-2 mb-2 transition-all">
              <FaSuitcase className="text-md" />See Portfolio</Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full md:w-[60%] p-4 mx-auto">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          {
            portfolioData.map((data, index) => {
              return (
                <><Link href={`/portfolio/${index + 1}`} className="overflow-hidden rounded-lg">
                  <img src={data.image} className="rounded-lg hover:scale-105 transition-all" alt={data.title} /></Link>
                </>
              )
            })
          }
        </div>
      </div>
      <br />
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-1 my-4=10 py-2 w-full  overflow-x-hidden scroll-p-0 scroll-m-0"
        containerClassName="h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Get In Touch
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Improve your website, get more leads, and grow your business with a professional website design.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link href="https://calendly.com/vdamarketingmedia/strategy-call-for-web-design-and-web-development" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Contact Us
          </Link>
        </div>
      </Vortex>
    </div>
  )
}