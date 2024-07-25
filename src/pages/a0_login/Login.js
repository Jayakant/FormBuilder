import Paper from "@mui/material/Paper";
import React from "react";
import { useTheme } from "@mui/material/styles";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import Grid from "@mui/material/Grid";
import CardTextField from "../../components/a0_user_management/CardTextField";
import CardButton from "../../components/a0_user_management/CardButton";
import AppLogo from "../../components/common/AppLogo";
import AppThemeSwitchIcon from "../../components/common/AppThemeSwitchIcon";
import AppNavLink from "../../components/common/AppNavLink";
import PasswordTwoToneIcon from "@mui/icons-material/PasswordTwoTone";
import HowToRegTwoToneIcon from "@mui/icons-material/HowToRegTwoTone";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/coreApiService/Auth";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Login() {

  const theme = useTheme();
  const auth = useAuth()

  let authObj = {
    username: "",
    password: "",
  }

  const [loginCred, setLoginCred] = React.useState(authObj)

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

  let navigate = useNavigate();

  function handleLoginButton() {
    // console.log("LoginCred: " + JSON.stringify(loginCred))
    // auth.loginUser(loginCred)
    // navigate("/home") // { replace: true }

    let flag = false

    for(let ind in auth.existingUsers){
      if(auth.existingUsers[ind].name === loginCred.username && auth.existingUsers[ind].pw === loginCred.password){
        flag = true
        break;
      }
    }

    if(flag){
      auth.loginUser(loginCred)
      navigate("/home")
    }
    else{
      navigate("/unauthorized_access")
    }

    
  }

  const [firstMouseEnter, setFirstMouseEnter] = React.useState(false);

  // This function indicates whether the cursor has entered the button atleast one time
  function mouseEnter() {
    setFirstMouseEnter(true);
  }

  // This validates the Password
  var passwordValidation = loginCred.password.match(
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) ? true : false;

  let usernameValidation = loginCred.username.match(
    /^[a-zA-Z][a-zA-Z-_]{2,}$/) ? true : false;

  return (
    <>
      <Paper sx={background_paper_style} square>
        <AppThemeSwitchIcon />
        <AppLogo />
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          padding="3%"
          paddingRight="6%"
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
                  <LockOpenTwoToneIcon color="primary" fontSize="large" />
                </Grid>

                <Grid item>
                <Typography variant="h5">Login</Typography>
                </Grid>
              </Grid>
              <CardTextField
                label="Username"
                value={loginCred.username}
                onChange={(event) => {
                  {
                    !event.target.value.match(/^[A-Za-z@._]*$/) ?
                      setLoginCred((prev) => ({
                        ...prev, username: prev.username
                      }))
                      :
                      setLoginCred((prev) => ({
                        ...prev, username: event.target.value
                      }))
                  }
                }}
                error={!usernameValidation && firstMouseEnter ? true : false}
                helperText={
                  !usernameValidation && firstMouseEnter
                    ? "Please provide a valid User Name"
                    : ""
                }
              />
              <CardTextField
                label="Password"
                type="password"
                value={loginCred.password}
                onChange={(event) => setLoginCred((prev) => ({
                  ...prev, password: event.target.value
                })
                )}
                error={!passwordValidation && firstMouseEnter ? true : false}
                helperText={
                  !passwordValidation && firstMouseEnter
                    ? "Password should contain a minimum of one uppercase, one lower case letter, one number and one of !@#$%^&*"
                    : ""
                }
              />
              <br />
              <br />
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
              >
                <Grid onMouseEnter={mouseEnter} item>
                  <CardButton
                    disabled={!(usernameValidation) || !passwordValidation}
                    onClick={handleLoginButton}
                    label="Login"
                    size="medium"
                  />
                </Grid>
              </Grid>
              <br />

              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Grid item>
                  <AppNavLink
                    href="/register"
                    label="Sign Up"
                    startIcon={<HowToRegTwoToneIcon color="primary" />}
                  />
                </Grid>
                <Grid item>
                  <AppNavLink
                    href="forgot_password"
                    label="Forgot Password"
                    startIcon={<PasswordTwoToneIcon color="primary" />}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
