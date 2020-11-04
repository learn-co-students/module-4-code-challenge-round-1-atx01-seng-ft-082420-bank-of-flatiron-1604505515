import React from "react";

const Transaction = ({transaction}) => {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td><button className="Delete Transaction">Delete Transaction</button></td>
    </tr>
  );
};

export default Transaction;
