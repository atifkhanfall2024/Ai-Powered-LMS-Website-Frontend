import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = ()=>{

  /// take login user data

  const user = useSelector(store=>store?.user)
  const navigate = useNavigate()

  if(!user){
    return null
  }

  console.log(user);

    return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[350px] flex flex-col items-center">
        <img
          src={user?.photoUrl}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover mb-4"
        />
         <FaArrowLeft className="absolute left-[38%] top-[25%] w-[28px] h-[22px] cursor-pointer " onClick={()=> navigate('/feed')} />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {user?.fullName}
        </h2>

        <button className="bg-black text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-700 transition-all" onClick={()=> navigate('/editprofile')}>
          Edit Profile
        </button>

        <div className="w-full mt-2 text-gray-700 space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Bio:</span>
            <span>{user?.description}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{user?.email}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Enrolled Courses:</span>
            <span>{user?.EnrolledCourses}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile