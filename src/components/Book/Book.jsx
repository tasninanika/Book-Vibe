import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, rating, category, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div>
        <div className="card bg-base-100 w-96 border-gray-300 border rounded-xl">
          <figure className="px-10 py-5 rounded-xl bg-[#F3F3F3] mt-6 mx-6">
            <img src={image} alt="Book" className="rounded-xl h-[166px]" />
          </figure>
          <div className="flex gap-4 mt-4 ml-6">
            {tags.map((tag) => (
              <button className="btn btn-sm rounded-full px-6 border-none bg-green-50 text-[#23BE0A]">
                {tag}
              </button>
            ))}
          </div>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{bookName}</h2>
            <p className="font-medium border-dashed border-b border-gray-300 pb-5">
              By : {author}
            </p>
            <div className="flex font-medium pt-3">
              <p>{category}</p>
              <div className="flex gap-2 items-center">
                <p>{rating}</p>
                <div className="rating rating-xs">
                  <div className="mask mask-star" aria-label="1 star"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
