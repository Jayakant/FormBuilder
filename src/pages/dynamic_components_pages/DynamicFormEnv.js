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
import { getData } from "../../components/coreApiService/services";


export default function DynamicFormEnv({
    paramValues, setParamValues, envResponse, firstMouseEnter, selectCompany
}) {

    let companyId = selectCompany

    let envResObj = {
        id: 0,
        risk_type: "",
        overall_risk: "",
        parameter: {
            severity: "",
            instruction: "",
            kpi_action: "",
            guideline: "",
            comments: ""
        },
        company: 0
    }

    let envResIndex = 0

    let clonedParam = {}

    const [envSectorHeat, setEnvSectorHeat] = React.useState(null)

    React.useEffect(() => {
        if (companyId != undefined) {
            let heatUrl = `heatmap/${companyId}/get_environmental_risk_data/`

            getData(heatUrl).then((response) => {
                console.log(`heatResponse: ${JSON.stringify(response.data.data)}`);
                setEnvSectorHeat(response.data.data)

                let paramValuesClone = { ...paramValues }
                let finalParamValuesClone = {}
                if (paramValuesClone.mainLabel === "Carbon Transition Risks") {
                    let updatedHeatLabel = { ...paramValuesClone["heatLabel"], value: response.data.data.carbon_transition_risk }

                    if (updatedHeatLabel.value === "Low") {
                        let updatedComments = { ...paramValuesClone["comments"], required: false }
                        let updatedInstructions = { ...paramValuesClone["instruction"], value: "-" }
                        finalParamValuesClone = { ...paramValuesClone, ["heatLabel"]: updatedHeatLabel, ["comments"]: updatedComments, ["instruction"]: updatedInstructions }
                    }

                    else if (updatedHeatLabel.value === "Moderate" || updatedHeatLabel.value === "High" || updatedHeatLabel.value === "Very High") {
                        let updatedComments = { ...paramValuesClone["comments"], required: true }
                        let updatedInstructions = { ...paramValuesClone["instruction"], value: "Provide Comments" }
                        finalParamValuesClone = { ...paramValuesClone, ["heatLabel"]: updatedHeatLabel, ["comments"]: updatedComments, ["instruction"]: updatedInstructions }
                    }

                    console.log(`finalParamValuesClone: ${JSON.stringify(finalParamValuesClone)}`);

                    setParamValues(finalParamValuesClone)

                }
                else if (paramValuesClone.mainLabel === "Physical Climate Risk") {
                    let updatedHeatLabel = { ...paramValuesClone["heatLabel"], value: response.data.data.physical_climate_risk }

                    if (updatedHeatLabel.value === "Low") {
                        let updatedComments = { ...paramValuesClone["comments"], required: false }
                        let updatedInstructions = { ...paramValuesClone["instruction"], value: "-" }
                        finalParamValuesClone = { ...paramValuesClone, ["heatLabel"]: updatedHeatLabel, ["comments"]: updatedComments, ["instruction"]: updatedInstructions }
                    }

                    else if (updatedHeatLabel.value === "Moderate" || updatedHeatLabel.value === "High" || updatedHeatLabel.value === "Very High") {
                        let updatedComments = { ...paramValuesClone["comments"], required: true }
                        let updatedInstructions = { ...paramValuesClone["instruction"], value: "Provide Comments" }
                        finalParamValuesClone = { ...paramValuesClone, ["heatLabel"]: updatedHeatLabel, ["comments"]: updatedComments, ["instruction"]: updatedInstructions }
                    }

                    console.log(`finalParamValuesClone: ${JSON.stringify(finalParamValuesClone)}`);

                    setParamValues(finalParamValuesClone)

                }

                else if (paramValuesClone.mainLabel === "Water Management") {
                    let updatedHeatLabel = { ...paramValuesClone["heatLabel"], value: response.data.data.water_management }

                    if (updatedHeatLabel.value === "Low") {
                        let updatedComments = { ...paramValuesClone["comments"], required: false }
                        let updatedInstructions = { ...paramValuesClone["instruction"], value: "-" }
                        finalParamValuesClone = { ...paramValuesClone, ["heatLabel"]: updatedHeatLabel, ["comments"]: updatedComments, ["instruction"]: updatedInstructions }
                    }

                    else if (updatedHeatLabel.value === "Moderate" || updatedHeatLabel.value === "High" || updatedHeatLabel.value === "Very High") {
                        let updatedComments = { ...paramValuesClone["comments"], required: true }
                        let updatedInstructions = { ...paramValuesClone["instruction"], value: "Provide Comments" }
                        finalParamValuesClone = { ...paramValuesClone, ["heatLabel"]: updatedHeatLabel, ["comments"]: updatedComments, ["instruction"]: updatedInstructions }
                    }

                    console.log(`finalParamValuesClone: ${JSON.stringify(finalParamValuesClone)}`);

                    setParamValues(finalParamValuesClone)

                }

                else if (paramValuesClone.mainLabel === "Waste and pollution") {
                    let updatedHeatLabel = { ...paramValuesClone["heatLabel"], value: response.data.data.waste_and_pollution }

                    if (updatedHeatLabel.value === "Low") {
                        let updatedComments = { ...paramValuesClone["comments"], required: false }
                        let updatedInstructions = { ...paramValuesClone["instruction"], value: "-" }
                        finalParamValuesClone = { ...paramValuesClone, ["heatLabel"]: updatedHeatLabel, ["comments"]: updatedComments, ["instruction"]: updatedInstructions }
                    }

                    else if (updatedHeatLabel.value === "Moderate" || updatedHeatLabel.value === "High" || updatedHeatLabel.value === "Very High") {
                        let updatedComments = { ...paramValuesClone["comments"], required: true }
                        let updatedInstructions = { ...paramValuesClone["instruction"], value: "Provide Comments" }
                        finalParamValuesClone = { ...paramValuesClone, ["heatLabel"]: updatedHeatLabel, ["comments"]: updatedComments, ["instruction"]: updatedInstructions }
                    }

                    console.log(`finalParamValuesClone: ${JSON.stringify(finalParamValuesClone)}`);

                    setParamValues(finalParamValuesClone)

                }

                else if (paramValuesClone.mainLabel === "Natural Capital (Biodiversity)") {
                    let updatedHeatLabel = { ...paramValuesClone["heatLabel"], value: response.data.data.natural_capital_biodiversity }

                    if (updatedHeatLabel.value === "Low") {
                        let updatedComments = { ...paramValuesClone["comments"], required: false }
                        let updatedInstructions = { ...paramValuesClone["instruction"], value: "-" }
                        finalParamValuesClone = { ...paramValuesClone, ["heatLabel"]: updatedHeatLabel, ["comments"]: updatedComments, ["instruction"]: updatedInstructions }
                    }

                    else if (updatedHeatLabel.value === "Moderate" || updatedHeatLabel.value === "High" || updatedHeatLabel.value === "Very High") {
                        let updatedComments = { ...paramValuesClone["comments"], required: true }
                        let updatedInstructions = { ...paramValuesClone["instruction"], value: "Provide Comments" }
                        finalParamValuesClone = { ...paramValuesClone, ["heatLabel"]: updatedHeatLabel, ["comments"]: updatedComments, ["instruction"]: updatedInstructions }
                    }

                    console.log(`finalParamValuesClone: ${JSON.stringify(finalParamValuesClone)}`);

                    setParamValues(finalParamValuesClone)

                }

                for (let i in response.data.data) {
                    console.log(response.data.data[i])
                }
            }).catch((err) => {
                console.log(err.message)
            })
        }
        // if (envResponse != {} && envResponse != undefined && envResponse != null) {
        console.log(`envSectorHeat: ${JSON.stringify(envSectorHeat)}`)
        for (let indexes in envResponse) {
            if (envResponse[indexes].risk_type === paramValues.mainLabel) {
                envResObj = envResponse[indexes]
                envResIndex = indexes
            }
        }
        if (envResObj.id !== 0) {
            // alert("Not 0")
            clonedParam = { ...paramValues }
            clonedParam.heatLabel.value = envResObj?.parameter?.severity
            clonedParam.instruction.value = envResObj?.parameter?.instruction
            clonedParam.kpi_action.value = envResObj?.parameter?.kpi_action
            clonedParam.additional_guidelines.value = envResObj?.parameter?.guideline
            clonedParam.comments.value = envResObj?.parameter?.comments
            console.log(`clone: ${JSON.stringify(clonedParam)}`)
        }
        console.log(`paramVal: ${JSON.stringify(envResObj)}`)

        let paramValuesClone = { ...clonedParam }

        for (let id in paramValuesClone) {

            if (paramValuesClone["heatLabel"].value === "Low") {

                let updatedParamValuesClone = { ...paramValuesClone["comments"], required: false }

                let changeInstruction = { ...paramValuesClone["instruction"], value: "-" }

                let finalParamValuesClone = { ...paramValuesClone, ["comments"]: updatedParamValuesClone, ["instruction"]: changeInstruction }


                setParamValues(finalParamValuesClone)
            }
            else if (paramValuesClone["heatLabel"].value === "Moderate" || paramValuesClone["heatLabel"].value === "High" || paramValuesClone["heatLabel"].value === "Very High") {
                let updatedParamValuesClone = { ...paramValuesClone["comments"], required: true }

                let changeInstruction = { ...paramValuesClone["instruction"], value: "Provide Comments" }

                let finalParamValuesClone = { ...paramValuesClone, ["comments"]: updatedParamValuesClone, ["instruction"]: changeInstruction }

                setParamValues(finalParamValuesClone)

            }
        }
        // }


    }, [envResponse])

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
                            isRequired={paramValues[keys].required}
                            firstMouseEnter={firstMouseEnter}
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
                        paramValues={paramValues}
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
    paramValues,
    firstMouseEnter
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


        }

        else if (event.target.value === "AAA" || event.target.value === "AA" || event.target.value === "A" || event.target.value === "BBB" || event.target.value === "BB" || event.target.value === "B") {

            clonedParamValues[id].value = event.target.value

            clonedParamValues.instruction.value = "No comments needed"

            clonedParamValues.additional_guidelines.value = ""

            clonedParamValues.instruction.fieldColor = "tertiary"

            clonedParamValues.additional_guidelines.fieldColor = "tertiary"

            updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

            finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }


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
    paramValues,
    isRequired,
    firstMouseEnter
}) {

    function handleChange(event) {

        let clonedParamValues = { ...paramValues }

        let updatedParamValue = { ...clonedParamValues[id], value: event.target.value }

        let finalParamValue = { ...clonedParamValues, [id]: updatedParamValue }

        setParamValues(finalParamValue)
    }

    return (
        <TextField
            sx={{ maxWidth: 200, width: 152 }}
            label={isRequired? label+"*" : label}
            variant="filled"
            value={value}
            onChange={handleChange}
            error={isRequired && value === "" && firstMouseEnter ? true : false}
            helperText={
                isRequired && value === "" && firstMouseEnter ? "Please provide comments" : ""
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