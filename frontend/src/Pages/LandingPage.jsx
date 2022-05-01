import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiMain } from "../Common";
import { ListGroup, Card, Row, Col } from "react-bootstrap";

export const LandingPage = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);

  const api = new ApiMain();

  useEffect(() => {
    setIsLoggedIn(props.token);
  }, [props.token]);

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
  } else if (isLoggedIn && props.user_type == "farmer") {
    api.getProducts(props.username).then((res) => {
      const prods = res.data;
      setProducts(prods);
      console.log(prods);
    });
    return (
      <div className="container">
        <h3>Welcome {props.username}</h3>
        <p>Here you can add or edit the products that restraunt owners will be able to see:</p>
        <Card>
          <Card.Header>
            <Row>
              <Col sm={9}>
                <h4>Products</h4>
              </Col>
              <Col>
                <Link to={'/profile/${username}/addProduct'} className="btn">
                  Add Product
                </Link>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <ListGroup variant="flush">
              {products.map((products) => {
                return (
                  <ListGroup.Item>
                    Cras justo odio
                    <Link to="/profile/:username/:id/editProduct" className="btn float-end">
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
        <h3>Welcome {props.username}</h3>
        <h5>Restraunt Owner</h5>
      </div>
    );
  }
};
