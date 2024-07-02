fetch('(http://20.244.56.144/test/companies/ARZ/categories/Laptop/products/top-10&minPrice=1&maxPrice=1 0800)', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      minPrice: 1,
      maxPrice: 10800
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('values').innerHTML = JSON.stringify(data);
  })
  .catch(error => console.error('Error:', error));
  
