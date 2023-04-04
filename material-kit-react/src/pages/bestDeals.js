import React from "react";
import { Button } from "react-bootstrap";
import { toastifyService } from "src/services/toastify.service";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

const handleToaster = () => {
  toastifyService.success("We are here");
};

const bestDeals = () => {
  return (
    <div>
      <Button onClick={handleToaster}>Test Me</Button>
    </div>
  );
};

bestDeals.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default bestDeals;
