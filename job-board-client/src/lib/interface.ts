export interface Job {
    id: number
    title: string
    companies: Company
    description: string
    date: string
}

export interface Company {
    id: number
    name: string
    description: string
}

export interface User {
    id: number
    email: string
}