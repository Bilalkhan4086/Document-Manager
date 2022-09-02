import React from "react";
import Menu from "./menu";
import Container from "@material-ui/core/Container";

import { Box, Button, Typography } from "@material-ui/core";

function DateComponent() {
  const [anchorEl, setAnchorEl] = React.useState("");
  const [firstDateRange, setFirstDateRange] = React.useState("");
  const [secondDateRange, setSecondDateRange] = React.useState("");
  const options = [
    { name: "Monday", value: 1 },
    { name: "Tuesday", value: 2 },
    { name: "Wednesday", value: 3 },
    { name: "Thursday", value: 4 },
    { name: "Friday", value: 5 },
    { name: "Saturday", value: 6 },
    { name: "Sunday", value: 7 },
  ];
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      maxWidth="md"
      style={{ display: "flex", alignContent: "center", height: "100vh" }}
    >
      <Box style={{ margin: "auto" }}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          variant="contained"
          color="primary"
          style={{ margin: "auto" }}
        >
          New
        </Button>
        <Typography>{firstDateRange}</Typography>
        <br />
        <Typography>{secondDateRange}</Typography>
      </Box>

      <Menu
        anchorEl={anchorEl}
        handleClose={handleClose}
        setFirstDateRange={setFirstDateRange}
        setSecondDateRange={setSecondDateRange}
        options={options}
      />
    </Container>
  );
}

export default DateComponent;
