import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    review,
  } = book;
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="bg-base-300 w-[573px] rounded-xl justify-center">
            <img
              src={image}
              className="max-w-sm rounded-lg mx-auto w-[425px] h-[564px] p-10"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-5xl font-bold">{bookName}</h2>
            <p className="text-[20px] border-gray-200 border-b">
              By : {author}
            </p>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BookDetail;
