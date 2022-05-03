import React, { useEffect, useState, useParams } from "react";

import { Card, Button, ListGroup } from "react-bootstrap";
import { ApiMain } from "../Common/ApiMain";
import { User } from "../Common";
import { Link } from "react-router-dom";
export const EditProduct = (props) => {
  const [account, setAccount] = useState(undefined);
  const [product, setProduct] = useState(undefined);

  const params = useParams();

  return <p>edit</p>;
};
