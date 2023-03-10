import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);
	const [intervalId, setIntervalId] = useState(0);
  
	const handleClick = () => {
	  if (intervalId) {
		clearInterval(intervalId);
		setIntervalId(0);
		return;
	  }
  
	  const newIntervalId = setInterval(() => {
		setCount(prevCount => prevCount + 1);
	  }, 1000);
	  setIntervalId(newIntervalId);
	};  
	return (
		// <div className="text-center">
		// 	<h1 className="text-center mt-5">Hello Rigo!</h1>
		// 	<p>
		// 		<img src={rigoImage} />
		// 	</p>
		// 	<a href="#" className="btn btn-success">
		// 		If you see this green button... bootstrap is working...
		// 	</a>
		// 	<p>
		// 		Made by{" "}
		// 		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
		// 		love!
		// 	</p>
		// </div>

		<div>
			<h1>The component has been rendered for {count} seconds</h1>
			<button onClick={handleClick}>
				{intervalId ? "Stop counting" : "Start counting"}
			</button>
		</div>
	);
};

export default Home;
