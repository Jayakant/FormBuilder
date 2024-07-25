import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
// import { toast } from "react-toastify";

import { TextField, IconButton, FormHelperText } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


export default function DynamicForm({
    paramValues, setParamValues, setMsciScoreVisibility, response, ind, firstMouseEnter
}) {

    // const formRow = []

    console.log(`response:  ${JSON.stringify(response)}`)

    let modifiedJson = {}

    const [modify, setModify] = React.useState(true)
    let clonedParam = paramValues


    React.useEffect(() => {
        console.log(`Response:::${JSON.stringify(response)}`)
        console.log(`ParamValues in dyna:::${JSON.stringify(paramValues)}`)

        // setParamValues(paramValues)

        if (response != undefined) {
            // alert("hi")
            setModify(false)

            modifiedJson["mainLabel"] = response?.question
            modifiedJson["choose"] = response?.status.status
            modifiedJson["instruction"] = response?.status.instruction
            modifiedJson["additional_guidelines"] = response?.status.guidelines
            modifiedJson["comments"] = response?.status.comments
            modifiedJson["fieldColors"] = response?.status.color
            modifiedJson["id"] = response?.id
            modifiedJson["company"] = response?.company
            modifiedJson["required"] = response?.status.status === "Yes" ? true : false

            // console.log(`modifiedJson:::${JSON.stringify(modifiedJson)}`)


            clonedParam.mainLabel = modifiedJson.mainLabel
            clonedParam.choose.value = modifiedJson.choose
            clonedParam.instruction.value = modifiedJson.instruction
            clonedParam.additional_guidelines.value = modifiedJson.additional_guidelines
            clonedParam.comments.value = modifiedJson.comments
            clonedParam.instruction.fieldColor = modifiedJson.fieldColors
            clonedParam.additional_guidelines.fieldColor = modifiedJson.fieldColors
            clonedParam.id = modifiedJson.id
            clonedParam.comments.required = modifiedJson.required

            // console.log(`Cloned: ${JSON.stringify(clonedParam)}`)

            // setParamValues(clonedParam)
        }

        else if (response == undefined) {
            setModify(true)
            setParamValues(paramValues)
        }

    }, [response])

    React.useEffect(() => {
        if (modify === false) {
            // console.log("hi")
        }
    }, [modify])

    let rowLabel = [];

    let formFields = [];

    for (let keys in paramValues) {
        // console.log(`ParamValues: ${JSON.stringify(paramValues)}`)

        if (keys === "mainLabel") {
            rowLabel = paramValues[keys]
        }
        if (paramValues[keys].type === "text") {

            // paramValues[keys].readOnly === true && console.log(`\nparamValues: ${paramValues[keys].value}`); console.log(`paramVallues: ${paramValues[keys].value}`)
            formFields.push(
                paramValues[keys].readOnly === false ? (

                    <Grid item xs={2} key={keys}>
                        <EditableTextField
                            label={paramValues[keys].label}
                            id={keys}
                            value={paramValues[keys].value}
                            setParamValues={setParamValues}
                            paramValues={paramValues}
                            firstMouseEnter={firstMouseEnter}
                            isRequired={paramValues[keys].required}
                        />
                    </Grid>
                ) : (
                    <Grid item xs={2} key={keys}>

                        <ReadOnlyTextField
                            label={paramValues[keys].label}
                            id={keys}
                            value={clonedParam[keys].value}
                            setParamValues={setParamValues}
                            paramValues={paramValues}
                            fieldColor={paramValues[keys].fieldColor}
                            disabled={false}
                            firstMouseEnter={firstMouseEnter}
                        />
                    </Grid>
                )
            )
        }

        else if (paramValues[keys].type === "dropDown") {

            // dropdown selected values are the same in dropdownmaster2 as this page #
            // console.log(` value in dynamicForm: ${paramValues[keys].value}`) 

            formFields.push(
                <Grid item xs={2} key={keys}>
                    <DropDownComponent
                        label={paramValues[keys].label}
                        id={keys}
                        value={paramValues[keys].value}
                        dropDownList={paramValues[keys].dropDownList}
                        setParamValues={setParamValues}
                        readOnly={paramValues[keys].readOnly}
                        paramValues={clonedParam}
                        setMsciScoreVisibility={setMsciScoreVisibility}
                        firstMouseEnter={firstMouseEnter}
                    />
                </Grid>
            )
        }

        else if (paramValues[keys].type === "link") {

            rowLabel.push(
                <Grid container spacing={0} key={keys}>
                    <Grid item>
                        <Typography fontWeight="500" fontSize="20px" variant="body1">
                            {paramValues[keys].label}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton
                            onClick={() => window.open(paramValues[keys].navigateTo)}
                        >
                            <InfoOutlinedIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            )
        }

        else if (paramValues[keys].type === "readOnlyCard") {

            formFields.push(
                <Grid item xs={2} key={keys}>
                    <TextField
                        color={
                            clonedParam[keys].value === "Very High" ? "vHigh" :
                                (
                                    clonedParam[keys].value === "High" ? "high" :
                                        (clonedParam[keys].value === "Moderate" ? "mod" : "low")
                                )
                        }
                        focused
                        value={clonedParam[keys].value}
                        sx={{ maxWidth: 200, width: 152, input: { color: 'primary' } }}
                        inputProps={{ style: { textAlign: 'center' }, readOnly: true }}
                    />
                </Grid>
            )
        }
        else if (paramValues[keys].type === "navButton") {

            formFields.push(
                <Grid item xs={2} key={keys}>

                    <Button
                        color="cancel"
                        variant="contained"
                        sx={{ maxWidth: 200, width: 152, height: 55, input: { color: 'primary' } }}
                        onClick={() => window.open(paramValues[keys].navigateTo)}
                    >
                        {paramValues[keys].label}
                    </Button>
                </Grid>
            )
        }

        // formRow.push(
        //     <Grid item xs={12} key={keys}>
        //         <Grid container spacing={0} alignItems="center">
        //             <Grid item xs={3}>
        //                 <Typography fontWeight="500" fontSize="20px" variant="body1">
        //                     {rowLabel}
        //                 </Typography>
        //             </Grid>
        //             <Grid item xs={9}>
        //                 <Grid container spacing={21} direction="row">
        //                     {formFields}
        //                 </Grid>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        // )

    }

    return (
        <Grid item xs={12}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={5}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {rowLabel}
                            </Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Grid container spacing={21} direction="row">
                                {formFields}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

function DropDownComponent({
    label,
    dropDownList,
    value,
    id,
    setParamValues,
    readOnly,
    paramValues,
    setMsciScoreVisibility
}) {
    const options = [];


    function handleChange(event) {

        let clonedParamValues = paramValues

        let updatedParamValue = {}

        let finalParamValue = {}

        // let updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

        // let finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

        // setParamValues(finalParamValue)


        if (event.target.value === "CCC") {

            clonedParamValues[id].value = event.target.value

            clonedParamValues.instruction.value = "Escalate to SR Team"

            clonedParamValues.additional_guidelines.value = "Share outcome to CRM"

            clonedParamValues.instruction.fieldColor = "err"

            clonedParamValues.additional_guidelines.fieldColor = "err"

            updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

            finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

            setMsciScoreVisibility(true)

        }

        else if (event.target.value === "40-60") {

            clonedParamValues[id].value = event.target.value

            clonedParamValues.instruction.value = "Escalate to SR Team"

            clonedParamValues.additional_guidelines.value = "Share outcome to CRM"

            clonedParamValues.instruction.fieldColor = "err"

            clonedParamValues.additional_guidelines.fieldColor = "err"

            updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

            finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

        }

        else if (event.target.value === "Not rated by MSCI") {

            clonedParamValues[id].value = event.target.value

            clonedParamValues.instruction.value = "No comments needed"

            clonedParamValues.additional_guidelines.value = ""

            clonedParamValues.instruction.fieldColor = "tertiary"

            clonedParamValues.additional_guidelines.fieldColor = "tertiary"

            updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

            finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

            setMsciScoreVisibility(false)

        }

        else if (event.target.value === "AAA" || event.target.value === "AA" || event.target.value === "A" || event.target.value === "BBB" || event.target.value === "BB" || event.target.value === "B") {

            clonedParamValues[id].value = event.target.value

            clonedParamValues.instruction.value = "No comments needed"

            clonedParamValues.additional_guidelines.value = ""

            clonedParamValues.instruction.fieldColor = "tertiary"

            clonedParamValues.additional_guidelines.fieldColor = "tertiary"

            updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

            finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

            setMsciScoreVisibility(true)

        }

        else if (event.target.value === "0-20" || event.target.value === "20-30" || event.target.value === "30-40" || event.target.value === "Not rated by Sustainalytics") {

            clonedParamValues[id].value = event.target.value

            clonedParamValues.instruction.value = "No comments needed"

            clonedParamValues.additional_guidelines.value = ""

            clonedParamValues.instruction.fieldColor = "tertiary"

            clonedParamValues.additional_guidelines.fieldColor = "tertiary"

            updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

            finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

        }

        else if (event.target.value === "Yes") {

            clonedParamValues.comments.value = ""

            clonedParamValues.comments.required = true

            clonedParamValues[id].value = event.target.value

            clonedParamValues.instruction.value = "Escalate to SR Team"

            clonedParamValues.additional_guidelines.value = "Share outcome to CRM"

            clonedParamValues.instruction.fieldColor = "err"

            clonedParamValues.additional_guidelines.fieldColor = "err"

            updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

            finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

            setParamValues(finalParamValue)

        }

        else if (event.target.value === "No") {

            clonedParamValues.comments.value = ""

            clonedParamValues.comments.required = false

            clonedParamValues[id].value = event.target.value

            clonedParamValues.instruction.value = "No comments needed"

            clonedParamValues.additional_guidelines.value = ""

            clonedParamValues.instruction.fieldColor = "tertiary"

            clonedParamValues.additional_guidelines.fieldColor = "tertiary"

            updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

            finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

            setParamValues(finalParamValue)

        }


    }

    for (var dropdown_option in dropDownList) {
        options.push(
            <MenuItem value={dropDownList[dropdown_option]} key={dropDownList[dropdown_option]}>
                {dropDownList[dropdown_option]}
            </MenuItem>
        );
    }
    return (
        <>
            <FormControl variant="filled" fullWidth sx={{ maxWidth: 200, width: 152 }}//250
                error={value === "" ? true : false}

            >
                <InputLabel>{label}</InputLabel>
                <Select
                    value={value}
                    onChange={handleChange}
                    inputProps={{ readOnly: readOnly }}
                >
                    {options}
                </Select>
                <FormHelperText>{value === "" ? "Select a value" : ""}</FormHelperText>
            </FormControl>
        </>
    );
}

function EditableTextField({
    label,
    value,
    id,
    setParamValues,
    paramValues,
    firstMouseEnter,
    isRequired
}) {

    function handleChange(event) {

        let clonedParamValues = paramValues

        let updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

        let finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

        setParamValues(finalParamValue)
    }
    if (paramValues?.choose?.value === "No" || paramValues?.choose?.value === "") {
        label = "Comments"

    }

    return (
        <TextField
            sx={{ maxWidth: 200, width: 152 }}
            label={label}
            variant="filled"
            value={value}
            onChange={handleChange}
            error={value === "" && firstMouseEnter && isRequired ? true : false}
            helperText={
                value === "" && firstMouseEnter && isRequired ?
                    "Please Provide Comments" : ""
            }
        />
    )

}


function ReadOnlyTextField({
    label,
    value,
    id,
    setParamValues,
    paramValues,
    fieldColor,
    disabled
}) {

    React.useEffect(() => {
        if (id === 'comments') {

            let clonedParamValues = paramValues;

            let updatedParamValue = { ...clonedParamValues[id], value: "Provide comment" };

            let finalParamValue = { ...clonedParamValues, [id]: updatedParamValue };

            setParamValues(finalParamValue)
        }
        else if (id !== "comments") {
            let clonedParamValues = paramValues;

            let updatedParamValue = { ...clonedParamValues[id], value: value }

            let finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

            setParamValues(finalParamValue)
        }
    }, [])

    return (
        <TextField
            sx={{ maxWidth: 200, width: 152 }}
            label={label}
            variant="filled"
            value={value}
            inputProps={{ style: { textAlign: 'center' }, readOnly: true }}
            color={fieldColor}
            focused
            disabled={disabled}

        />
    )

}