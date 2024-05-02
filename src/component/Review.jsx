import review from "../asset/review.png";
import star from "../asset/star.png";
const Review = () => {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
    {
      rating: 3,
      name: "Spooky",
      date: "April 30, 2022",
      text: "I had good and geniun service from vanlife i really Enjoy it and as get some additional benefit with some special offer.",
      id: "3",
    },
  ];
  const reviewlist = reviewsData.map((data) => (
    <div key={data.id} className="px-5 font-int">
      <div className="flex gap-1 mb-5">
        {[...Array(data.rating)].map((_, i) => (
          <div key={i}>
            <img src={star} className="w-4" />
          </div>
        ))}
      </div>
        <span className="font-semibold">{data.name}</span>
      <span className="text-[#4d4d4d] ml-3">{data.date}</span>
      <p className="text-sm mt-3">{data.text}</p>
      <hr />
    </div>
  ));
  return (
    <div className="h-auto pt-10 pb-20">
      <div className="flex items-center mt-5">
        <h1 className="text-[32px] font-bold  px-5">Your reviews</h1>
        <span className="text-[#4d4d4d] ">
          Last<span className="underline underline-offset-1 ml-2">30 days</span>
        </span>
      </div>
      <img src={review} alt="" className="my-10 px-5" />
      <section className="flex flex-col gap-10">{reviewlist}</section>
    </div>
  );
};

export default Review;
