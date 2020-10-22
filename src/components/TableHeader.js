import React from 'react';

const TableHeader = ({headerKey}) => {
  let header = Object.keys(headerKey);

  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
};

export default TableHeader;
  