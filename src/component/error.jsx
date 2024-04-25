import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex justify-center items-center h-[80vh] flex-col">
        <img width="50" height="50" src="https://img.icons8.com/ios/50/error--v1.png" alt="error--v1"/>
      <h1 className="text-3xl font-mono">error</h1>
    </div>
  );
};

export default Error;
