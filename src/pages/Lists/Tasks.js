import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 4,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5,
    flexWrap: "wrap",
    borderRadius: "5px",
    border: "1px solid var(--orange)",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export function Tasks({
  placeholder,
  name,
  onClick,
  value,
  onChange,
  InputProps,
}) {
  const classes = useStyles();

  return (
    <div>
      <TextField
        value={value}
        className={classes.root}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={InputProps}
      />
    </div>
  );
}
