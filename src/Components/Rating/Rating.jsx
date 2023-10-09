import React from 'react'
import './Rating.css'
import StarRatings from 'react-star-ratings'

export const Rating = ({movieRating}) => {
  return (
    <div>
        <StarRatings
         rating={movieRating} 
         numberOfStars={5} 
         name='rating'
         starDimension='15px' 
         starSpacing='1px'
         starRatedColor='#e50916'
         />
    </div>
  )
}
