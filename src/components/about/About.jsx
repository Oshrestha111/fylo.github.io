import React from "react";
import "./about.css";
import picture from "../../images/illustration-stay-productive.png";
import arrow from "../../images/icons/icon-arrow.svg";

function About() {
	return (
		<section className='about-section'>
			<div className='container-about'>
				<div className='left'>
					<img src={picture} alt='illustration-stay-productive'></img>
				</div>
				<div className='right'>
					<div className='wrapper'>
						<h2> Stay productive, wherever you are</h2>

						<p>
							Never let location be an issue when accessing your files. Fylo has
							you covered for all of your file storage needs.
						</p>

						<p>
							Securely share files and folders with friends, family and
							colleagues for live collaboration. No email attachments required.
						</p>

						<a href='smth.com'>
							See how Fylo works <img src={arrow} alt='arrow' />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
