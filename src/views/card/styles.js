import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-sizeSmall": {
      padding: "0px 16px !important",
    },
  },
  header: {
    background: "#f9fafa",
  },
  headerTitle: {
    fontWeight: "600 !important",
    color: "rgba(0, 0, 0, 0.5) !important",
    lineHeight: "1rem !important",
  },
  disabled: {
    pointerEvents: "none",
    opacity: "0.6",
  },
  title: {
    fontWeight: "600",
  },
});
