import { Link, useLoaderData } from "react-router-dom";
import { getHostVanList } from "../api";

export  function loader() {
  return getHostVanList();
}

const Vanlistdetail = () => {
  const detail = useLoaderData();

  let hostVansEls = detail.map((van) => (
    <Link to={`/host/vanList/${van.id}`} key={van.id} className="">
      <div
        className="w-[100%] h-[104px] box-border bg-white mb-10 flex p-3 items-center gap-8 rounded-lg shadow-lg"
        key={van.id}
      >
        <img
          src={van.imageUrl}
          alt={`Photo of ${van.name}`}
          className="w-[80px] h-[80px] rounded-lg"
        />
        <div className="">
          <h3 className="font-int font-semibold text-[20px]">{van.name}</h3>
          <p className="font-int text-[#4d4d4d]">${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="px-5 mt-[2.8rem]">
      <h2 className="font-int font-bold text-[32px]">Your listed vans</h2>
      <div className="py-20">{hostVansEls}</div>
    </div>
  );
};

export default Vanlistdetail;
