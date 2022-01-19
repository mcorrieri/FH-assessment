import "./App.css";
import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import FlightTable from "./Components/FlightTable";

function App() {
  const [airportList, setAirportList] = useState([]);
  useEffect(() => {
    fetch("https://flare-code-exercise-data.s3.amazonaws.com/airlines.json")
      .then((res) => res.json())
      .then((data) => setAirportList(data));
  }, []);
  console.log(airportList);
  const airportInfo = airportList.slice(0, 40);

  return (
    <div className="App-container">
      <header className="App-header">
        <Header />
      </header>
      {!airportInfo.length ? (
        "Loading"
      ) : (
        <FlightTable airportInfo={airportInfo} />
      )}
      <Footer />
    </div>
  );
}

export default App;
