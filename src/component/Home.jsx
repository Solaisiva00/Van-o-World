import image from "../asset/bgsvg.svg";
const Home = () => {
  return (
    <>
      <main
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="text-white text-center">
          <h1 className="text-4xl mb-4 font-int font-extrabold text-[36px]">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="text-lg font-int text-wrap text-center">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <button className="font-int bg-[#FF8C38] h-[49px] w-[370px] my-6 md:my-10  font-bold rounded-md ">Find your van</button>
        </div>
      </main>
    </>
  );
};

export default Home;
