import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import styled from "styled-components";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#7c496acc",
        padding: "10px 80px",
        widht: "100%"
    },
}));

const Paginacion = (setPage, pageNumber) => {
    const classes = useStyles();

    const handleChange = page => {
        setPage(page)
        window.scroll(0, 0)
    }

    return (
        <div className={classes.container}>
            <Pagination
                onChange={(e) => handleChange(e.target.textContent)}
                style={{ display: "flex", justifyContent: "center" }}
                //count={pageNumber}
            />
        </div>
    );
}

export default Paginacion;