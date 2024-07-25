import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function DynamicCardButton({ label, disabled, onClick, size }) {
    return (
        <Button
            fullWidth
            color="primary"
            variant="contained"
            size={size}
            startIcon={<SendIcon />}
            disabled={disabled}
            onClick={onClick}
            sx={{ float: "middle", width: "100%", height: 50 }}
        >
            {label}
        </Button>
    );
}
