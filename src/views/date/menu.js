import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

export default function SimpleMenu({
  anchorEl,
  handleClose,
  options,
  setFirstDateRange,
  setSecondDateRange,
}) {
  const dateLogic = (option) => {
    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    let selectedDate = option.value - new Date(Date.now()).getDay();
    selectedDate = new Date(Date.now()).addDays(selectedDate);
    setFirstDateRange(
      `${new Date(selectedDate).addDays(-6).toString()} to ${new Date(
        selectedDate
      ).toString()}`
    );
    setSecondDateRange(
      `${new Date(selectedDate).addDays(-13).toString()} to ${new Date(
        selectedDate
      )
        .addDays(-7)
        .toString()}`
    );
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
              dateLogic(option);
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
