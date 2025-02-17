import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReadBooks = ({ book }) => {
  const { bookId, image, bookName, author, rating, category, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="h-full">
        <div className="card card-side border-gray-200 border-2 my-6 rounded-2xl">
          <figure className="w-[230px] m-6 p-8 bg-base-200 rounded-2xl">
            <img src={image} alt="Movie" className="w-[130px] h-[180px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

ReadBooks.propTypes = {
  book: PropTypes.object.isRequired,
};

export default ReadBooks;
