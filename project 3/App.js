import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch top N products from backend API
  }, []);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Top Products
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Router>
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;


