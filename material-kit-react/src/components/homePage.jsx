import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/cards/card";

const homePage = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8080/featuredProduct");
      setProductData(response.data.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h2 className="heading"> Have a look at our best selling products!</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {productData.map((prod) => {
          return <Card key={prod.id} productData={prod} />;
        })}
      </div>
    </>
  );
};

export default homePage;
