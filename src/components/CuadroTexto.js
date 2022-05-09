import React, {Fragment} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from '@mui/material/TextareaAutosize';

//fuente https://stackoverflow.com/questions/62475790/how-do-i-set-a-width-for-the-textareaautosize-component-in-material-ui

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      //margin: theme.spacing(1),
      width: '100%',
      
    }
  },
  textarea: {
    resize: "both"
  }
}));

 const CuadroTexto=(props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-textarea"
          //label="Pasar esto como prop"
          label={props.label}
          //placeholder="Pasar esto tamb como prop"
          placeholder={props.placeholder}
          multiline
          variant="outlined"
          inputProps={{ className: classes.textarea }}
        />
      </div>
    </form>
  );
}

export default CuadroTexto