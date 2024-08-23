import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";
const SearchField = (props) => {
  return (
    <div>
      <TextField
        hiddenLabel
        onChange={props.onChange}
        fullWidth
        value={props.value}
        placeholder="Search..."
        // size="small"
        autoComplete="off"
        id="outlined-required"
        sx={{
          '& .MuiInputBase-root': {
            height: 38,
          },
          '& .MuiInputBase-input': {
            fontSize: 15,
          },
        }}
     
      />
    </div>
  );
};

export default SearchField;