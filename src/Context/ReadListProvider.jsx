import { createContext, useEffect, useState } from "react";
import { getStoredReadList } from "../utility/addToDb";
import { useLoaderData } from "react-router-dom";

export const ReadListContext = createContext();

const ReadListProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, [allBooks]);

  return (
    <ReadListContext.Provider value={{ readList, setReadList }}>
      {children}
    </ReadListContext.Provider>
  );
};

export default ReadListProvider;
