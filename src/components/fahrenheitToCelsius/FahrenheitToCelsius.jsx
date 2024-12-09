const FahrenheitToCelsius = ({fahrenheit}) => {
    const celsius = (fahrenheit -32) / 1.8
    return <h2> La temperatura en grados Celsius es: {celsius}</h2>
}

export default FahrenheitToCelsius;


// ºC = (ºF - 32) / 1,8