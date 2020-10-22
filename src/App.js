import React, { Fragment, useEffect } from "react";
import axios from "axios";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import bookListsApi from "./constants/index";
import { useDispatch, useSelector } from "react-redux";
import updateBooklist from "./actions/actions";
import styles from "./App.module.scss";

const App = () => {
  const { bookLists } = useSelector(state => state);
  console.log('bookLists', bookLists);
  const dispatch = useDispatch();


  const getBookList = (url) => {
    axios.get(url).then((res) => {
      dispatch(updateBooklist(res.data));
    });
  };

  useEffect(() => {
    getBookList(bookListsApi);
  }, []);

  if(bookLists.length <= 0){
    return <div><strong>Loading...</strong></div>;
  }
  
  return (
    <div>
      <h1 className={styles.title}>React Dynamic Table</h1>
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
