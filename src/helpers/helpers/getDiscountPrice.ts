export function getDiscountPrice(discount: number, price: number): number{
  return Math.ceil(price * (100 - discount)/100);
}