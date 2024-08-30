import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import HowToRegTwoToneIcon from "@mui/icons-material/HowToRegTwoTone";
import Grid from "@mui/material/Grid";
import CardButton from "../../components/buttons_cards/CardButton";
import AppThemeSwitchIcon from "../../components/common/AppThemeSwitchIcon";
import AppLogo from "../../components/common/AppLogo";
import CardTextField from "../../components/buttons_cards/CardTextField";
import CardHeader from "../../components/buttons_cards/CardHeader";
import AppNavLink from "../../components/common/AppNavLink";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppNotification from "../../components/common/AppNotification";
import { useAuth } from "../../components/coreApiService/Auth";

export default function Register() {
  const theme = useTheme();
  const auth = useAuth();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const background_paper_style = {
    height: "100%",
    width: "100%",
    position: "fixed",
    background: theme.palette.backgroundPaperGradient,
    overflow: "auto",
  };

  const card_paper_style = {
    width: 300,
    padding: "30px",
    background: theme.palette.mainCardColor,
    boxShadow: theme.palette.boxShadow,
  };

  const [firstMouseEnter, setFirstMouseEnter] = React.useState(false);

  // This function indicates whether the cursor has entered the button atleast one time
  function mouseEnter() {
    setFirstMouseEnter(true);
  }

  function register() {

    let newUser = {name: userName, pw: password}

    let existingUsersClone = auth.existingUsers

    existingUsersClone.push(newUser)

    auth.handleExistingUsers(existingUsersClone);

    toast.success("Registration Success")

  }

  // This validates the Password
  var passwordValidation = password.match(
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  )
    ? true
    : false;

  return (
    <>
      <Paper sx={background_paper_style} square>
        <AppThemeSwitchIcon />

        <AppLogo />

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          paddingRight="6%"
          spacing={2}
        >
          <Grid item xs={6} md={8} sm={12}>
            <Paper variant="outlined" sx={card_paper_style}>
              <Grid
                spacing={0}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <HowToRegTwoToneIcon fontSize="medium" color="primary" />
                </Grid>

                <Grid item>
                  <CardHeader label="Sign Up" />
                </Grid>
              </Grid>

              <CardTextField
                label="Username"
                value={userName}
                onChange={(event) =>
                  !event.target.value.match(/^[A-Za-z@._]*$/)
                    ? setUserName(userName)
                    : setUserName(event.target.value)
                }
                error={userName.length < 2 && firstMouseEnter ? true : false}
                helperText={
                  userName.length < 2 && firstMouseEnter
                    ? "Please provide a valid User Name"
                    : ""
                }
              />

              {/* <CardTextField
                label="First Name"
                value={firstName}
                onChange={(event) =>
                  !event.target.value.match(/^[A-Za-z\s]*$/)
                    ? setFirstName(firstName)
                    : setFirstName(event.target.value)
                }
                error={firstName.length < 2 && firstMouseEnter ? true : false}
                helperText={
                  firstName.length < 2 && firstMouseEnter
                    ? "Please provide a valid First Name"
                    : ""
                }
              /> */}

              <CardTextField
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                error={!passwordValidation && firstMouseEnter ? true : false}
                helperText={
                  !passwordValidation && firstMouseEnter
                    ? "Password should contain a minimum of one uppercase, one lower case letter, one number and one of !@#$%^&*"
                    : ""
                }
              />

              <TextField
                fullWidth
                error={password === confirmPassword ? false : true}
                size="small"
                label="Confirm Password"
                type="password"
                helperText={
                  password === confirmPassword ? "" : "Password not matching"
                }
                variant="filled"
                margin="normal"
                color={password === confirmPassword ? "divider" : "error"}
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />

              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
              >
                <Grid onMouseEnter={mouseEnter} item>
                  <CardButton
                    disabled={
                      !(userName.length > 1) ||
                      !passwordValidation ||
                      !(password === confirmPassword)
                    }
                    onClick={register}
                    label="Sign Up"
                    size="medium"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Grid item>
                  <AppNavLink
                    href="/"
                    label="Login"
                    startIcon={<LockOpenTwoToneIcon color="primary" />}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <AppNotification />
        </Grid>
      </Paper>
    </>
  );
}
