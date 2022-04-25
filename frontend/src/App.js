import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { ApiMain } from "./Common";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import { LandingPage, Login, Signup } from "./Pages";

// React functional component
function App() {
  // state for storage of the information on the webpage of forms and list, uses hooks
  const [token, setToken] = useState();
  const [username, setUserName] = useState();
  const [userType, setUserType] = useState();
  const [userId, setUserId] = useState();
  const [updateToken, setUpdateToken] = useState();

  //   const api = new ApiMain();

  // ENTER YOUR EC2 PUBLIC IP/URL HERE
  const ec2_url = "";
  // CHANGE THIS TO TRUE IF HOSTING ON EC2, MAKE SURE TO ADD IP/URL ABOVE
  const ec2 = false;
  // USE localhost OR ec2_url ACCORDING TO ENVIRONMENT
  const url = ec2 ? ec2_url : "localhost";

  const api = new ApiMain();

  // useEffect(() => {
  //   const tokenn = localStorage.getItem("token");
  //   api
  //     .checkUser(tokenn)
  //     .then((res) => {
  //       console.log("token checked");
  //       setToken(tokenn);
  //       if (res.status === 200) {
  //         setUserName(res.data.username);
  //         setUserType(res.data.user_type);
  //         setUserId(res.data.id);
  //       } else {
  //         setUserName(null);
  //         setUserType(null);
  //         setUserId(null);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setUpdateToken(token);
  //       console.log(username, userId, userType);
  //     });
  // }, [updateToken, token]);

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage token={token} username={username} userType={userType} />} />
          <Route path="/newaccount" element={<Signup setToken={setToken} token={token} />} />
          <Route path="/login" element={<Login setToken={setToken} token={token} />} />
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
