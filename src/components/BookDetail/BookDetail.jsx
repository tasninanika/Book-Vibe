import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDb";
import { addToStoredWishList } from "../../utility/addToWishlist";

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
  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };
  const handleWishlist = (id) => {
    addToStoredWishList(id);
  };
  return (
    <div>
      <div className="hero min-h-screen my-30">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="bg-base-300 w-[573px] h-[680px] rounded-xl flex items-center justify-center">
            <img
              src={image}
              alt="Book"
              className="w-[425px] h-[564px] rounded-lg object-contain"
            />
          </div>
          <div className="flex-1 mx-auto">
            <div className="flex flex-col">
              <h2 className="text-5xl font-bold">{bookName}</h2>
              <p className="text-[20px] border-gray-200 border-b py-4">
                By : {author}
              </p>
              <p className="py-4 border-gray-200 border-b text-[20px]">
                {category}
              </p>
              <p className="py-4 text-gray-600">
                <span className="font-bold text-black">Review :</span> {review}
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
                <span className="font-bold text-black">Publisher:</span>{" "}
                {publisher}
              </p>
              <p className="py-2 text-gray-600">
                <span className="font-bold text-black">
                  Year of Publishing:
                </span>{" "}
                {yearOfPublishing}
              </p>
              <p className="py-2 text-gray-600">
                <span className="font-bold text-black">Rating:</span> {rating}
              </p>
            </div>
            <div className="flex gap-4 mt-4 flex-grow">
              <button
                className="btn btn-outline"
                onClick={() => handleMarkAsRead(bookId)}
              >
                Read
              </button>
              <button
                className="btn bg-red-400 text-white"
                onClick={() => handleWishlist(bookId)}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
