import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function FlightTable({ airportInfo }) {
  const [selectedAirport, setSelectedAirport] = [];
  const [selectedYear, setSelectedYear] = [];

  const months = [
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

  const filterOptions = [
    "number of flights",
    "% of flights on time",
    "% of flights canceled",
    "% of flights diverted",
    "% of flights delayed",
    "% of flights delayed due to carrier delay",
    "% of flights delayed due to late aircraft",
  ];

  // const onTimeFlights = airportInfo.map((onTime) => {
  //   return onTime.Statistics.Flights["On Time"];
  // });

  // const totalFlights = airportInfo.map((total) => {
  //   return total.Statistics.Flights.Total;
  // });

  const [airportDropdownSelections, setAirportDropdownSelections] = useState(
    []
  );
  useEffect(() => {
    const airportCodes = {};
    airportInfo.forEach((code) => {
      const airportCode = code.Airport.Code;
      if (!airportCode[airportCode]) {
        airportCodes[airportCode] = airportCode;
      }
    });
    setAirportDropdownSelections(Object.values(airportCodes));
  }, [airportInfo]);

  const handleYearSelect = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleAirportCodeSelect = (e) => {
    setSelectedAirport(e.target.value);
  };

  return (
    <div style={{ padding: 30 }}>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Show
        <Box>
          <InputLabel> [ % on time ] </InputLabel>
          <Select style={{ width: 200 }}>
            {filterOptions.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </Select>
        </Box>{" "}
        for{" "}
        <Box>
          <InputLabel> Year </InputLabel>
          <Select
            style={{ width: 150 }}
            value={selectedYear}
            onChange={handleYearSelect}
          >
            {/* {airportInfo.map((year) => (
              <MenuItem>{year.Time.Year}</MenuItem>
            ))} */}
            <MenuItem value={2003}>{2003}</MenuItem>
          </Select>
        </Box>{" "}
        at
        <Box>
          <InputLabel> Airport </InputLabel>
          <Select
            style={{ width: 150 }}
            value={selectedAirport}
            onChange={handleAirportCodeSelect}
          >
            {airportDropdownSelections.map((code) => {
              console.log(code);
              return (
                <MenuItem key={code} value={code}>
                  {code}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Flights</TableCell>
              {months.map((month) => (
                <TableCell align="right">{month}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {airportInfo.map((row) => (
              <TableRow
                key={row.Time.Label}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {console.log(row)}

                <TableCell component="th" scope="row">
                  {row.Airport.Code}
                </TableCell>
                <TableCell align="right">
                  {Math.floor(
                    (row.Statistics.Flights["On Time"] /
                      row.Statistics.Flights.Total) *
                      100
                  )}
                  %
                </TableCell>

                <TableCell align="right">{"hello"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FlightTable;
