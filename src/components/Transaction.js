import React from "react";

const Transaction = ({transaction, deleteT}) => {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
      <button className="ui button" onClick={() => deleteT(transaction)}type="submit">Delete Transaction</button>
      </td>
    </tr>
  );
};

export default Transaction;
