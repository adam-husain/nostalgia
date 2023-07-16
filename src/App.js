import React from "react";
import {Route, Routes} from "react-router-dom";

import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
	return (
		<div>
			<Navbar/>
			<div>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</div>
			<footer><p>Copyright © Nostalgia 2023</p></footer>

		</div>

	);
}

export default App;
