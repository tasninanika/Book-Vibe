import bannerImg from "../../assets/banner-book.png";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gray-50 rounded-2xl my-12">
        <div className="hero-content flex-col lg:flex-row-reverse gap-40">
          <div className="">
            <img src={bannerImg} className="max-w-sm rounded-lg" />
          </div>
          <div className="w-[526px] h-[168px]">
            <h2 className="text-[56px] font-bold">
              Books to freshen up your bookshelf
            </h2>
            <button className="btn text-lg font-bold py-6 px-6 rounded-md bg-green-400 mt-10 text-white">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
