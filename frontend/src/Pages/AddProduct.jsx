import React, { useState, useEffect } from "react";
import { ApiMain } from "../Common";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Product } from "../Common";

export const AddProduct = (props) => {
  const [username, setUsername] = useState("");
  const [product, setProduct] = useState(undefined);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const api = new ApiMain();

  useEffect(() => {
    setUsername(params.username);
  }, []);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      let newProduct = new Product(productName, price, amount);
      console.log(newProduct);
      api
        .addProduct(username, newProduct)
        .then((res) => {
          setProduct(res.data);

          console.log(res);
          navigate("/");
          console.log("Added product");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  };

  return (
    <div className="container">
      <h1 class="">Add Product</h1>

      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <Form.Group controlId="Product Name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
          <Form.Control.Feedback type="invalid"> Please enter a name.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="Price">
          <Form.Label>Price of Product ($)</Form.Label>
          <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
          <Form.Control.Feedback type="invalid"> Please enter a price.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="amount">
          <Form.Label>Amount of Product</Form.Label>
          <Form.Control type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required />
          <Form.Control.Feedback type="invalid"> Please enter an amount.</Form.Control.Feedback>
        </Form.Group>
        <div className="container p-3">
          <Link to="/" class="btn btn-outline-danger me-3">
            Cancel
          </Link>
          <Button variant="success" id="addProductButton" type="submit">
            Add Product
          </Button>
        </div>
      </Form>
    </div>
  );
};
