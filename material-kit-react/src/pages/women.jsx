import React, { useEffect, useState } from "react";
import Card from "../components/cards/card";
import axios from "axios";

const women = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("http://localhost:8080/womenProduct");
      setProductData(response.data.data);
      console.log(response.data.data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <h2 className="heading">Women's Products</h2>
      <div className="wrapper">
        {productData.map((prod) => {
          return <Card key={prod.id} productData={prod} />;
        })}
      </div>
    </>
  );
};

export default women;
