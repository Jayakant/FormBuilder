import { useTheme } from "@emotion/react";
import { ToastContainer } from "react-toastify";

export default function AppNotification() {
  const theme = useTheme();
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme.palette.mode}
    />
  );
}
