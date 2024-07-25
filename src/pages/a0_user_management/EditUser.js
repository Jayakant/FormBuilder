/*  
  Component Name: EditUser
  Component Description: This component returns the  edit user page
  Author: Karthikeyan, Keerthivashan
  Date of creation: 7/3/2022
*/

import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import CardTextField from "../../components/a0_user_management/CardTextField";
import TextField from "@mui/material/TextField";
import AppNotification from "../../components/common/AppNotification";
import Avatar from "@mui/material/Avatar";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export default function EditUser() {
  const theme = useTheme();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [id, setId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  //returns yes or no depending on the active toggle switch in the form
  function isActive() {
    return checked ? "yes" : "no";
  }

  const notify = () => toast.success("User Edited Successfully");

  const [firstMouseEnter, setFirstMouseEnter] = React.useState(false);

  // This function indicates whether the cursor has entered the button atleast one time
  function mouseEnter() {
    setFirstMouseEnter(true);
  }

  // This is for email validation
  var emailValidation = email.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )
    ? true
    : false;

  //this function validates the input fields and returns the corresponding boolean value to disable the button or not
  function formValidation() {
    var otherFieldsCondition =
      id > 0 &&
      userName.length > 1 &&
      firstName.length > 1 &&
      lastName.length > 1 &&
      fullName.length > 1;
    return !(otherFieldsCondition && emailValidation);
  }

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
                    {" "}
                    <Typography
                      fontWeight="500"
                      fontSize="20px"
                      variant="body1"
                    >
                      Edit User
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <span onMouseEnter={mouseEnter}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={notify}
                    disabled={formValidation()}
                  >
                    save changes
                  </Button>
                </span>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              background: theme.palette.containerComponent,
              boxShadow: theme.palette.containerComponentShadow,
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="space-around"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <Avatar>
                      <AccountCircleTwoToneIcon
                        color="primary"
                        sx={{ fontSize: 30 }}
                      />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Typography>
                      {" "}
                      Active{" "}
                      <Android12Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={2}
                  >
                    <Grid item xs={4} md={4} sm={4}>
                      <TextField
                        fullWidth
                        InputProps={{
                          inputProps: { min: 0 },
                        }}
                        label="ID"
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                        type="number"
                        variant="filled"
                        margin="normal"
                        color="primary"
                        error={id < 1 && firstMouseEnter ? true : false}
                        helperText={
                          id < 1 && firstMouseEnter
                            ? "Please provide a valid ID"
                            : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={4} md={4} sm={4}>
                      <CardTextField
                        label="User Name"
                        type="text"
                        value={userName}
                        onChange={(event) =>
                          !event.target.value.match(/^[A-Za-z]*$/)
                            ? setUserName(userName)
                            : setUserName(event.target.value)
                        }
                        error={
                          userName.length < 2 && firstMouseEnter ? true : false
                        }
                        helperText={
                          userName.length < 2 && firstMouseEnter
                            ? "User Name should have a minimum of 2 characters"
                            : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={4} md={4} sm={4}>
                      <CardTextField
                        label="Full Name"
                        type="text"
                        value={fullName}
                        onChange={(event) =>
                          !event.target.value.match(/^[A-Za-z\s]*$/)
                            ? setFullName(fullName)
                            : setFullName(event.target.value)
                        }
                        error={
                          fullName.length < 2 && firstMouseEnter ? true : false
                        }
                        helperText={
                          fullName.length < 2 && firstMouseEnter
                            ? "Please provide a valid Full Name"
                            : ""
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}
                  >
                    <Grid item xs={4} md={4} sm={4}>
                      <CardTextField
                        label="First Name"
                        type="text"
                        value={firstName}
                        onChange={(event) =>
                          !event.target.value.match(/^[A-Za-z\s]*$/)
                            ? setFirstName(firstName)
                            : setFirstName(event.target.value)
                        }
                        error={
                          firstName.length < 2 && firstMouseEnter ? true : false
                        }
                        helperText={
                          firstName.length < 2 && firstMouseEnter
                            ? "First Name should have a minimum of 2 characters"
                            : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={4} md={4} sm={4}>
                      <CardTextField
                        label="Last Name"
                        type="text"
                        value={lastName}
                        onChange={(event) =>
                          !event.target.value.match(/^[A-Za-z\s]*$/)
                            ? setLastName(lastName)
                            : setLastName(event.target.value)
                        }
                        error={
                          lastName.length < 2 && firstMouseEnter ? true : false
                        }
                        helperText={
                          lastName.length < 2 && firstMouseEnter
                            ? "Last Name should have a minimum of 2 characters"
                            : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={4} md={4} sm={4}>
                      <TextField
                        fullWidth
                        label="E-mail"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        variant="filled"
                        margin="normal"
                        color="primary"
                        error={
                          !emailValidation && firstMouseEnter ? true : false
                        }
                        helperText={
                          !emailValidation && firstMouseEnter
                            ? "Please provide a valid E-mail"
                            : ""
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <AppNotification />
    </>
  );
}
