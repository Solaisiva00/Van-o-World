import { Outlet, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getVanList} from "../api";


export function loader({ params }) {
  return getVanList(params.id);
}

const Vanlistdetail = () => {
  const detail = useLoaderData();
  return (
    <div className="px-5">
      <Link
        to="/host/vanlist"
        className="flex gap-2 text-[#4d4d4d] items-center mt-10"
      >
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
        <div className="underline underline-offset-2 font-semibold text-[#201f1d97] font-int text-[16px]">
          Back to all vans
        </div>
      </Link>
      <main className="h-[570px] w-[100%] box-border bg-white mt-10 mb-[4rem] rounded-md shadow-xl">
        <div>
          <section>
            <div className="flex items-center gap-8 p-5">
              <img
                src={detail.imageUrl}
                alt=""
                className="w-[150px] h-[147px] object-cover rounded-sm"
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
                <span className="font-int font-semibold">${detail.price}</span>
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
      </main>
    </div>
  );
};

export default Vanlistdetail;
