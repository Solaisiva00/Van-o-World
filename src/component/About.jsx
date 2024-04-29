import about from "../asset/about.svg"

const About = () => {
  return (
    <div className=" md:max-w-2xl mx-auto md:shadow-xl md:py-5">
        <img src={about} alt="" className="h-[200px] md:h-[270px] bg-fixed w-[42rem] object-cover "/>
        <section className="px-8">
            <h1 className="font-int font-bold text-[26px]  text-[#161616] mt-2">Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className="mt-3 text-[#161616] font-int font-normal text-clip indent-8 ">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)
</p>
<p className="mt-3 text-clip indent-8 md:indent-0">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
<div className="bg-[#FFCC8D] h-[198px] md:h-[220px] px-5 py-6  rounded-md my-4  md:px-10 md:">
    <h1 className="font-int font-bold text-[22px]  md:text-[30px]">Your destination is waiting.
Your van is ready.</h1>
<button className="bg-[#161616] text-white px-9 py-4 font-int font-bold  rounded-lg mt-5 md:py-4 md:mb-9 shadow-md ">Explore our vans</button>
</div>
        </section>
    </div>
  );
};

export default About;
