import React, { useEffect, useState } from "react";
import AirportCard from "./AirportCard";
import { Container, Grid } from "@mui/material";

function AirportList() {
  const [airportList, setAirportList] = useState([]);
  useEffect(() => {
    fetch("https://flare-code-exercise-data.s3.amazonaws.com/airlines.json")
      .then((res) => res.json())
      .then((data) => setAirportList(data));
  }, []);

  const grid = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Mean",
  ];

  const firstTenAirports = airportList.slice(0, 10);

  const airportData = firstTenAirports.map((airportInfo) => {
    return (
      <div key={airportInfo.Airport.Code}>
        <AirportCard airportInfo={airportInfo} />
      </div>
    );
  });

  return (
    <div className="airport-list-container">
      <p>Show [ % on time ] for [ 2008 ] at [ MDW, ORD ]</p>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            {airportData}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AirportList;
