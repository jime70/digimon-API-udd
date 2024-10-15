import { Header } from "../components/Header"
import { ErrorBoundary } from "react-error-boundary"
import { DigimonList } from "../components/DigimonList"
import { ErrorFallBack } from "../components/ErrorFallBack"
import { InputDigimon } from "../components/InputDigimon"
import { SearchButton } from "../components/SearchButton"
import { useState } from "react"
import { CardDigimonDetail } from "../components/DigimonDetail"

export const Home = () => {
    const [ searchDigimon, setSearchDigimon ] = useState('')

    const handleSearchChange = (event) => {
        setSearchDigimon(event.target.value)
    }
    return (
        <>
        <Header title="DigimonApp" subtitle='Encuentra tu compañero Digimon'/>
        
        <section>
            <h3>Que Digimon Buscas</h3>
            <InputDigimon value={searchDigimon} onChange={handleSearchChange}/>
        
            <div>
                {
                    searchDigimon.length > 0 ? <CardDigimonDetail digimon = {searchDigimon }/> : null
                }
            </div>
        </section>
        <section>
        <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => window.location.reload()}>
        <DigimonList/>
        </ErrorBoundary>
        </section>
        </>
    )
}