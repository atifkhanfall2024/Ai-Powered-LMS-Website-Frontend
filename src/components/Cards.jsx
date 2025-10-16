import { useNavigate } from "react-router-dom";

const Cards = ({ data }) => {

      const rating = data.rating || 0;
      const navigate = useNavigate()

  // Convert rating into full, half, and empty stars
  const stars = Array.from({ length: 5 }, (_, i) => {
    const starValue = i + 1;
    if (starValue <= rating) return "★"; // full star
    if (starValue - rating < 1 && rating % 1 !== 0) return "☆"; // half (or you can use custom icon)
    return "☆"; // empty star
  }).join("");
  return (
   <div className="w-64 h-64 bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-between hover:scale-105 transition">
  <img
   onClick={()=> navigate(`/viewDetail/${data?._id}`)}
    alt="profile"
    src={data?.course_Thumbnails || "https://via.placeholder.com/150"}
    className="w-full h-32 object-cover rounded-lg"
  />
  <div className="text-center mt-2">
    <h3 className="text-lg font-semibold">{data?.course_title || "title"}</h3>
    <p className="text-sm text-gray-500">{data?.
course_Category
 || "Intermediate"}</p>
    <p className="text-base font-medium text-gray-800">PKR: {data?.course_price || "pr"}</p>
  </div>
  <div className="text-yellow-500 text-center text-lg">
        {stars} <span className="text-gray-500 text-sm ml-1">({rating.toFixed(1)})</span>
      </div>
</div>

  );
};

export default Cards