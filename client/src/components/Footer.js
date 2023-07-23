import React from 'react';
import './styles/Footer.css'

function Footer() {
	return (
		<footer>
			<div className="links">
				<a>Home</a>
				<a>Contact Us</a>
				<a>Blog</a>
				<a>Become a Seller</a>
				<a>Privacy Policy</a>
				<a>Support</a>
				<a>News</a>
			</div>

			<hr/>

			<div className="container">
				Copyright &copy; 2023 Nostalgia
				<br/>
				All Rights Reserved
			</div>
		</footer>
	)
}

export default Footer;