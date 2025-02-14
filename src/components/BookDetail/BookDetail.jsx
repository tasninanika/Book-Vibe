import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { param } = useParams();
  return (
    <div>
      <h2>Book detail</h2>
    </div>
  );
};

export default BookDetail;
