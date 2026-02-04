const ProductList = ({ products, onEdit, onDelete, onViewQR, onGenerateQR }) => {
  const formatPrice = (price) => {
    return '$' + Number(price).toFixed(2);
  };

  return (
    <div className="product-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Status</th>
            <th>QR Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="10" className="no-data">
                No products found. Click "Add Product" to create one.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.description || '-'}</td>
                <td>{product.quantity}</td>
                <td>{formatPrice(product.price)}</td>
                <td>{product.category || '-'}</td>
                <td>
                  <span className={'status ' + (product.is_active ? 'active' : 'inactive')}>
                    {product.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  {product.qr_code ? (
                    <button
                      className="btn btn-qr"
                      onClick={() => onViewQR(product)}
                      title="View QR Code"
                    >
                      View QR
                    </button>
                  ) : (
                    <button
                      className="btn btn-generate-qr"
                      onClick={() => onGenerateQR(product.id)}
                      title="Generate QR Code"
                    >
                      Generate QR
                    </button>
                  )}
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn btn-edit"
                      onClick={() => onEdit(product)}
                      title="Edit"
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDelete(product.id)}
                      title="Delete"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
