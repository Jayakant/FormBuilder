import IconButton from "@mui/material/IconButton";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../App";
import { Switch } from "@mui/material";
export default function AppThemeSwitchIcon() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <IconButton
      sx={{
        p: 2,
        gridArea: "header",
        float: "right",
      }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <SwitchNew color="primary" checked={true} />
      ) : (
        <SwitchNew color="primary" checked={false} />
      )}
    </IconButton>
  );
}

function SwitchNew(){
  return(
    <Switch
    // checked={checked}
    // onChange={handleChange}
    inputProps={{ 'aria-label': 'controlled' }}
  />
  )
}

