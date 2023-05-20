import  { useState } from 'react'

export const useFilter = () => {
    const [rating, setRating] = useState(1)
    const handleRating = (rate: number) => {
      // console.log(rate)
        setRating(rate)
    
        // other logic
      }

  return {rating, handleRating}
}
