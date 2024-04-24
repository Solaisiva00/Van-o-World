import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Vanlistdetail = () => {
  const param = useParams();
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${param.id}`)
      .then((res) => res.json())
      .then((dataa) => setDetail(dataa.vans[0]));
  }, []);
  console.log(detail);
  return (
    <div className="px-5">
      <div className="flex gap-2 text-[#4d4d4d] items-center mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path
            fill="currentColor"
            d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z"
          />
        </svg>{" "}
        <Link
          to="/host/vanlist"
          className="underline underline-offset-2 font-semibold text-[#201f1d97] font-int text-[16px]"
        >
          Back to all vans
        </Link>
      </div>
      <main className="h-[570px] w-[100%] box-border bg-white mt-14 mb-[10rem] rounded-md shadow-xl">
        {detail != null ? (
          <div>
            <section>
              <div className="flex items-center gap-8 p-5">
                <img
                  src={detail.imageUrl}
                  alt=""
                  className="w-[140px] h-[147px] rounded-sm"
                />
                <div>
                  <i
                    className={`${detail.type} text-white py-2 px-5 rounded-md text-sm font-semibold text-center`}
                  >
                    {detail.type}
                  </i>
                  <h2 className="font-int font-bold text-[20px] mt-2">
                    {detail.name}
                  </h2>
                  <span className="font-int font-semibold">
                    ${detail.price}
                  </span>
                  <span className="font-int text-[#4d4d4d]">/day</span>
                </div>
              </div>
              <div className="px-5">
                <ul className="flex gap-8 font-int  text-[#4d4d4d]">
                  <NavLink
                    to="vanlist/:id/detail"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-[#161616] underline underline-offset-1 "
                        : ""
                    }
                  >
                    <li>Details</li>
                  </NavLink>
                  <NavLink
                    to="vanlist/:id/pricing"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-[#161616] underline underline-offset-1 "
                        : ""
                    }
                  >
                    <li>Pricing</li>
                  </NavLink>
                  <NavLink
                    to="vanlist/:id/photo"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-[#161616] underline underline-offset-1 "
                        : ""
                    }
                  >
                    <li>photos</li>
                  </NavLink>
                </ul>
              </div>
            </section>
            <Outlet context={{ detail }} />
          </div>
        ) : (
          <div>
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
          </div>
        )}
      </main>
    </div>
  );
};

export default Vanlistdetail;
