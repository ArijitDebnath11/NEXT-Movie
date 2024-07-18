// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import '../styles.css';

// const MovieDetail = () => {
//     const { id } = useParams();
//     const [movie, setMovie] = useState(null);

//     useEffect(() => {
//         axios.get(`http://localhost:8080/api/movies/${id}`)
//             .then(response => setMovie(response.data))
//             .catch(error => console.error(error));
//     }, [id]);

//     if (!movie) return <div>Loading...</div>;

//     const {title, ratings, price, vendors, images } = movie;

//     return (
//         <section className="single-movie-page">
//       <div className="single-movie-details">
//         <h2>{title}</h2>
//         <div className="image-gallery">
//           {images.map((image) => (
//             <img key={image.img_id} src={image.img_url} style={{height:300,width:200}} alt={title} />
//           ))}
//         </div>
//         <h3>Ratings: {ratings}</h3>
//         <h4>Price($): {price}</h4>
//         <h5>{vendors}</h5>
//       </div>
//     </section>
//     );
// };

// export default MovieDetail;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles.css';
import '../MovieDetail.css';

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
          <button className="prev-btn" onClick={handlePrevImage}>Prev</button>
          <img src={images[currentImageIndex].img_url} style={{ height: 300, width: 200 }} alt={title} />
          <button className="next-btn" onClick={handleNextImage}>Next</button>
        </div>
        <h3 className='abc'>Ratings: {ratings}</h3>
        <h4 className='abc'>Price: {price+price*ratings*0.1}</h4>
        <h5 >{vendors}</h5>
      </div>
    </section>
  );
};

export default MovieDetail;