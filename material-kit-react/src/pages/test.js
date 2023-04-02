import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Head from "next/head";
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from "@mui/material";

const Page = () => {
  return (
    <>
      <Head>
        <title>Women&apos;s Clothing | Mahango Deal</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <AddProductButton />
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">Women&apos;s Clothing</Typography>
            </div>
            <div>
              {isError !== "" && <h2>{isError}</h2>}
              <div className="productsContainer">
                {productData.map((prod) => {
                  return <Card key={prod.id} productData={prod} />;
                })}
              </div>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
