import { useEffect, useState } from "react"
import { fetchOneDigimon } from "../services/apiDigimon"


export const useFetchOneDigimon = (digimonSearched) => {
    const [ digimon, SetDigimon] = useState(null)
    const [ loading, setLoading] = useState(true)
    const [ error, setError] = useState(null)

    useEffect(() => {
        const getDigimon = async () => {
            try {
                const dataDigimon = fetchOneDigimon(digimonSearched)
                SetDigimon(dataDigimon)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        getDigimon()
    }, [digimonSearched])

    if(error) {
        throw error
    }

    return { digimon, loading}
}