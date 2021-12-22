import React from "react";
import TextField from "@material-ui/core/TextField";
import adicionar from "../../assets/adicionar.png";
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
    }
  }
}));

export function Tasks({ placeholder, name, onClick, value }) {
  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.root}
        required
        autoFocus={false}
        value={value}
        name={name}
        placeholder={placeholder}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <button className="btn" onClick={onClick}>
              <img src={adicionar} alt="imagem de adicionar" />
            </button>
          ),
        }}
      />
    </div>
  );
}
