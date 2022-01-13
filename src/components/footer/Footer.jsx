import React from "react";
import "./footer.css";
import logo from "../../images/logo.svg";
import { BiMap, BiPhoneCall, BiMailSend } from "react-icons/bi";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";

function Footer() {
	return (
		<div>
			<section className='footer'>
				<div className='footer-container'>
					<div className='logo-footer'>
						<img src={logo} alt='footer logo' />
					</div>
					<div className='footer-desc'>
						<div className='desc-about'>
							<span>
								<BiMap />
							</span>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
							facilis impedit eum soluta consectetur est facere laudantium
							aperiam doloremque voluptas?
						</div>
						<div className='desc-call'>
							<ul>
								<li>
									<BiPhoneCall /> +1-543-123-4567
								</li>
								<li>
									<BiMailSend /> example@fylo.com
								</li>
							</ul>
						</div>
						<div className='desc-aboutUs'>
							<a href='jobsaa.com'>About Us</a>
							<a href='jobsaa.com'>Jobs</a>
							<a href='jobsaa.com'>Press</a>
							<a href='jobsaa.com'>Blog</a>
						</div>
						<div className='desc-contactUs'>
							<a href='jobsaa.com'>Contact Us</a>
							<a href='jobsaa.com'>Terms</a>
							<a href='jobsaa.com'>Privacy</a>
						</div>
						<div className='desc-socials'>
							<a href='facebookk.com'>
								<RiFacebookCircleFill />
							</a>
							<a href='twitterk.com'>
								<AiFillTwitterCircle />
							</a>
							<a href='instagram.com'>
								<AiOutlineInstagram />
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
