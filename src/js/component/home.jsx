import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component 
const Home = () => {
	const [inputValue, setInputValue ] = useState("")
	const [todos, setTodos] = useState([])

	return (
		<div className="container">
			<h1>ToDos</h1>
		<div className="card">
			<ul>
				<li>
					<input 
						type="text" 
						className="no-outline"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						}}
						placeholder="No Tasks, Add A Task"></input>
						</li>
				{todos.map((item, index) => (
				
					<li>
						
						{item}{""}
						 <i className="fa fa-times" aria-hidden="true" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
						</li>
				))}
			</ul>
			<div className="footer">{todos.length} Tasks Left</div>
		</div>
	</div>
	
	);
};

export default Home;