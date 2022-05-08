import React from "react";
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



const columns = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'name', label: 'Nombre', minWidth: 170 },
  { id: 'categoria', label: 'Categoria', minWidth: 170, align: 'center'},
  { id: 'dificultad', label: 'Dificultad', minWidth: 170, align: 'center' },
  { id: 'modificar', label: 'Modificar', minWidth: 170, align: 'center' },
  { id: 'eliminar', label: 'Eliminar', minWidth: 170, align: 'center' },
];

function createData(id, name, categoria, dificultad) {
  const modificar = <button><MdEdit className="delete" size={20}/></button>;
  const eliminar = <button><MdDelete className="delete" size={20} /></button>;
  return { id, name, categoria, dificultad, modificar, eliminar };
}

const rows = [
  createData(1, 'Hamburguesas', 'Carnes', 'Media'),
  createData(2, 'Pollo al Verdeo', 'Pollos', 'Baja'),
  
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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

      <Box sx={{ mt: 5 }}>
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
    </Container>
  );
}
