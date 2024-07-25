/*  
  Component Name: ManageRoles
  Component Description: This component is meant for displaying manage roles page 
  Author: Sree Charan, Karthikeyan, Keerthivashan
  Date of creation: 7/3/2022
*/

import * as React from "react";
import RolesTable from "../../components/a0_user_management/RolesTable";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useTheme } from "@emotion/react";
// import AddRole from "../../components/a0_user_management/AddRole";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import Typography from "@mui/material/Typography";
import AddModeratorTwoToneIcon from "@mui/icons-material/AddModeratorTwoTone";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function AddRoleButton() {
  return (
    <>
      <Link to="/user_management/add_role" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddModeratorTwoToneIcon />}
        >
          Add Role
        </Button>
      </Link>
    </>
  );
}

export default function ManageRoles() {
  const theme = useTheme();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            background: theme.palette.containerComponent,
            // color: "#ffffff",
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
                  <BadgeTwoToneIcon color="primary" fontSize="large" />
                </Grid>
                <Grid item>
                  <Typography fontWeight="500" fontSize="20px" variant="body1">
                    Manage Roles
                  </Typography>{" "}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <AddRoleButton />
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
            background: theme.palette.containerComponent,
            boxShadow: theme.palette.containerComponentShadow,
          }}
        >
          <RolesTable />
        </Paper>
      </Grid>
    </Grid>
  );
}
