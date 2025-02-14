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
        <h2 className="text-5xl">Books</h2>
        <p>{books.length}</p>
        {books.map((book) => (
          <Book key={books.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
