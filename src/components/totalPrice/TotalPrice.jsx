const TotalPrice = ({getPrice}) => {
    const iva = 21 / 100
    const priceWithIva = getPrice + (getPrice * iva) 
    console.log(priceWithIva)
    return <h2> El precio con iva es: {priceWithIva}</h2>
}

export default TotalPrice;


// iva = porcentaje del iva que quiero / 100
// pricewithiva = número de precio + (número de precio * iva)