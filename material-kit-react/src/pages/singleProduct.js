import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const product = useSelector((state) => state.products);

  return (
    <Box className="container">
      <h1 className="title">Product Detail</h1>
      <img className="image" src={product.image} alt={product.title} />
      <h2 className="subtitle">{product.title}</h2>
      <p className="description">{product.description}</p>
      <Button variant="contained" color="primary">
        Add to cart
      </Button>
    </Box>
  );
};

export default SingleProduct;

// import React, { useState, useEffect } from "react";
// import Card from "../components/cards/card";
// import axios from "axios";
// import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
// import Head from "next/head";
// import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from "@mui/material";
// import AddProductButton from "src/components/AddProductButton";

// const Page = () => {
//   const [fetchedProducts, setFetchedProducts] = useState([]);
//   const [isError, setIsError] = useState();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/womenProduct");
//         setFetchedProducts(response.data.data);
//       } catch (error) {
//         setIsError(error.message);
//       }
//     };
//     fetchProducts();
//   }, []);
//   return (
//     <>
//       <Head>
//         <title>Women&apos;s Clothing | Mahango Deal</title>
//       </Head>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           py: 8,
//         }}
//       >
//         <Container maxWidth="lg">
//           <AddProductButton />
//           <Stack spacing={3}>
//             <div>
//               <Typography variant="h4">Women&apos;s Clothing</Typography>
//             </div>
//             <div>
//               {isError !== "" && <h2>{isError}</h2>}
//               <div className="productsContainer">
//                 {productData.map((prod) => {
//                   return <Card key={prod.id} productData={prod} />;
//                 })}
//               </div>
//             </div>
//           </Stack>
//         </Container>
//       </Box>
//     </>
//   );
// };

// Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// export default Page;
