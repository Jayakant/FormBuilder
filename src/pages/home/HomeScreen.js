import * as React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppLogo from "../../components/common/AppLogo";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/coreApiService/Auth";
import { Avatar } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { rootUrl } from "../../components/coreApiService/config";
import darkUserProfile from "../../../src/images/darkUserProfile.png"
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TelegramIcon from '@mui/icons-material/Telegram';

function HomeAppBar({ content }) {

  const auth = useAuth();

  const theme = useTheme();

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
    <>
      <Box sx={{ display: "flex", border: 0 }}>
        <CssBaseline />
        <AppBar position="absolute">
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
              {/* <Grid item>
              <Typography fontWeight="200" fontSize="20px">
                {auth.userSession?.username}
              </Typography>
            </Grid> */}
              <Grid item>
                <Toolbar onClick={() => { setprofileDialog(true) }}>
                  <Avatar
                    sx={{ width: 42, height: 42, p: "1%" }}
                    src={darkUserProfile}
                  />
                </Toolbar>
                <Dialog open={profileDialog} sx={{
                  "& .MuiDialog-container": {
                    alignItems: "flex-end",
                    paddingLeft: "81%",
                    paddingBottom: "31.8%"
                  }
                  // display:"inherit"
                }} maxWidth="sm" onClose={handleProfileClose}>
                  <DialogContent>
                    <center>
                      <Grid item>

                        <Typography variant="body4" fontSize="16px" fontWeight={545}>
                          Hello {auth.userSession?.username}
                        </Typography>
                      </Grid>
                    </center>
                    <br></br>
                    <Grid item>
                      <Button
                        // variant="contained"
                        color="secondary"
                        onClick={navigateDjangoAdmin}
                        sx={{
                          textTransform: 'none',
                          "&:hover": {
                            backgroundColor: theme.palette.profileButtonHover,
                          },
                          width: 150,
                        }}
                        startIcon={<ManageAccountsIcon color="primary" />}
                      >
                        <Typography variant="body4" fontSize="16px" gutterBottom={false} fontWeight={545} align="left">
                          Admin Panel
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item>

                      <Button
                        // variant="contained"
                        color="secondary"
                        startIcon={<Logout color="primary" />}
                        sx={{
                          textTransform: 'none',
                          "&:hover": {
                            backgroundColor: theme.palette.profileButtonHover,
                          },
                          width: 150
                        }}
                        onClick={logout}
                      >
                        <Typography variant="body4" fontSize="16px" fontWeight={545} align="left">
                          Logout
                        </Typography>
                      </Button>
                    </Grid>
                    {/* </Grid> */}
                  </DialogContent>
                </Dialog>
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
            {content}
          </Container>
        </Box>
      </Box>
    </>
  );
}

function HomeScreenContent() {
  const nav = useNavigate();
  const [formName, setFormName] = React.useState("")
  const [firstMouseEnter, setFirstMouseEnter] = React.useState(false)
  const auth = useAuth()

  function validateProceedButton() {
    let returnStmt = true
    if (formName.match(/^[A-Za-z ]*$/) && formName.length >= 3) {
      returnStmt = false
    }
    return returnStmt
  }
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={8}
      >
        <Grid item>
          <Typography variant="h5">
            Hello {auth.userSession?.username}, please provide the name of the application :
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={4}
              >
                <Grid item>
                  <TextField
                    sx={{ width: 200 }}
                    label="Form Name"
                    variant="filled"
                    value={formName}
                    onChange={(e) => {
                      setFormName(e.target.value)
                    }}
                    error={(!formName.match(/^[A-Za-z ]*$/) || formName.length < 3) && firstMouseEnter ? true : false}
                    helperText={(!formName.match(/^[A-Za-z ]*$/) || formName.length < 3) && firstMouseEnter ? "Pleasee provide a valid application name" : ""}
                  />
                </Grid><br></br>
                <Grid item>
                  <span onMouseEnter={() => {
                    setFirstMouseEnter(true)
                  }}>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      size="large"
                      startIcon={<TelegramIcon />}
                      onClick={() => {
                        nav("/main/formPage")
                        auth.handleFormNameChange(formName)
                      }}
                      disabled={validateProceedButton()}
                    >
                      Proceed
                    </Button>
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
              >
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default function HomeScreen() {
  return (
    <>
      <HomeAppBar content={<HomeScreenContent />} />
    </>
  );
}
