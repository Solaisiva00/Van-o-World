import { useOutletContext } from "react-router-dom";

const Detail = () => {
  const { detail } = useOutletContext();
  console.log(detail);
  return (
    <div className="font-int text-[16px] px-5 py-10 space-y-4">
      <h2>
        <span className="font-bold">Name:  </span>
        {detail.name}
      </h2>
      <h2>
        <span className="font-bold">Catagory:   </span>
        {detail.type}
      </h2>
      <p>
        <span className="font-bold">Description:  </span>
        {detail.description}
      </p>
      <p>
        <span className="font-bold">Visibility:   </span>Public
      </p>
    </div>
  );
};

export default Detail;
