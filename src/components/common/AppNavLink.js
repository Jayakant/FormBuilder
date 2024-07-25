import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, } from "react-router-dom";

export default function AppNavLink({ href, label, startIcon }) {
  return (
    <>
      <Link to={href} style={{ textDecoration: "none" }}>
        <Button variant="text" color="inherit" startIcon={startIcon}>
          <Typography fontWeight="270" fontSize="16px">
            {label}
          </Typography>
        </Button>
      </Link>
    </>
  );
}
