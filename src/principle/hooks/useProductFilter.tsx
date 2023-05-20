
export const useProductFilter = (products: any[], rate: number) => {
  return  products.filter(product => product.rating.rate > rate)
  
}
