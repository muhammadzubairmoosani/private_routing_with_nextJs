import {
  FormControl,
  InputAdornment,
  InputLabel,
  IconButton,
  OutlinedInput,
} from "@material-ui/core";

const InputField = ({ value, onChange }) => {
  return (
    <FormControl required variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={value}
        onChange={() => onChange("username")}
        labelWidth={85}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              <span className="material-icons">person</span>
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default InputField;
