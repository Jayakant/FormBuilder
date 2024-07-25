import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/coreApiService/Auth";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { TextField, Typography, Grid, Button, Paper } from "@mui/material";

export default function AddFormPage() {

    const location = useLocation();
    const nav = useNavigate();
    const theme = useTheme();
    const auth = useAuth();

    const [formName, setFormName] = React.useState(" ");

    const [saveButtonDisabled, setSaveButtonDisabled] = React.useState(true);

    const [firstMouseEnter, setFirstMouseEnter] = React.useState(false);

    const [fieldParam, setFieldParam] = React.useState({});

    function handleSaveClick() {

        console.log(fieldParamDropDownValues)
        let formArrayClone = auth.formArray;

        let toastMsg = `Successfully added ${location.state.type}`;

        if (location.state.type === "num") {
            formArrayClone.push({ type: location.state.type, label: fieldParam.label, value: "", min: fieldParam.min, max: fieldParam.max, step: fieldParam.step })
        }
        else if (location.state.type === "text") {
            formArrayClone.push({ type: location.state.type, label: fieldParam.label, value: "" })
        }

        else if (location.state.type === "pw") {
            formArrayClone.push({ type: location.state.type, label: fieldParam.label, value: "" })
        }

        else if (location.state.type === "drop_single") {
            console.log(fieldParam)
            formArrayClone.push({ type: location.state.type, label: fieldParam.label, value: "", count: fieldParam.count, dropDownValues: fieldParamDropDownValues, })
        }

        else if (location.state.type === "drop_multi") {
            console.log(fieldParam)
            formArrayClone.push({ type: location.state.type, label: fieldParam.label, value: "", count: fieldParam.count, dropDownValues: fieldParamDropDownValues, })
        }

        else if (location.state.type === "date") {
            formArrayClone.push({ type: location.state.type, label: fieldParam.label, value: "", })
        }

        else if (location.state.type === "time") {
            formArrayClone.push({ type: location.state.type, label: fieldParam.label, value: "", })
        }

        else if (location.state.type === "date_time") {
            formArrayClone.push({ type: location.state.type, label: fieldParam.label, value: "", })
        }

        else if (location.state.type === "file") {
            formArrayClone.push({ type: location.state.type, label: fieldParam.label, value: "", extensions: fieldParam.extensions })
        }

        else if (location.state.type === "submit") {
            formArrayClone.push({ type: location.state.type, label: fieldParam.label, value: "", })
        }

        auth.handleFormArrayChange(formArrayClone)
        nav(`/main/formPage`, {
            state: {
                toastMessage: toastMsg,
            }
        })
    }

    // alert(location.state.type)
    React.useEffect(() => {

        if (location.state.type === "text") {
            setFormName("Add Text Field");
            setFieldParam({ label: "" });
        }

        else if (location.state.type === "pw") {
            setFormName("Add Password Field");
            setFieldParam({ label: "" });
        }

        else if (location.state.type === "num") {
            setFormName("Add Number Field");
            setFieldParam({ label: "", min: "", max: "", step: "" });
        }

        else if (location.state.type === "drop_single") {
            setFormName("Add Drop Down");
            setFieldParam({ label: "", count: "", dropDownValues: [] });
        }

        else if (location.state.type === "drop_multi") {
            setFormName("Add Drop Down");
            setFieldParam({ label: "", count: "", dropDownValues: [] });
        }

        else if (location.state.type === "date") {
            setFormName("Add Date Field");
            setFieldParam({ label: "" });
        }

        else if (location.state.type === "date") {
            setFormName("Add Time Field");
            setFieldParam({ label: "" });
        }

        else if (location.state.type === "date_time") {
            setFormName("Add Time Field");
            setFieldParam({ label: "" });
        }

        else if (location.state.type === "file") {
            setFormName("Add File Field");
            setFieldParam({ label: "", extensions: "" })
        }

        else if (location.state.type === "submit") {
            setFormName("Add submit Button");
        }
    }, [])


    function buttonDisabled() {
        let returnStmt = false
        for (let keys in fieldParam) {
            if (fieldParam[keys] === "") {
                returnStmt = true;
            }
        }
        return returnStmt;
    }

    const [dropDownValueRender, setdropDownValueRender] = React.useState([])

    const [fieldParamDropDownValues, setFieldParamDropDownValues] = React.useState([])

    React.useEffect(() => {
        if (location.state.type === "drop_single" || "drop_multi") {
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
                    console.log(indexVal)
                    let clonedArray = fieldParamDropDownValues

                    for (let ind in clonedArray) {
                        if (ind == indexVal) {
                        }
                    }
                    clonedArray[indexVal] = e.target.value

                    // clonedArray.push(e.target.value)

                    setFieldParamDropDownValues(clonedArray)
                }

                let renderUi = []
                for (let i = 0; i < fieldParam.count; i++) {
                    let indexVal = i
                    renderUi.push(<>
                        <Grid container alignItems="center" justifyContent="space-evenly" spacing={2}>
                            <Grid item xs={4}>
                                <Typography fontWeight="500" fontSize="17px" variant="body1">
                                    {"  "} Enter Item {i + 1}
                                </Typography>
                            </Grid>
                            <Grid item xs={3.5}>
                                <TextField
                                    sx={{ width: 200 }}
                                    label={`Enter value*`}
                                    variant="filled"
                                    error={firstMouseEnter ? true : false}
                                    helperText={firstMouseEnter ? "Please provide drop down values" : ""}
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

    return (<>

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
                                        {formName}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item>
                                    <span onMouseEnter={() => {
                                        setFirstMouseEnter(true)
                                    }}>
                                        <Button
                                            variant="contained"
                                            color="low"
                                            onClick={handleSaveClick}
                                            disabled={buttonDisabled()}
                                        >
                                            Save
                                        </Button>
                                    </span>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="vHigh"
                                        onClick={() => {
                                            nav(`/main/formPage`)
                                        }}
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

                        {location.state.type === "text" ? (
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
                                                error={firstMouseEnter && fieldParam.label === "" ? true : false}
                                                helperText={firstMouseEnter && fieldParam.label === "" ? "Please provide label Name" : ""}
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

                        {location.state.type === "pw" ? (
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
                                                error={firstMouseEnter && fieldParam.label === "" ? true : false}
                                                helperText={firstMouseEnter && fieldParam.label === "" ? "Please provide label Name" : ""}
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

                        {location.state.type === "num" ? (<>
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
                                            error={firstMouseEnter && fieldParam.label === "" ? true : false}
                                            helperText={firstMouseEnter && fieldParam.label === "" ? "Please provide label Name" : ""}
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
                                            error={firstMouseEnter && fieldParam.min === "" ? true : false}
                                            helperText={firstMouseEnter && fieldParam.min === "" ? "Please provide a Minimum value" : ""}
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
                                            error={firstMouseEnter && fieldParam.max === "" ? true : false}
                                            helperText={firstMouseEnter && fieldParam.max === "" ? "Please provide label Name" : ""}
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
                                            error={firstMouseEnter && fieldParam.step === "" ? true : false}
                                            helperText={firstMouseEnter && fieldParam.step === "" ? "Please provide label Name" : ""}
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

                        {location.state.type === "drop_single" ? (<>
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
                                            error={firstMouseEnter && fieldParam.label === "" ? true : false}
                                            helperText={firstMouseEnter && fieldParam.label === "" ? "Please provide a label Name" : ""}
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
                                            error={firstMouseEnter && fieldParam.count === "" ? true : false}
                                            helperText={firstMouseEnter && fieldParam.count === "" ? "Please provide a count value" : ""}
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

                        {location.state.type === "drop_multi" ? (<>
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
                                            error={firstMouseEnter && fieldParam.label === "" ? true : false}
                                            helperText={firstMouseEnter && fieldParam.label === "" ? "Please provide a label Name" : ""}
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
                                            error={firstMouseEnter && fieldParam.count === "" ? true : false}
                                            helperText={firstMouseEnter && fieldParam.count === "" ? "Please provide a count value" : ""}
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

                        {location.state.type === "date" ? (
                            <>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                        <Grid item xs={4}>
                                            <Typography fontWeight="500" fontSize="17px" variant="body1">
                                                Date Field Label
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <TextField
                                                sx={{ width: 200 }}
                                                label="Label Name*"
                                                variant="filled"
                                                error={firstMouseEnter && fieldParam.label === "" ? true : false}
                                                helperText={firstMouseEnter && fieldParam.label === "" ? "Please provide label Name" : ""}
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

                        {location.state.type === "time" ? (
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
                                                error={firstMouseEnter && fieldParam.label === "" ? true : false}
                                                helperText={firstMouseEnter && fieldParam.label === "" ? "Please provide label Name" : ""}
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

                        {location.state.type === "date_time" ? (
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
                                                error={firstMouseEnter && fieldParam.label === "" ? true : false}
                                                helperText={firstMouseEnter && fieldParam.label === "" ? "Please provide label Name" : ""}
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

                        {location.state.type === "file" ? (<>
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
                                            error={firstMouseEnter && fieldParam.label === "" ? true : false}
                                            helperText={firstMouseEnter && fieldParam.label === "" ? "Please provide label Name" : ""}
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
                                            error={firstMouseEnter && fieldParam.extensions === "" ? true : false}
                                            helperText={firstMouseEnter && fieldParam.extensions === "" ? "Please provide a valid input" : ""}
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

                        {location.state.type === "submit" ? (<>
                            <Grid item xs={12}>
                                <Grid container alignItems="center" justifyContent="space-evenly" spacing={0}>
                                    <Grid item xs={4}>
                                        <Typography fontWeight="500" fontSize="17px" variant="body1">
                                            Submit Button Label
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
                        </>) : (null)}
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </>)
}