



function Ratings({ ratingInfo }) {


    return (
        <>
            <h1>Ratings here!!</h1>
            {ratingInfo?.map(rating => (
                <>
                    <div className='rating-review'> <h3>{rating.rating}</h3></div>
                    <div className='rating-review'> <h3>{rating.review}</h3></div>
                </>
            ))}
        </>
    )

}

export default Ratings
