import { useState, useEffect } from 'react';
import { dashboardService } from '../services/api';

const Dashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await dashboardService.getAnalytics();
      setAnalytics(data);
    } catch (err) {
      setError('Failed to load dashboard data');
      console.error('Error fetching analytics:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="alert alert-error">{error}</div>;
  }

  if (!analytics) {
    return <div>No data available</div>;
  }

  const summary = analytics.summary;
  const categoryBreakdown = analytics.category_breakdown;
  const stockStatus = analytics.stock_status;
  const topExpensive = analytics.top_expensive_products;
  const topQuantity = analytics.top_quantity_products;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <button className="btn btn-secondary" onClick={fetchAnalytics}>
          Refresh Data
        </button>
      </div>

      {/* Summary Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{backgroundColor: "#667eea"}}>📦</div>
          <div className="stat-info">
            <h3>{summary.total_products}</h3>
            <p>Total Products</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{backgroundColor: "#28a745"}}>✓</div>
          <div className="stat-info">
            <h3>{summary.active_products}</h3>
            <p>Active Products</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{backgroundColor: "#ffc107"}}>📊</div>
          <div className="stat-info">
            <h3>{summary.total_quantity}</h3>
            <p>Total Quantity</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{backgroundColor: "#17a2b8"}}>💰</div>
          <div className="stat-info">
            <h3>${formatCurrency(summary.total_inventory_value)}</h3>
            <p>Inventory Value</p>
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-icon" style={{backgroundColor: "#ff9800"}}>⚠️</div>
          <div className="stat-info">
            <h3>{summary.low_stock_count}</h3>
            <p>Low Stock Items</p>
          </div>
        </div>

        <div className="stat-card danger">
          <div className="stat-icon" style={{backgroundColor: "#dc3545"}}>❌</div>
          <div className="stat-info">
            <h3>{summary.out_of_stock_count}</h3>
            <p>Out of Stock</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Stock Status Distribution</h3>
          <div className="chart-content">
            {stockStatus.map((item, index) => {
              const colors = ['#28a745', '#ffc107', '#dc3545'];
              const percentage = summary.total_products > 0
                ? Math.round((item.count / summary.total_products) * 100)
                : 0;

              return (
                <div key={index} className="chart-item">
                  <div className="chart-label">
                    <span>{item.status}</span>
                    <span className="chart-value">{item.count}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{width: percentage + '%', backgroundColor: colors[index]}}
                    ></div>
                  </div>
                  <div className="chart-percentage">{percentage}%</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="chart-card">
          <h3>Category Breakdown</h3>
          <div className="chart-content">
            {categoryBreakdown && categoryBreakdown.length > 0 ? (
              categoryBreakdown.map((item, index) => {
                const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'];
                const percentage = summary.total_products > 0
                  ? Math.round((item.count / summary.total_products) * 100)
                  : 0;

                return (
                  <div key={index} className="chart-item">
                    <div className="chart-label">
                      <span>{item.category}</span>
                      <span className="chart-value">{item.count}</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{width: percentage + '%', backgroundColor: colors[index % colors.length]}}
                      ></div>
                    </div>
                    <div className="chart-percentage">{percentage}%</div>
                  </div>
                );
              })
            ) : (
              <p className="no-data-text">No categories available</p>
            )}
          </div>
        </div>
      </div>

      {/* Top Products Tables */}
      <div className="tables-grid">
        <div className="table-card">
          <h3>Top 5 Most Expensive Products</h3>
          <table className="mini-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>SKU</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {topExpensive && topExpensive.length > 0 ? (
                topExpensive.map(product => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.sku}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.quantity}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-data-text">No products available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="table-card">
          <h3>Top 5 Products by Quantity</h3>
          <table className="mini-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>SKU</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {topQuantity && topQuantity.length > 0 ? (
                topQuantity.map(product => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.sku}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.quantity}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-data-text">No products available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
