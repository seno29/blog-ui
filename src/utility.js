import jwt from 'jwt-decode'

export const getBaseUrl = () => {
    return "https://demo-db-2.herokuapp.com/"
}
export const getLoggedInUserDetails = () => {
    const token = localStorage.getItem("token")
    if (token) {
        const decodedToken = jwt(token)
        console.log(decodedToken)
        return decodedToken.userDetails
    }
}
export const isLoggedIn = () => {
    if (localStorage.getItem("token")) {
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