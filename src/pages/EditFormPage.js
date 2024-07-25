import * as React from "react";
import { TextField, Typography, Grid, Button, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../components/coreApiService/Auth";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';


export default function EditFormPage() {

    const auth = useAuth();

    const theme = useTheme();

    const nav = useNavigate();

    const { type, label } = useParams()

    const [fieldParam, setFieldParam] = React.useState({});

    const [formFieldIndex, setFormFieldIndex] = React.useState(0);

    React.useEffect(() => {
        for (let ind in auth.formArray) {
            if (auth.formArray[ind].label === label) {
                setFormFieldIndex(ind);
                setFieldParam(auth.formArray[ind]);
            }
        }
    }, [])

    function handleCancel() {
        nav(`/main/formPage`)
    }

    function handleSaveClick() {
        let formArrayClone = auth.formArray;

        if (type === "drop_single" || type === "drop_multi") {
            let fieldParamClone = fieldParam
            let updatedfieldParamClone = fieldParamDropDownValues
            fieldParamClone.dropDownValues = updatedfieldParamClone
            setFieldParam(fieldParamClone)
            console.log(fieldParamClone)

        }

        for (let indexVal in formArrayClone) {
            if (indexVal == formFieldIndex) {
                formArrayClone[indexVal] = fieldParam;
                console.log(fieldParam)
            }
        }
        auth.handleFormArrayChange(formArrayClone)
        nav(`/main/formPage`)
    }

    const [dropDownValueRender, setdropDownValueRender] = React.useState([])

    const [fieldParamDropDownValues, setFieldParamDropDownValues] = React.useState([])

    React.useEffect(() => {
        if (type === "drop_single" || type === "drop_multi") {
            console.log(auth.formArray[0].label, label)
            if (fieldParam.count != undefined || fieldParam.count > 0) {

                let fieldParamClone = fieldParamDropDownValues

                let dropDOwnArray = []

                for (let j = 0; j < fieldParam.count; j++) {
                    dropDOwnArray.push("");
                }

                fieldParamClone = dropDOwnArray;

                console.log(fieldParamClone)

                setFieldParamDropDownValues(fieldParamClone)

                function handleDropDownChange(e, indexVal) {
                    let clonedArray = fieldParamDropDownValues


                    clonedArray[indexVal] = e.target.value

                    // clonedArray.push(e.target.value)
                    console.log(clonedArray)


                    setFieldParamDropDownValues(clonedArray)
                }

                let renderUi = []
                for (let i = 0; i < fieldParam.count; i++) {
                    let indexVal = i
                    renderUi.push(<>
                        <Grid container alignItems="center" justifyContent="space-evenly" spacing={2}>
                            <Grid item xs={4}>
                                <Typography fontWeight="500" fontSize="17px" variant="body1">
                                    {"  "} Enter Item {i+1}
                                </Typography>
                            </Grid>
                            <Grid item xs={3.5}>
                                <TextField
                                    sx={{ width: 200 }}
                                    label={`Enter value*`}
                                    variant="filled"
                                    // error={firstMouseEnter ? true : false}
                                    // helperText={firstMouseEnter ? "Please provide drop down values" : ""}
                                    value={fieldParamDropDownValues[i]}
                                    onChange={(e) => handleDropDownChange(e, indexVal)}
                                />

                            </Grid>
                        </Grid>
                        <Grid item xs={12}></Grid>
                    </>)
                }

                setdropDownValueRender(renderUi);
            }
        }
    }, [fieldParam.count])
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
                                    <Grid item>
                                        <ReceiptLongIcon color="primary" fontSize="large" />
                                    </Grid>
                                    <Grid item>
                                        {" "}
                                        <Typography fontWeight="500" fontSize="20px" variant="body1">
                                            Edit
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Grid container spacing={3} alignItems="center">
                                    <Grid item>

                                        <Button
                                            variant="contained"
                                            color="low"
                                            onClick={handleSaveClick}
                                        >
                                            Save
                                        </Button>
                                    </Grid>

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

                            {type === "text" ? (
                                <>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                            <Grid item xs={4}>
                                                <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                    Text Field Label
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3.5}>
                                                <TextField
                                                    sx={{ width: 200 }}
                                                    label="Label Name*"
                                                    variant="filled"
                                                    // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                    // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                    value={fieldParam.label}
                                                    onChange={(e) => {
                                                        setFieldParam((prev) => ({
                                                            ...prev, label: e.target.value
                                                        }))
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>
                            ) : (null)}

                            {type === "pw" ? (
                                <>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                            <Grid item xs={4}>
                                                <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                    Password Field Label
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3.5}>
                                                <TextField
                                                    sx={{ width: 200 }}
                                                    label="Label Name*"
                                                    variant="filled"
                                                    // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                    // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                    value={fieldParam.label}
                                                    onChange={(e) => {
                                                        setFieldParam((prev) => ({
                                                            ...prev, label: e.target.value
                                                        }))
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>
                            ) : (null)}

                            {type === "num" ? (<>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                        <Grid item xs={4}>
                                            <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                Number Field Label
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <TextField
                                                sx={{ width: 200 }}
                                                label="Label Name*"
                                                variant="filled"
                                                // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                value={fieldParam.label}
                                                onChange={(e) => {
                                                    setFieldParam((prev) => ({
                                                        ...prev, label: e.target.value
                                                    }))
                                                }} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                        <Grid item xs={4}>
                                            <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                Minimum Value
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <TextField
                                                sx={{ width: 200 }}
                                                label="Minimum Value*"
                                                variant="filled"
                                                type="number"
                                                // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                value={fieldParam.min}
                                                onChange={(e) => {
                                                    setFieldParam((prev) => ({
                                                        ...prev, min: e.target.value
                                                    }))
                                                }} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                        <Grid item xs={4}>
                                            <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                Maximum Value
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <TextField
                                                sx={{ width: 200 }}
                                                label="Maximum Value*"
                                                variant="filled"
                                                type="number"
                                                // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                value={fieldParam.max}
                                                onChange={(e) => {
                                                    setFieldParam((prev) => ({
                                                        ...prev, max: e.target.value
                                                    }))
                                                }} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                        <Grid item xs={4}>
                                            <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                Step Value
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <TextField
                                                sx={{ width: 200 }}
                                                label="Step Value*"
                                                variant="filled"
                                                type="number"
                                                // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                value={fieldParam.step}
                                                onChange={(e) => {
                                                    setFieldParam((prev) => ({
                                                        ...prev, step: e.target.value
                                                    }))
                                                }} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </>) : (null)}

                            {type === "drop_single" ? (<>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                        <Grid item xs={4}>
                                            <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                Drop Down Field Label
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <TextField
                                                sx={{ width: 200 }}
                                                label="Label Name*"
                                                variant="filled"
                                                // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                value={fieldParam.label}
                                                onChange={(e) => {
                                                    setFieldParam((prev) => ({
                                                        ...prev, label: e.target.value
                                                    }))
                                                }} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                        <Grid item xs={4}>
                                            <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                Number of drop down items
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <TextField
                                                sx={{ width: 200 }}
                                                label="Items count*"
                                                variant="filled"
                                                type="number"
                                                // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                value={fieldParam.count}
                                                onChange={(e) => {
                                                    setFieldParam((prev) => ({
                                                        ...prev, count: e.target.value
                                                    }))
                                                }} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                        <Grid item xs={4}>
                                            <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                Enter {fieldParam.count} Items
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <TextField
                                                sx={{ width: 200 }}
                                                label="DropDown Values*"
                                                variant="filled"
                                                // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                value={fieldParam.dropDownValues}
                                                onChange={(e) => {
                                                    setFieldParam((prev) => ({
                                                        ...prev, dropDownValues: e.target.value
                                                    }))
                                                }} />
                                        </Grid>
                                    </Grid>
                                </Grid> */}

                                <Grid item xs={12}></Grid>

                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        {dropDownValueRender}
                                    </Grid>
                                </Grid>

                            </>) : (null)}

                            {type === "drop_multi" ? (<>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                        <Grid item xs={4}>
                                            <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                Drop Down Field Label
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <TextField
                                                sx={{ width: 200 }}
                                                label="Label Name*"
                                                variant="filled"
                                                // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                value={fieldParam.label}
                                                onChange={(e) => {
                                                    setFieldParam((prev) => ({
                                                        ...prev, label: e.target.value
                                                    }))
                                                }} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                        <Grid item xs={4}>
                                            <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                Number of drop down items
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <TextField
                                                sx={{ width: 200 }}
                                                label="Items count*"
                                                variant="filled"
                                                type="number"
                                                // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                value={fieldParam.count}
                                                onChange={(e) => {
                                                    setFieldParam((prev) => ({
                                                        ...prev, count: e.target.value
                                                    }))
                                                }} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}></Grid>

                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        {dropDownValueRender}
                                    </Grid>
                                </Grid>

                            </>) : (null)}

                            {type === "time" ? (
                                <>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                            <Grid item xs={4}>
                                                <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                    Time Field Label
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3.5}>
                                                <TextField
                                                    sx={{ width: 200 }}
                                                    label="Label Name*"
                                                    variant="filled"
                                                    // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                    // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                    value={fieldParam.label}
                                                    onChange={(e) => {
                                                        setFieldParam((prev) => ({
                                                            ...prev, label: e.target.value
                                                        }))
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>
                            ) : (null)}

                            {type === "date_time" ? (
                                <>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                            <Grid item xs={4}>
                                                <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                    Date & Time Field Label
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3.5}>
                                                <TextField
                                                    sx={{ width: 200 }}
                                                    label="Label Name*"
                                                    variant="filled"
                                                    // error={addMouseEnter && mevInput.variable_name === "" ? true : false}
                                                    // helperText={addMouseEnter && mevInput.variable_name === "" ? "Please provide a Mev Name" : ""}
                                                    value={fieldParam.label}
                                                    onChange={(e) => {
                                                        setFieldParam((prev) => ({
                                                            ...prev, label: e.target.value
                                                        }))
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>
                            ) : (null)}

                            {type === "file" ? (<>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                        <Grid item xs={4}>
                                            <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                File Field Label
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <TextField
                                                sx={{ width: 200 }}
                                                label="Label Name*"
                                                variant="filled"
                                                // error={firstMouseEnter && fieldParam.label === "" ? true : false}
                                                // helperText={firstMouseEnter && fieldParam.label === "" ? "Please provide label Name" : ""}
                                                value={fieldParam.label}
                                                onChange={(e) => {
                                                    setFieldParam((prev) => ({
                                                        ...prev, label: e.target.value
                                                    }))
                                                }} />

                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                        <Grid item xs={4}>
                                            <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                Allowed Extensions
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <TextField
                                                sx={{ width: 200 }}
                                                label="Allowed Extensions*"
                                                variant="filled"
                                                // error={firstMouseEnter && fieldParam.extensions === "" ? true : false}
                                                // helperText={firstMouseEnter && fieldParam.extensions === "" ? "Please provide a valid input" : ""}
                                                value={fieldParam.extensions}
                                                onChange={(e) => {
                                                    setFieldParam((prev) => ({
                                                        ...prev, extensions: e.target.value
                                                    }))
                                                }} />

                                        </Grid>
                                    </Grid>
                                </Grid>

                            </>) : (null)}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}