import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import PasswordTwoToneIcon from "@mui/icons-material/PasswordTwoTone";
import Grid from "@mui/material/Grid";
import CardButton from "../../components/a0_user_management/CardButton";
import AppThemeSwitchIcon from "../../components/common/AppThemeSwitchIcon";
import AppLogo from "../../components/common/AppLogo";
import CardTextField from "../../components/a0_user_management/CardTextField";
import CardHeader from "../../components/a0_user_management/CardHeader";
import AppNavLink from "../../components/common/AppNavLink";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";

export default function ForgotPassword() {
  const theme = useTheme();
  const [userName, setUserName] = useState("");
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

  function forgotPassword() {}

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
          padding="2%"
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
                  <PasswordTwoToneIcon color="primary" fontSize="large" />
                </Grid>

                <Grid item>
                  <CardHeader label="Forgot Password" />
                </Grid>
              </Grid>
              <br />

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
                    disabled={!(userName.length > 1 && userName.length < 33)}
                    onClick={forgotPassword}
                    label="Proceed"
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
                    href="/"
                    label="Login"
                    startIcon={<LockOpenTwoToneIcon color="primary" />}
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
