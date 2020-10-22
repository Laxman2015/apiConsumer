import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import bookListsApi from "./constants/index";
import { useDispatch, useSelector } from "react-redux";
import updateBooklist from "./actions/actions";
import styles from "./App.module.scss";

const App = () => {
  const { bookLists } = useSelector((state) => state);
  console.log("bookLists", bookLists);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const getBookList = (url) => {
    axios.get(url).then((res) => {
      dispatch(updateBooklist(res.data));
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getBookList(bookListsApi);
  }, []);

  if (isLoading && bookLists.length <= 0) {
    return (
      <div className={styles.loader}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles.title}>Lists of All Book</h1>
      <table className={styles.bookLists}>
        <tbody>
          <tr>
            <TableHeader headerKey={bookLists[0]} />
          </tr>
          <TableBody data={bookLists} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
