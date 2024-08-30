import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import CardTextField from "../../components/buttons_cards/CardTextField";
import TextField from "@mui/material/TextField";
import AppNotification from "../../components/common/AppNotification";
import Avatar from "@mui/material/Avatar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

// This function for displaying user active toggle button
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

export default function CreateUser() {
  const theme = useTheme();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber1, setPhoneNumber1] = React.useState("");
  const [phoneNumber2, setPhoneNumber2] = React.useState("");
  const [role, setRole] = React.useState("");
  const [reportingTo, setReportingTo] = React.useState("");

  const [checked, setChecked] = React.useState("true");
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notify = () => toast.success("User Created Successfully");

  // This validates the email address
  var emailValidation = email.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )
    ? true
    : false;

  // This validates the Phone Number1
  var phoneNumberValidation1 = phoneNumber1.match(/^\+?([0-9]{10,15})\)?$/)
    ? true
    : false;

  // This validates the Phone Number2
  var phoneNumberValidation2 = phoneNumber2.match(/^\+?([0-9]{10,15})\)?$/)
    ? true
    : false;

  // This validates the Password
  var passwordValidation = password.match(
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  )
    ? true
    : false;

  //this function validates the input fields and returns the corresponding boolean value to disable the button or not

  function formValidation() {
    var otherFieldsCondition =
      userName.length > 1 &&
      firstName.length > 1 &&
      lastName.length > 1 &&
      address.length > 1;
    return !(
      otherFieldsCondition &&
      emailValidation &&
      phoneNumberValidation1 &&
      phoneNumberValidation2 &&
      passwordValidation
    );
  }

  const [firstMouseEnter, setFirstMouseEnter] = React.useState(false);

  // This function indicates whether the cursor has entered the button atleast one time
  function mouseEnter() {
    setFirstMouseEnter(true);
  }

  //the dropdown for role field
  function Role() {
    return (
      <>
        <FormControl
          variant="filled"
          error={role === "" && firstMouseEnter ? true : false}
          fullWidth
          sx={{ mt: 2 }}
        >
          <InputLabel>Role</InputLabel>
          <Select
            value={role}
            onChange={(event) => setRole(event.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Manager</MenuItem>
            <MenuItem value={2}>Senior Manager</MenuItem>
            <MenuItem value={3}>Assistant Manager</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  }

  function ReportingTo() {
    return (
      <>
        <FormControl
          variant="filled"
          error={reportingTo === "" && firstMouseEnter ? true : false}
          fullWidth
          sx={{ mt: 2 }}
        >
          <InputLabel>Reporting To</InputLabel>
          <Select
            value={reportingTo}
            onChange={(event) => setReportingTo(event.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Hari</MenuItem>
            <MenuItem value={2}>Nikita</MenuItem>
            <MenuItem value={3}>Rohit</MenuItem>
          </Select>
        </FormControl>
      </>
    );
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
                    <PersonAddAltTwoToneIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography
                      fontWeight="500"
                      fontSize="20px"
                      variant="body1"
                    >
                      Create User
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
                    Add
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
              spacing={0}
            >
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="stretch"
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
                      Active
                      <Android12Switch
                        checked={checked}
                        onChange={handleChange}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="stretch"
                  spacing={2}
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
                          ? "Please provide a valid First Name"
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
                          ? "Please provide a valid Last Name"
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
                      error={!emailValidation && firstMouseEnter ? true : false}
                      helperText={
                        !emailValidation && firstMouseEnter
                          ? "Please provide a valid E-mail"
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
                      label="User Name"
                      type="text"
                      value={userName}
                      onChange={(event) =>
                        !event.target.value.match(/^[A-Za-z@._]*$/)
                          ? setUserName(userName)
                          : setUserName(event.target.value)
                      }
                      error={
                        userName.length < 2 && firstMouseEnter ? true : false
                      }
                      helperText={
                        userName.length < 2 && firstMouseEnter
                          ? "Please provide a valid User Name"
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={4} md={4} sm={4}>
                    <CardTextField
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      error={
                        !passwordValidation && firstMouseEnter ? true : false
                      }
                      helperText={
                        !passwordValidation && firstMouseEnter
                          ? "Password should contain a minimum of one uppercase, one lower case letter, one number and one of !@#$%^&*"
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={4} md={4} sm={4}>
                    <TextField
                      fullWidth
                      InputProps={{
                        inputProps: { maxLength: 16 },
                      }}
                      label="Phone Number 1"
                      type="text"
                      value={phoneNumber1}
                      onChange={(event) =>
                        !event.target.value.match(/^[+]?[0-9]*$/)
                          ? setPhoneNumber1(phoneNumber1)
                          : setPhoneNumber1(event.target.value)
                      }
                      variant="filled"
                      margin="normal"
                      color="primary"
                      error={
                        !phoneNumberValidation1 && firstMouseEnter
                          ? true
                          : false
                      }
                      helperText={
                        !phoneNumberValidation1 && firstMouseEnter
                          ? "Phone number should be between 10 to 15 digits with optional +"
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
                    <Role />
                  </Grid>
                  <Grid item xs={4} md={4} sm={4}>
                    <ReportingTo />
                  </Grid>
                  <Grid item xs={4} md={4} sm={4}>
                    <TextField
                      fullWidth
                      InputProps={{
                        inputProps: { maxLength: 16 },
                      }}
                      label="Phone Number 2"
                      type="text"
                      value={phoneNumber2}
                      onChange={(event) =>
                        !event.target.value.match(/^[+]?[0-9]*$/)
                          ? setPhoneNumber2(phoneNumber2)
                          : setPhoneNumber2(event.target.value)
                      }
                      variant="filled"
                      margin="normal"
                      color="primary"
                      error={
                        !phoneNumberValidation2 && firstMouseEnter
                          ? true
                          : false
                      }
                      helperText={
                        !phoneNumberValidation2 && firstMouseEnter
                          ? "Phone number should be between 10 to 15 digits with optional +"
                          : ""
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Address"
                  type="text"
                  value={address}
                  onChange={(event) =>
                    !event.target.value.match(/^[A-Za-z0-9'\.\-\s\,\:\/\(\)]*$/)
                      ? setAddress(address)
                      : setAddress(event.target.value)
                  }
                  variant="filled"
                  margin="normal"
                  color="primary"
                  error={address.length < 2 && firstMouseEnter ? true : false}
                  helperText={
                    address.length < 2 && firstMouseEnter
                      ? "Please provide a valid address"
                      : ""
                  }
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <AppNotification />
    </>
  );
}
