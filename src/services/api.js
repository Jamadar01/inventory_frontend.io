import axios from 'axios';

const API_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productService = {
  // Get all products
  getAllProducts: async (skip = 0, limit = 100) => {
    const response = await api.get(`/products/?skip=${skip}&limit=${limit}`);
    return response.data;
  },

  // Get product by ID
  getProductById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  // Create new product
  createProduct: async (productData) => {
    const response = await api.post('/products/', productData);
    return response.data;
  },

  // Update product
  updateProduct: async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData);
    return response.data;
  },

  // Delete product
  deleteProduct: async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },

  // Regenerate QR code for product
  regenerateQRCode: async (id) => {
    const response = await api.post(`/products/${id}/generate-qr`);
    return response.data;
  },

  // Generate QR code for product (alias for regenerateQRCode)
  generateQRCode: async (id) => {
    const response = await api.post(`/products/${id}/generate-qr`);
    return response.data;
  },
};

export default api;
