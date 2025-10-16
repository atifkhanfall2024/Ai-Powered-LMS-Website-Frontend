import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const ViewDetailCourse = ()=>{

    const {courseid} = useParams()
    const [selectedcourse , setselectedcourse] = useState()
    const [addcourse , setAddcourse] = useState([])
    const lectures = useSelector(store=>store?.Lectures)
    const courses = useSelector(store=>store?.course)

  useEffect(() => {
    const course = courses.find((c) => c._id === courseid);
    if (course) {
      setselectedcourse(course);
    }
  }, [courseid, courses]);

  // for lectures also 

  useEffect(() => {
    if (selectedcourse?.Lectures?.length && lectures?.length) {
      const matchedLectures = lectures.filter((l) =>
        selectedcourse.Lectures.includes(l._id)
      );
      console.log("Matched Lectures:", matchedLectures);
      setAddcourse(matchedLectures); // ✅ store in state
    }
  }, [selectedcourse, lectures]);



    return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10 mt-[3%]">
      {/* Header */}
 

      {/* Course Container */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">
        {/* Left: Image Section */}
        <div className="flex-1">
          <img
            src={selectedcourse?.course_Thumbnails}
            alt="AI LMS Course Thumbnail"
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Right: Course Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{selectedcourse?.course_title}</h2>
          <p className="text-gray-500 mb-3">{selectedcourse?.course_subTitle}</p>

          <div className="flex items-center mb-2">
            <span className="text-yellow-400 mr-2">⭐</span>
            <span>0 (1,200 reviews)</span>
          </div>

          <div className="text-2xl font-bold mb-4">
           PKR : {selectedcourse?.course_price} <span className="text-gray-400 line-through text-lg ml-2">5999</span>
          </div>

          <ul className="mb-5 space-y-1 text-sm text-gray-600">
            <li>✅ 10+ hours of video content</li>
            <li>✅ Lifetime access to course materials</li>
          </ul>

          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-green-700">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Learn Section */}
      <div className="max-w-5xl mx-auto mt-10">
        <h3 className="text-xl font-semibold mb-3">What You’ll Learn</h3>
        <ul className="list-disc list-inside text-gray-700">
          {selectedcourse?.descriptions}
        </ul>
      </div>

      {/* Requirements */}
      <div className="max-w-5xl mx-auto mt-8">
        <h3 className="text-xl font-semibold mb-3">Requirements</h3>
        <p className="text-gray-700">
          Basic programming knowledge is helpful but not required.
        </p>
      </div>

      {/* Who This Course Is For */}
      <div className="max-w-5xl mx-auto mt-8">
        <h3 className="text-xl font-semibold mb-3">Who This Course Is For</h3>
        <p className="text-gray-700">
           {selectedcourse?.course_level}, aspiring developers, and professionals looking to upgrade skills.
        </p>
      </div>

      {/* Curriculum */}
       <div className="border rounded-lg p-4 bg-gray-50">
  {addcourse.length > 0 ? (
    addcourse.map((lecture) => (
      <div key={lecture._id} className="p-3 border rounded-md mb-2 bg-white shadow-sm">
        <h3 className="font-semibold text-lg">{lecture.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {lecture.isFree ? "Free Lecture" : "Paid Lecture"}
        </p>

        {/* ✅ Video URL Section */}
        {lecture.VedioUrl ? (
          <a
            href={lecture.VedioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm"
          >
            Watch Lecture Video
          </a>
        ) : (
          <p className="text-gray-400 text-sm italic">No video available</p>
        )}
      </div>
    ))
  ) : (
    <p className="text-gray-500">No lectures available yet.</p>
  )}
</div>

    </div>
  );
}

export default ViewDetailCourse