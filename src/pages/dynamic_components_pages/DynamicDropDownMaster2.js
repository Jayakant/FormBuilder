import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import React from "react"

export default function DynamicDropDownMaster2({ inputLabel, selectedValue, setSelectedValue, dropDownList, firstMouseEnter, ind, disabledList, setDisabledList }) {

    let array = []
    // console.log(Array.isArray(selectedValue))
    // console.log(`selectedValue in master2: ${selectedValue}`)
    let parsedIndex = parseInt(ind)
    for (let i in dropDownList) {
        array.push(
            <MenuItem key={i} value={dropDownList[i]}>{dropDownList[i]}</MenuItem>
        )
    }

    const handleChange = (e) => {
        // console.log(parsedIndex)
        let updatedArray = selectedValue.map((item, index) =>
            index === parsedIndex ? e.target.value : item
        )
        setSelectedValue(updatedArray)
    }

    React.useEffect(() => {
         for (let ind in selectedValue) {
            if (selectedValue[ind] !== "") {
                // console.log(selectedValue[ind])
                let updatedDisabledDropDownList = disabledList.map((item, index) =>
                    index == ind ? false : item
                )
                setDisabledList(updatedDisabledDropDownList)
            }
            else{
                continue
            }
        }
    }, [selectedValue])

    return (
        <>
            <FormControl
                variant="filled"
                sx={{ maxWidth: 200, width: 152 }}
            >
                <InputLabel>{inputLabel}</InputLabel>
                <Select
                    error={firstMouseEnter && selectedValue === "" ? true : false}
                    value={selectedValue[ind]}
                    onChange={
                        (event) => { handleChange(event) }
                    }
                    disabled={disabledList[ind]}
                >
                    {array}
                </Select>
            </FormControl>
        </>
    )
}