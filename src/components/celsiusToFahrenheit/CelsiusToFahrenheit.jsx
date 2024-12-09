const CelsiusToFahrenheit = ({celsius}) => {
    const Fahrenheit = (celsius * 1.8) + 32
    return <h2> La temperatura en grados Fahrenheit es: {Fahrenheit}</h2>
}

export default CelsiusToFahrenheit


// ºF = ºC x 1.8 + 32.