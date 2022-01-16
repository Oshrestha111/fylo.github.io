import React from "react";
import "./feedback.css";
import comma from "../../images/icons/bg-quotes.png";
import client1 from "../../images/profile/profile-1.jpg";
import client2 from "../../images/profile/profile-2.jpg";
import client3 from "../../images/profile/profile-3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

function Feedback() {
	return (
		<section className='section-feedback'>
			<div className='wrapper-feedback'>
				<img className='comma' src={comma} alt='comma' />
				<Swiper
					style={{ width: "100%" }}
					spaceBetween={30}
					slidesPerView={3}
					loop
					modules={[Autoplay]}
					autoplay={{ disableOnInteraction: false, delay: 2000 }}>
					<SwiperSlide>
						<div className='feedback-card'>
							<div className='feedback-text'>
								<p>
									Fylo has improved our team productivity by an order of
									magnitude. Since making the switch our team has become a
									well-oiled collaboration machine.
								</p>
							</div>
							<div className='feedback-info'>
								<div className='feebback-img'>
									<img src={client1} alt='profile' />
								</div>
								<div className='feedback-profileInfo'>
									<h4>Satish Poudel</h4>
									<span> Founder & CEO, Muddle </span>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='feedback-card'>
							<div className='feedback-text'>
								<p>
									Fylo has improved our team productivity by an order of
									magnitude. Since making the switch our team has become a
									well-oiled collaboration machine.
								</p>
							</div>
							<div className='feedback-info'>
								<div className='feebback-img'>
									<img src={client2} alt='profile' />
								</div>
								<div className='feedback-profileInfo'>
									<h4>Bruce Mckenzie. </h4>
									<span> Founder & CEO, Muddle </span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='feedback-card'>
							<div className='feedback-text'>
								<p>
									Fylo has improved our team productivity by an order of
									magnitude. Since making the switch our team has become a
									well-oiled collaboration machine.
								</p>
							</div>
							<div className='feedback-info'>
								<div className='feebback-img'>
									<img src={client3} alt='profile' />
								</div>
								<div className='feedback-profileInfo'>
									<h4>Iva Boyd </h4>
									<span> Founder & CEO, Muddle </span>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
			<section className='access'>
				<div className='container-access'>
					<div className='desc-access'>
						<h2>Get early access today</h2>
						<p>
							It only takes a minute to sign up and our free starter tier is
							extremely generous. If you have any questions, our support team
							would be happy to help you.
						</p>
					</div>
					<div className='des-access-input'>
						<input type='email' placeholder='email@example.com' id='email' />
						<button>Get Started For Free</button>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Feedback;
