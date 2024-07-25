import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppLogo from "../../components/common/AppLogo";
import AppThemeSwitchIcon from "./AppThemeSwitchIcon";
import { useTheme } from "@mui/material/styles";
import Logout from "@mui/icons-material/Logout";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../coreApiService/Auth";

import { Avatar } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { rootUrl } from "../coreApiService/config";
import ListItem from '@mui/material/ListItem';
import darkUserProfile from "../../../src/images/darkUserProfile.png"
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const drawerWidth = 290;

export default function AppNavBar() {

  const auth = useAuth()

  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  let navigate = useNavigate();

  function logout() {
    auth.logoutUser()
    navigate("/");
  }

  function navigateDjangoAdmin() {
    window.open(rootUrl + "admin/login/?next=/admin/")
  }

  const [profileDialog, setprofileDialog] = React.useState(false);
  // dialog
  const handleProfileClose = () => {
    setprofileDialog(false)
  }


  return (
    <Box sx={{ display: "flex", border: 0 }}>
      <CssBaseline />
      <AppBar position="absolute" open={false}>
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <AppLogo />
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            columnSpacing={4}
            sx={{ marginRight: "5.9%" }} //1.5%
          >
            <Grid item>
              <Toolbar onClick={() => { setprofileDialog(true) }}>
                <Avatar
                  alt="Profile"
                  sx={{ width: 42, height: 42, p: "1%" }}
                  src={darkUserProfile}
                />
              </Toolbar>
              <Dialog open={profileDialog} sx={{
                "& .MuiDialog-container": {
                  alignItems: "flex-end",
                  paddingLeft: "81%",
                  paddingBottom: "32%"
                },
                "&.div.MuiPaper": {
                  padding: 0,
                  margin: 0,
                }
                // display:"inherit"
              }} onClose={handleProfileClose}>
                <DialogContent>
                  <center>
                    <Typography variant="body4" fontSize="16px" fontWeight={545}>
                      Hello {auth.userSession?.username}
                    </Typography>
                  </center>
                  <List sx={{ width: 140 }} component="nav" aria-label="mailbox folders">
                    <Divider />

                    <ListItem button onClick={navigateDjangoAdmin}>
                      <ManageAccountsIcon color="primary" fontSize="small" />
                      <Typography variant="body4" fontSize="15px" gutterBottom={false} fontWeight={545} align="left">
                        {" "}
                        Admin Panel
                      </Typography>
                    </ListItem>

                    <Divider />

                    <ListItem button onClick={logout}>
                      <Logout color="primary" fontSize="small" />

                      <Typography variant="body4" fontSize="16px" fontWeight={545} align="left">
                        {" "}
                        Logout
                      </Typography>
                    </ListItem>
                    <Divider />

                  </List>

                </DialogContent>
              </Dialog>
            </Grid>
            <Grid item>
            <AppThemeSwitchIcon sx={{ justifyContent: "flex-start" }} />
              </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          background: theme.palette.container,
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </Box >
  );
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
