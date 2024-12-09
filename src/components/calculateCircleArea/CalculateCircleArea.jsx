const CalculateCircleArea = ({radius}) => {
    const pi = Math.PI //3.14 tambien valdria para "pi"
    const circleArea = Math.pow(radius,2)
    const area = pi * circleArea
    return <h2> El área del circulo es: {area.toFixed(2)}</h2>
}

export default CalculateCircleArea