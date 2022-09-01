import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box, Typography } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import useDrive from "../hooks/useDrive";

export default function FormDialog({ setOpen, open }) {
  const { addFile } = useDrive();
  const handleClose = () => {
    setOpen(false);
  };
  const [fileLink, setFileLink] = useState("");
  const [file, setFile] = useState(null);

  const handleCapture = (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">New File</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Paste file link"
            variant="outlined"
            style={{ minWidth: 400 }}
            onChange={(e) => {
              setFileLink(e.target.value);
            }}
          />
        </DialogContent>
        <DialogContent>
          <Typography align="center">or</Typography>
        </DialogContent>
        <DialogContent>
          <Box
            display="flex"
            style={{
              alignItem: "center",
              flexDirection: "column",
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            {file === null ? (
              <Box
                display="flex"
                style={{ alignItem: "center", flexDirection: "column" }}
              >
                <Box style={{ margin: "auto" }}>
                  <PublishIcon fontSize="large" />
                </Box>
                <Typography style={{ margin: "auto", fontSize: "13px" }}>
                  Drag and Drop file to upload
                </Typography>
                <Button
                  style={{ margin: "20px auto 0px auto", maxWidth: 140 }}
                  variant="contained"
                  color="primary"
                  component="label"
                >
                  Select File
                  <input type="file" onChange={handleCapture} hidden />
                </Button>
              </Box>
            ) : (
              <Box
                display="flex"
                style={{ alignItem: "center", flexDirection: "column" }}
              >
                <Typography style={{ margin: "auto", fontSize: "13px" }}>
                  {file.name}
                </Typography>
                <Button
                  style={{ margin: "20px auto 0px auto", maxWidth: 140 }}
                  variant="contained"
                  color="primary"
                  component="label"
                >
                  Change File
                  <input type="file" onChange={handleCapture} hidden />
                </Button>
              </Box>
            )}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              setFile(null);
              setFileLink(null);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose();
              if (file !== null) {
                addFile({ file: file });
                setFile(null);
                setFileLink(null);
              } else if (fileLink.trim() !== "") {
                addFile({
                  file: { name: fileLink, size: 65556, ext: "docx" },
                });
                setFile(null);
                setFileLink(null);
              } else {
                return;
              }
            }}
            color="primary"
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
