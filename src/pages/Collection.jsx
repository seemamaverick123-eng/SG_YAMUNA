import farm1 from "../assets/room1.jpg";
import farm2 from "../assets/room2.jpg";
import farm3 from "../assets/room3.jpg";

const Collection = () => {
  return (
    <>
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">

      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg"
        alt="About"
        className="w-full h-full object-cover"
      />

      {/* Overlay (optional for dark effect) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text on Image */}
      <div className="absolute top-1/2 left-1/2 md:left-[15%] -translate-x-1/2 md:translate-x-0 -translate-y-1/2 text-center md:text-left text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          About Our Farmhouse Collection
        </h1>

        <p className="max-w-xl text-sm md:text-lg leading-relaxed mb-6">
          Experience luxurious and modern farmhouse interiors with handcrafted
          designs, premium quality, and elegant styling made for fine living.
        </p>

        <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 duration-300">
          Explore More
        </button>
      </div>

    </section>
    </>
  );
};

export default Collection;
