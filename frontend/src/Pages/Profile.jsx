import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ApiMain } from "../Common/ApiMain";

export const Profile = () => {

    const [user, setUser] = useState();

    const api = new ApiMain();


  return (
    <div className="container m-4">
      <Card>
        <Card.Header>Your Profile</Card.Header>
        <Card.Body></Card.Body>
      </Card>
      <Card>
        <Card.Header>Products</Card.Header>
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
};
