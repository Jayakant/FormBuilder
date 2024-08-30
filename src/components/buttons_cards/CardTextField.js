import TextField from "@mui/material/TextField";

export default function CardTextField({ label, value, onChange, type,helperText,error }) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputProps: { maxLength: 32 },
      }}
      label={label}
      value={value}
      type={type}
      onChange={onChange}
      variant="filled"
      margin="normal"
      color="primary"
      helperText={helperText}
      error={error}
    />
  );
}
