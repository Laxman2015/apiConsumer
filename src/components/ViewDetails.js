import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styles from "./Details.module.scss";
import { Star } from "./Star";

const ViewDetails = (props) => {
  const id = props.match ? props.match.params.id : 1;
  const { bookLists } = useSelector((state) => state);
  const product = bookLists.find((book) => book.id == id);

  const history = useHistory();

  const backToHome = () => history.push('/');

  const starRender = (num) => {
    let rating = [];
    for (let i = 0; i < num; i++) {
      rating.push(<Star width={"12px"} />);
    }
    return rating;
  };
  return (
    <Fragment>
        <h1 className={styles.title}>Book Details</h1>
      <div className={styles.cartItem}>
        <div className={styles.imgWidth}>
          <img
            alt={product.name}
            className={styles.bookImage}
            src={product.url}
            className="img-fluid d-block"
          />
        </div>
        <div className={styles.prodInfo}>
          <h3 className="mb-1">BookID: {product.id}</h3>
          <h3 className="mb-1">Name: {product.name}</h3>
          <h4 className="mb-1">Raiting: {starRender(product.star)}</h4>
          <h4 className="mb-1">Price: {product.price} </h4>
        </div>
      </div>
      <div className={styles.backToHome}>
        <button className={styles.btnPrimary} onClick={() => backToHome()}>Back To Home</button>
      </div>
    </Fragment>
  );
};

export default ViewDetails;
