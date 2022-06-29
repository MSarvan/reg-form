import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    message: "",
  });
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    setDetails({});
  }, [refresh])

  const handleChange = (e) => {
    setDetails({...details, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(details.name);
    alert("Registered successfully!");
    
    setRefresh(!refresh);
  }
  
  return (
    <div className="App">
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={details.name}
            placeholder="Enter your Name*"
            required
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="email"
            name="email"
            value={details.email}
            placeholder="Enter your Mail Id*"
            required
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="text"
            name="mobile"
            value={details.mobile}
            placeholder="Enter your Mobile no."
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="text"
            name="country"
            value={details.country}
            placeholder="Country"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="text"
            name="city"
            value={details.city}
            placeholder="City"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="text"
            name="state"
            value={details.state}
            placeholder="State"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="text"
            name="message"
            value={details.message}
            placeholder="Message"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
