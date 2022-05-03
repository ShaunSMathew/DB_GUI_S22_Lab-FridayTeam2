import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiMain } from "../Common";
import { Card, Row, Col, Form } from "react-bootstrap";
import { SearchBar } from "../Common/SearchBar";

export const LandingPage = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");
  const [user_type, setUserType] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const [searchProductName, setSearchProductName] = useState("");

  const api = new ApiMain();

  useEffect(() => {
    setIsLoggedIn(props.token);
    setUserType(props.user_type);
    setUsername(props.username);
    if (user_type === "farmer") {
      api.getProducts(username).then((res) => {
        const prods = res.data;
        setProducts(prods);
      });
    }
    if (user_type === "owner") {
    }
  });

  const onSearch = (searchParams) => {
    // if (searchParams.product) {
    //   setSearchProductName(searchParams.product);
    //   api.searchByProduct(searchProductName).then((res) => {
    //     const searchProds = res.data;
    //     setProducts(searchProds);
    //   });
    // }
    if (searchParams.farmerName) {
      setSearchUsername(searchParams.farmerName);
      api.getProducts(searchUsername).then((res) => {
        const searchProds = res.data;
        setProducts(searchProds);
      });
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="container d-flex flex-column">
        <h2 className="text-center">Welcome to the Farmer's Market!</h2>
        <h4>This site brings together farmers and restraunts by allowing farmers to directly sell their products to restraunts.</h4>
        <h4>Here farmers can advertise their products, and restraunt managers can the ingredients fresh from the source.</h4>
        <div>
          <p>To access the site, please create a new account or sign in to an existing account.</p>
          <div className="d-flex flex-row">
            <Link to="/signup" class="btn btn-primary m-3">
              Sign Up
            </Link>
            <Link to="/login" class="btn btn-primary m-3">
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (isLoggedIn && user_type == "farmer") {
    return (
      <div className="container">
        <h3>Welcome {username}</h3>
        <p>Here you can add the products that restraunt owners will be able to see:</p>
        <Card>
          <Card.Header>
            <Row>
              <Col sm={9}>
                <h4>Products</h4>
              </Col>
              <Col>
                <Link to={`/${username}/addProduct`} className="btn">
                  Add Product
                </Link>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <table className="table table-condensed table-striped">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.amount}</td>
                      {/* <td>
                        <Link to={`/${username}/${product.id}/editProduct`}>Edit Product</Link>
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h3>Welcome {username}</h3>
        <p>Here you can look for products:</p>
        <Card title="Search">
          <SearchBar onSearch={(searP) => onSearch(searP)} />
        </Card>
        <Card title="Results">
          <table className="table table-condensed table-striped">
            <thead>
              <tr>
                <th>Farmer</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Amount</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.farmer_username}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
};
