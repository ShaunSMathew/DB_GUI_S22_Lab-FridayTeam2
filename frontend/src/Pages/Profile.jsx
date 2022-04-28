import React, { useEffect, useState, useParams } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { ApiMain } from "../Common/ApiMain";
import { User } from "../Common";
import { Link } from "react-router-dom";
export const Profile = (props) => {
  const [user, setUser] = useState(undefined);
  const [products, setProducts] = useState({});

  // const params = useParams();
  const api = new ApiMain();

  useEffect(() => {
    api.getProducts().then((res) => {
      const products = res.data;
      setProducts([333, 33333]);
      console.log(products);
    });
  }, []);
  return (
    <div className="container m-4">
      <Card>
        <Card.Header>
          Your Profile
          <Link to="profile/:username/editProfile" className="btn float-end">
            Edit Profile
          </Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>Username</Card.Title>
          <Card.Text>
            <h5>Address:</h5>
            <p>34456 fsfef ffdf</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Products</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {/* {products.map((product) => {
              return (
                <ListGroup.Item>
                  Cras justo odio
                  <Link to="/profile/:username/:id/editProduct" className="btn float-end">
                    Edit Product
                  </Link>
                </ListGroup.Item>
              );
            })} */}
          </ListGroup>
          <Link to="//profile/:username/addProduct" className="btn">
            Add Product
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
