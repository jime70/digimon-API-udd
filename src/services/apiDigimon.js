import axios from "axios"

const BASE_URL = "https://digi-api.com/api/v1"

export const fetchDigimons = async() => {
    try {
        const { data } = await axios.get(`${BASE_URL}/digimon`);
        if(!data) throw new Error('Error al capturar los digimons')
            return data
        } catch (error) {
            throw new Error('Error al capturar los digimons', error)
        }
}

export const fetchOneDigimon = async(digimon) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/digimon/${digimon}`)
        if(!data) throw new Error(`Error al encontrar el digimon ${digimon}`)
            return data
        } catch (error) {
            throw new Error (`Error al encontrar el digimon ${digimon}`, error)
        }
}