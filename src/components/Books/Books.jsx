import { useEffect, useState } from "react";

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
      </div>
    </div>
  );
};

export default Books;
