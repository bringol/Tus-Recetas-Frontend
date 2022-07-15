import urlWebServices from './webserviceController';

export const obtenerRecetas = async function (pag) {
    let url = urlWebServices.obtenerRecetas + `?page=${pag}`;
    try {
        let response = await fetch(url, {
            method: 'GET',
            mode: "cors",
            headers: {
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000'
            }
        });
        if (response.status === 200) {
            let data = await response.json();
            //let listaRecetas = data.data.docs;
            let listaRecetas = data
            return listaRecetas;
        }
        else {
            let vacio = [];
            console.log("vacio");
            return (vacio);

        }
    }
    catch (error) {
        console.log("Error", error);
    };
}

export const obtenerRecetaID = async function (id) {
    let url = urlWebServices.obtenerRecetaID + `${id}`;
    try {
        let response = await fetch(url, {
            method: 'GET',
            //method: 'POST',
            mode: "cors",
            headers: {
                //'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000'
            }
        });
        if (response.status === 200) {
            let respuesta = await response.json();
            let listaRecetas = respuesta.data.docs
            // console.log("respuesta webservice",respuesta.data.docs)
            // localStorage.removeItem("receta");
            // localStorage.setItem("receta",JSON.stringify(respuesta.data.docs));
            // //sessionStorage.setItem("receta",JSON.stringify(respuesta));
            // console.log("respuesta webservice localStorage receta")
            // console.log(localStorage.getItem("receta"))
            // console.log("respuesta webservice sessionStorage receta")
            // console.log(sessionStorage.getItem("receta"))
            // console.log("webservice listaRecetas",data)
            return listaRecetas;
        }
        else {
            let vacio = [];
            console.log("vacio");
            return (vacio);

        }
    }
    catch (error) {
        console.log("Error", error);
    };
}

export const obtenerRecetaIDUSR = async function (id) {
    let url = urlWebServices.obtenerRecetaIDUSR + `${id}`;
    try {
        let response = await fetch(url, {
            method: 'GET',
            //method: 'POST',
            mode: "cors",
            headers: {
                //    'x-access-token': localStorage.getItem('x'),
                'Authorization': `Bearer ${localStorage.getItem('x')}`,
                'Origin': 'http://localhost:3000'
            }
        });

        if (response.status === 200) {
            let respuesta = await response.json();
            let listaRecetas = respuesta.data.docs
            return listaRecetas;
        }
        else {
            let vacio = [];
            console.log("vacio");
            return (vacio);

        }
    }
    catch (error) {
        console.log("Error", error);
    };
}

export const crearReceta = async function (receta) { //creo la receta
    let url = urlWebServices.crearReceta;
    const formData = new URLSearchParams();
    formData.append('nombre', receta.nombre);
    formData.append('categoria', receta.categoria);
    formData.append('dificultad', receta.dificultad);
    formData.append('ingredientes', receta.ingredientes);
    formData.append('procedimiento', receta.procedimiento);
    formData.append('email', receta.email);
    formData.append('autor', receta.autor);
    formData.append('nombreImagen', receta.nombreImagen);
    //formData.append('email', localStorage.getItem("email"));
    //formData.append('autor', `${localStorage.getItem("nombre")} ${localStorage.getItem("apellido")}`);
    //formData.append('nombreImagen', "https://vectorified.com/images/image-placeholder-icon-15.png");

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                "Authorization": `Bearer ${localStorage.getItem('x')}`,
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        let data = await response.json();
        switch (response.status) {
            case 201:
                {
                    return ({ rdo: 0, mensaje: "Ok" });
                }
            case 202:
                {
                    //error mail
                    return ({ rdo: 1, mensaje: "El mail ingresado no existe en nuestra base." });
                }
            case 203:
                {
                    //error password
                    return ({ rdo: 1, mensaje: "La contraseña no es correcta." });
                }
            case 400:
                {
                    return ({ rdo: 1, mensaje: data.message })
                }
            default:
                {
                    //otro error
                    return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
                }
        }
    }
    catch (error) {
        console.log("Error", error);
    };
}

