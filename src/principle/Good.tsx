
import { ApiData } from './hooks/useData'
import { Filter } from './Filter'
import { ProductsDesign } from './ProductsDesign'
import { useFilter } from './hooks/useFilter'
import { useProductFilter } from './hooks/useProductFilter'

export const Good = () => {
    const {products} = ApiData()
    const {handleRating,rating} = useFilter();

     return (
      <div className="flex flex-col h-full">
      <Filter handleRating={handleRating} rating={rating} />

      <div className="h-full flex flex-wrap justify-center">
        {useProductFilter(products,rating).map((product: any) => (         
          <ProductsDesign product={product} />
        ))}
      </div>
    </div>
     )}
