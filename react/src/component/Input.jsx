import React from "react";
import TextField from "@mui/material/TextField";
import { Typography ,Box, Button} from "@mui/material";

const styleSheet = {
  label: { fontSize: 14,marginTop: 1, marginBottom: 0 },
};

const InputField = (props) => {
  const {  alignment = "left", onClick, ...param } = props;
  return (
    <>
      {props.label && 
        <Typography sx={styleSheet.label} align={alignment}>
        {props.label}
        {props.required ? (
          <span style={{ color: "#f44336", fontSize: 15 }}>*</span>
        ) : (
          <span style={{ color: "transparent", fontSize: 15 }}>*</span>
        )}
      </Typography>
      }
      
      <TextField
            onKeyDown={props.onKeyDown}
            onClick={onClick}
            InputProps={{ readOnly: props.readOnly }}
            {...props.input}
            error={props.meta.touched && props.meta.error ? true : false}
            fullWidth
            size="small"
            required={props.required}
            id="outlined-required"
            type={props.type}
            multiline={props.multiline}
            rows={props.multiline ? props.linerow : undefined}
            disabled={props.disabled}
            placeholder={props.placeholder}
            sx={{
              ...props.sx,
              textTransform: "uppercase" ,
              
              "& input": {
                backgroundColor: props.disabled ? "#e8e8e8" : "transparent",
                height: props.height ? props.height : 19,
                fontSize: props.fontSize ? props.fontSize : 13,
              },
            }}
          />
    </>
  );
};

export default InputField;