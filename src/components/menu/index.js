import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Folder from "../Folder";
import FileUpload from "../FileUpload";
import React from "react";

export default function SimpleMenu({ anchorEl, handleClose, options, type }) {
  const [folderopen, setFolderOpen] = React.useState(false);
  const [fileopen, setFileOpen] = React.useState(false);
  const handleClickFolderOpen = () => {
    setFolderOpen(true);
  };
  const handleClickFileOpen = () => {
    setFileOpen(true);
  };
  const checkFunctionality = (typeOfMenu, option) => {
    switch (typeOfMenu) {
      case "addNewButton":
        if (option.name === "File Upload") {
          handleClickFileOpen();
        } else if (option.name === "Folder") {
          handleClickFolderOpen();
        } else {
          console.log(option.name, "is not a function");
        }
        break;

      case "dateRange":
        {
          Date.prototype.addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
          };
          let selectedDate = option.value - new Date(Date.now()).getDay();
          selectedDate = new Date(Date.now()).addDays(selectedDate);
          console.log(
            new Date(selectedDate).addDays(-6).toString(),
            " to ",
            new Date(selectedDate).toString()
          );
        }
        break;

      default:
        return;
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
              checkFunctionality(type, option);
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
      <Folder setOpen={setFolderOpen} open={folderopen} />
      <FileUpload setOpen={setFileOpen} open={fileopen} />
    </div>
  );
}
