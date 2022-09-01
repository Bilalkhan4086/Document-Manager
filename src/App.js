import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "./routes/index";

import "./App.css";
import { SnackbarProvider } from "notistack";

const Routes = ({ history }) => {
  // usually I do authentication here, like if the user is authenticated or not
  return <Router history={history}>{renderRoutes()}</Router>;
};

function App() {
  return (
    <SnackbarProvider dense maxSnack={3}>
      <Routes />
    </SnackbarProvider>
  );
}

export default App;
