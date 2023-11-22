import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/context";

export default function Records() {
  //using context
  const { records, setRecords } = useContext(MyContext);

  //onload
  useEffect(() => {
    //http://localhost:8000/api/records/allrecords //GET request
    fetch("http://localhost:8000/api/records/allrecords")
      .then((res) => res.json())
      .then((result) => {
        setRecords(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Records</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {records.map((product) => {
          return (
            <div
              key={product._id}
              style={{
                width: "300px",
                boxShadow: "1px 1px 3px gray",
                margin: "10px",
              }}
            >
              <h2>{product.title}</h2>
              <img src={product.thumbnail} width={200} alt="" />
              <p>{product.description}</p>
              <h2>${product.price}</h2>
              <button>add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
