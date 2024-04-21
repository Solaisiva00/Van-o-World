import { useState } from "react";
import { useEffect } from "react";

const Vans = () => {
  const [van, setVan] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((dat) => setVan(dat.vans));
  }, []);
  console.log(van);
  const vanElements = van.map((van) => (
    <div key={van.id} className="mx-auto  ">
      <img src={van.imageUrl} className="w-[179px] h-[179px] rounded-md" />
      <div className="flex justify-between item-start p-1">
        <h3 className="font-int text-[18px] font-semibold text-[#161616]">{van.name}</h3>
        <p className="font-int text-[18px] font-semibold text-[#161616]">
          ${van.price}
          <span className="text-sm flex font-light">/day</span>
        </p>
      </div>
      <i className={` text-[#FFEAD0] font-int font-semibold w-[58px] h-[28px] ${van.type} px-2 py-1 rounded-md`} >{van.type}</i>
    </div>
  ));

  return (
    <div className="bg-[#FFF7ED] h-auto py-2 ">
      <h1 className="font-int font-bold text-[32px] px-5 text-[#161616] pt-5">
        Explore our van options
      </h1>
      <section className="flex justify-between items-center px-5 mt-5">
        <div className="flex gap-2">
          <button className="bg-[#FFEAD0] w-[84px] h-[37px] rounded-md font-int text-[#4d4d4d]">
            Simple
          </button>
          <button className="bg-[#FFEAD0] w-[84px] h-[37px] rounded-md font-int text-[#4d4d4d]">
            Luxury
          </button>
          <button className="bg-[#FFEAD0] w-[84px] h-[37px] rounded-md font-int text-[#4d4d4d]">
            Rugged
          </button>
        </div>
        <a href="" className="text-[#4d4d4d] underline underline-offset-2">
          clear filters
        </a>
      </section>
      <div className="grid grid-cols-2 my-8 gap-y-8 md:grid-cols-3 md:mx-auto md:gap-4">{vanElements}</div>
    </div>
  );
};

export default Vans;
