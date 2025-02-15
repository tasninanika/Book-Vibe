import bannerImg from "../../assets/banner-book.png";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gray-50 h-[554px] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold">
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
