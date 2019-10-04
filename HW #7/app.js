const featured = ['Deep dish', 'peperoni', 'hawaiian'];
const specialty = ['meatzza', 'spicy mama', 'margherita'];

const pizzas = [...featured, 'veg', ...specialty];

//... is basically saying "encompass all"

console.log(pizzas);