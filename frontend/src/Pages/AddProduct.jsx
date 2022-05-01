import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { ApiMain } from "../Common/ApiMain";
import { User } from "../Common";
import { Link, useParams} from "react-router-dom";
export const AddProduct = (props) => {
  const [account, setAccount] = useState(undefined);
  const [product, setProduct] = useState(undefined);

  return <p>add</p>;
};
