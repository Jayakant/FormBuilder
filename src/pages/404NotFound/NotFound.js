import Paper from "@mui/material/Paper";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import AppLogo from "../../components/common/AppLogo";
import AppThemeSwitchIcon from "../../components/common/AppThemeSwitchIcon";
import BusAlertOutlinedIcon from "@mui/icons-material/BusAlertOutlined";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  const theme = useTheme();

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
                  <BusAlertOutlinedIcon
                    color="primary"
                    sx={{ fontSize: "105px" }}
                  />
                </Grid>

                <Grid item>
                  <Typography
                    sx={{
                      fontSize: "35px",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    Page Not Found
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
