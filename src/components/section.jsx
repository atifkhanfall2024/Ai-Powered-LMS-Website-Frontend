
const Section = () => {
  const likes = [
    { id: 1, text: "20+ Online Courses", img: "https://img.freepik.com/free-vector/flat-design-online-courses-illustration_23-2148528493.jpg" },
    { id: 2, text: "LifeTime Access", img: "https://www.shutterstock.com/image-vector/lifetime-warranty-icon-vector-isolated-260nw-2351072273.jpg" },
    { id: 3, text: "Value Of Money", img: "https://i.pinimg.com/564x/9f/0c/d0/9f0cd0b4ee4b314e3fab61cc345bc5da.jpg" },
    { id: 4, text: "LifeTime Support", img: "https://thumbs.dreamstime.com/b/lifetime-support-floral-blue-round-button-isolated-143211361.jpg" },
    { id: 5, text: "Community Support", img: "https://static.thenounproject.com/png/1071933-200.png" },
  ];

  return (
    <section className="flex flex-wrap gap-6 p-6 justify-center bg-white">
      {likes.map((item) => (
        <button
          key={item.id}
          disabled
          className="flex items-center gap-2 bg-gray-300 text-black font-semibold px-4 py-2 rounded-2xl cursor-not-allowed opacity-70"
        >
          <img src={item.img} alt="like icon" className="w-5 h-5" />
          {item.text}
        </button>
      ))}
    </section>
  );
};

export default Section;
