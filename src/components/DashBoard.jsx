import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const DashBoard = () => {

    const user = useSelector(store=>store?.user)
    const navigate = useNavigate()
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-10">
      
      {/* 🧍 Profile Header (Rectangle Form) */}
      <div className="w-[90%] md:w-[80%] lg:w-[70%] bg-white rounded-xl shadow-md p-8 flex items-center gap-10">
        {/* Left: Profile Image */}
        <div className="flex-shrink-0">
           {/* //<FaArrowLeft className="absolute left-[38%] top-[25%] w-[28px] h-[22px] cursor-pointer " onClick={()=> navigate('/profile')} /> */}
          <img
            src={user?.photoUrl}
            alt="Profile"
            className="w-32 h-32 rounded-xl border-4 border-gray-300 object-cover"
          />
        </div>

        {/* Right: Info Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800">{' Welcome , ' + user?.fullName}</h2>
          <p className="text-lg text-gray-700 mt-2">
        Total Amount: <span className="font-semibold text-black">0</span>
          </p>
          <p className="text-gray-600 mt-3 max-w-xl">
           {user?.description}
          </p>
     <button className="bg-black text-white font-semibold px-4 py-2 mx-[20px] translate-x-[10%] translate-y-[40%]  rounded-lg shadow-md transform hover:translate-x-1 hover:scale-105 hover:bg-gray-900 transition-all duration-300" onClick={()=>navigate('/create/courses')}>
  Create Courses
</button>



        </div>
      </div>

      {/* 📊 Dashboard Content Area (for future graphs, charts, etc.) */}
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Placeholder boxes for graphs */}
        <div className="bg-white p-6 rounded-xl shadow-md h-[300px] flex justify-center items-center text-gray-400">
          Graph 1 (Coming Soon)
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md h-[300px] flex justify-center items-center text-gray-400">
          Graph 2 (Coming Soon)
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
