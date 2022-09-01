import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FileViewer from "react-file-viewer";
import "./styles.css";

export default function ScrollDialog({ open, setOpen, documentData }) {
  const handleClose = () => {
    setOpen(false);
  };
  const onError = (e) => {
    console.log(e, "error in file-viewer");
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Preview</DialogTitle>
        <DialogContent
          style={{
            minWidth: 500,
            height: 400,
          }}
          dividers={true}
        >
          {documentData.isImage ? (
            <img width="500px" alt="Not Loaded" src={documentData.url} />
          ) : documentData.isVideo ? (
            <video width="500px" controls>
              {" "}
              <source src={documentData.url} />{" "}
            </video>
          ) : (
            <FileViewer
              fileType={documentData.ext}
              filePath={documentData.url}
              onError={onError}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
