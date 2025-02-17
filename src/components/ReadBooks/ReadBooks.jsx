import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
          <h2 className="text-5xl font-bold">{bookName}</h2>
          <p className="text-[20px] border-gray-200 border-b py-4">
            By : {author}
          </p>
          <p className="pb-4 border-gray-200 border-b">
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
          <p className="pb-2 pt-4 text-gray-600">
            <span className="font-bold text-black">Number of Pages:</span>{" "}
            {totalPages}
          </p>
          <p className="py-2 text-gray-600">
            <span className="font-bold text-black">Publisher:</span> {publisher}
          </p>
          <p className="py-2 text-gray-600">
            <span className="font-bold text-black">Year of Publishing:</span>{" "}
            {yearOfPublishing}
          </p>
          <p className="py-4 border-gray-200 border-b text-[20px]">
            {category}
          </p>
          <p className="py-2 text-gray-600">
            <span className="font-bold text-black">Rating:</span> {rating}
          </p>
          <Link to={`/books/${bookId}`}>
            <button className="btn bg-red-400 text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ReadBooks.propTypes = {
  book: PropTypes.object.isRequired,
};

export default ReadBooks;
