import React, {useEffect, useState} from "react";
import {useMediaQuery} from 'react-responsive';

import './styles/Navbar.css'
import logo from '../logo.svg';

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [sticky, setSticky] = useState(false);

	const isMobile = useMediaQuery({maxWidth: 1000});

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);


	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 600-78) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};


	const toggleClass = () => setMenuOpen(!menuOpen);

	return (
		<div>
			<nav className={sticky && !isMobile ? 'navbar sticky' : 'navbar'}>
				<div>
					{
						isMobile ?
							<button className="secondary icon hamburger" onClick={toggleClass}>☰</button>
							:
							''
					}
					<div className={menuOpen ? "menu menu-open" : "menu"}>
						<img src={logo} alt="Logo"/>
						<button>Home</button>
						<button>Shop</button>
						<button>Seller</button>
						<button>Contact</button>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar;