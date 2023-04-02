import React from "react";
import { Button, Grid } from "@nextui-org/react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const AddProductBtn = () => {
  const [file, setFile] = useState();
  const [productTitle, setProductTitle] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productPrice, setProductPrice] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("productTitle", productTitle);
    formData.append("productDescription", productDescription);
    formData.append("productPrice", productPrice);
    debugger;
    axios
      .post("http://localhost:8080/api/products", formData, {
        headers: {
          "Content-type": "multipart/formData",
        },
      })
      .then((response) => {
        handleClose();
      });
  };

  return (
    <div>
      <Grid>
        <Button color="gradient" auto ghost onClick={handleShow}>
          Add product
        </Button>
      </Grid>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name of product"
                onChange={(event) => {
                  const title = event.target.value;
                  setProductTitle(title);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Input image "
                onChange={(event) => {
                  const files = event.target.files[0];
                  setFile(files);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the price of product"
                onChange={(event) => {
                  const price = event.target.value;
                  setProductPrice(price);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Product Description </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(event) => {
                  const description = event.target.value;
                  setProductDescription(description);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Grid className="grid">
            <Button color="gradient" auto ghost onClick={handleClose}>
              Close
            </Button>
          </Grid>
          <Grid className="grid">
            <Button color="gradient" auto ghost onClick={handleSubmit}>
              Save product
            </Button>
          </Grid>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProductBtn;
