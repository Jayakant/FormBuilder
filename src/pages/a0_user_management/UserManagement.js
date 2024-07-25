import * as React from "react";
import UserTable from "../../components/a0_user_management/UserTable";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useTheme } from "@emotion/react";
// import CreateUser from "../../components/a0_user_management/CreateUser";
import ManageAccountsTwoTone from "@mui/icons-material/ManageAccountsTwoTone";
import Typography from "@mui/material/Typography";
import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function CreateUserButton() {
  return (
    <>
      <Link
        to="/user_management/create_user"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<PersonAddAltTwoToneIcon />}
        >
          Create User
        </Button>
      </Link>
    </>
  );
}

export default function UserManagement() {
  const theme = useTheme();

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
                    <ManageAccountsTwoTone color="primary" fontSize="large" />
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography
                      fontWeight="500"
                      fontSize="20px"
                      variant="body1"
                    >
                      Manage Users
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <CreateUserButton />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            sx={{
              height: "100%",
              p: 2,
              display: "flex",
              flexDirection: "column",
              background: theme.palette.containerComponent,
              boxShadow: theme.palette.containerComponentShadow,
            }}
          >
            <UserTable />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
