import "./style/LocationInfo.css"
const LocationInfo = ({location}) => {

    return (
        <section className="location__content">
            <h2 className="location__titulo">{location?.results[0].name}</h2>
            <ul className="location__lista-content">
                <li className="location__lista">
                    <span>Type:</span> <span className="location__span">{location?.results[0].type}</span>
                </li>
                <li className="location__lista">
                    <span>Dimension:</span> <span className="location__span">{location?.results[0].dimension}</span>
                </li>
                <li className="location__lista">
                    <span>Population:</span> <span className="location__span">{location?.results[0].dimension}</span>
                </li>
            </ul>
        </section>
    )
}

export default LocationInfo