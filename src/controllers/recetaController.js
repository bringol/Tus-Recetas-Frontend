import urlWebServices from './webserviceController';

export const obtenerRecetas = async function () {
    let url = urlWebServices.obtenerRecetas;
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
            let listaRecetas = data.data.docs;
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
    console.log("llega ACA")
    //console.log("url",url);
    const formData = new URLSearchParams();
    console.log("llega ACA");
    console.log("URL", receta.nombreImagen);
    console.log("leyo");
    
    formData.append('nombre', receta.nombre);
    formData.append('categoria', receta.categoria);
    formData.append('dificultad', receta.dificultad);
    formData.append('ingredientes', receta.ingredientes);
    formData.append('procedimiento', receta.procedimiento);
    formData.append('autor', receta.autor);
    formData.append('nombreImagen', receta.nombreImagen);
    console.log("receta NOMBRE", receta.dificultad);


    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
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

export const uploadImg= async function(files, nombres) //subir receta a cloudinary
{
     //url webservices
     let url = urlWebServices.uploadImg;
  
    console.log('files', files)
    console.log('nombres',nombres)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++)
    {
        formData.append('files', files[i], nombres[i])
    }
   
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                //'Content-Type': 'application/form-data'
            },
            body:formData
        });
    
        let archivos = await response.json()
        console.log('respuestaUpload', archivos);
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
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