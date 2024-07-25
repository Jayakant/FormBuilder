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
import { CloseRounded } from "@mui/icons-material";


export default function TestDynamicForm({
    response, setResponse, paramValues, setParamValues, firstMouseEnter
}) {

    const formRow = []

    // console.log(`response:  ${JSON.stringify(response)}`)

    for (let indexValue in paramValues) {
        let rowLabel = ""
        let formFields = [];
        for (let keys in paramValues[indexValue]) {
            if (keys === "mainLabel") {
                console.log("mainLabel")
                console.log("mainLabel", paramValues[indexValue][keys])
                rowLabel = paramValues[indexValue][keys]
            }
            else if (paramValues[indexValue][keys].type === "EditableText") {
                console.log("editableText")
                formFields.push(
                    <Grid item xs={2} key={keys}>
                        <EditableTextField
                            index={indexValue}
                            label={paramValues[indexValue][keys].label}
                            id={keys}
                            value={paramValues[indexValue][keys].value}
                            setParamValues={setParamValues}
                            paramValues={paramValues}
                            firstMouseEnter={firstMouseEnter}
                            isRequired={paramValues[indexValue][keys].required}
                            errorParams = {paramValues[indexValue].choose.value}
                        />
                    </Grid>
                )
            }
            else if (paramValues[indexValue][keys].type === "readOnlyText") {
                console.log("readOnlyText")
                formFields.push(
                    <Grid item xs={2} key={keys}>
                        <ReadOnlyTextField
                            index={indexValue}
                            label={paramValues[indexValue][keys].label}
                            id={keys}
                            value={paramValues[indexValue][keys].value}
                            setParamValues={setParamValues}
                            paramValues={paramValues}
                            firstMouseEnter={firstMouseEnter}
                            isRequired={paramValues[indexValue][keys].required}
                            color={paramValues[indexValue][keys].fieldColor}
                        />
                    </Grid>
                )
            }
            else if (paramValues[indexValue][keys].type === "dropDown") {
                console.log(`dropDOwnValues: ${JSON.stringify(paramValues[indexValue][keys].label)}`)
                let label = paramValues[indexValue][keys].label
                formFields.push(
                    <Grid item xs={2} key={keys}>
                        <DropDownComponent
                            index={indexValue}
                            label={label}
                            id={keys}
                            value={paramValues[indexValue][keys].value}
                            dropDownList={paramValues[indexValue][keys].dropDownList}
                            setParamValues={setParamValues}
                            paramValues={paramValues}
                            firstMouseEnter={firstMouseEnter}
                            isRequired={paramValues[indexValue][keys].required}
                        />
                    </Grid>
                )
            }
        }

        formRow.push(
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

    return (<>
        <Grid container spacing={8}>
            {formRow}
        </Grid>
    </>)
}

function EditableTextField({
    index,
    label,
    id,
    value,
    setParamValues,
    paramValues,
    firstMouseEnter,
    isRequired,
    errorParams,
}) {

    function handleChange(index, e) {

        let updatedComments = { ...paramValues[index].comments, value: e.target.value }
        let indexedParamValues = { ...paramValues[index], comments: updatedComments }
        console.log(`indexedParamVales ${JSON.stringify(indexedParamValues)}`)

        let clonedParamValues = [...paramValues]

        clonedParamValues[index] = indexedParamValues

        setParamValues(clonedParamValues)

        console.log(`clonedParamValues ${JSON.stringify(clonedParamValues)}`)

    }
    return (<>
        <TextField
            sx={{ maxWidth: 200, width: 152 }}
            label={isRequired ? label + "*" : label}
            variant="filled"
            value={value}
            onChange={(e) => handleChange(index, e)}
            error={value === "" && firstMouseEnter && isRequired && errorParams !== ""? true : false}
            helperText={
                value === "" && firstMouseEnter && isRequired && errorParams !== ""?
                    "Please Provide Comments" : ""
            }
        />
    </>)
}

function ReadOnlyTextField({
    index,
    label,
    id,
    value,
    setParamValues,
    paramValues,
    firstMouseEnter,
    color
}) {


    return (
        <>
            <TextField
                sx={{ maxWidth: 200, width: 152 }}
                label={label}
                variant="filled"
                value={value}
                inputProps={{ readOnly: true }}
                focused
                color={color}
            />
        </>
    )
}

function DropDownComponent(
    { index,
        label,
        id,
        value,
        dropDownList,
        setParamValues,
        paramValues,
        firstMouseEnter,
        isRequired,
    }
) {

    function handleChange(index, e) {

        // let updatedDropDown = { ...paramValues[index].choose, value: e.target.value }
        // let indexedParamValues = { ...paramValues[index], choose: updatedDropDown }
        // console.log(`indexedParamVales ${JSON.stringify(indexedParamValues)}`)

        // let clonedParamValues = [...paramValues]

        // clonedParamValues[index] = indexedParamValues

        // setParamValues(clonedParamValues)

        // console.log(`clonedParamValues ${JSON.stringify(clonedParamValues)}`)

        if (e.target.value === "Yes") {

            let clonedParamValues = [...paramValues]

            clonedParamValues[index].choose.value = e.target.value
            clonedParamValues[index].instruction.value = "Escalate to SR Team"
            clonedParamValues[index].additional_guidelines.value = "Share outcome to CRM"
            clonedParamValues[index].instruction.fieldColor = "err"
            clonedParamValues[index].additional_guidelines.fieldColor = "err"
            clonedParamValues[index].comments.required = true
            clonedParamValues[index].comments.value = ""

            setParamValues(clonedParamValues)
            console.log(`clonedParamValues ${JSON.stringify(clonedParamValues)}`)


            // let updatedDropDown = { ...paramValues[index].choose, value: e.target.value }
            // let updatedInstructions = { ...paramValues[index].instruction, value: "Escalate to SR Team" }
            // let updatedGuidance = { ...paramValues[index].additional_guidelines, value: "Share outcome to CRM" }
            // let updatedClonedParamValues = { ...paramValues[index], instruction: updatedInstructions, additional_guidelines: updatedGuidance, choose: updatedDropDown }
            // console.log(`indexedParamVales ${JSON.stringify(updatedClonedParamValues)}`)

            // let clonedParamValues = [...paramValues]

            // clonedParamValues[index] = updatedClonedParamValues

            // setParamValues(clonedParamValues)

            // console.log(`clonedParamValues ${JSON.stringify(clonedParamValues)}`)
        }
        else if (e.target.value === "No") {

            let clonedParamValues = [...paramValues]

            clonedParamValues[index].choose.value = e.target.value
            clonedParamValues[index].instruction.value = "No Comments needed"
            clonedParamValues[index].additional_guidelines.value = ""
            clonedParamValues[index].instruction.fieldColor = "high"
            clonedParamValues[index].additional_guidelines.fieldColor = "high"
            clonedParamValues[index].comments.required = false
            clonedParamValues[index].comments.value = ""

            setParamValues(clonedParamValues)
            console.log(`clonedParamValues ${JSON.stringify(clonedParamValues)}`)

            // let updatedDropDown = { ...paramValues[index].choose, value: e.target.value }
            // let updatedInstructions = { ...paramValues[index].instruction, value: "No comments needed" }
            // let updatedGuidance = { ...paramValues[index].additional_guidelines, value: "" }
            // let updatedClonedParamValues = { ...paramValues[index], instruction: updatedInstructions, additional_guidelines: updatedGuidance, choose: updatedDropDown }
            // console.log(`indexedParamVales ${JSON.stringify(updatedClonedParamValues)}`)

            // let clonedParamValues = [...paramValues]

            // clonedParamValues[index] = updatedClonedParamValues

            // setParamValues(clonedParamValues)

            // console.log(`clonedParamValues ${JSON.stringify(clonedParamValues)}`)
        }

    }

    const options = []
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
                error={value === "" && firstMouseEnter ? true : false}

            >
                <InputLabel>{label}</InputLabel>
                <Select
                    value={value}
                    onChange={(e) => handleChange(index, e)}
                // inputProps={{ readOnly: readOnly }}
                >
                    {options}
                </Select>
                <FormHelperText>{value === "" && firstMouseEnter ? "Select a value" : ""}</FormHelperText>
            </FormControl>
        </>
    )
}
