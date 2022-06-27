import React from 'react'

export default function Card(movie) {
    console.log(movie.info);
    let image_path = "https://image.tmdb.org/t/p/w500/"
  return (
    <>
      <div className='movie'>
          <img src={image_path+movie.info.poster_path} alt="" className='poster'  />
          <div className='movie-details'>
             <div className="box">
                 <h4 className="title">{movie.info.title}</h4>
                 <p className="rating">
                 {movie.info.vote_average}
                 </p>
             </div>
             <div className="overview">
                 <h1>overview</h1>
                 {movie.info.overview}  
             </div>
          </div>
      </div>
    </>
  )
}