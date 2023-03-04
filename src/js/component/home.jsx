import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component 
const Home = () => {
	const [inputValue, setInputValue ] = useState()
	const [todos, setTodos] = useState()


	return (
		<div className="container">

			<h1>ToDos</h1>
			<ul>
				<li><input type="text" 
						onChange={(e) => setInputValue.target.value }
						value={inputValue}
						onKeyDown={(e) => e.charCode === 13 ? setTodos(setTodos.concat(inputValue)) : null}
						placeholder="What do you need to do"></input></li>
				<li>Make the bed</li>
				<li>Pay the bills</li>
				<li>Brush Teeth</li>
				<li>Code a program</li>
			</ul>
			<div type="footer">5 Left</div>
	
		</div>
	);
};

export default Home;