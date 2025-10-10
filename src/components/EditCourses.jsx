import { useParams } from "react-router-dom"
const EditCourses = () => {

    const {id} = useParams()

  return (
    <div className="w-full min-h-screen flex justify-center items-start bg-gray-100 pt-20">
      <div className="bg-white w-[80%] md:w-[70%] lg:w-[60%] rounded-2xl shadow-lg p-8 relative">
        {/* Top buttons */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Add detail information regarding course
          </h2>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800">
            Go to lectures page
          </button>
        </div>

        <h3 className="text-lg font-semibold mb-3">Basic Course Information</h3>

        <div className="flex flex-wrap gap-4 mb-5">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" value={true}>
            Click to Publish
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" value={false}>
            Remove Course
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Course Title"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Subtitle"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <textarea
            rows="3"
            placeholder="Course description"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          ></textarea>

          {/* Category / Level / Price */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Select Category</option>
            </select>
            <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Select Level</option>
            </select>
            <input
              type="number"
              placeholder="Price (PKR)"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Thumbnail upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-md flex flex-col justify-center items-center py-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-400 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7m-7-4h.01M12 20h.01M12 4v16"
              />
            </svg>
            <p className="text-gray-500">Course Thumbnail</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-5">
            <button className="bg-gray-300 text-black px-5 py-2 rounded-md hover:bg-gray-400">
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourses;
