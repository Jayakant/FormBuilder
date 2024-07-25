/*  
  Component Name: DeleteRoleButton
  Component Description: This returns the delete button in user table in manage role page
  Author: Karthikeyan,Keerthivashan
  Date of creation: 6/3/2022
*/  

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function DeleteRoleButton() {
  function handleConfirm() {
    handleClose();
    notify();
  }

  const notify = () =>
    toast.success("Deleted Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
    });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Delete" arrow>
        <IconButton onClick={handleClickOpen}>
          <DeleteTwoToneIcon color="error" />
        </IconButton>
      </Tooltip>

      <Dialog open={open} fullWidth maxWidth="sm" onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure to delete?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
