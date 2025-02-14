const Book = ({ book }) => {
  const { image, bookName, author, rating, category, tags } = book;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{bookName}</h2>
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
