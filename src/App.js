import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Component from "./components/Component";

function App() {
  const [apodData, setApodData] = useState();
  const [datePicker, setDatePicker] = useState(
    new Date("2021-06-11").toISOString().slice(0, 10)
  );

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "QLxMKq7eDfOpBDOo4khZ7pWYZsqBCTEpuYEpk9Hy",
          date: datePicker,
        },
      })
      .then(function(response) {
        console.log(response);
        setApodData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }, []);

  return (
    <div className="App">
      <Component
        data={apodData}
        dateChange={setDatePicker}
        currentDate={datePicker}
      />
    </div>
  );
}

export default App;
