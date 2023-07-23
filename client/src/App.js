import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";

import './App.css';
import Home from './components/Home'
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
	const [errorMessage, setErrorMessage] = useState('');

	const dev = true;
	const homeUrl = dev ? 'http://localhost' : 'https://ar-test-adam.rf.gd'
	const apiV1 = homeUrl + '/api/v1/'


	function error(message = 'Error! Cannot connect to database\nTry again later') {
		setErrorMessage(message)
		const errorPage = document.getElementsByClassName('errorPage')[0];
		if (errorPage) errorPage.classList.add('show');
	}

	return (
		<div>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/shop" element={<Shop api={apiV1} errorFn={error}/>}/>
				<Route path="/shop/:id" element={<Shop api={apiV1} errorFn={error}/>}/>
			</Routes>
			<Footer/>
		</div>

	);
}

export default App;
