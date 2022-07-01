import urlWebServices from './webserviceController';


export const createUsuario = async function(usuario){
    let url = urlWebServices.createUsuario;
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
                case 202:
                {
                    //error mail
                    return ({rdo:1,mensaje:"El mail ingresado ya existe en nuestra base."});
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