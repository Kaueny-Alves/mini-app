import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core/styles";
import { orange } from '@material-ui/core/colors';

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

const theme = createTheme({
  palette: {
    primary: orange,
  },
});

export function Tasks({
  placeholder,
  name,
  onClick,
  value,
  onChange,
  InputProps,
  label,
}) {
  const classes = useStyles();

  return (
     <ThemeProvider theme={theme}>
      <TextField
        label={label}
        value={value}
        className={classes.root}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={InputProps}
      />
    </ThemeProvider>
  );
}
