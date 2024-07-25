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


export default function DynamicFormSocialRisk({
    paramValues, setParamValues, response, socialHeatRes, firstMouseEnter, selectCompany
}) {

    // console.log(`heatRes::${JSON.stringify(socialHeatRes)}`)

    // const formRow = []

    // console.log(`response:  ${JSON.stringify(response)}`)

    let companyId = selectCompany

    let resObj = {
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

    let resIndex = 0

    let clonedParam = {}

    const [socialSectorHeat, setSocialSectorHeat] = React.useState(null)

    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        let modified = []
        for (let i of splitStr) {
            i = i.charAt(0).toUpperCase() + i.substring(1);  
            modified.push(i)
        }
     
        return modified.join(' '); 
     }

    React.useEffect(() => {
        if (companyId != undefined) {
            let heatUrl = `heatmap/${companyId}/get_social_risk_data/`

            getData(heatUrl).then((response) => {
                // console.log(`heatResponse: ${JSON.stringify(response.data.data)}`);
                setSocialSectorHeat(response.data.data)

                let paramValuesClone = { ...paramValues }
                let finalParamValuesClone = {}
                if (paramValuesClone.mainLabel === "Human Capital") {
                    let updatedHeatLabel = { ...paramValuesClone["heatLabel"], value: titleCase(response.data.data.human_capital) }

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

                    // console.log(`finalParamValuesClone: ${JSON.stringify(finalParamValuesClone)}`);

                    setParamValues(finalParamValuesClone)

                }
                else if (paramValuesClone.mainLabel === "Health and Safety") {
                    let updatedHeatLabel = { ...paramValuesClone["heatLabel"], value: titleCase(response.data.data.health_and_safety) }

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

                    // console.log(`finalParamValuesClone: ${JSON.stringify(finalParamValuesClone)}`);

                    setParamValues(finalParamValuesClone)

                }

                else if (paramValuesClone.mainLabel === "Customer Relation") {
                    let updatedHeatLabel = { ...paramValuesClone["heatLabel"], value: titleCase(response.data.data.customer_relation) }

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

                    // console.log(`finalParamValuesClone: ${JSON.stringify(finalParamValuesClone)}`);

                    setParamValues(finalParamValuesClone)

                }

                else if (paramValuesClone.mainLabel === "Demographic and Society Trends") {
                    let updatedHeatLabel = { ...paramValuesClone["heatLabel"], value: titleCase(response.data.data.demographic_and_society_trends) }

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

                    // console.log(`finalParamValuesClone: ${JSON.stringify(finalParamValuesClone)}`);

                    setParamValues(finalParamValuesClone)

                }

                else if (paramValuesClone.mainLabel === "Responsible Products") {
                    let updatedHeatLabel = { ...paramValuesClone["heatLabel"], value: titleCase(response.data.data.responsible_products) }

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

                    // console.log(`finalParamValuesClone: ${JSON.stringify(finalParamValuesClone)}`);

                    setParamValues(finalParamValuesClone)

                }

                // for (let i in response.data.data) {
                //     console.log(response.data.data[i])
                // }
            }).catch((err) => {
                console.log(err.message)
            })
        }
        // console.log(`Responsee::${JSON.stringify(response[ind])}`)

        for (let indexes in response) {
            if (response[indexes].risk_type === paramValues.mainLabel) {
                resObj = response[indexes]
                resIndex = indexes
            }
        }
        if (resObj.id !== 0) {
            // alert("Not 0")
            clonedParam = { ...paramValues }
            clonedParam.heatLabel.value = resObj?.parameter?.severity
            clonedParam.instruction.value = resObj?.parameter?.instruction
            clonedParam.comments.value = resObj?.parameter?.comments
            // console.log(`clone: ${JSON.stringify(clonedParam)}`)

            setParamValues(clonedParam)

        }

        // if (response[0] != undefined) {


        //     // modifiedJson["id"] = response[ind]?.id
        //     modifiedJson["risk_type"] = response?.risk_type
        //     modifiedJson["overall_risk"] = response?.overall_risk
        //     modifiedJson["severity"] = clonedParam.heatLabel.value
        //     modifiedJson["instruction"] = response?.parameter.instruction
        //     modifiedJson["comments"] = response?.parameter.comments


        //     clonedParam.mainLabel = modifiedJson.risk_type
        //     clonedParam.heatLabel.value = modifiedJson.severity
        //     clonedParam.instruction.value = modifiedJson.instruction
        //     clonedParam.comments.value = modifiedJson.comments

        //     // console.log(`Cloned: ${JSON.stringify(clonedParam)}`)

        //     setParamValues(clonedParam)
        // }

    }, [response])

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
                    <Grid item xs={3} key={keys}>
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
                    <Grid item xs={3} key={keys}>

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
                <Grid item xs={3} key={keys}>
                    <ReadOnlyCards
                        id={keys}
                        value={paramValues[keys].value.toLowerCase()}
                        setParamValues={setParamValues}
                        paramValues={paramValues}
                    />
                </Grid>
            )
        }
        else if (paramValues[keys].type === "navButton") {

            formFields.push(
                <Grid item xs={3} key={keys}>

                    <Button
                        color="cancel"
                        variant="contained"
                        sx={{ maxWidth: 210, width: 210, height: 55, input: { color: 'primary' } }}
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

    return (<>

        <Grid item xs={12}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Grid container spacing={11} alignItems="center">
                        <Grid item xs={4}>
                            <Typography fontWeight="500" fontSize="20px" variant="body1">
                                {rowLabel}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container spacing={31} direction="row">
                                {formFields}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    </>)
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

    return (
        <TextField
            sx={{ maxWidth: 210, width: 210 }}
            label={isRequired ? label + "*" : label}
            variant="filled"
            value={value}
            onChange={handleChange}
            error={firstMouseEnter && isRequired && value === "" ? true : false}
            helperText={
                firstMouseEnter && isRequired && value === "" ? "Please Provide Comments" : ""
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
    if (id === "comments") {
        fieldColor = "err"
    }

    return (
        <TextField
            sx={{ maxWidth: 210, width: 210 }}
            label={label}
            variant="filled"
            value={value}
            inputProps={{ style: { textAlign: 'center' }, readOnly: true }}
            color={fieldColor}
            focused

        />
    )

}

function ReadOnlyCards({
    value,
    id,
    setParamValues,
    readOnly,
    paramValues,
}) {
        var splitStr = value.toLowerCase().split(' ');
        let modified = []
        for (let i of splitStr) {
            i = i.charAt(0).toUpperCase() + i.substring(1);
            modified.push(i)
        }

        let capitalized = modified.join(' ');


    return (
        <TextField
            color={
                capitalized === "Very High" ? "vHigh" :
                    (
                        capitalized === "High" ? "high" :
                            (capitalized === "Moderate" ? "mod" : "low")
                    )
            }
            focused
            value={capitalized}
            sx={{ maxWidth: 210, width: 210, input: { color: 'primary' } }}
            inputProps={{ style: { textAlign: 'center' }, readOnly: true }}
        />
    )

}