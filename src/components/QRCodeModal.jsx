import { productService } from '../services/api';
import { useState } from 'react';

const QRCodeModal = ({ product, onClose }) => {
  const [regenerating, setRegenerating] = useState(false);
  const [qrCode, setQrCode] = useState(product.qr_code);

  const handleRegenerate = async () => {
    try {
      setRegenerating(true);
      const response = await productService.regenerateQRCode(product.id);
      setQrCode(response.qr_code);
    } catch (error) {
      console.error('Error regenerating QR code:', error);
      alert('Failed to regenerate QR code');
    } finally {
      setRegenerating(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = 'qrcode-' + product.sku + '.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal qr-modal" onClick={(e) => e.stopPropagation()}>
        <div className="qr-modal-header">
          <h2>QR Code - {product.name}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="qr-modal-body">
          <div className="product-info">
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>Price:</strong> ${product.price}</p>
          </div>

          {qrCode ? (
            <div className="qr-code-container">
              <img src={qrCode} alt="QR Code" className="qr-code-image" />
            </div>
          ) : (
            <p className="no-qr-message">No QR code available</p>
          )}

          <div className="qr-modal-actions">
            <button
              className="btn btn-primary"
              onClick={handleDownload}
              disabled={!qrCode}
            >
              Download QR Code
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleRegenerate}
              disabled={regenerating}
            >
              {regenerating ? 'Regenerating...' : 'Regenerate QR'}
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;
