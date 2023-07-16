import React, {useState} from 'react';
import './styles/ProductCard.css';
import img_prod from '../images/pexels-kawaiiart.jpg';

function ProductCard() {

	const [isExpanded, setIsExpanded] = useState(false);

	const handleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className={`card ${isExpanded ? "expanded" : ""}`} onClick={handleExpand}>
			<img src={img_prod} alt={"Random product"} className="product-image"/>
			<div className="product-info">
				<h2>{"Random product"}</h2>
				<p>${"89.99"}</p>
				<button className="add-to-cart">Add to cart</button>
			</div>
			{isExpanded && (
				<div className="product-description">
					<p>{"A random product to test"}</p>
				</div>
			)}
		</div>
	);
}

export default ProductCard;
