import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import QRCodeModal from './components/QRCodeModal';
import { productService } from './services/api';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productService.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to fetch products. Make sure the backend is running.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (productData) => {
    try {
      setError(null);
      await productService.createProduct(productData);
      await fetchProducts();
      setShowForm(false);
    } catch (err) {
      setError('Failed to create product');
      console.error('Error creating product:', err);
    }
  };

  const handleUpdate = async (productData) => {
    try {
      setError(null);
      await productService.updateProduct(editingProduct.id, productData);
      await fetchProducts();
      setShowForm(false);
      setEditingProduct(null);
    } catch (err) {
      setError('Failed to update product');
      console.error('Error updating product:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        setError(null);
        await productService.deleteProduct(id);
        await fetchProducts();
      } catch (err) {
        setError('Failed to delete product');
        console.error('Error deleting product:', err);
      }
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleViewQR = (product) => {
    setSelectedProduct(product);
    setShowQRModal(true);
  };

  const handleCloseQR = () => {
    setShowQRModal(false);
    setSelectedProduct(null);
  };

  const handleGenerateQR = async (productId) => {
    try {
      setError(null);
      await productService.generateQRCode(productId);
      await fetchProducts();
      alert('QR code generated successfully!');
    } catch (err) {
      setError('Failed to generate QR code');
      console.error('Error generating QR code:', err);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Inventory Management System</h1>
        <button className="btn btn-add" onClick={handleAddNew}>
          + Add Product
        </button>
      </header>

      <main className="app-main">
        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <ProductList
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onViewQR={handleViewQR}
            onGenerateQR={handleGenerateQR}
          />
        )}
      </main>

      {showForm && (
        <ProductForm
          product={editingProduct}
          onSubmit={editingProduct ? handleUpdate : handleCreate}
          onCancel={handleCancel}
        />
      )}

      {showQRModal && selectedProduct && (
        <QRCodeModal
          product={selectedProduct}
          onClose={handleCloseQR}
        />
      )}
    </div>
  );
}

export default App;
