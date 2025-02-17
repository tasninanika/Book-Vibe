import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReadBooks = ({ book }) => {
  const { bookId, image, bookName, author, rating, category, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="h-full">
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
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
