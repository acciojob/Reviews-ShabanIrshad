import React from 'react';

const Review=({review,handleNext,handlePrev,handleRandom})=>{
    // console.log(review);
    return(
        <>
            <div className="review">
                <h2 id={`author-${review.id}`} className='author'>{review.name}</h2>
                <p className='job'>{review.job}</p>
                <img  className='person-img' src={review.image} alt='picture'/>
                <p className='info'>{review.text}</p>
                <button onClick={()=>handlePrev(review.id)} className='prev-btn'>Previous</button>
                <button onClick={()=>handleNext(review.id)} className='next-btn'> Next</button>
                <button onClick={()=>handleRandom()} className='random-btn'>surprise me</button>
            </div>
        </>
    );
}
export default Review;