const validation = (userData) => {
    const errors = {}

    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = 'Ingrese un email valido';
    }

    if(!userData.email){
        errors.email = 'Debe ingresar un email'
    }

    if(userData.email.length > 35 ){
        errors.email = 'El email no puede tener mas de 35 caracteres'
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'la contraseña debe tener al menos entre 6 y 10 caracteres';
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'Debe tener al menos un número'
    }

 return errors;

}

export default validation