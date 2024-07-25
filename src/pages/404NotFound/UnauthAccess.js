import Paper from "@mui/material/Paper";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import AppLogo from "../../components/common/AppLogo";
import AppThemeSwitchIcon from "../../components/common/AppThemeSwitchIcon";
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import Typography from "@mui/material/Typography";
import AppNavLink from "../../components/common/AppNavLink";
import LoginIcon from '@mui/icons-material/Login';

export default function UnauthAccess() {
  const theme = useTheme();
  // const redirectPath = location.state?.from?.pathname || "/home"
  // console.log(redirectPath)

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

  // function handleOnClick() {
  //   <Link to="/" state={{ path: redirectPath }} />
  // }

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
          padding="6%"
          spacing={5}
        >
          <Grid item xs={6} md={8} sm={12}>
            <Paper variant="outlined" sx={card_paper_style}>
              <Grid
                spacing={3}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <NotInterestedIcon
                    color="primary"
                    sx={{ fontSize: "105px" }}
                  />
                </Grid>

                <Grid item>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    Unauthorized Access
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              spacing={2}
            >
              {/* <Grid item>
                {/* <Button onClick={handleOnClick}>Login</Button> 
                <Link to="/" state={{path: redirectPath}}>Login</Link>
              </Grid> */}
              <Grid item>

                <AppNavLink
                  href="/"
                  label="Login"
                  startIcon={<LoginIcon color="primary" />}
                />
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
