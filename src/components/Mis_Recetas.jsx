import React, {useState,useEffect } from "react";
import {Avatar,Button,CssBaseline,TextField,Link,Grid,Typography,Container, Box,TextareaAutosize, Fab} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { MdDelete, MdEdit, MdBook} from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import{obtenerRecetaMail} from "../controllers/recetaController";

const columns = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'nombre', label: 'Nombre', minWidth: 170 },
  { id: 'categoria', label: 'Categoria', minWidth: 170, align: 'center'},
  { id: 'dificultad', label: 'Dificultad', minWidth: 170, align: 'center' },
  { id: 'modificar', label: 'Modificar', minWidth: 170, align: 'center' },
  { id: 'eliminar', label: 'Eliminar', minWidth: 170, align: 'center' },
];

function createData(id, nombre, categoria, dificultad) {
  const modificar = <NavLink to='/User/Receta/Modificar'> <button><MdEdit className="delete" size={20}/></button> </NavLink>; //super harcodeado
  const eliminar = <button><MdDelete className="delete" size={20} /></button>;
  return { id, nombre, categoria, dificultad, modificar, eliminar };
}

const rows = [
  createData(1, 'Hamburguesas', 'Carnes', '3'),
  createData(2, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(3, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(5, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(6, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(7, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(8, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(9, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(10, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(11, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(12, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(13, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(14, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(15, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(16, 'Pollo al Verdeo', 'Pollos', '1'),
  createData(17, 'Pollo al Verdeo', 'Pollos', '1'),  
];



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "50px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#834e6d",
  },
  botón: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "100px",
    backgroundColor: "#834e6d",
  },
}));

export default function Mis_Recetas() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [listado,setListado]=useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

//   useEffect(() => {
//     async function componentDidMount() {
//         let rdo = await obtenerRecetaMail();
//         let data= await rdo.json()
//         console.log("dentro de rdo",rdo)
//         //console.log("dentro de data",data)
//         console.log("longitud rdo",rdo.length)
//         //setListado(rdo)
//         //console.log("dentro de Listado",listado)
//         // if (rdo.length > 0) {
//         //     setCat(rdo[0].categoria);
//         //     setImagen(rdo[0].nombreImagen);
//         //     setDificultad(rdo[0].dificultad);
//         //     setIngredientes(rdo[0].ingredientes);
//         //     setProcedimiento(rdo[0].procedimiento);
//         //     setcalificacionProm(rdo[0].calificacionPromedio);
//         //     setcalificacionTotal(rdo[0].calificacionTotal);
//         //     setusrTotales(rdo[0].usuariosTotales);
//         //     setAutor(rdo[0].autor);
//         //     setNombre(rdo[0].nombre);
//         // }
//     }
//     componentDidMount();
// }, []);
  
  useEffect(() => {
    getRecetas();
  }, []);

  const getRecetas = async () => {
    const response = await obtenerRecetaMail();
    const data = await response.json();
    setListado(data); //Setting the response into state
    console.log("dentro de Listado",listado);

  };


  return (

    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MdBook />
        </Avatar>
        <h2>Mis Recetas</h2>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>

      <Box sx={{ mt: 5, mb:15 }}>
        <NavLink to='/User/Receta/Publicar'style={{ textDecoration: 'none', color: 'white'}}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.botón}
        >
         Publicar Nueva Receta
        </Button> </NavLink>
      </Box>
      <Box sx={{ mt: 5, mb:25 }}></Box>
    </Container>
  );
}
