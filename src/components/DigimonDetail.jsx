export const CardDigimonDetail = ({ digimon }) => {
    return (
        <div className="card">
            <div className="card__header">
                <img src={digimon.images[0].href} alt={`Foto de ${digimon.name}`} />
                <h2>{digimon.name}</h2>
                <p>ID: {digimon.id}</p>
            </div>
            <div className="card__body">
                <p>Nivel: {digimon.level}</p>
                {digimon.attributes.map(attribute => (
                    <p key={attribute.id}>{attribute.attribute}</p>
                ))}
                <p>Año de Lanzamiento: {digimon.releaseDate}</p>
                {digimon.descriptions.map((description, index) => (
                    description.language === 'en_us'
                    ? <p key={index}>{description.description}</p>
                    : null
                ))}
            </div>
        </div>
    )
}
