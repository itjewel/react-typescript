
import { Rating } from 'react-simple-star-rating'

export const Filter = (Props:any) => {
const {handleRating, rating} = Props;
   
  return (
    <div className="flex flex-col justify-center items-center">
        <span className="font-semibold">Minimum Rating </span>
        <Rating
          initialValue={rating}
          SVGclassName="inline-block"
          onClick={handleRating}
        />
      </div>
  )
}
