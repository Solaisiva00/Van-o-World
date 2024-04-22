import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Vandetail = () => {
  const param = useParams();
  const [detail, setDetail] = useState();
  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then((res) => res.json())
      .then((dataa) => setDetail(dataa.vans));
  }, []);
//   console.log(detail);
  return (
    <div>
      {detail ? (
        <div className="bg-[#FFF7ED] px-6 py-6 max-w-xl mx-auto md:my-2 md:h-[100%] md:shadow-xl">
          <div className="flex items-center gap-2 text-[#201f1d6a]">
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
              to="/vans"
              className="underline underline-offset-2 font-semibold text-[#201f1d97] font-int text-[14px]"
            >
              Back to all vans
            </Link>
          </div>
          <div className="py-2">
            <img
              src={detail.imageUrl}
              alt=""
              className="w-[397px] h-[300px] object-cover mx-auto rounded-md my-7"
            />
            <i className={` text-[#FFEAD0] font-int font-semibold w-[58px] h-[28px] ${detail.type} px-4 py-1 rounded-md `}>{detail.type}</i>
            <h2 className="font-int font-bold text-[32px] text-[#161616] pt-4">{detail.name}</h2>
            <p className=""><span className="font-bold font-int text-[24px] mr-1">${detail.price}</span>/day</p>
            <p className="font-int text-[16px] font-light py-3 mb-4 whitespace-normal ">{detail.description}</p>
            <button className="bg-[#FF8C38] w-[360px] py-2 text-center font-int text-white font-bold rounded-md md:w-[500px]">Rent this van</button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="font-int text-[30px] font-bold text-slate-800 animate-pulse">loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Vandetail;
