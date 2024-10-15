import { Header } from "../components/Header"
import { ErrorBoundary } from "react-error-boundary"
import { DigimonList } from "../components/DigimonList"
import { ErrorFallBack } from "../components/ErrorFallBack"

export const Home = () => {
    return (
        <>
        <Header title="DigimonApp" subtitle='Encuentra tu compañero Digimon'/>

        <section>
        <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => window.location.reload()}>
        <DigimonList/>
        </ErrorBoundary>
        </section>
        </>
    )
}