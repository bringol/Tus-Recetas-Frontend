import urlWebServices from './webserviceController';


export const createUser = async function(usuario){
    let url = urlWebServices.createUser;
    const formData = new URLSearchParams();
    formData.append('nombre', usuario.nombre);
    formData.append('apellido', usuario.apellido);
    formData.append('telefono', usuario.telefono);
    formData.append('email', usuario.email);
    formData.append('password', usuario.password);
    try
    {
        let response = await fetch(url,{
            method: 'POST',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 201:
                {                    
                    return ({rdo:0,mensaje:"Ok"});
                }
                case 400:
                    {
                        return({rdo:1, mensaje:data.message})
                    }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("Error",error);
    };
}


export const editarPassword = async function(usuario){
    let url = urlWebServices.editarPassword;
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem('email'));
    formData.append('password', usuario.password);
    try
    {
        let response = await fetch(url,{
            method: 'PUT',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': localStorage.getItem('x'),
                "Authorization": `Bearer ${localStorage.getItem('x')}`,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 200:
                {                    
                    return ({rdo:0,mensaje:"Ok"});
                }
                case 400:
                    {
                        return({rdo:1, mensaje:data.message})
                    }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("Error",error);
    };
}

export const editarUser= async function(usuario){
    let url = urlWebServices.editarUser;
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem('email'));
    formData.append('nombre', usuario.nombre);
    formData.append('apellido', usuario.apellido);
    formData.append('telefono', usuario.telefono);
    try
    {
        let response = await fetch(url,{
            method: 'PUT',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': localStorage.getItem('x'),
                "Authorization": `Bearer ${localStorage.getItem('x')}`,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 200:
                {      
                    localStorage.setItem("nombre",usuario.nombre)
                    localStorage.setItem("apellido",usuario.apellido)
                    localStorage.setItem("telefono",usuario.telefono)                
                    return ({rdo:0,mensaje:"Ok"});
                }
                case 400:
                    {
                        return({rdo:1, mensaje:data.message})
                    }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("Error",error);
    };
}


export const olvidoPassword = async function(usuario){
    let url = urlWebServices.olvidoPassword;
    const formData = new URLSearchParams();
    formData.append('email', usuario.email);
    try
    {
        let response = await fetch(url,{
            method: 'POST',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 200:
                {                    
                    return ({rdo:0,mensaje:"Ok"});
                }
                case 400:
                    {
                        return({rdo:1, mensaje:data.message})
                    }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("Error",error);
    };
}

export const reinicioPassword = async function(usuario){
    let url = urlWebServices.reinicioPassword;
    const formData = new URLSearchParams();
    formData.append('token', usuario.token);
    formData.append('password', usuario.password);
    try
    {
        let response = await fetch(url,{
            method: 'POST',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 200:
                {                    
                    return ({rdo:0,mensaje:"Ok"});
                }
                case 400:
                    {
                        return({rdo:1, mensaje:data.message})
                    }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("Error",error);
    };
}



// export const updatePassword = async function(usuario){
//     let url = urlWebServices.createUser;
//     const formData = new URLSearchParams();
//     formData.append('nombre', usuario.nombre);
//     formData.append('apellido', usuario.apellido);
//     formData.append('telefono', usuario.telefono);
//     formData.append('email', usuario.email);
//     formData.append('password', usuario.password);
//     try
//     {
//         let response = await fetch(url,{
//             method: 'POST',
//             mode: "cors",
//             headers:{
//                 'Accept':'application/x-www-form-urlencoded',
//                 'Origin':'http://localhost:3000',
//                 'Content-Type': 'application/x-www-form-urlencoded'},
//             body: formData,
            
//         });
        
//         let rdo = response.status;
//         let data = await response.json();
//             switch(rdo)
//             {
//                 case 201:
//                 {                    
//                     return ({rdo:0,mensaje:"Ok"});
//                 }
//                 // case 202:
//                 // {
//                 //     //error mail
//                 //     return ({rdo:1,mensaje:"El mail ingresado ya existe en nuestra base."});
//                 // }
//                 case 400:
//                     {
//                         return({rdo:1, mensaje:data.message})
//                     }
//                 default:
//                 {
//                     //otro error
//                     return ({rdo:1,mensaje:"Ha ocurrido un error"});                
//                 }
//             }
//     }
//     catch(error)
//     {
//         console.log("Error",error);
//     };
// }