import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import React from "react"

export default function DynamicDropDownMaster({ inputLabel, selectedValue, setSelectedValue, dropDownList, firstMouseEnter, disabled }) {

  let disableProps = disabled ? disabled : false
  let array = []
  for (let i in dropDownList) {
    array.push(
      <MenuItem key={i} value={dropDownList[i]}>{dropDownList[i]}</MenuItem>
    )
  }

  return (
    <>
      <FormControl
        variant="filled"
        sx={{ maxWidth: 300, width: 300 }}
      >
        <InputLabel>{inputLabel}</InputLabel>
        <Select
          error={firstMouseEnter && selectedValue === "" ? true : false}
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          disabled={disableProps}
        >
          {array}
        </Select>
      </FormControl>
    </>
  )
}