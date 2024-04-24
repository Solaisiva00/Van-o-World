import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Vanlistdetail = () => {
  const [detail, setDeatail] = useState([]);
  let hostVansEls;
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((datalist) => setDeatail(datalist.vans));
  }, []);
  console.log(detail);
  if (detail.length > 0) {
    hostVansEls = detail.map((van) => (
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
  }

  return (
    <div className="px-5 mt-[2.8rem]">
      <h2 className="font-int font-bold text-[32px]">Your listed vans</h2>
      <div className="py-20">
        {detail.length > 0 ? (
          <section> {hostVansEls}</section>
        ) : (
          <section className="flex justify-center items-center h-screen">
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <circle cx="4" cy="12" r="3" fill="currentColor">
                  <animate
                    id="svgSpinners3DotsBounce0"
                    attributeName="cy"
                    begin="0;svgSpinners3DotsBounce1.end+0.25s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                    values="12;6;12"
                  />
                </circle>
                <circle cx="12" cy="12" r="3" fill="currentColor">
                  <animate
                    attributeName="cy"
                    begin="svgSpinners3DotsBounce0.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                    values="12;6;12"
                  />
                </circle>
                <circle cx="20" cy="12" r="3" fill="currentColor">
                  <animate
                    id="svgSpinners3DotsBounce1"
                    attributeName="cy"
                    begin="svgSpinners3DotsBounce0.begin+0.2s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                    values="12;6;12"
                  />
                </circle>
              </svg>
            </h1>
          </section>
        )}
      </div>
    </div>
  );
};

export default Vanlistdetail;
