import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const ReadBooks = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="h-full">
      <div className="card card-side border-gray-200 border-2 my-6 rounded-2xl">
        <figure className="w-[230px] m-6 p-8 bg-base-200 rounded-2xl">
          <img src={image} alt="Movie" className="w-[130px] h-[180px]" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p className="py-2">By : {author}</p>
          <div className="flex gap-3 items-center">
            <div>
              <p className="">
                <span className="pr-5 font-bold">Tag</span>
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="btn btn-sm rounded-full px-6 border-none bg-green-50 mr-4 text-[#23BE0A]"
                  >
                    #{tag}
                  </button>
                ))}
              </p>
            </div>
            <div className="flex gap-2">
              <div>
                <CiLocationOn className="text-lg font-bold" />
              </div>
              <div>
                <p className=" text-gray-600">
                  Year of Publishing: {yearOfPublishing}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 my-3">
            <div>
              <p className=" text-gray-600">Publisher: {publisher}</p>
            </div>
            <div>
              <p className=" text-gray-600">Number of Page: {totalPages}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <p className="py-2 border-gray-200 border-b text-[#328EFF] bg-blue-100 px-4 rounded-full text-sm">
                Category: {category}
              </p>
            </div>
            <div>
              <p className="py-2 bg-orange-100 text-yellow-500 px-4 rounded-full">
                Rating: {rating}
              </p>
            </div>
            <div>
              <Link to={`/books/${bookId}`}>
                <button className="btn bg-green-500 text-white rounded-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReadBooks.propTypes = {
  book: PropTypes.object.isRequired,
};

export default ReadBooks;
