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
          <div className="flex-1 mx-auto">
            <h2 className="text-5xl font-bold">{bookName}</h2>
            <p className="text-[20px] border-gray-200 border-b py-4">
              By : {author}
            </p>
            <p className="py-4 border-gray-200 border-b">{category}</p>
            <p className="py-4">{review}</p>
            <div className="flex gap-4 mt-4 ml-6">
              <p>
                <span className="pr-3">Tag</span>
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="btn btn-sm rounded-full px-6 border-none bg-green-50 text-[#23BE0A]"
                  >
                    {tag}
                  </button>
                ))}
              </p>
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BookDetail;
