import React, { useState } from 'react';
import { submitToGoogleAppsScript } from '../api/forms';

const vietnamProvinces = [
  'An Giang', 'Bà Rịa - Vũng Tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu', 'Bắc Ninh', 'Bến Tre', 
  'Bình Định', 'Bình Dương', 'Bình Phước', 'Bình Thuận', 'Cà Mau', 'Cần Thơ', 'Cao Bằng', 
  'Đà Nẵng', 'Đắk Lắk', 'Đắk Nông', 'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 
  'Hà Giang', 'Hà Nam', 'Hà Nội', 'Hà Tĩnh', 'Hải Dương', 'Hải Phòng', 'Hậu Giang', 
  'Hòa Bình', 'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lâm Đồng', 
  'Lạng Sơn', 'Lào Cai', 'Long An', 'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 
  'Phú Thọ', 'Phú Yên', 'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 
  'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên', 'Thanh Hóa', 'Thừa Thiên Huế', 
  'Tiền Giang', 'TP Hồ Chí Minh', 'Trà Vinh', 'Tuyên Quang', 'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái'
];

interface FormData {
  name: string;
  email: string; // Still string type but validation makes it optional
  phone: string;
  province: string;
  experience: string;
  yearsOfExperience: string;
  question: string;
  agreedToMarketing: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  province?: string;
  experience?: string;
  yearsOfExperience?: string;
}

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    province: '',
    experience: '',
    yearsOfExperience: '',
    question: '',
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

    if (!formData.province) {
      newErrors.province = 'Vui lòng chọn Tỉnh/Thành phố';
    }

    if (!formData.experience) {
      newErrors.experience = 'Vui lòng chọn kinh nghiệm của bạn';
    }

    if (formData.experience === 'experienced' && formData.yearsOfExperience && Number(formData.yearsOfExperience) < 1) {
      newErrors.yearsOfExperience = 'Số năm kinh nghiệm phải từ 1 năm trở lên';
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
        province: '',
        experience: '',
        yearsOfExperience: '',
        question: '',
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
            ✓ Đăng ký thành công! Hãy kiểm tra email và Zalo của bạn để được hướng dẫn các bước tiếp theo.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div>
            <select
              value={formData.province}
              onChange={(e) => handleInputChange('province', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-glow-500 appearance-none bg-white text-gray-500 ${
                errors.province ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-glow-300'
              }`}
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1em'
              }}
            >
              <option value="" disabled selected className="text-gray-500">Tỉnh/Thành phố *</option>
              {vietnamProvinces.map((province) => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
            {errors.province && <p className="text-red-500 text-sm mt-1">{errors.province}</p>}
          </div>

          <div>
            <select
              value={formData.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-glow-500 appearance-none bg-white text-gray-500 ${
                errors.experience ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-glow-300'
              }`}
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1em'
              }}
            >
              <option value="" disabled selected className="text-gray-500">Kinh nghiệm massage *</option>
              <option value="experienced">Tôi đã có kinh nghiệm</option>
              <option value="no_experience">Tôi chưa có kinh nghiệm</option>
            </select>
            {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
          </div>

          {formData.experience === 'experienced' && (
            <div>
              <input
                type="number"
                min="1"
                placeholder="Số năm kinh nghiệm (không bắt buộc)"
                value={formData.yearsOfExperience}
                onChange={(e) => handleInputChange('yearsOfExperience', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-glow-500 ${
                  errors.yearsOfExperience ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-glow-300'
                }`}
              />
              {errors.yearsOfExperience && <p className="text-red-500 text-sm mt-1">{errors.yearsOfExperience}</p>}
            </div>
          )}
        </div>

        <div>
          <select
            value={formData.question}
            onChange={(e) => handleInputChange('question', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-glow-500 appearance-none bg-white text-gray-500 border-gray-200 focus:border-glow-300`}
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1em'
            }}
          >
            <option value="" disabled selected className="text-gray-500">Bạn có câu hỏi gì cho đội ngũ Glow không?</option>
            <option value="Khu vực của tôi có khách hàng không?">1. Khu vực của tôi có khách hàng không?</option>
            <option value="Giờ giấc làm việc trên Glow có linh hoạt được không?">2. Giờ giấc làm việc trên Glow có linh hoạt được không?</option>
            <option value="Đăng ký KTV trên Glow có mất phí không?">3. Đăng ký KTV trên Glow có mất phí không?</option>
            <option value="Số tiền KTV nhận về tay trên mỗi đơn là bao nhiêu?">4. Số tiền KTV nhận về tay trên mỗi đơn là bao nhiêu?</option>
            <option value="Glow cung cấp những dịch vụ gì cho khách hàng?">5. Glow cung cấp những dịch vụ gì cho khách hàng?</option>
            <option value="Tôi chưa có kinh nghiệm, có tham gia được không?">6. Tôi chưa có kinh nghiệm, có tham gia được không?</option>
          </select>
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
            Tôi đồng ý nhận các thông báo marketing từ Glow
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