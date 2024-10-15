export const InputDigimon = ({ digimon, handleOnChange }) => {
    return (
        <div className="input-digimon">
            <input 
            type="text" 
            placeholder="Qué compañero Digimon buscas"
            value={digimon}
            onChange={handleOnChange}/>
        </div>
    )
}
