import React, {useState} from 'react';
import Navbar from "./Navbar";

import './styles/Home.css'
import './styles/Animations.css'
import img_main from '../images/pexels-kawaiiart.jpg'
import img_explore from '../images/pexels-rene-asmussen.jpg'
import img_about from '../images/pexels-markus-spiske.jpg'
import Section from "./Section";
import {useNavigate} from "react-router-dom";


function Home({isLoadingFn}) {
	const navigate = useNavigate();


	return (
		<div>
			<Navbar/>
			<div className="container">
				<Section reverse={true}>
					<img src={img_main} alt="Home title"/>
					<main>
						<header>
							<div className="subtitle">WELCOME TO</div>
							<div className="title">
								<span>N</span>
								<span>O</span>
								<span>S</span>
								<span>T</span>
								<span>A</span>
								<span>L</span>
								<span>G</span>
								<span>I</span>
								<span>A</span>
							</div>
						</header>
						<div>
							Rediscover the joy of nostalgia with our exclusive collection of authentic products from
							around
							the globe.
						</div>
						<button onClick={() => navigate('/shop')}>Start Shopping</button>
					</main>
				</Section>
				<hr/>
				<Section>
					<img src={img_explore} alt="Info"/>
					<main>
						<header>EXPLORE</header>
						<div>
							Every region has its own style, expressed in their food, clothing, and home
							decor.
							<br/><br/>
							Our culinary and fashion sections are brimming with unique pieces that
							embody the spirit of different cultures.
						</div>
					</main>
				</Section>
				<hr/>
				<Section>
					<img src={img_about} alt="About us"/>
					<main>
						<header>ABOUT US</header>
						<div>
							No matter where you are, Nostalgia brings the world to your doorstep.
							<br/><br/>
							We go the extra mile to source products that are exclusive to specific regions, offering a
							diverse
							array of items that bring you closer to your roots or introduce you to new cultures.
						</div>
					</main>
				</Section>
			</div>
		</div>
	);
}

export default Home;
