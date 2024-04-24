import { useOutletContext } from "react-router-dom";

const Photo = () => {
  const { detail } = useOutletContext();
  return (
    <div className="px-5 py-6 grid gap-5 grid-cols-3">
      <img src={detail.imageUrl} alt="" className="w-[110px] rounded-md sepia" />
      <img
        src={detail.imageUrl}
        alt=""
        className="w-[110px] rounded-md grayscale"
      />
      <img
        src={detail.imageUrl}
        alt=""
        className="w-[110px] rounded-md saturate-200"
      />
      <img
        src={detail.imageUrl}
        alt=""
        className="w-[110px] rounded-md saturate-150"
      />
      <img src={detail.imageUrl} alt="" className="w-[110px] rounded-md " />
      <img
        src={detail.imageUrl}
        alt=""
        className="w-[110px] rounded-md invert"
      />
    </div>
  );
};

export default Photo;
