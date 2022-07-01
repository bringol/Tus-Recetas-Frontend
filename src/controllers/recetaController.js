import urlWebServices from './webserviceController';

export const obtenerRecetas = async function () {
    let url = urlWebServices.obtenerRecetas;
    try {
        let response = await fetch(url, {
            method: 'GET',
            mode: "cors",
            headers: {
                //'x-access-token': localStorage.getItem('x'),
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
            return (vacio);
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