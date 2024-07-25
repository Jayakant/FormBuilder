import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
import AddBoxIcon from '@mui/icons-material/AddBox';
import AbcIcon from '@mui/icons-material/Abc';
import PinIcon from '@mui/icons-material/Pin';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PasswordIcon from '@mui/icons-material/Password';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


export default function FormMainPage() {

    const [isEdit, setIsEdit] = React.useState(false);

    const theme = useTheme();

    const auth = useAuth();

    const nav = useNavigate();

    const [paramValues, setParamValues] = React.useState(auth.formArray);

    // const location = useLocation();

    function handleCancel() {
        setIsEdit(false);
        // setTextField("Hey");
    }

    function handleAddClick(type) {

        nav(`/main/addFormPage`, {
            state: {
                type
            }
        })
    }

    function handleFormFieldChange(e, ind) {

        // let clonedFormValues = formValues

        // clonedFormValues[auth.formArray[ind].label] = e.target.value

        // setFormValues(clonedFormValues)

        // console.log(clonedFormValues)



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

        // setParamValues(clonedFormArray)

    }

    let renderFormArray = [];

    const [formValues, setFormValues] = React.useState({})

    const [dropMultiSelect, setDropMultiSelect] = React.useState([])

    console.log(auth.formArray)

    React.useEffect(() => {
        for (let ind in auth.formArray) {
            if (auth.formArray[ind].type === "drop_multi") {

            }
        }
    }, [])

    for (let ind in auth.formArray) {
        if (auth.formArray[ind].type === "text") {
            // formValues[auth.formArray[ind].label] = "";
            console.log("FormArray: ", auth.formArray[ind])
            renderFormArray.push(<>
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
                            // value={paramValues[ind].value}
                            // onChange={(e) => { handleFormFieldChange(e, ind) }}
                            // error={companyName === "" && firstMouseEnter ? true : false} // displays the error line when there is no value in the field
                            />
                        </Grid>

                        {isEdit ? (<>
                            <RenderEditDeleteButtons ind={ind} />
                        </>) : (null)}
                    </Grid>
                </Grid>
            </>)
        }
        else if (auth.formArray[ind].type === "pw") {
            // formValues[auth.formArray[ind].label] = "";
            console.log("FormArray: ", auth.formArray[ind])
            renderFormArray.push(<>
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
                            // value={paramValues[ind].value}
                            // onChange={(e) => { handleFormFieldChange(e, ind) }}
                            // error={companyName === "" && firstMouseEnter ? true : false} // displays the error line when there is no value in the field
                            />
                        </Grid>

                        {isEdit ? (<>
                            <RenderEditDeleteButtons ind={ind} />
                        </>) : (null)}
                    </Grid>
                </Grid>
            </>)
        }
        else if (auth.formArray[ind].type === "num") {
            // console.log(auth.formArray[ind].label)
            renderFormArray.push(<>
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
                                // value={locText}
                                // onChange={(e) => { setLocText(e.target.value) }}
                                fullWidth

                            />
                        </Grid>

                        {isEdit ? (<>
                            <RenderEditDeleteButtons ind={ind} />
                        </>) : (null)}
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
            renderFormArray.push(<>
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

                        {isEdit ? (<>
                            <RenderEditDeleteButtons ind={ind} />
                        </>) : (null)}
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
            renderFormArray.push(<>
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

                        {isEdit ? (<>
                            <RenderEditDeleteButtons ind={ind} />
                        </>) : (null)}
                    </Grid>
                </Grid>
            </>)
        }

        else if (auth.formArray[ind].type === "date") {
            // console.log(auth.formArray[ind].label)
            renderFormArray.push(<>
                <Grid item xs={12}>
                    <Grid container spacing={0} alignItems="center" justifyContent="space-around">
                        <Grid item xs={1}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {auth.formArray[ind].label}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker sx={{ width: 250 }} />
                            </LocalizationProvider>
                        </Grid>

                        {isEdit ? (<>
                            <RenderEditDeleteButtons ind={ind} />
                        </>) : (null)}
                    </Grid>
                </Grid>
            </>)
        }

        else if (auth.formArray[ind].type === "time") {
            // console.log(auth.formArray[ind].label)
            renderFormArray.push(<>
                <Grid item xs={12}>
                    <Grid container spacing={0} alignItems="center" justifyContent="space-around">
                        <Grid item xs={1}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {auth.formArray[ind].label}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')}
                                    sx={{ width: 250 }} />
                            </LocalizationProvider>
                        </Grid>

                        {isEdit ? (<>
                            <RenderEditDeleteButtons ind={ind} />
                        </>) : (null)}
                    </Grid>
                </Grid>
            </>)
        }

        else if (auth.formArray[ind].type === "date_time") {
            // console.log(auth.formArray[ind].label)
            renderFormArray.push(<>
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
                                    defaultValue={dayjs('2022-04-17T15:30')}
                                    sx={{ width: 250 }}
                                // value={value}
                                // onChange={(newValue) => setValue(newValue)}
                                />
                            </LocalizationProvider>
                        </Grid>

                        {isEdit ? (<>
                            <RenderEditDeleteButtons ind={ind} />
                        </>) : (null)}
                    </Grid>
                </Grid>
            </>)
        }

        else if (auth.formArray[ind].type === "file") {
            renderFormArray.push(<>
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

                        {isEdit ? (<>
                            <RenderEditDeleteButtons ind={ind} />
                        </>) : (null)}
                    </Grid>
                </Grid>
            </>)
        }
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

                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Grid container spacing={2}>

                                    {isEdit ? (<>
                                        <Grid item>
                                            <ContentPasteGoIcon color="primary" fontSize="large" />
                                        </Grid>
                                        <Grid item>
                                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                                Edit Form
                                            </Typography>
                                        </Grid></>) : (<>
                                            <Grid item>
                                                <ReceiptLongIcon color="primary" fontSize="large" />
                                            </Grid>

                                            <Grid item>
                                                <Typography fontWeight="500" fontSize="20px" variant="body1">
                                                    {auth.formNameGlobal}
                                                </Typography>
                                            </Grid>
                                        </>)}
                                </Grid>
                            </Grid>
                            {isEdit ? (<> <Grid item>
                                <Grid container spacing={3} alignItems="center">
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="vHigh"
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            </>) : (<><Grid item>
                                <Grid container spacing={3} alignItems="center">
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="low"
                                            onClick={() => {
                                                setIsEdit(true);
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="low"
                                            onClick={() => {
                                                nav("/main/app", { state: { arr: auth.formArray } })
                                            }}
                                        >
                                            Access the Application
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            </>)}
                        </Grid>
                    </Paper>
                </Grid>

                {isEdit ? (<>
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
                            <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <AddBoxIcon color="primary" fontSize="large" />
                                        </Grid>
                                        <Grid item>
                                            {" "}
                                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                                Add Form Fields
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={4}>
                                            <Button
                                                fullWidth
                                                color="primary"
                                                variant="contained"
                                                size="large"
                                                startIcon={<AbcIcon />}
                                                onClick={() => {
                                                    handleAddClick("text")
                                                }}
                                                sx={{ float: "middle", width: "100%", height: 50 }}
                                            >
                                                {"Text Field"}
                                            </Button>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Button
                                                fullWidth
                                                color="primary"
                                                variant="contained"
                                                size="large"
                                                startIcon={<PinIcon />}
                                                onClick={() => {
                                                    handleAddClick("num")
                                                }}
                                                sx={{ float: "middle", width: "100%", height: 50 }}
                                            >
                                                {"Number Field"}
                                            </Button>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Button
                                                fullWidth
                                                color="primary"
                                                variant="contained"
                                                size="large"
                                                startIcon={<PasswordIcon />}
                                                onClick={() => {
                                                    handleAddClick("pw")
                                                }}
                                                sx={{ float: "middle", width: "100%", height: 50 }}
                                            >
                                                {"Password Field"}
                                            </Button>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Button
                                                fullWidth
                                                color="primary"
                                                variant="contained"
                                                size="large"
                                                startIcon={<DateRangeIcon />}
                                                onClick={() => {
                                                    handleAddClick("date")
                                                }}
                                                sx={{ float: "middle", width: "100%", height: 50 }}
                                            >
                                                {"Date Field"}
                                            </Button>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Button
                                                fullWidth
                                                color="primary"
                                                variant="contained"
                                                size="large"
                                                startIcon={<AccessTimeIcon />}
                                                onClick={() => {
                                                    handleAddClick("time")
                                                }}
                                                sx={{ float: "middle", width: "100%", height: 50 }}
                                            >
                                                {"Time Field"}
                                            </Button>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Button
                                                fullWidth
                                                color="primary"
                                                variant="contained"
                                                size="large"
                                                startIcon={<PendingActionsIcon />}
                                                onClick={() => {
                                                    handleAddClick("date_time")
                                                }}
                                                sx={{ float: "middle", width: "100%", height: 50 }}
                                            >
                                                {"Date & Time Field"}
                                            </Button>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Button
                                                fullWidth
                                                color="primary"
                                                variant="contained"
                                                size="large"
                                                startIcon={<ArrowDropDownCircleIcon />}
                                                onClick={() => {
                                                    handleAddClick("drop_single")
                                                }}
                                                sx={{ float: "middle", width: "100%", height: 50 }}
                                            >
                                                {"Single select DropDown Field"}
                                            </Button>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Button
                                                fullWidth
                                                color="primary"
                                                variant="contained"
                                                size="large"
                                                startIcon={<CheckBoxIcon />}
                                                onClick={() => {
                                                    handleAddClick("drop_multi")
                                                }}
                                                sx={{ float: "middle", width: "100%", height: 50 }}
                                            >
                                                {"Multi select DropDown Field"}
                                            </Button>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Button
                                                fullWidth
                                                color="primary"
                                                variant="contained"
                                                size="large"
                                                startIcon={<UploadFileIcon />}
                                                onClick={() => {
                                                    handleAddClick("file")
                                                }}
                                                sx={{ float: "middle", width: "100%", height: 50 }}
                                            >
                                                {"File Field"}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </>) : (null)
                }

                {auth.formArray[0] != undefined ? (<>
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
                                {renderFormArray}
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
                                    <Button variant="contained">
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </>) : (null)}

            </Grid >
            <AppNotification />
        </>
    )
}

function RenderEditDeleteButtons({ ind }) {
    const auth = useAuth();
    return (
        <Grid item xs={1}>
            <Grid container direction="row"
                spacing={0}
                justifyContent="space-around">
                <Grid item>
                    <Link to={`/main/editForm/${auth.formArray[ind].type}/${auth.formArray[ind].label}`}>
                        <Tooltip title="Edit" arrow>
                            <IconButton>
                                <ModeEditOutlinedIcon color="success" />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to={`/main/deleteForm/${auth.formArray[ind].type}/${auth.formArray[ind].label}`}>
                        <Tooltip title="Delete" arrow>
                            <IconButton>
                                <DeleteIcon color="error" />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}


function PortfolioGeograpyDropDown() {

    let dropDown = ["United States", "United Kingdom", "Canada"]

    let options = []

    for (let ind in dropDown) {
        options.push(
            <MenuItem value={dropDown[ind]} key={dropDown[ind]}>{dropDown[ind]}</MenuItem>
        )
    }

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

    const multiOptions = []

    for (let items of dropDown) {
        multiOptions.push(
            <MenuItem value={items} key={items}>{items}</MenuItem>
        )
    }

    // return (
    //     <>
    //         <FormControl sx={{ minWidth: 300 }} fullWidth >
    //             <InputLabel>Country*</InputLabel>
    //             <Select
    //                 multiple
    //                 value={portfolioDefData.country}
    //                 onChange={(e) => {
    //                     setPortfolioDefData(prev => ({ ...prev, country: e.target.value }));
    //                 }}
    //                 error={portfolioDefData.country[0] === undefined && firstMouseEnter ? true : false}
    //                 input={<OutlinedInput label="Country" />}
    //                 renderValue={(cntry) => (
    //                     <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
    //                         {cntry.map((val) => (
    //                             <Chip key={val} label={val} />
    //                         ))}
    //                     </Box>
    //                 )}
    //                 MenuProps={MenuProps}
    //             >
    //                 {multiOptions}
    //             </Select>
    //             <FormHelperText style={{ color: 'red' }}>{portfolioDefData.country[0] === undefined && firstMouseEnter ? "Please selecct country" : ""}</FormHelperText>
    //         </FormControl>
    //     </>
    // );
}