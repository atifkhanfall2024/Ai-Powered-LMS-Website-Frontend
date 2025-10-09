import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/UserSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { FaArrowLeft } from "react-icons/fa";
const EditProfile = () => {
  const user = useSelector((store) => store?.user);
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [description, setDescription] = useState(user?.description || "");
  const [photoUrl, setPhotoUrl] = useState(null);
  const [Loading , setLoading]=  useState(false)
  const[Error , setError] = useState()

  const dispatch = useDispatch();
  const navigate = useNavigate()

  if (!user) return null;

  const HandleEdit = async (e) => {
    e.preventDefault();
      
    try {
        setLoading(true)
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("description", description);
       formData.append("photoUrl", photoUrl);

      const res = await axios.post(`${BaseUrl}/edit/profile`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data);
      dispatch(addUser(res.data));
      setLoading(false)
     
      navigate('/feed')
       toast.success('Edit Profile Success')
     
    } catch (err) {
           toast.error(err?.response?.data?.message)
        setError(err?.response?.data || err.message)
        
        console.log(err?.response?.data || err.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center pt-24">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[400px] flex flex-col items-center">
        <h1 className="text-2xl bold mb-3">Edit Profile</h1>
    <FaArrowLeft className="absolute left-[38%] top-[25%] w-[28px] h-[22px] cursor-pointer " onClick={()=> navigate('/profile')} />
        {/* Avatar Preview */}
        <img
          src={user?.photoUrl}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover mb-2"
        />

        <label className="text-blue-600 cursor-pointer mb-4">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setPhotoUrl(e.target.files[0])}
          />
          Choose Avatar
        </label>

        {/* Full Name */}
        <div className="w-full mb-3">
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
          />
        </div>

        {/* Description */}
        <div className="w-full mb-3">
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
          ></textarea>
        </div>

        {/* Email */}
        <div className="w-full mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            value={user?.email}
            disabled
            className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>
         <p className="text-red-500">{Error}</p>
        <button
          onClick={HandleEdit}
          className="bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800 transition-all" disabled={Loading}
        >
          {Loading ? <ClipLoader size={30} color="white"/> : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
