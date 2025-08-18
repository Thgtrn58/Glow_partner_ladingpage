import React, { useState } from 'react';
import { submitToGoogleAppsScript } from '../api/forms';

interface FormData {
  name: string;
  email: string; // Still string type but validation makes it optional
  phone: string;
  agreedToMarketing: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    agreedToMarketing: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Họ và tên không được để trống';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không đúng định dạng';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Số điện thoại không được để trống';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Số điện thoại phải có 10 chữ số';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      await submitToGoogleAppsScript({
        ...formData,
        selectedRole: 'technician',
      });
      
      setShowSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        agreedToMarketing: false
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      // You can add error handling UI here
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      {showSuccess && (
        <div className="bg-glow-50 border border-glow-200 rounded-lg p-4">
          <p className="text-glow-800 font-medium">
            ✓ Đăng ký thành công! Chúng tôi sẽ liên hệ lại với bạn sớm nhất.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Họ và tên *"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-glow-500 ${
            errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-glow-300'
          }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email (không bắt buộc)"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-glow-500 ${
            errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-glow-300'
          }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Số điện thoại có dùng Zalo *"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-glow-500 ${
            errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-glow-300'
          }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="marketing-consent"
            checked={formData.agreedToMarketing}
            onChange={(e) => handleInputChange('agreedToMarketing', e.target.checked)}
            className="mt-1 w-4 h-4 text-glow-600 border-gray-300 rounded focus:ring-glow-500"
          />
          <label htmlFor="marketing-consent" className="text-sm text-gray-600 leading-tight">
            Tôi đồng ý nhận email marketing từ Glow
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-glow-600 hover:bg-glow-700 disabled:bg-glow-400 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none"
        >
          {isSubmitting ? 'Đang gửi...' : 'Gửi thông tin'}
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center">
        Bằng cách gửi thông tin, bạn đồng ý với{' '}
        <a href="#" className="text-glow-600 hover:underline">Chính sách bảo mật</a> của chúng tôi.
      </p>
    </>
  );
};

export default LeadForm; 