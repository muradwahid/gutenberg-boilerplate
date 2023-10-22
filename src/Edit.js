/* eslint-disable no-console */
import { useEffect } from 'react';
// import { __ } from '@wordpress/i18n';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Edit = props => {
	const { className, setAttributes, clientId, } = props;
	// const { title, twitter, youtube, tweet, titleColor, accountType, image, video } = attributes;
	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId
	return <div className={className} id={`hbHelloBlock-${clientId}`}>
		<div>
			{/* <RichText tagName='h2' placeholder={__('Enter your title...', 'hello-block')} value={title} allowedFormats={['core/bold', 'core/italic']} onChange={(val) => setAttributes({ title:val })} style={{ color: titleColor }} /> */}
		</div>
		<div style={{ overflow: "hidden" }}>
			<h1 className="heading">hello world</h1>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				slidesPerView={1}
				autoplay
				navigation
				pagination={{ clickable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				<SwiperSlide>
					<img src="https://i.ibb.co/dL1DNk1/hmm9-1200x375.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://i.ibb.co/mvczfdn/hm-2-1200x375.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://mid-bd.com/wp-content/uploads/2022/05/hm-page-1-1200x375.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://i.ibb.co/6HWPGnV/hmm-3-1200x375.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://i.ibb.co/m8sCBrM/hmm-6-1200x375.png" alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	</div>;
};
export default Edit;