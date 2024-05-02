import { Await, Link ,defer,useLoaderData} from "react-router-dom";
import { getHostVanList } from "../api";
import star from "../asset/star.png";
import { Suspense } from "react";
export function loader() {
  return defer({vanapi: getHostVanList()});
}
const Dash = () => {
  const promise = useLoaderData();
  console.log(promise);
  function render(detail) {
    let hostVansEls = detail.map((van) => (
      <Link to={`/host/vanList/${van.id}`} key={van.id} className="">
        <div
          className="w-[100%] h-[104px] box-border bg-white mb-5 flex p-3 items-center gap-8 rounded-lg shadow-lg"
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
    return <div className="py-10">{hostVansEls}</div>;
  }
  return (
    <div className="h-screen">
      <section className="bg-[#FFEAD0] w-[100vw] h-[189px] mt-5 font-int px-5 py-3">
        <h2 className="font-bold text-[36px] ">Welcome!</h2>
        <div className="text-[#4d4d4d] flex justify-between items-center py-2 ">
          <p>
            income last{" "}
            <span className="underline underline-offset-1">30 day</span>
          </p>
          <Link to="/host/income">Details</Link>
        </div>
        <h2 className="font-bold  text-[48px]">$5,600</h2>
      </section>
      <section className="bg-[#FFDDB2] h-[103px] w-[100wh] px-5 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <h2 className="text-[24px] font-bold">Review score</h2>
          <img src={star} alt="" className="w-5" />
          <span className="font-bold">5.0</span>
          <span>/5</span>
        </div>
        <Link to="/host/review">Details</Link>
      </section>
      <section>
        <div className="flex justify-between items-center mt-5 px-5">
          <h1 className="text-[24px] font-bold">Your listed vans</h1>
          <Link to="/host/vanlist">View all</Link>
        </div>
      </section>
      <Suspense fallback={<div></div>}>
          <Await resolve={promise.vanapi}>
            {render}
          </Await>
      </Suspense>
    </div>
  );
};

export default Dash;
