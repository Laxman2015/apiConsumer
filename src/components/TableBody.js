import React from "react";
import { useHistory } from "react-router-dom";

const TableBody = ({ data }) => {

  const history = useHistory();

  const viewDetails = (id) => history.push(`/view/${id}`);

  if (data.length <= 0) return null;

  return data.map((book, index) => {
    const { id, name, price, star, url } = book;
    return (
      <tr key={id} onClick={() => viewDetails(id)}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{star}</td>
        <td>{url}</td>
      </tr>
    );
  });
};

export default TableBody;
