import CalculateCircleArea from "./components/calculateCircleArea/CalculateCircleArea";
import CalculateSquareArea from "./components/calculateSquareArea/CalculateSquareArea";
import CalculateTriangleArea from "./components/calculateTriangleArea/CalculateTriangleArea";
import CelsiusToFahrenheit from "./components/celsiusToFahrenheit/CelsiusToFahrenheit";
import FahrenheitToCelsius from "./components/fahrenheitToCelsius/FahrenheitToCelsius";
import SayHello from "./components/sayHello/SayHello";
import TotalPrice from "./components/totalPrice/TotalPrice";
import WriteMessage from "./components/writeMessage/WriteMessage";

const App = () => {
	return (<> 
	<SayHello>Xavier</SayHello>
	<CalculateSquareArea base={15} height={15}></CalculateSquareArea>
	<CalculateTriangleArea base={20} height={20}></CalculateTriangleArea>
	<CalculateCircleArea radius={13}></CalculateCircleArea>
	<CelsiusToFahrenheit celsius={100}></CelsiusToFahrenheit>
	<FahrenheitToCelsius fahrenheit={212}></FahrenheitToCelsius>
	<TotalPrice getPrice={100}/>
	<WriteMessage name="Xavier" material="zapatos" size="mediano" note="Dejar en el buzón"/>
	</>)
};

export default App;
