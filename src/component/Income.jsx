import stat from "../asset/stat.png"
const Income = () => {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
]

const card=transactionsData.map(data=>(
  <div className=" box-border bg-white h-[90px]  flex justify-between items-center px-5 rounded-lg shadow-lg" key={data.id}>
    <h1 className="text-[28px] font-bold">$ {data.amount}</h1>
    <p className="text-[#4d4d4d]">{data.date}</p>
  </div>
))
  return (
    <div className="h-auto px-5 py-10">
      <h1 className="font-bold text-[36px] my-5">Income</h1>
      <span className="text-[#4d4d4d]">Last<span className="underline underline-offset-2 ml-2">30 days</span></span>
      <p className="text-[48px] font-bold my-5">$5,600</p>
      <img src={stat} alt="" />
      <section className="flex flex-col gap-3  mt-10">{card}</section>
    </div>
  );
};

export default Income;
