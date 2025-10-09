import Navbar from "./navbar"
import Home1 from "../assets/home1.jpg"
import ai from "../assets/ai.png"
import search from "../assets/SearchAi - Copy.png"
import { SiCoursera } from "react-icons/si";
import Section from "./section";
import ExploreCoursesSection from "./ExploreCourses";
const Feed = ()=>{
return (
  <>
    <Navbar />
    <div className="relative w-full text-center overflow-hidden">
      {/* Background Image */}
      <img
        src={Home1}
        alt="Profile"
        className="w-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute top-20 md:top-[10%] left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Grow Your Career to New Heights
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mt-4 drop-shadow-md lg:absolute">
          Empower your learning. Shape your future with confidence.
        </p>

        {/* Buttons */}
        <div className="mt-16 flex justify-center gap-4">
          <button className="bg-black  flex gap-2 border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition duration-300">
            View All Courses <SiCoursera className="h-[20px] w-[20px] rounded-full hidden lg:block"  />

          </button>
          <button className="bg-white flex gap-2 align-center text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-300">
            Search with AI <img src={ai} className="h-[20px] w-[20px] rounded-full hidden lg:block"/>
            <img src={search} className="h-[20px] w-[20px] rounded-full  lg:hidden"  />
          </button>
        </div>
        
      </div>
      <Section/>
      <ExploreCoursesSection/>
    </div>
  </>
);




}

export default Feed