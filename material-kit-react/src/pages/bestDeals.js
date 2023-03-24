import React from "react";
import { Button } from "react-bootstrap";
import { toastifyService } from "src/services/toastify.service";

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

export default bestDeals;
