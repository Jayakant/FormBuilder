/*  
  Component Name: EditRole
  Component Description: This component returns the  edit role page
  Author: Karthikeyan, Keerthivashan
  Date of creation: 7/3/2022
*/

import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";
import RolesPopupTable from "../../components/a0_user_management/RolesPopupTable";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import CardTextField from "../../components/a0_user_management/CardTextField";

export default function AddRole() {
  const theme = useTheme();

  const notify = () => toast.success("Role Edited Successfully");
  const [roleName, setRoleName] = React.useState("");

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              background: theme.palette.containerComponent,
              boxShadow: theme.palette.containerComponentShadow,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    <ModeEditOutlinedIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography
                      fontWeight="500"
                      fontSize="20px"
                      variant="body1"
                    >
                      Edit Role
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={notify}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            sx={{
              pl: 3,
              display: "flex",
              flexDirection: "column",
              background: theme.palette.containerComponent,
              boxShadow: theme.palette.containerComponentShadow,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={15}
            >
              <Grid item>
                <Typography fontWeight="500" fontSize="20px" variant="body1">
                  Role Name
                </Typography>
              </Grid>
              <Grid item>
                <CardTextField
                  label="Type in"
                  type="text"
                  value={roleName}
                  onChange={(event) => setRoleName(event.target.value)}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 505,
              background: theme.palette.containerComponent,
              boxShadow: theme.palette.containerComponentShadow,
            }}
          >
            <RolesPopupTable />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
