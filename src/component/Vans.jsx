// import { useState } from "react";
// import { useEffect } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVanList } from "../api";

export function loader() {
  return getVanList()|| null;
}
const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const van = useLoaderData();

  const filterArray = typeFilter
    ? van.filter((filter) => filter.type.toLowerCase() === typeFilter)
    : van;
  const vanElements = filterArray.map((van) => (
    <div
      key={van.id}
      className="mx-auto max-w-2xl shadow-2xl py-5 px-3 rounded-lg  "
    >
      <Link
        to={`/vans/${van.id}`}
        state={{ search: searchParams.toString(), type: typeFilter }}
      >
        <img
          src={van.imageUrl}
          className="w-[159px] h-[159px] md:w-[380px] md:h-[380px] rounded-md"
        />
        <div className="flex justify-between item-start p-1">
          <h3 className="font-int text-[16px] font-semibold text-[#161616]">
            {van.name}
          </h3>
          <p className="font-int text-[16px] font-semibold text-[#161616]">
            ${van.price}
            <span className="text-sm flex font-light">/day</span>
          </p>
        </div>
        <i
          className={` text-[#FFEAD0] font-int font-semibold w-[58px] h-[28px] ${van.type} px-2 py-1 rounded-md`}
        >
          {van.type}
        </i>
      </Link>
    </div>
  ));
  function filter(key, value) {
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  }
  return (
    <div className="bg-[#FFF7ED] h-auto py-2 ">
      <h1 className="font-int font-bold text-[32px] md:text-[40px] px-5 md:px-20 text-[#161616] pt-5">
        Explore our van options
      </h1>
      <section className="flex justify-between items-center px-5 mt-5 md:px-20">
        <div className="flex gap-2 md:gap-6">
          <button
            onClick={() => filter("type", "simple")}
            className={`${
              typeFilter === "simple"
                ? "bg-[#E17654] text-white"
                : "bg-[#FFEAD0]"
            } w-[84px] h-[37px]  px-4 py-1  rounded-md font-int text-[#4d4d4d]`}
          >
            Simple
          </button>
          <button
            onClick={() => filter("type", "luxury")}
            className={`${
              typeFilter === "luxury"
                ? "bg-[#161616] text-white"
                : " bg-[#FFEAD0]"
            } w-[84px] h-[37px]  px-4 py-1 rounded-md font-int text-[#4d4d4d]`}
          >
            Luxury
          </button>
          <button
            onClick={() => filter("type", "rugged")}
            className={`${
              typeFilter === "rugged"
                ? "bg-[#115E59] text-white"
                : "bg-[#FFEAD0]"
            } w-[84px] h-[37px]  px-4 py-1 rounded-md font-int text-[#4d4d4d]`}
          >
            Rugged
          </button>
        </div>
        {typeFilter && (
          <button
            onClick={() => filter("type", null)}
            className="text-[#4d4d4d] underline underline-offset-2"
          >
            clear filters
          </button>
        )}
      </section>
      <div className="grid grid-cols-2 my-8 gap-y-2 md:grid-cols-3 md:mx-auto md:gap-2">
        {vanElements}
      </div>
    </div>
  );
};

export default Vans;
