import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-5xl text-center mt-24 mb-14 font-bold">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-18">
          {books.map((book) => (
            <Book key={books.bookId} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
