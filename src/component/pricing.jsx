import { useOutletContext } from "react-router-dom";

const Price = () => {
  const { detail } = useOutletContext();
  return (
    <div className="px-5 py-20 font-int text-[40px] flex justify-center items-center flex-col gap-8 ">
      <section>
        <span className="font-bold">${detail.price}</span>
        <span className="text-[#4d4d4d]">/day</span>
      </section>
      <button
        className={`${detail.type} px-3 py-2 text-sm font-int text-white font-bold rounded-lg shadow-lg`}
      >
        Book Now
      </button>
    </div>
  );
};

export default Price;
