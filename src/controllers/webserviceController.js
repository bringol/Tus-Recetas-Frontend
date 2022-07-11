const urlApi = "http://localhost:4000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {

    //users
    login:urlApi +"api/users/login",
    createUser:urlApi +"api/users/",
    editarUser:urlApi +"api/users/editar/perfil",
    editarPassword:urlApi +"api/users/editar/password",
    olvidoPassword:urlApi +"api/users/olvido",
    reinicioPassword:urlApi +"api/users/reinicio",
    
    //updateUser:urlApi +"api/users/update",

    //recetas
    obtenerRecetas:urlApi +"api/recetas/",
    obtenerRecetaID:urlApi +"api/recetas/",//:id?
    obtenerRecetaIDUSR:urlApi +"api/recetas/auth/",
    crearReceta:urlApi +"api/recetas/crear-receta/", //guardo imagen en cloudinary y creo la receta
    editarReceta:urlApi +"api/recetas/editar-receta/",
    eliminarReceta:urlApi +"api/recetas/eliminar-receta/",
    buscarReceta:urlApi +"api/recetas/buscar/",
    calificarReceta:urlApi +"api/recetas/calificar-receta/"
}

export default urlWebServices;