import React from "react";
import { useState } from "react";
import { Counter } from "./counter.jsx";


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
		<div>
			<div className="row bg-dark">
				<Counter seconds={count} />		
			</div>
			<button className={intervalId ? "btn btn-warning" : "btn btn-success"} onClick={handleClick}>
				{intervalId ? "Stop counting" : "Start counting"}
			</button>
		</div>
	);
};

export default Home;
