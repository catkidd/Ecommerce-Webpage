import Head from "next/head";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import LandingCarauselComponent from "../components/carausel/Carausel";
import HomePage from "src/components/homePage";
import { FiShoppingCart } from "react-icons/fi";
import Footer from "src/components/Footer";
const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>Overview | MahangoDeal</title>
    </Head>

    <LandingCarauselComponent />
    <HomePage />
    <Footer />
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
