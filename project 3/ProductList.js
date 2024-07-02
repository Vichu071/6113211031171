const sortByOptions = [
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'rating_desc', label: 'Rating: High to Low' },
    { value: 'discount_desc', label: 'Discount: High to Low' },
  ];
  
  function ProductList({ products }) {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [companyFilter, setCompanyFilter] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [availableOnly, setAvailableOnly] = useState(false);
    const [sortBy, setSortBy] = useState(sortByOptions[0].value);
  
    // Function to apply filters based on user selections
    const applyFilters = () => {
      let filtered = products;
      if (categoryFilter) {
        filtered = filtered.filter(product => product.category === categoryFilter);
      }
      if (companyFilter) {
        filtered = filtered.filter(product => product.company === companyFilter);
      }
      if (availableOnly) {
        filtered = filtered.filter(product => product.available);
      }
      filtered = filtered.filter(
        product => product.price >= minPrice && product.price <= maxPrice
      );
      setFilteredProducts(filtered);
    };
  
    // Function to sort products based on selected criteria
    const sortProducts = (productsToSort, sortByValue) => {
      switch (sortByValue) {
        case 'price_asc':
          return productsToSort.sort((a, b) => a.price - b.price);
        case 'price_desc':
          return productsToSort.sort((a, b) => b.price - a.price);
        case 'rating_desc':
          return productsToSort.sort((a, b) => b.rating - a.rating);
        case 'discount_desc':
          return productsToSort.sort((a, b) => b.discount - a.discount);
        default:
          return productsToSort;
      }
    };
  
    // Apply filters and sorting on changes
    useEffect(() => {
      const sortedProducts = sortProducts(filteredProducts, sortBy);
      applyFilters(sortedProducts);
    }, [categoryFilter, companyFilter, minPrice, maxPrice, availableOnly, sortBy]);
  

  
    return ( 
      <div>
        {}
      </div>
    );
  }
  
  export default ProductList;