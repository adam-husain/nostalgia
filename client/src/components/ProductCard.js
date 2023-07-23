import React, {useState} from 'react';
import './styles/ProductCard.css';
import img_product from '../images/pexels-markus-spiske.jpg';


function ProductCard({product}) {

	const [isExpanded, setIsExpanded] = useState(false);


	const handleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className={`card ${isExpanded ? "expanded" : ""}`} onClick={handleExpand}>
			<img src={img_product} alt={"Random product"} className="product-image"/>
			<div className="product-info">
				<h2>{product.title}</h2>
				<p>${product.price}</p>
				<button className="add-to-cart">Add to cart</button>
			</div>
			{isExpanded && (
				<div className="product-description">
					<p>{product.description}</p>
				</div>
			)}
		</div>
	);
}

export default ProductCard;
