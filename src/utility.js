import jwt from 'jwt-decode'

export const getBaseUrl = () => {
    // return "https://demo-db-2.herokuapp.com/"
    return "http://localhost:8080/"
}
export const getLoggedInUserDetails = () => {
    const token = sessionStorage.getItem("token")
    if (token) {
        const decodedToken = jwt(token)
        console.log(decodedToken)
        return decodedToken.userDetails
    }
}
export const isLoggedIn = () => {
    if (sessionStorage.getItem("token")) {
        return true
    }
    return false
}
export const getCurrentUserRole = () => {
    const userDetails = getLoggedInUserDetails()
    if (userDetails && userDetails.role) {
        return userDetails.role
    }
}