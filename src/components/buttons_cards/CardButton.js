import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function CardButton({ label, disabled, onClick, size }) {
  return (
    <Button
      fullWidth
      color="primary"
      variant="contained"
      size={size}
      endIcon={<SendIcon />}
      disabled={disabled}
      onClick={onClick}
      sx={{ float: "right", width: "50%" }}
    >
      {label}
    </Button>
  );
}
