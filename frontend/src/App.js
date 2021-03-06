import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { ApiMain } from "./Common";
import { Heading } from "./Common/Heading";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import { LandingPage, Login, Signup, UserProfile, EditProfile, EditProduct,AddProduct } from "./Pages";
import { User } from "./Common";

// React functional component
function App() {
  // state for storage of the information on the webpage of forms and list, uses hooks
  const [token, setToken] = useState();
  const [username, setUserName] = useState();
  const [user_type, setUserType] = useState();
  const [updateToken, setUpdateToken] = useState();

  // ENTER YOUR EC2 PUBLIC IP/URL HERE
  const ec2_url = "";
  // CHANGE THIS TO TRUE IF HOSTING ON EC2, MAKE SURE TO ADD IP/URL ABOVE
  const ec2 = false;
  // USE localhost OR ec2_url ACCORDING TO ENVIRONMENT
  const url = ec2 ? ec2_url : "localhost";

  const api = new ApiMain();

  useEffect(() => {
    const tokenn = localStorage.getItem("token");
    const uname = localStorage.getItem("username");
    const type = localStorage.getItem("user_type");
    setToken(tokenn);
    if (token) {
      setUserName(uname);
      setUserType(type);
      setUpdateToken(token);
      console.log(token, uname, type);
    }
  }, [updateToken, token]);

  return (
    <div>
      <BrowserRouter>
        <Heading token={updateToken} setToken={setToken} />
        <Routes>
          <Route exact path="/" element={<LandingPage token={token} username={username} user_type={user_type} />} />
          <Route path="/signup" element={<Signup setToken={setToken} token={token} setUserName={setUserName} setUserType={setUserType} />} />
          <Route path="/login" element={<Login setToken={setToken} token={token} setUserName={setUserName} setUserType={setUserType} />} />
          <Route path="/:username/profile" element={<UserProfile token={token} username={username} user_type={user_type} />} />
          <Route path="/:username/profile/editProfile" element={<EditProfile token={token} username={username} user_type={user_type} />} />
          <Route path="/:username/:productId/editProduct" element={<EditProduct token={token} username={username} user_type={user_type} />} />
          <Route path="/:username/addProduct" element={<AddProduct token={token} username={username} user_type={user_type} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//   // handle input field state change
//   const handleChange = (e) => {
//     setNumber(e.target.value);
//   };

//   const fetchBase = () => {
//     axios.get(`http://${url}:8000/`).then((res) => {
//       alert(res.data);
//     });
//   };

//   // fetches vals of db via GET request
//   const fetchVals = () => {
//     axios
//       .get(`http://${url}:8000/values`)
//       .then((res) => {
//         const values = res.data.data;
//         console.log(values);
//         setValues(values);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   // handle input form submission to backend via POST request
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let prod = number * number;
//     axios
//       .post(`http://${url}:8000/multplynumber`, { product: prod })
//       .then((res) => {
//         console.log(res);
//         fetchVals();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     setNumber("");
//   };

//   // handle intialization and setup of database table, can reinitialize to wipe db
//   const reset = () => {
//     axios
//       .post(`http://${url}:8000/reset`)
//       .then((res) => {
//         console.log(res);
//         fetchVals();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   // tell app to fetch values from db on first load (if initialized)
//   // the comment below silences an error that doesn't matter.=
//   useEffect(() => {
//     fetchVals();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

// return (
//     <div className="App">
//         <header className="App-header">
//             <h1>"THIS IS MY PAGE NOW!!!"</h1>
//             <h2>- Shaun</h2>
//             <button onClick={fetchBase} style={{ marginBottom: '1rem' }}> {`GET: http://${url}:8000/`} </button>
//             <button onClick={reset}> Reset DB </button>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={number} onChange={handleChange} />
//                 <br />
//                 <input type="submit" value="Submit" />
//             </form>
//             <ul>
//                 {values.map((value, i) => <li key={i}>{value.value}</li>)}
//             </ul>
//         </header>
//     </div>
// );
