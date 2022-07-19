import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, Box, Typography, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { obtenerRecetaMail } from "../controllers/recetaController";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#7c496acc",
        padding: "10px 80px",
    },
}));


export default function MisRecetaUser() {

    const classes = useStyles();
    const [listaRecetas, setListaRecetas] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setpageCount] = useState(0);
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)


    useEffect(() => {
        async function componentDidMount(page) {
            let rdo = await obtenerRecetaMail();
            setListaRecetas(rdo.data.docs);
            setpageCount(rdo.data.pages);
            executeScroll()
        }
        componentDidMount();
    }, [page]);

    function handleAnterior() {
        setPage((p) => {
            if (p === 1)
                return p

            else
                return p - 1
        })
    }

    function handleSiguiente() {
        setPage((p) => {
            if (p === pageCount)
                return p
            else {
                return (p + 1)
            }
        })
    }


    return (
        <Section id="recetas">
            <div className="title" ref={myRef}>
                <h1>
                    <span>Mis Recetas</span>
                </h1>
            </div>
            <div className="products">
                {listaRecetas.map((receta) => {
                    return (
                        <div className="id" key={receta._id}>
                            <div className="product">
                                <div className="image">
                                    <img src={receta.nombreImagen} alt="" />
                                </div>
                                {/* <>{receta._id}</> */}
                                <Typography
                                    sx={{ textAlign: "center", fontWeight: 'bold' }}
                                    variant="overline"
                                >
                                    {receta.nombre}
                                </Typography>

                                <Grid>
                                    <NavLink to={`/editar-receta/${receta._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                        <IconButton aria-label="edit">
                                            <EditIcon />
                                        </IconButton>
                                    </NavLink>
                                    <NavLink to={`/receta/${receta._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </NavLink>
                                </Grid>

                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={classes.container}>
                <Button
                    disabled={page === 1}
                    onClick={handleAnterior}
                    sx={{ fontSize: 50 }}
                >
                    <ArrowBackIosIcon />
                </Button>

                <Typography sx={{ fontSize: 50 }}>
                    {page}<MoreHorizIcon />{pageCount}
                </Typography>

                <Button
                    disabled={page === pageCount}
                    onClick={handleSiguiente}
                    //onClick={executeScroll}
                    sx={{ fontSize: 50 }}
                >
                    <ArrowForwardIosIcon />
                </Button>
            </div>



        </Section>

    );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 2rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #44214e;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #572e57, #834e6d, #572e57);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #572e57, #834e6d, #572e57);
        }
      }      
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;