import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Button } from '@mui/material';

//fuente https://codesandbox.io/s/eager-euclid-mo7de?from-embed=&file=/src/index.js:0-155z

export default function SubirFoto() {
    return (
      <div className="App">
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
          />
          <Fab
            color="secondary"
            size="small"
            component="span"
            aria-label="add"
            variant="extended"
          >
            <AddIcon /> Subir Foto
          </Fab>
          <br />
          <br />
          {/* <Fab color="primary" size="small" component="span" aria-label="add">
            <AddIcon />
          </Fab>
          <br />
          <br /> */}
          {/* <Button color="secondary" variant="contained" component="span">
            Upload button
          </Button>{" "} */}
        </label>
      </div>
    );
  }
  