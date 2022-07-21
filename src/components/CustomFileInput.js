import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import CustomInput from "./CustomInput.js";

import {Button} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  inputFile: {
    opacity: "0",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "-1"
  },
  inputFileWrapper: {
    "& button svg": {
      color: "inherit"
    }
  }
}));


export default function CustomFileInput(props) {
  const [fileNames, setFileNames] = React.useState("");
  const [files, setFiles] = React.useState(null);
  const {
    id,
    endButton,
    startButton,
    inputProps,
    formControlProps,
    multiple,
    getImagen
  } = props;

  let hiddenFile = React.createRef();
  const onFocus = e => {
    hiddenFile.current.click(e);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    
    let imagen = e.target.files[0]; 
    if(imagen.size > 3100000)
    { 
      alert('La imagen supera el máximo de 3MB') 
      return
    }
      getImagen(imagen)
  
    
  };
  
  const addFile = e => { //trae archivos del componente de windows
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
      if (props.multiple && i !== e.target.files.length - 1) {
        fileNames = fileNames + ", ";
      }
    }
    setFiles(files);
    setFileNames(fileNames);
    handleSubmit(e);
  };
 
  const classes = useStyles();
  if (inputProps && inputProps.type && inputProps.type === "file") {
    inputProps.type = "text";
  }
  let buttonStart;
  let buttonEnd;
  if (startButton) {
    buttonStart = (
      <Button {...startButton.buttonProps}>
        {startButton.icon !== undefined ? startButton.icon : null}
        {startButton.text !== undefined ? startButton.text : null}
      </Button>
    );
  }
  if (endButton) {
    buttonEnd = (
      <Button {...endButton.buttonProps}>
        {endButton.icon !== undefined ? endButton.icon : null}
        {endButton.text !== undefined ? endButton.text : null}
      </Button>
    );
  }
  
  return (
    <div className={classes.inputFileWrapper}>
      <input
        type="file"
        className={classes.inputFile}
        multiple={multiple}
        ref={hiddenFile}
        onChange={addFile}
      />
      <CustomInput
        id={id}
        formControlProps={{
          ...formControlProps
        }}
        inputProps={{
          ...inputProps,
          onClick: onFocus,
          value: fileNames,
          endAdornment: buttonEnd,
          startAdornment: buttonStart
        }}
      />
    </div>
  );
}

CustomFileInput.defaultProps = {
  multiple: false
};

CustomFileInput.propTypes = {
  id: PropTypes.string,
  endButton: PropTypes.object,
  startButton: PropTypes.object,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  multiple: PropTypes.bool
};