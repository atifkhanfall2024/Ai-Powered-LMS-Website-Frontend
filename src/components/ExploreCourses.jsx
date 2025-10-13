import { useNavigate } from "react-router-dom";


const ExploreCoursesSection = () => {

   const navigate = useNavigate()

  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-10 p-10 bg-white">
      {/* LEFT SIDE */}
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-bold text-black">Explore Our Courses</h2>
        <p className="text-gray-600 w-[50%] mx-[22%] text-base leading-relaxed">
          Discover a wide range of courses designed to help you enhance your skills, 
          learn new technologies, and build your career in the tech world. 
          Join thousands of learners today.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300" onClick={()=>navigate('/view/courses')}>
          Explore Courses
        </button>
      </div>

    {/* RIGHT SIDE */}
{/* RIGHT SIDE */}
<div className="flex-1 grid grid-cols-4 gap-6 justify-items-center">
  {[
    { name: "Web Development", color: "#4F46E5", img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
    { name: "App Development", color: "#059669", img: "https://cdn-icons-png.flaticon.com/512/906/906334.png" },
    { name: "Data Science", color: "#D97706", img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { name: "UI/UX Design", color: "#B91C1C", img: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png" },
    { name: "AI & ML", color: "#0EA5E9", img: "https://cdn-icons-png.flaticon.com/512/2910/2910765.png" },
    { name: "Cyber Security", color: "#F97316", img: "https://cdn-icons-png.flaticon.com/512/906/906334.png" },
    { name: "Cloud Computing", color: "#9333EA", img: "https://cdn-icons-png.flaticon.com/512/414/414927.png" },
    { name: "Digital Marketing", color: "#16A34A", img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  ].map((course, index) => (
    <div key={index} className="flex flex-col items-center gap-2">
      <button
        disabled
        style={{ backgroundColor: course.color }}
        className="w-16 h-16 rounded-full flex items-center justify-center cursor-not-allowed opacity-90"
      >
        <img src={course.img} alt={course.name} className="w-8 h-8" />
      </button>
      <span className="text-black font-medium text-center">{course.name}</span>
    </div>
  ))}
</div>


    </section>
  );
};

export default ExploreCoursesSection;