export const uploadImg = async function (files, nombres) //subir receta a cloudinary
{
    //url webservices
    let url = urlWebServices.uploadImg;

    console.log('files', files)
    console.log('nombres', nombres)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i], nombres[i])
    }

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/form-data',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                //'Content-Type': 'application/form-data'
            },
            body: formData
        });

        let archivos = await response.json()
        console.log('respuestaUpload', archivos);
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
}

export const calificarReceta = async function (calificacion) {

    console.log("llega al controller del front")

    let url = urlWebServices.calificarReceta;

    const formData = new URLSearchParams();
    formData.append('idReceta', calificacion.idReceta);
    formData.append('autor', calificacion.autor);
    formData.append('calificacion', calificacion.calificacion);

    console.log("envia formulario")

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                "Authorization": `Bearer ${localStorage.getItem('x')}`,
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        let data = await response.json();
        switch (response.status) {
            case 201:
                {
                    return ({ rdo: 0, mensaje: "Ok" });
                }
            case 202:
                {
                    //error mail
                    return ({ rdo: 1, mensaje: "El mail ingresado no existe en nuestra base." });
                }
            case 203:
                {
                    //error password
                    return ({ rdo: 1, mensaje: "La contraseña no es correcta." });
                }
            case 400:
                {
                    return ({ rdo: 1, mensaje: data.message })
                }
            default:
                {
                    //otro error
                    return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
                }
        }
    }
    catch (error) {
        console.log("Error", error);
    };
}

export const eliminarReceta = async function (id) {
    let url = urlWebServices.deleteReceta + "/" + id;
    try {
        let response = await fetch(url, {
            method: 'DELETE',
            mode: "cors",
            headers: {
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000'
            }
        });

        let data = await response.json();
        switch (response.status) {
            case 201:
                {
                    return ({ rdo: 0, mensaje: "Ok" });
                }
            case 400:
                {
                    return ({ rdo: 1, mensaje: data.message })
                }
            default:
                {
                    //otro error
                    return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
                }
        }
    }
    catch (error) {
        console.log("Error", error);
    };
}

export const obtenerRecetaMail = async function () {
    let url = urlWebServices.obtenerRecetaMail;
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem("email"));
    try {
        let response = await fetch(url, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                //'x-access-token': localStorage.getItem('x'),
                "Authorization": `Bearer ${localStorage.getItem('x')}`,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });

        if (response.status === 200) {
            let respuesta = await response.json();
            let listaRecetas = respuesta.data.docs;
            //let listaRecetas = data
            console.log("dentro recetas mail", listaRecetas)
            return listaRecetas;
        }
        else {
            let vacio = [];
            console.log("vacio");
            return (vacio);

        }
    }
    catch (error) {
        console.log("Error", error);
    };
}

export const buscarReceta = async function (nombre, categoria, dificultad, ingredientes, calificacion) {
    let url = urlWebServices.buscarReceta;
    const formData = new URLSearchParams();
    formData.append('nombre', nombre);
    formData.append('categoria', categoria);
    formData.append('dificultad', dificultad);
    formData.append('ingredientes', ingredientes);
    formData.append('calificacion', calificacion);

    try {
        let response = await fetch(url, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                //'x-access-token': localStorage.getItem('x'),
                "Authorization": `Bearer ${localStorage.getItem('x')}`,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        });
        console.log(url)
        console.log(nombre)
        if (response.status === 201) {
            let data = await response.json();
            let listaRecetas = data.data.docs;
            //let listaRecetas = data
            //console.log(data)
            return listaRecetas;
            
        }
        else {
            let vacio = [];
            console.log("vacio");
            return (vacio);

        }
    }
    catch (error) {
        console.log("Error", error);
    };
}

