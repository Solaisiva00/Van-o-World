import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="flex flex-col font-int gap-10 h-[80vh] items-center justify-center px-4  ">
      <section className="flex flex-col justify-center items-center gap-8">
      <img width="104" height="64" className="animate-bounce" src="https://img.icons8.com/external-line512-zulfa-mahendra/64/external-error-cyber-crimes-line512-zulfa-mahendra.png" alt="external-error-cyber-crimes-line512-zulfa-mahendra"/>
        <h2 className="text-[22px] font-bold">
          Sorry, the page you were looking for was not found.
        </h2>
      </section>
      <Link
        to="/"
        className="text-white w-[394px] rounded-md h-[55px] font-bold text-[18px] text-center py-3 bg-black"
      >
        Return to home
      </Link>
    </div>
  );
};

export default Errorpage;
