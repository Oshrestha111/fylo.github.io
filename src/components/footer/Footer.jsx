import React from "react";
import "./footer.css";
import logo from "../../images/logo.svg";

function Footer() {
	return (
		<div>
			<section className='footer'>
				<div className='footer-container'>
					<div className='logo-footer'>
						<img src={logo} alt='footer logo' />
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
