import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import LightTheme from "./themes/LightTheme";
import DarkTheme from "./themes/DarkTheme";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./components/coreApiService/Auth"

export const ColorModeContext = React.createContext({
  toggleColorMode: () => { },
});

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () => (mode === "light" ? LightTheme : DarkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
