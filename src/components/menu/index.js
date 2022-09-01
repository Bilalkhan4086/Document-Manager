import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Folder from "../Folder";
import FileUpload from "../FileUpload";
import React from "react";

export default function SimpleMenu({ anchorEl, handleClose, options }) {
  const [folderopen, setFolderOpen] = React.useState(false);
  const [fileopen, setFileOpen] = React.useState(false);
  const handleClickFolderOpen = () => {
    setFolderOpen(true);
  };
  const handleClickFileOpen = () => {
    setFileOpen(true);
  };
  const checkFunctionality = (option) => {
    switch (option) {
      case "File Upload":
        handleClickFileOpen();
        break;
      case "Folder":
        handleClickFolderOpen();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, i) => (
          <MenuItem
            key={i}
            onClick={() => {
              handleClose();
              checkFunctionality(option);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      <Folder setOpen={setFolderOpen} open={folderopen} />
      <FileUpload setOpen={setFileOpen} open={fileopen} />
    </div>
  );
}
