const CalculateCircleArea = ({radius}) => {
 //3.14 tambien valdria para "pi"
    const circleArea = Math.pow(radius,2)
    const area = Math.PI * circleArea
    return <h2> El área del circulo es: {area.toFixed(2)}</h2>
}

export default CalculateCircleArea