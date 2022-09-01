import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import UserData from "../../components/home/userData";
import Header from "../../components/header";
import { DriveProvider } from "../../contexts/DriveContext";

function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={2}>
        <Header />
      </Box>
      <Box mt={2} mb={2}>
        <Typography className={classes.title} variant="h6" component="h6">
          Manage Users
        </Typography>
      </Box>
      <Box mb={4}>
        <UserData classes={classes} key="users-table-component" />
      </Box>
    </Container>
  );
}

const HomeWrapper = () => {
  return (
    <DriveProvider>
      <Home />
    </DriveProvider>
  );
};

export default HomeWrapper;
