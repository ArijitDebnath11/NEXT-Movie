// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import '../styles.css'; // Your custom styles
// import '../MovieDetail.css'; // Additional styles for MovieDetail component
// // Install Swiper modules
// // SwiperCore.use([Navigation, Pagination, Autoplay]);



// const MovieDetail = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api/movies/${id}`)
//       .then(response => setMovie(response.data))
//       .catch(error => console.error(error));
//   }, [id]);

//   if (!movie) return <div>Loading...</div>;

//   const { title, ratings, price, vendors, images } = movie;

//   return (
//     <section className="single-movie-page">
//       <div className="single-movie-details">
//         <h2 className='abc title'>{title}</h2>
//         <Swiper
//           className="image-gallery"
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{ delay: 300000000, disableOnInteraction: false }}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           pagination={{ clickable: true }}
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <img src={image.img_url} alt={title} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <h3 className='abc'>Ratings: {ratings}</h3>
//         <h4 className='abc'>Price: {price + price * ratings * 0.1}</h4>
//         <h5>{vendors}</h5>
//       </div>
//     </section>
//   );
// };

// export default MovieDetail;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles.css';
import '../MovieDetail.css';
import img1 from './left.svg';
import img2 from './right.svg';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/movies/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const { title, ratings, price, vendors, images } = movie;

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="single-movie-page">
      <div className="single-movie-details">
        <h2 className='abc title'>{title}</h2>
        <div className="image-gallery">
          <button className="prev-btn" onClick={handlePrevImage}><img src={img1} /></button>
          <img className='som22' src={images[currentImageIndex].img_url} alt={title} />
          <button className="next-btn" onClick={handleNextImage}> <img src={img2} /> </button>
        </div>
        <h3 className='abc'>Ratings: {ratings}</h3>
        <h4 className='abc'>Price: {price+price*ratings*0.1}</h4>
        <h5 >{vendors}</h5>
      </div>
    </section>
  );
};

export default MovieDetail;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import '../styles.css';
// import '../MovieDetail.css';

// const MovieDetail = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api/movies/${id}`)
//       .then(response => setMovie(response.data))
//       .catch(error => console.error(error));
//   }, [id]);

//   if (!movie) return <div>Loading...</div>;

//   const { title, ratings, price, vendors, images } = movie;

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <section className="single-movie-page">
//       <div className="single-movie-details">
//         <h2 className='abc title'>{title}</h2>
//         <div className="image-gallery">
//           <button className="prev-btn" onClick={handlePrevImage}>Prev</button>
//           <Carousel
//             autoPlay
//             interval={3000}
//             infiniteLoop
//             showArrows={false}
//             showStatus={false}
//             showIndicators={false}
//             showThumbs={false}
//           >
//             {images.map((image, index) => (
//               <div key={index}>
//                 <img src={image.img_url} style={{ height: 300, width: 200 }} alt={title} />
//               </div>
//             ))}
//           </Carousel>
//           <button className="next-btn" onClick={handleNextImage}>Next</button>
//         </div>
//         <h3 className='abc'>Ratings: {ratings}</h3>
//         <h4 className='abc'>Price: {price+price*ratings*0.1}</h4>
//         <h5>{vendors}</h5>
//       </div>
//     </section>
//   );
// };

// export default MovieDetail;
