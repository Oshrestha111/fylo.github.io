import React from "react";
import "./header.css";
import logo from "../../images/logo.svg";
import img1 from "../../images/illustration-intro.png";
function Header() {
	return (
		<div>
			<header>
				<section className='header'>
					<span className='logo'>
						<img src={logo} alt='fylo'></img>
					</span>
					<nav className='nav_links'>
						<ul>
							<li>
								<a href='features.com'>Features</a>
							</li>
							<li>
								<a href='teams.com'>Team</a>
							</li>
							<li>
								<a href='signin.com'>Sign In</a>
							</li>
						</ul>
					</nav>
				</section>
				<div className='image'>
					<img src={img1} alt='fylo'></img>
				</div>
			</header>
		</div>
	);
}

export default Header;
