import {customAlphabet} from 'nanoid'

const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export const id = customAlphabet(ALPHABET, 12)

export const createId = () => {
    return id()
}