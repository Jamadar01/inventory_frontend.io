import axios from 'axios';

const API_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productService = {
  getAllProducts: async (skip = 0, limit = 100) => {
    const response = await api.get(`/products/?skip=${skip}&limit=${limit}`);
    return response.data;
  },

  getProductById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  createProduct: async (productData) => {
    const response = await api.post('/products/', productData);
    return response.data;
  },

  updateProduct: async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData);
    return response.data;
  },

  deleteProduct: async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },

  regenerateQRCode: async (id) => {
    const response = await api.post(`/products/${id}/generate-qr`);
    return response.data;
  },

  generateQRCode: async (id) => {
    const response = await api.post(`/products/${id}/generate-qr`);
    return response.data;
  },
};

export const dashboardService = {
  getAnalytics: async () => {
    const response = await api.get('/dashboard/analytics');
    return response.data;
  },
};

export default api;
