import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { ApiMain } from "../Common/ApiMain";
import { User } from "../Common";
import { Link, useParams } from "react-router-dom";
export const UserProfile = (props) => {
  const [user, setUser] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  const params = useParams();
  const api = new ApiMain();

  useEffect(() => {
    api.getProfile(params.username).then((res) => {
      setProfile(res.data);
      console.log(profile);
      setUsername(params.username);
    });
  }, []);
  return (
    <div className="container m-4">
      <Card>
        <Card.Header>
          Your Profile
          <Link to={`/${username}/profile/editProfile`} className="btn float-end">
            Edit Profile
          </Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>{username}</Card.Title>
          <Card.Text>
            <h5>Username:</h5>
            <p>{params.username}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Link to="/" className="btn btn-danger m-1">
        Back
      </Link>
    </div>
  );
};
