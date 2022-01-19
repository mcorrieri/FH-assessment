import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function AirportCard({ airportInfo }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          {airportInfo.Airport.Code}
        </Typography>

        <Typography variant="body2">
          On Time: {airportInfo.Statistics.Flights["On Time"]}
        </Typography>
        <Typography variant="body2">
          <Typography variant="body2">
            Total: {airportInfo.Statistics.Flights.Total}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AirportCard;
