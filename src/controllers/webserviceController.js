import { uploadImg } from "./recetaController";

const urlApi = "http://localhost:4000/";
console.log("url",urlApi);

const urlWebServices = {

    //users
    login:urlApi +"api/users/login",
    createUser:urlApi +"api/users/",
    editarUser:urlApi +"api/users/editar/perfil",
    editarPassword:urlApi +"api/users/editar/password",
    olvidoPassword:urlApi +"api/users/olvido",
    reinicioPassword:urlApi +"api/users/reinicio",
    
    

    //recetas
    obtenerRecetas:urlApi +"api/recetas/",
    obtenerRecetaID:urlApi +"api/recetas/",
    obtenerRecetaIDUSR:urlApi +"api/recetas/auth/",
    crearReceta:urlApi +"api/recetas/crear-receta/", 
    editarReceta:urlApi +"api/recetas/editar-receta/",
    eliminarReceta:urlApi +"api/recetas/eliminar-receta/",
    buscarReceta:urlApi +"api/recetas/buscar/",
    calificarReceta:urlApi +"api/recetas/calificar-receta/",
    uploadImg:urlApi +"api/recetas/uploadImg/",
    obtenerRecetaMail:urlApi+"api/recetas/user/misrecetas/",
}

export default urlWebServices;