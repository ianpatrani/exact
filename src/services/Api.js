import axios from "axios";

//URL LOGIN
export const URL_LOGIN = 'https://telecom.exactian.info/ws2/segfi/users/Login'

//URL EMPLEADO
export const URL_EMPLOYEES = 'https://telecom.exactian.info/ws2/segfi/employees/Employees&dni=27101462'

//OBJETO CON LOS DATOS
export const PETITION = {
    user_name: "checkup",
    password: "Exactian2021"
}

//PARAMETROS EMPLEADO
export const PARAMS = {
    dni: "45338825",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDE1MDkwNzksInN1YiI6ImNoZWNrdXAiLCJ0eXBlIjoiMyJ9.30Mg6pD7fHadfdyMwPvkxkZlpnD8yFI70Y6tbsoAuO0"
}

//PETICION AXIOS POST
export function API() {
    axios.post(URL_LOGIN, PETITION)
        .then(response => console.log(response))
        .catch(error => console.log(error))
}