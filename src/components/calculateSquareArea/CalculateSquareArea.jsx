const CalculateSquareArea = ({base,heigh}) => {
    const area = base * heigh
    return <h2> El área del cuadrado es: {area}</h2>
}

export default CalculateSquareArea

// const CalculateSquareArea = (props) => {
//     return <h2> El área del cuadrado es: {props.base * props.heigh}</h2>
// }

// export default CalculateSquareArea