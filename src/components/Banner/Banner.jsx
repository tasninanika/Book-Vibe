import bannerImg from "../../assets/banner-book.png";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gray-100 rounded-2xl my-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <img src={bannerImg} className="max-w-sm rounded-lg" />
          </div>
          <div className="flex-1">
            <h1 className="text-[56px] font-bold">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn btn-primary">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
