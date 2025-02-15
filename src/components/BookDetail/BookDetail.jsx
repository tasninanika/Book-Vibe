import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === bookId);
  return (
    <div>
      <h2>Book detail</h2>
    </div>
  );
};

export default BookDetail;
