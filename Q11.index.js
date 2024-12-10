function processProducts(products) {
    let productNames = products.map(product => product.name);
  
     productNames.forEach(name => {
      const product = products.find(p => p.name === name); 
      if (product.price > 50) {
        console.log(`${name} is above $50`);
      } else {
        console.log(`${name} is below $50`);
      }
    });
  }
  let products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
  ];
  
  processProducts(products);
  