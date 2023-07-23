import React from "react";
import './styles/Loader.css';

function Loader() {

	return (
		<div>
			<div className="box">
				<div className="cat">
					<div className="cat__body"></div>
					<div className="cat__body"></div>
					<div className="cat__tail"></div>
					<div className="cat__head"></div>
				</div>
			</div>
			<h1 style={{textAlign: "center", padding: "20px"}}>LOADING...</h1>

		</div>
	)
}

export default Loader;
