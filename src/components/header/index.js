import React from "react";
import { Box, Grid, Typography, Link, Breadcrumbs } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Menu from "../menu";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import { PlusCircle as PlusIcon } from "react-feather";

const Header = ({ className, count, ...rest }) => {
  const [anchorEl, setAnchorEl] = React.useState("");
  const options = [{ name: "Folder" }, { name: "File Upload" }];
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={1} justifyContent="space-between">
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link variant="body1" color="inherit" to="/" component={RouterLink}>
            Dashboard
          </Link>
          <Link
            variant="body1"
            color="inherit"
            to="/seats/browse"
            component={RouterLink}
          >
            Seats
          </Link>
          <Typography variant="body1" color="textPrimary">
            Create
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item>
        <Box className="">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            variant="contained"
            color="primary"
            startIcon={
              <SvgIcon fontSize="small">
                <PlusIcon />
              </SvgIcon>
            }
          >
            New
          </Button>
          <Menu
            anchorEl={anchorEl}
            handleClose={handleClose}
            options={options}
            type="addNewButton"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
