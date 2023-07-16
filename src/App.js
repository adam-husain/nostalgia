import React from "react";
import {Route, Routes} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProductCard from './components/ProductCard'

function App() {
	return (
		<div>
			<Navbar/>
			<div>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/product" element={<ProductCard/>}/>
				</Routes>
			</div>
			<footer><p>Copyright © Nostalgia 2023</p></footer>

		</div>

	);
}

export default App;
