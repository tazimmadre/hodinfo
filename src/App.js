import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const search = async () => {
      const resp = await axios.get("http://localhost:3001");
      console.log(resp);
      setData(resp.data.data);
    };
    search();
    setTimeout(()=>{
      window.location.reload(false);
    },10000)
  }, []);
  const renderdata = data.map((d,i) => {
    return (
      <tr>
        <td>{i+1}</td>
        <td>{d.name}</td>
        <td>{d.last}</td>
        <td>{d.buy }/ {d.sell}</td>
        <td>{d.volume}</td>
        <td>{d.base_unit}</td>
      </tr>
    );
  });
  return (
    <div className="ui container">
      <div>
        <img className="logo" src="/logo.png" width="20%" alt="NO img" />
        <p className="para">
          Powered By{"  "}
          <a
            class="footer-text-link"
            rel="nofollow"
            href="https://www.finstreet.in/"
          >
            Finstreet
          </a>
        </p>
      </div>
      <table className="ui selectable inverted table">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>Last</th>
            <th>Buy/Sell Price</th>
            <th>volume</th>
            <th>base_unit</th>
          </tr>
        </thead>
        <thead>{renderdata}</thead>
      </table>
    </div>
  );
};

export default App;
