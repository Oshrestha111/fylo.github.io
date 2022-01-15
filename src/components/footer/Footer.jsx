import React from "react";
import "./footer.css";
import logo from "../../images/logo.svg";
import { BiMap, BiPhone } from "react-icons/bi";
import { RiFacebookCircleFill } from "react-icons/ri";
import {
	AiFillTwitterCircle,
	AiOutlineInstagram,
	AiOutlineMail,
} from "react-icons/ai";

const iconStyle = { fontSize: "22px", color: "#fff" };
const iconStyl = { fontSize: "20px", color: "#fff" };
const iconStyles = { fontSize: "20px", color: "#a6b0c0;" };
function Footer() {
	return (
		<div className='footer-section'>
			<section className='footer'>
				<div className='logo-footer'>
					<img src={logo} alt='footer logo' />
				</div>
				<div className='footer-container'>
					<div className='footer-desc'>
						<div className='desc-info'>
							<div className='desc-about'>
								<div className='biMap'>
									<BiMap style={iconStyle} />
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
								</p>
							</div>

							<div className='desc-call'>
								<ul>
									<li>
										<BiPhone style={iconStyl} /> <span> +1-543-123-4567</span>
									</li>
									<li>
										<AiOutlineMail style={iconStyl} />
										<span>example@fylo.com</span>
									</li>
								</ul>
							</div>
						</div>

						<div className='desc-links'>
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
						</div>

						<div className='desc-socials'>
							<a href='facebookk.com'>
								<RiFacebookCircleFill style={iconStyle} />
							</a>
							<a href='twitterk.com'>
								<AiFillTwitterCircle style={iconStyle} />
							</a>
							<a href='instagram.com'>
								<AiOutlineInstagram style={iconStyle} />
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
