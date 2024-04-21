const Vans = () => {
  return (
    <div className="bg-[#FFF7ED] h-[80vh]">
      <h1 className="font-int font-bold text-[32px] px-5 text-[#161616] pt-5">
        Explore our van options
      </h1>
      <section className="flex justify-between items-center px-5 mt-5">
        <div className="flex gap-5">
          <button className="bg-[#FFEAD0] w-[104px] h-[37px] rounded-md font-int text-[#4d4d4d]">
            Simple
          </button>
          <button className="bg-[#FFEAD0] w-[104px] h-[37px] rounded-md font-int text-[#4d4d4d]">
            Luxury
          </button>
          <button className="bg-[#FFEAD0] w-[104px] h-[37px] rounded-md font-int text-[#4d4d4d]">
            Rugged
          </button>
        </div>
        <a href="" className="text-[#4d4d4d] underline underline-offset-2">
          clear filters
        </a>
      </section>
    </div>
  );
};

export default Vans;
