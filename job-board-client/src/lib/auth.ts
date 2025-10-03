import { jwtDecode } from 'jwt-decode'



const API_URL = 'http://localhost:9000'


const accessTokenKey = 'accessToken'

export const getAccessToken = () => {
    return localStorage.getItem(accessTokenKey)
}

export const setAccessToken = (accessToken: string) => {
    localStorage.setItem(accessTokenKey, accessToken)
}

export const removeAccessToken = () => {
    localStorage.removeItem(accessTokenKey)
}

export async function login(email: string, password: string) {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    if (!response.ok) {
       return null
    }
    const { accessToken } = await response.json()
    setAccessToken(accessToken)
    return accessToken
}

export function getUser() {
    const accessToken = getAccessToken()
    if (!accessToken) {
        return null
    }
    return getUserFromAccessToken(accessToken)
}

export function getUserFromAccessToken(accessToken: string) {
    const claims = jwtDecode(accessToken)
    return {
        id: claims.sub,
        email: claims.iss
    }
}

export async function logout() {
    removeAccessToken()
}