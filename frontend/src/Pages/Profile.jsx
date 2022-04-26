import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const Profile = () => {
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
