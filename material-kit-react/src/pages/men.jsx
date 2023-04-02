import React, { useState, useEffect } from "react";
import Card from "../components/cards/card";
import axios from "axios";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Head from "next/head";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import AddProductBtn from "src/components/AddProductBtn";
import Footer from "src/components/Footer";

const Page = () => {
  const [productData, setProductData] = useState([]);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/menProduct");
        setProductData(response.data.data);
      } catch (error) {
        setIsError(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Men&apos;s Clothing | Mahango Deal</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h4">Men&apos;s Clothing</Typography>
              </Grid>
              <Grid item xs={12} md={6} container justifyContent="center">
                <AddProductBtn />
              </Grid>
            </Grid>
            {isError !== "" && <h2>{isError}</h2>}
            <div className="wrapper">
              {productData.map((prod) => {
                return <Card key={prod.id} productData={prod} />;
              })}
            </div>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
