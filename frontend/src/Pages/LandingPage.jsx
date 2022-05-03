import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiMain } from "../Common";
import { ListGroup, Card, Row, Col } from "react-bootstrap";

export const LandingPage = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");
  const [user_type, setUserType] = useState("");

  const api = new ApiMain();

  useEffect(() => {
    setIsLoggedIn(props.token);
    setUserType(props.user_type);
    setUsername(props.username);
    if (user_type === "farmer") {
      api.getProducts(username).then((res) => {
        const prods = res.data;
        setProducts(prods);
        console.log(prods);
      });
    }
    if (user_type === "owner") {
      api.getProducts(username).then((res) => {
        const prods = res.data;
        setProducts(prods);
        console.log(prods);
      });
    }
  }, [isLoggedIn]);

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
        <p>Here you can add or edit the products that restraunt owners will be able to see:</p>
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
            <ListGroup variant="flush">
              {products.map((product) => {
                return (
                  <ListGroup.Item>
                    <Link to={`/${username}/${product.id}/editProduct`} className="btn float-end">
                      Edit Product
                    </Link>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h3>Welcome {username}</h3>
        <p>Here you can search:</p>
        {/* <Card title="Search">
          <TextField label="Name" value={name} setValue={setName} />
        </Card>
        <Card title="Results">
          <table className="table table-condensed table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Employee</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={account.id}>

                  <td>{account.email}</td>
                  <td>{account.isEmployee ? "Yes" : "No"}</td>
                  <td>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card> */}
      </div>
    );
  }
};
