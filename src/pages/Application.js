import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/coreApiService/Auth";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AppNotification from "../components/common/AppNotification";
import { TextField, Typography, Grid, Button, Paper, InputAdornment, Tooltip, IconButton, FormControl, InputLabel, MenuItem, Select, OutlinedInput, Box, Chip } from "@mui/material";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBoxIcon from '@mui/icons-material/AddBox';
import AbcIcon from '@mui/icons-material/Abc';
import PinIcon from '@mui/icons-material/Pin';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';

export default function Application() {

    const theme = useTheme();

    const auth = useAuth();

    const nav = useNavigate();

    const location = useLocation();

    const [paramValues, setParamValues] = React.useState([])

    const [firstMouseEnter, setFirstMouseEnter] = React.useState(false)

    const [dropMultiSelect, setDropMultiSelect] = React.useState([])


    console.log("Auth' ", auth.formArray)

    function validateForm() {

        for (let ind in paramValues) {
            if (paramValues[ind].type == "text") {
                if (paramValues[ind].value.match(/^[A-Za-z ]*$/)) {
                    console.log("falseee"); return false
                }
            }
            else {
                alert("true")
                return true
            }
        }
    }

    function handleFormFieldChange(e, ind, field) {

        // let clonedFormArray = paramValues
        // console.log("ClonedArray; ", clonedFormArray)
        // let updatedFormArray = { ...clonedFormArray[ind], value: e.target.value }


        // for (let indexVal in clonedFormArray) {
        //     console.log(indexVal)
        //     if (ind == indexVal) {
        //         console.log("inside if")
        //         clonedFormArray[ind] = updatedFormArray;
        //     }
        // }
        // auth.handleFormArrayChange(clonedFormArray)
        // setParamValues(clonedFormArray)

        let clonedFormValues = paramValues;
        let updatedFormIndex = {}

        if (field == "date_time") {
            updatedFormIndex = { ...clonedFormValues[ind], type: field, value: e }

        }
        else if (field == "date") {
            updatedFormIndex = { ...clonedFormValues[ind], type: field, value: e }
        }
        else if (field == "time") {
            updatedFormIndex = { ...clonedFormValues[ind], type: field, value: e }
        }
        else {
            updatedFormIndex = { ...clonedFormValues[ind], type: field, value: e.target.value }

        }

        clonedFormValues[ind] = updatedFormIndex

        console.log(clonedFormValues)

        setParamValues(clonedFormValues)

    }

    const renderForm = [];

    renderForm.push(<>
        <Grid item xs={12}></Grid>
    </>)

    for (let ind in auth.formArray) {
        if (auth.formArray[ind].type === "text") {
            // formValues[auth.formArray[ind].label] = "";
            console.log("FormArray: ", auth.formArray[ind])
            renderForm.push(<>
                <Grid item xs={12}>
                    <Grid container spacing={0} alignItems="center" justifyContent="space-around">
                        <Grid item xs={1}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {auth.formArray[ind].label}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                sx={{ minWidth: 250, margin: 0, padding: 0 }}
                                label={auth.formArray[ind].label}
                                variant="filled"
                                value={paramValues[ind]}
                                onChange={(e) => { handleFormFieldChange(e, ind, auth.formArray[ind].type) }}
                                error={paramValues[ind] === "" ? true : false} // displays the error line when there is no value in the field
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </>)
        }
        else if (auth.formArray[ind].type === "pw") {
            // formValues[auth.formArray[ind].label] = "";
            console.log("FormArray: ", auth.formArray[ind])
            renderForm.push(<>
                <Grid item xs={12}>
                    <Grid container spacing={0} alignItems="center" justifyContent="space-around">
                        <Grid item xs={1}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {auth.formArray[ind].label}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                sx={{ minWidth: 250, margin: 0, padding: 0 }}
                                label={auth.formArray[ind].label}
                                variant="filled"
                                type="password"
                                value={paramValues[ind]}
                                onChange={(e) => { handleFormFieldChange(e, ind, auth.formArray[ind].type) }}

                            // error={companyName === "" && firstMouseEnter ? true : false} // displays the error line when there is no value in the field
                            />
                        </Grid>

                    </Grid>
                </Grid>
            </>)
        }
        else if (auth.formArray[ind].type === "num") {
            // console.log(auth.formArray[ind].label)
            renderForm.push(<>
                <Grid item xs={12}>
                    <Grid container spacing={0} alignItems="center" justifyContent="space-around">
                        <Grid item xs={1}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {auth.formArray[ind].label}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                sx={{ minWidth: 250, margin: 0, padding: 0 }}
                                type='number'
                                InputProps={{
                                    inputProps: { min: parseInt(auth.formArray[ind].min), max: parseInt(auth.formArray[ind].max), step: parseInt(auth.formArray[ind].step) },
                                    endAdornment: (
                                        <InputAdornment position="end">{""}</InputAdornment>
                                    ),
                                }}
                                label={auth.formArray[ind].label}
                                variant="filled"
                                value={paramValues[ind]}
                                onChange={(e) => { handleFormFieldChange(e, ind, auth.formArray[ind].type) }}
                                fullWidth

                            />
                        </Grid>
                    </Grid>
                </Grid>
            </>)
        }
        else if (auth.formArray[ind].type === "drop_single") {
            let dropDownValueArray = auth.formArray[ind].dropDownValues
            let dropDownArrayRender = [];

            for (let i in dropDownValueArray) {
                dropDownArrayRender.push(
                    <MenuItem key={i} value={dropDownValueArray[i]}>{dropDownValueArray[i]}</MenuItem>
                )
            }


            // console.log(auth.formArray[ind].label)
            renderForm.push(<>
                <Grid item xs={12}>
                    <Grid container spacing={0} alignItems="center" justifyContent="space-around">
                        <Grid item xs={1}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {auth.formArray[ind].label}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl
                                variant="filled"
                                sx={{ width: 250 }}
                            >
                                <InputLabel>{auth.formArray[ind].label}</InputLabel>
                                <Select>
                                    {dropDownArrayRender}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </>)
        }

        else if (auth.formArray[ind].type === "drop_multi") {

            const ITEM_HEIGHT = 48;
            const ITEM_PADDING_TOP = 8;
            const MenuProps = {
                PaperProps: {
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                        width: 250,
                    },
                },
            };

            let dropDownValueArray = auth.formArray[ind].dropDownValues
            let dropDownArrayRender = [];

            for (let i in dropDownValueArray) {
                dropDownArrayRender.push(
                    <MenuItem key={i} value={dropDownValueArray[i]}>{dropDownValueArray[i]}</MenuItem>
                )
            }

            // console.log(auth.formArray[ind].label)
            renderForm.push(<>
                <Grid item xs={12}>
                    <Grid container spacing={0} alignItems="center" justifyContent="space-around">
                        <Grid item xs={1}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {auth.formArray[ind].label}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl sx={{ minWidth: 250 }} fullWidth >
                                <InputLabel>{auth.formArray[ind].label}</InputLabel>
                                <Select
                                    multiple
                                    value={dropMultiSelect}
                                    onChange={(e) => {
                                        // setDropMultiSelect(prev => ({ ...prev, country: e.target.value }));
                                        setDropMultiSelect(e.target.value)
                                    }}
                                    // error={portfolioDefData.country[0] === undefined && firstMouseEnter ? true : false}
                                    input={<OutlinedInput label="Country" />}
                                    renderValue={(cntry) => (
                                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                            {cntry.map((val) => (
                                                <Chip key={val} label={val} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {dropDownArrayRender}
                                </Select>
                                {/* <FormHelperText style={{ color: 'red' }}>{portfolioDefData.country[0] === undefined && firstMouseEnter ? "Please selecct country" : ""}</FormHelperText> */}
                            </FormControl>
                        </Grid>

                    </Grid>
                </Grid>
            </>)
        }

        else if (auth.formArray[ind].type === "date") {
            // console.log(auth.formArray[ind].label)
            renderForm.push(<>
                <Grid item xs={12}>
                    <Grid container spacing={0} alignItems="center" justifyContent="space-around">
                        <Grid item xs={1}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {auth.formArray[ind].label}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker sx={{ width: 250 }}
                                    value={paramValues[ind]}
                                    onChange={(e) => { handleFormFieldChange(e, ind, auth.formArray[ind].type) }}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </Grid>
            </>)
        }

        else if (auth.formArray[ind].type === "time") {
            // console.log(auth.formArray[ind].label)
            renderForm.push(<>
                <Grid item xs={12}>
                    <Grid container spacing={0} alignItems="center" justifyContent="space-around">
                        <Grid item xs={1}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {auth.formArray[ind].label}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <MobileTimePicker
                                    sx={{ width: 250 }}
                                    value={paramValues[ind]}
                                    onChange={(e) => { handleFormFieldChange(e, ind, auth.formArray[ind].type) }}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </Grid>
            </>)
        }

        else if (auth.formArray[ind].type === "date_time") {
            // console.log(auth.formArray[ind].label)
            renderForm.push(<>
                <Grid item xs={12}>
                    <Grid container spacing={0} alignItems="center" justifyContent="space-around">
                        <Grid item xs={1}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {auth.formArray[ind].label}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <MobileDateTimePicker
                                    sx={{ width: 250 }}
                                    value={paramValues[ind]}
                                    onChange={(newVal) => { handleFormFieldChange(newVal, ind, auth.formArray[ind].type) }}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </Grid>
            </>)
        }

        else if (auth.formArray[ind].type === "file") {
            renderForm.push(<>
                <Grid item xs={12}>
                    <Grid container spacing={0} alignItems="center" justifyContent="space-around">
                        <Grid item xs={1}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {auth.formArray[ind].label}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <>
                                <Grid container alignItems="center" >
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            sx={{ width: 100 }}
                                            component="label"
                                            startIcon={
                                                <FileUploadIcon />
                                            }
                                            color="primary"
                                        >
                                            Upload
                                            <TextField
                                                type="file"
                                                variant="outlined"
                                                // onChange={handleExposureDataFileUpload}
                                                style={{ display: "none" }}
                                                sx={{ width: 100 }}
                                            />
                                        </Button>
                                    </Grid>
                                    {/* {isExposureDataUploaded ?
                        <Grid item>{"   "}{localFileName}</Grid> : null
                    } */}
                                </Grid>
                                <center>
                                    <Typography fontSize={13} variant="body1">
                                        {"Allowed extensions: " + auth.formArray[ind].extensions}
                                    </Typography>
                                </center>
                            </>
                        </Grid>

                    </Grid>
                </Grid>
            </>)
        }
    }

    renderForm.push(<>
        <Grid item xs={12}></Grid></>)

    return (<>
        {/* <Grid container spacing={3}>
            {renderForm}
        </Grid> */}

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

                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ReceiptLongIcon color="primary" fontSize="large" />
                                </Grid>

                                <Grid item>
                                    <Typography fontWeight="500" fontSize="20px" variant="body1">
                                        {auth.formNameGlobal}
                                    </Typography>
                                </Grid>
                            </Grid>
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
                    <Grid container spacing={3}>

                        <Grid item xs={12}>
                        </Grid>

                    </Grid>

                    <Grid container spacing={3}>
                        {renderForm}
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
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Grid item xs={11}></Grid>
                        <Grid item xs={1}>
                            <span>
                                <Button
                                    variant="contained"
                                    onClick={() => { toast.success("Form Submitted Successfully") }}

                                >
                                    Submit
                                </Button>
                            </span>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <AppNotification />
        </Grid >
    </>)

}