import React, { useState, useEffect } from 'react';
import { Avatar, Button, CssBaseline, TextField, Container, Box, Autocomplete, Grid, FormControl, InputLabel, Select, MenuItem  } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { makeStyles } from '@material-ui/core/styles'; //sin esto no funciona por más que lo actualice, probar de sacar el resto para la v5
import { useParams,useNavigate } from 'react-router-dom';

//validacion
import { useFormik } from 'formik';
import * as yup from "yup"
//back
import { editarReceta, uploadImg, obtenerRecetaID } from "../controllers/recetaController"


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: "10px",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#834e6d",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    botón: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: "120px",
        backgroundColor: "#834e6d",
    },
}));

const validationSchema = yup.object
    ({
        nombre: yup
            .string()
            .matches(/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]*$/, 'Ingresar título válido')
            .min(2, "Debe contener al menos 2 letras")
            .required(""),

        categoria: yup
            .string()
            .required("Obligatorio"),

        dificultad: yup
            .string()
            .required("Obligatorio"),

        ingredientes: yup
            .string()
            .min(2, "Debe contener al menos 2 letras")
            .required("Obligatorio"),

        procedimiento: yup
            .string()
            .min(2, "Debe contener al menos 2 letras")
            .required("Obligatorio"),


    })

const EditarReceta = (props) => {

    const classes = useStyles();
    const { id } = useParams();
    const [categoria, setCategoria] = useState('');
    const [dificultad, setDificultad] = useState('');
    const [imagen, setImagen] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [procedimiento, setProcedimiento] = useState('');
    const [nombreImagen, setNombreImagen] = useState('');
    const [autor, setAutor] = useState('');
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

   

    useEffect(() => {               
        componentDidMount();
    }, []); 
   

     async function componentDidMount() {
            
        
            let rdo = await obtenerRecetaID(id);

            if (rdo.length > 0) {
              
              setCategoria(rdo[0].categoria);
              
              setNombreImagen(rdo[0].nombreImagen);
              
              setDificultad(rdo[0].dificultad);
              
              setIngredientes(rdo[0].ingredientes);
             
              setProcedimiento(rdo[0].procedimiento);
             

              setAutor(rdo[0].autor);
              
              
              setNombre(rdo[0].nombre);
              
            }
          }
          

    const formik = useFormik({
        enableReinitialize: true,
        initialValues:
        {
            nombre: `${nombre}`,
            categoria: `${categoria}`,
            dificultad: `${dificultad}`,
            ingredientes: `${ingredientes}`,
            procedimiento: `${procedimiento}`,
            nombreImagen: `${nombreImagen}`,

        },

        onSubmit: (values) => {
            console.log(JSON.stringify(values))
        },

        validationSchema: validationSchema

    });



    const validarReceta = async function () {
           
        let datos = {
            _id: id,
            nombre: formik.values.nombre,
            categoria: formik.values.categoria,
            dificultad: formik.values.dificultad,
            ingredientes: formik.values.ingredientes,
            procedimiento: formik.values.procedimiento,
            nombreImagen: formik.values.nombreImagen,
        }
        let nuevoDato = await editarReceta(datos);
        console.log(datos._id);
        if (nuevoDato.rdo === 0) {
            //setUsuarioValido(true);
            //setToggle(!toggle)
            console.log("Receta actualizado")
        }
        if (nuevoDato.rdo === 1) {
            alert(nuevoDato.mensaje)
        }

    }


        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <UploadFileIcon />
                    </Avatar>
                    <h2> Modificar Receta</h2>
                    <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            color='secondary'
                            required                            
                            fullWidth
                            id="nombre"
                            label="Nombre"
                            name="nombre"
                            //autoComplete="email"
                            autoFocus
                            value={formik.values.nombre}
                            onChange={formik.handleChange}
                            error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                            helperText={formik.touched.nombre && formik.errors.nombre}
                            onBlur={formik.handleBlur}
                        />
                        {/* <Filtros /> */}
                        <Grid container direction="row">
                            <Grid item xs={12} md={12}>
                                <Box sx={{ mt: 1 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" color='secondary'>Dificultad</InputLabel>
                                        <Select
                                            labelId="dificultad"
                                            id="dificultad"
                                            value={formik.values.dificultad}
                                            label='dificultad'
                                            name="dificultad"
                                            color='secondary'
                                            onChange={formik.handleChange}
                                            error={formik.touched.dificultad && Boolean(formik.errors.dificultad)}
                                            helperText={formik.touched.dificultad && formik.errors.dificultad}
                                            onBlur={formik.handleBlur}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid >

                        <Grid container direction="row">
                            <Grid item xs={12} md={12}>
                                <Box sx={{ mt: 1 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" color='secondary'>Categoria</InputLabel>
                                        <Select
                                            labelId="Categoria"
                                            id="categoria"
                                            value={formik.values.categoria}
                                            label='categoria'
                                            name="categoria"
                                            color='secondary'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.categoria && Boolean(formik.errors.categoria)}
                                            helperText={formik.touched.categoria && formik.errors.categoria}
                                        >
                                            <MenuItem value={"Postres"}>Postres</MenuItem>
                                            <MenuItem value={"Carnes"}>Carnes</MenuItem>
                                            <MenuItem value={"Frituras"}>Frituras</MenuItem>
                                            <MenuItem value={"Pasteleria"}>Pasteleria</MenuItem>
                                            <MenuItem value={'Guisos y sopas'}>Guisos y sopas</MenuItem>
                                            <MenuItem value={"Arroces y pastas"}>Arroces y pastas</MenuItem>
                                            <MenuItem value={"Pizzas"}>Pizzas</MenuItem>
                                            <MenuItem value={"Panes"}>Panes</MenuItem>
                                            <MenuItem value={"Vegetarianas"}>Vegetarianas</MenuItem>
                                            <MenuItem value={"Otros"}>Otros</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid >

                        <Box sx={{ mt: 2 }}>
                            <TextField
                                id="ingredientes"
                                name="ingredientes"
                                label="Ingredientes"
                                color='secondary'
                                value={formik.values.ingredientes}
                                onChange={formik.handleChange}
                                error={formik.touched.ingredientes && Boolean(formik.errors.ingredientes)}
                                helperText={formik.touched.ingredientes && formik.errors.ingredientes}
                                onBlur={formik.handleBlur}
                                fullWidth
                                multiline
                                maxRows={12}
                            />
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <TextField
                                id="procedimiento"
                                name="procedimiento"
                                label="Procedimiento"
                                color='secondary'
                                multiline
                                fullWidth
                                maxRows={12}
                                value={formik.values.procedimiento}
                                onChange={formik.handleChange}
                                error={formik.touched.procedimiento && Boolean(formik.errors.procedimiento)}
                                helperText={formik.touched.procedimiento && formik.errors.procedimiento}
                                onBlur={formik.handleBlur}
                            />
                        </Box>

                        <Box
                            sx={{
                                mt: 5, display: 'flex',
                                flexDirection: 'column',
                                color: 'secondary',
                                alignItems: 'center'
                            }}>


                        </Box>

                        <Box sx={{ mt: 5 }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.botón}
                                disabled={
                                    !(formik.isValid && formik.dirty)
                                    // (formik.errors.nombre)            
                                    // ||
                                    // ( formik.errors.ingredientes)
                                    // ||
                                    // (formik.errors.procedimiento) 
                                }
                               onClick={() => validarReceta()}
                            >
                                Guardad Cambios
                            </Button>
                        </Box>
                    </form>
                </div>

            </Container >
        );
    
}

export default EditarReceta