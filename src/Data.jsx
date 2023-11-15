import React from "react";
import { useState, useEffect } from "react";

const Data = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    let products = [
      {
        name: "Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995",
      },
      {
        name: "Stankonia",
        number: 2000,
        amount: "$8,000",
        due: "10/31/2000",
      },
      {
        name: "Ocean Avenue",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2003",
      },
      {
        name: "Tubthumper",
        number: 1997,
        amount: "$14,000",
        due: "09/01/1997",
      },
      {
        name: "Wide Open Spaces",
        number: 1998,
        amount: "$4,600",
        due: "01/27/1998",
      },
    ];

    setProduct(products);
    console.log(products);
  }, []);

  return (
    <div>
      {product.map((p) => (
        <div key={p.number} className="grid">
          <p className="head">{p.name}</p>
          <p>Number: {p.number}</p>
          <p>Amount {p.amount}</p>
          <p>Due: {p.due}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
