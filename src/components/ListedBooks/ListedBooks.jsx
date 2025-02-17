import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import { getStoredWishList } from "../../utility/addToWishlist";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();
  const allWishListBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, [allBooks]);
  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const wishBookList = allWishListBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    setWishList(wishBookList);
  }, [allWishListBooks]);

  const handleSort = (sortType) => {
    setSort(sortType);

    //
    if (sortType === "No of pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    }
    if (sortType === "Ratings") {
      const sortedReadList = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedReadList);
    }
  };

  return (
    <div className="mb-24">
      <h2 className="text-5xl text-center mt-10 mb-14 font-bold bg-gray-100 py-6">
        Books
      </h2>
      <div className="flex justify-center mb-14">
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-green-500 text-white"
          >
            {sort ? `Sort by: ${sort}` : "Sort By ⬇"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => handleSort("Ratings")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSort("No of pages")}>
              <a>Number of pages</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readList.map((book) => (
            <ReadBooks key={book.bookId} book={book}></ReadBooks>
          ))}
        </TabPanel>
        <TabPanel>
          {wishList.map((book) => (
            <WishlistBooks key={book.bookId} book={book}></WishlistBooks>
          ))}{" "}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
