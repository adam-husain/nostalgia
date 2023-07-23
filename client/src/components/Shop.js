import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";

import './styles/Home.css'
import './styles/Shop.css'
import ProductCard from './ProductCard';
import Section from "./Section";

import books from '../images/books.jpg';
import electronics from '../images/electronics.jpg';
import fashion from '../images/fashion.jpg';
import gaming from '../images/gaming.jpg';
import home_decor from '../images/home_decor.jpg';
import outdoor from '../images/outdoors.jpg';
import snacks from '../images/snacks.jpg';
import toys from '../images/toys.jpg';
import Loader from "./Loader";

function Shop({api, errorFn}) {
	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const {id} = useParams();

	useEffect(() => {
		console.log(id);
		getProducts().catch(e => console.error(e))
	}, []);

	function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function getProducts() {
		setIsLoading(true);
		const response = await axios.get(api + 'products.php');
		if (response.status !== 200) {
			errorFn();
			return;
		}
		setProducts(response.data);
		await delay(3000);
		setIsLoading(false);
	}

	return (
		isLoading ?
			<Loader/>
			:
			id ?
				<div>
					
				</div>
				:
				<div className="container">
					<Section>
						<main>
							<header>SHOP</header>
						</main>
						<div className="categories">
							<a href="/shop/electronics">
								<button className="icon-w-text secondary">
									<img src={electronics} alt="Electronics category"></img>
									<span>Electronics</span>
								</button>
							</a>
							<a href="/shop/home">
								<button className="icon-w-text secondary">
									<img src={home_decor} alt="Home Decor category"></img>
									<span>Home Decor</span>
								</button>
							</a>
							<a href="/shop/books">
								<button className="icon-w-text secondary">
									<img src={books} alt="Books category"></img>
									<span>Books</span>
								</button>
							</a>
							<a href="/shop/food">
								<button className="icon-w-text secondary">
									<img src={snacks} alt="Snacks category"></img>
									<span>Food</span>
								</button>
							</a>
							<a href="/shop/toys">
								<button className="icon-w-text secondary">
									<img src={toys} alt="Toys category"></img>
									<span>Toys</span>
								</button>
							</a>
							<button className="icon-w-text secondary">
								<img src={fashion} alt="Fashion category"></img>
								<span>Fashion</span>
							</button>
							<a href="/shop/gaming">
								<button className="icon-w-text secondary">
									<img src={gaming} alt="Gaming category"></img>
									<span>Gaming</span>
								</button>
							</a>
							<a href="/shop/outdoors">
								<button className="icon-w-text secondary">
									<img src={outdoor} alt="Outdoors category"></img>
									<span>Outdoors</span>
								</button>
							</a>
						</div>
					</Section>

					<hr/>

					<Section>
						<h1>FEATURED</h1>
					</Section>
					{products.map((product) => (
						<ProductCard product={product}/>
					))}
				</div>

	);
}

export default Shop;
