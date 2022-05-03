import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ApiMain } from "../Common/ApiMain";
import { SearchTags } from "../Pages";

export const SearchBar = (props) => {
  const [product, setProduct] = useState("");
  const [farmerName, setFarmerName] = useState("");

  const api = new ApiMain();
  const allTags = [];

  //   let changeButtonText = () => {
  //     if (buttonText === "Tags") {
  //       setButtonText("Close Tags");
  //     } else {
  //       setButtonText("Tags");
  //     }
  //   };

  //   let changeTags = (checkedTags) => {
  //     setTags(checkedTags);
  //     console.log(tags);
  //   };

  //   if (buttonText === "Close Tags") {
  //     return <SearchTags currentTags={tags} setSearchTags={changeTags} changeButtonText={changeButtonText} />;
  //   }

  return (
    <div class="w-75 mx-auto">
      <Form id="search-products">
        <Row>
          {/* <Form.Group className="mb-2 col-md-6" controlId="product">
            <Form.Control type="text" placeholder="Enter Product Name" value={product} onChange={(e) => setProduct(e.target.value)} />
          </Form.Group> */}
          <Form.Group className="mb-2 " controlId="farmerName">
            <Form.Control type="text" placeholder="Enter Farmer Name" value={farmerName} onChange={(e) => setFarmerName(e.target.value)} />
          </Form.Group>
        </Row>
      </Form>
      <button class="btn btn-success col-md-12" onClick={() => props.onSearch({ farmerName })} form="search-form">
        Search
      </button>
    </div>
  );
};
