import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
// import { toast } from "react-toastify";

import { TextField, IconButton } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


export default function DynaFormField({
    paramValues, setParamValues,
}) {

    // const formRow = []

    let rowLabel = [];

    let formFields = [];

    for (let keys in paramValues) {

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
                        />
                    </Grid>
                ) : (
                    <Grid item xs={2} key={keys}>

                        <ReadOnlyTextField
                            label={paramValues[keys].label}
                            id={keys}
                            value={paramValues[keys].value}
                            setParamValues={setParamValues}
                            paramValues={paramValues}
                            fieldColor={paramValues[keys].fieldColor}
                        />
                    </Grid>
                )

            )
        }

        else if (paramValues[keys].type === "dropDown") {

            formFields.push(
                <Grid item xs={2} key={keys}>
                    <DropDownComponent
                        label={paramValues[keys].label}
                        id={keys}
                        value={paramValues[keys].value}
                        dropDownList={paramValues[keys].dropDownList}
                        setParamValues={setParamValues}
                        readOnly={paramValues[keys].readOnly}
                        paramValues={paramValues}
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
                            paramValues[keys].value === "Very High" ? "vHigh" :
                                (
                                    paramValues[keys].value === "High" ? "high" :
                                        (paramValues[keys].value === "Moderate" ? "mod" : "low")
                                )
                        }
                        focused
                        value={paramValues[keys].value}
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
                    <Grid container spacing={0} alignItems="center">
                        <Grid item xs={3}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {rowLabel}
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
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
    paramValues
}) {
    const options = [];


    function handleChange(event) {

        let clonedParamValues = paramValues

        let updatedParamValue = {}

        let finalParamValue = {}

        // let updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

        // let finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

        // setParamValues(finalParamValue)

        if (event.target.value === "Yes") {

            clonedParamValues[id].value = event.target.value

            clonedParamValues.instruction.value = "Escalate to SR Team"

            clonedParamValues.additional_guidelines.value = "Share outcome to CRM"

            clonedParamValues.instruction.fieldColor = "err"

            clonedParamValues.additional_guidelines.fieldColor = "err"

            updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

            finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

        }

        else if (event.target.value === "No") {

            clonedParamValues[id].value = event.target.value

            clonedParamValues.instruction.value = "No comments needed"

            clonedParamValues.additional_guidelines.value = ""

            clonedParamValues.instruction.fieldColor = "tertiary"

            clonedParamValues.additional_guidelines.fieldColor = "tertiary"

            updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

            finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

        }

        setParamValues(finalParamValue)

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
            >
                <InputLabel>{label}</InputLabel>
                <Select
                    value={value}
                    onChange={handleChange}
                    inputProps={{ readOnly: readOnly }}
                >
                    {options}
                </Select>
            </FormControl>
        </>
    );
}

function EditableTextField({
    label,
    value,
    id,
    setParamValues,
    paramValues
}) {

    function handleChange(event) {

        let clonedParamValues = paramValues

        let updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

        let finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

        setParamValues(finalParamValue)
    }

    return (
        <TextField
            sx={{ maxWidth: 200, width: 152 }}
            label={label}
            variant="filled"
            value={value}
            onChange={handleChange}
        />
    )

}


function ReadOnlyTextField({
    label,
    value,
    id,
    setParamValues,
    paramValues,
    fieldColor
}) {

    return (
        <TextField
            sx={{ maxWidth: 200, width: 152 }}
            label={label}
            variant="filled"
            value={value}
            inputProps={{ style: { textAlign: 'center' }, readOnly: true }}
            color={fieldColor}
            focused

        />
    )

}