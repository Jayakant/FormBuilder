import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";

export default function AppLogo() {
  const theme = useTheme();
  return (
    <Avatar
      alt="Logo"
      sx={{ width: 65, height: 65, p: "1%" }}
      src={theme.palette.logo}
    />
  );
}
