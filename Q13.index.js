let product=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
let categories=product.reduce((accumulator,category)=>
{
    if (accumulator[category]) {
        accumulator[category] += 1;
      } else {
        accumulator[category] = 1;
      }
      return accumulator;
},{});
console.log(categories);