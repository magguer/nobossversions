export const firebaseErrors = (errorCode) => {
    switch (errorCode) {
        case "auth/email-already-in-use":
            return {
                code: "email",
                message: "Email ya registrado, prueba con otro."
            }
        case "auth/invalid-email":
            return {
                code: "email",
                message: "Formato de email no valido."
            }
        case "auth/wrong-password":
            return {
                code: "password",
                message: "Contraseña incorrecta."
            }
        case "auth/user-not-found":
            return {
                code: "email",
                message: "No existe el usuario."
            }
        default:
            return {
                code: "email",
                message: "Intentalo más tarde."
            }
    }
}