import React from "react";
import "./products.css";
import icon1 from "../../images/icons/icon-access-anywhere.svg";
import icon2 from "../../images/icons/icon-security.svg";
import icon3 from "../../images/icons/icon-collaboration.svg";
import icon4 from "../../images/icons/icon-any-file.svg";

function Products() {
	// const iconStyles = { width: "7%" };
	return (
		<div>
			<section className='product'>
				<div className='container'>
					<div className='card'>
						<img src={icon1} alt='windows' />
						<h4>Access your files, anywhere</h4>
						<span>
							<p>
								The ability to use a smartphone, tablet, or computer to access
								your account means your files follow you everywhere.
							</p>
						</span>
					</div>
					<div className='card'>
						<img src={icon2} alt='windows' id='icon2' />
						<h4>Access your files, anywhere</h4>

						<p>
							2-factor authentication and user-controlled encryption are just a
							couple of the security features we allow to help secure your
							files.
						</p>
					</div>
					<div className='card'>
						<img src={icon3} alt='windows' id='icon3' />
						<h4>Access your files, anywhere</h4>
						<span>
							<p>
								Securely share files and folders with friends, family and
								colleagues for live collaboration. No email attachments
								required.
							</p>
						</span>
					</div>
					<div className='card'>
						<img src={icon4} alt='windows' id='icon4' />
						<h4>Access your files, anywhere</h4>
						<span>
							<p>
								Whether you're sharing holidays photos or work documents, Fylo
								has you covered allowing for all file types to be securely
								stored and shared.
							</p>
						</span>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Products;
