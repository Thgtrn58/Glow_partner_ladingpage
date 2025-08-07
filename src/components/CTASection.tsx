import React from 'react';
import LeadForm from './LeadForm';

const CTASection: React.FC = () => {
  const content = {
    title: 'THAM GIA NGAY!',
    subtitle: 'Trở thành Kỹ thuật viên Glow miễn phí - dễ dàng - hiệu quả',
    description: 'Điền thông tin của bạn vào form dưới đây.',
  };

  return (
    <section id="cta-section" className="bg-gradient-to-br from-white to-glow-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {content.title}
            </h2>
            <p className="text-xl text-glow-700 font-medium mb-6 italic">
              {content.subtitle}
            </p>
            <p className="text-gray-600 mb-8">
              {content.description}
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-glow-100/20">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
                Tìm hiểu thêm?
              </h3>
              <p className="text-gray-600 mb-8 text-center text-lg">
                Tài liệu giới thiệu Trở thành Kỹ thuật viên Glow.
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 