import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { ApiMain } from "../Common/ApiMain";
import { User } from "../Common";
import { Link, useParams } from "react-router-dom";
export const UserProfile = (props) => {
  const [user, setUser] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const [products, setProducts] = useState([]);

  const params = useParams();
  const api = new ApiMain();

  useEffect(() => {
    api.getProfile(params.username).then((res) => {
      setProfile(res.data);
      console.log(profile);
    });
  }, []);
  return (
    <div className="container m-4">
      <Card>
        <Card.Header>
          Your Profile
          <Link to="/:username/profile/editProfile" className="btn float-end">
            Edit Profile
          </Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>{params.username}</Card.Title>
          <Card.Text>
            <h5>Address:</h5>
            <p>34456 fsfef ffdf</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
