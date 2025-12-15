const FarmCard = ({ farm }) => {
  return (
    <div className="bg-pink-800 rounded-2xl overflow-hidden 
                    shadow-lg hover:shadow-2xl  
                    transition-all duration-300 
                    hover:-translate-y-1 text-white">

      <img
        src={farm.image} 
        alt={farm.name}
        className="w-full h-52 sm:h-56 object-cover text-white"
      />

      <div className="p-5">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          {farm.name}
        </h3>
        <p className="text-white text-sm leading-relaxed">
          {farm.desc}
        </p>

        <span className="inline-block mt-4 text-xs tracking-wider 
                         uppercase text-green-400">
          {farm.category}
        </span>
      </div>
    </div>
  );
};

export default FarmCard;
