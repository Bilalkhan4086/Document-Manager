import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SkeletonRows from "../../SkeletonRows";
import { Box, Breadcrumbs, Link, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { iconSelector } from "../../../utils/IconSelector";
import useDrive from "../../../hooks/useDrive";
import DialogueBox from "../../DialogueBox";

function UsersData({ classes, loading }) {
  const { driveData, currentDriveId, setCurrentDriveId } = useDrive();
  const [FolderData, setFolderData] = React.useState(driveData.subFolder);
  const [dailogueOpen, setDialogueOpen] = React.useState(false);
  const [crump, setCrump] = React.useState([
    { name: "Drive", id: currentDriveId },
  ]);
  const [documentData, setDocumentData] = React.useState({
    url: "",
    isImage: false,
    isVideo: false,
  });

  const findDrive = (data) => {
    if (data.id === currentDriveId) {
      setFolderData(data.subFolder);
    } else if (data.subFolder) {
      for (const d of data.subFolder) {
        findDrive(d);
      }
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    console.log("changed");
  }, [currentDriveId]);

  const handleClickDialogueOpen = (data) => {
    if (data.isFolder) {
      console.log(data);
      setCrump([...crump, { id: data.id, name: data.name }]);
      setCurrentDriveId(data.id);
      setFolderData(data.subFolder);
      return;
    }
    if (data.type.includes("image")) {
      setDocumentData({
        url: URL.createObjectURL(data.orignalFile),
        isImage: true,
        isVideo: false,
      });
    } else if (data.type.includes("video")) {
      setDocumentData({
        url: URL.createObjectURL(data.orignalFile),
        isVideo: true,
      });
    } else {
      setDocumentData({
        url: URL.createObjectURL(data.orignalFile),
        ext: data.ext,
      });
    }

    setDialogueOpen(true);
  };

  const breadcrumb = (crumps) => (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {crumps.map((crump, i) =>
        crumps.length !== i + 1 ? (
          <Link
            key={i}
            style={{ fontWeight: "bolder" }}
            color="inherit"
            to="/"
            onClick={() => {
              setCurrentDriveId(crump.id);
              console.log(currentDriveId);
              findDrive(driveData);
            }}
            component={RouterLink}
          >
            {crump.name}
          </Link>
        ) : (
          <Typography
            key={i}
            style={{ fontWeight: "bolder" }}
            color="textPrimary"
          >
            {crump.name}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );

  const headings = ["Name", "CreatedAt", "File Size"];
  console.log("FolderData", FolderData);

  return (
    <>
      <TableContainer component={Paper} key="users-table-container">
        <Paper
          style={{
            padding: "15px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
        >
          {breadcrumb(crump)}
        </Paper>
        <Table className={classes.table} aria-label="a dense table">
          <TableHead>
            <TableRow className={classes.header}>
              {headings.map((heading, i) => (
                <TableCell
                  key={`heading-cell-${i}`}
                  classes={{
                    head: classes.headerTitle,
                  }}
                >
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {loading ? (
              <SkeletonRows key="skeleton-rows" rowsLength={8} cellSize={3} />
            ) : driveData.subFolder.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography style={{ textAlign: "center" }}>
                    No data yet
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              FolderData.map((dat, index) => {
                return (
                  <TableRow
                    key={`row-${index}`}
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      handleClickDialogueOpen(dat);
                    }}
                  >
                    <TableCell size="medium" align="left">
                      <Box display="flex" style={{ alignItems: "center" }}>
                        <Box mr={1}>{iconSelector(dat?.ext)}</Box>
                        <Typography
                          style={{ maxWidth: 300, overflow: "hidden" }}
                        >{`${dat.name}`}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell size="small" align="left">
                      {dat.createdAt}
                    </TableCell>
                    <TableCell size="small" align="left">
                      {!dat.isFolder ? `${dat.size}` : "-"}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
        <DialogueBox
          open={dailogueOpen}
          setOpen={setDialogueOpen}
          documentData={documentData}
        />
      </TableContainer>
    </>
  );
}

export default UsersData;
