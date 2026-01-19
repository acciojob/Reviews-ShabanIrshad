import React from 'react';

const Review=({review})=>{
    // console.log(review);
    return(
        <>
            <div className="review">
                <h2 id={`author-${review.id}`} className='author'>{review.name}</h2>
                <p className='job'>{review.job}</p>
                <img  className='person-img' src={review.image} alt='picture'/>
                <p className='info'>{review.text}</p>
                <button className='prev-btn'>Previous</button>
                <button className='next-btn'> Next</button>
                <button className='random-btn'>surprise me</button>
            </div>
        </>
    );
}
export default Review;