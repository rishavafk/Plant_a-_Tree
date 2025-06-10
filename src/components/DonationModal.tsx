import React, { useState } from 'react';
import { X, Heart, CreditCard, Smartphone, QrCode } from 'lucide-react';

const DonationModal = ({ tree, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');

  if (!isOpen || !tree) return null;

  const total = tree.price * quantity;

  const handlePayment = () => {
    if (paymentMethod === 'upi') {
      // Generate UPI payment link
      const upiLink = `upi://pay?pa=greennepal@paytm&pn=Green%20Nepal&am=${total}&tn=Tree%20Donation%20-%20${tree.name}&cu=INR`;
      window.location.href = upiLink;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex items-center justify-between rounded-t-2xl">
          <h3 className="text-2xl font-bold text-gray-900">Plant {tree.name}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center">
            <img 
              src={tree.image} 
              alt={tree.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <p className="text-gray-600">{tree.description}</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Trees
              </label>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold transition-colors"
                >
                  -
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center font-bold transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total Amount:</span>
                <span className="text-green-600">₹{total}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Payment Method
              </label>
              <div className="space-y-2">
                <button 
                  onClick={() => setPaymentMethod('upi')}
                  className={`w-full p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === 'upi' 
                      ? 'border-green-600 bg-green-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  } flex items-center space-x-3`}
                >
                  <Smartphone className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">UPI Payment</span>
                </button>
                
                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === 'card' 
                      ? 'border-green-600 bg-green-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  } flex items-center space-x-3`}
                >
                  <CreditCard className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">Credit/Debit Card</span>
                </button>
              </div>
            </div>

            {paymentMethod === 'upi' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  UPI ID (Optional)
                </label>
                <input 
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="yourname@paytm"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
            )}

            <button 
              onClick={handlePayment}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Donate ₹{total}</span>
            </button>

            <p className="text-xs text-gray-500 text-center leading-relaxed">
              Your donation will help plant {quantity} {tree.name} tree{quantity > 1 ? 's' : ''} in the Kathmandu Valley. You'll receive updates on your tree's growth and location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;