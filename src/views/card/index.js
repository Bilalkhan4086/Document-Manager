import {
  Box,
  Card,
  CardContent,
  CardMedia,
  createTheme,
  makeStyles,
  TextField,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles({
  lgRoot: {
    width: 700,
    display: "flex",
    height: 100,
    padding: "10px",
    justifyContent: "space-around",
    alignItems: "center",
  },
  smRoot: {
    maxWidth: 500,
    display: "flex",
    flexDirection: "column",
    height: 300,
    padding: "10px",
    justifyContent: "space-around",
    alignItems: "center",
  },
  media: {
    width: 60,
    padding: "20px",
  },
  lgTextField1: {
    width: 400,
  },
  lgTextField2: {
    width: 60,
  },
  smTextField1: {
    width: 350,
  },
  smTextField2: {
    width: 350,
  },
});

function CardComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      {/* card logic start from here */}

      <Card className={matches ? classes.lgRoot : classes.smRoot}>
        <img className={classes.media} src="./logo192.png" />
        <TextField
          label="Foam Mats"
          className={matches ? classes.lgTextField1 : classes.smTextField1}
          variant="outlined"
        />
        <TextField
          label="20$"
          variant="outlined"
          className={matches ? classes.lgTextField2 : classes.smTextField2}
        />
      </Card>

      {/* card logic ended from here */}
    </Box>
  );
}

const theme = createTheme();
export default function ThemeHelper() {
  return (
    <ThemeProvider theme={theme}>
      <CardComponent />
    </ThemeProvider>
  );
}
