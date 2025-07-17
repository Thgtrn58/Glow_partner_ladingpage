import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Building } from 'lucide-react';
import { Role } from './RoleSelection';
import LeadForm from './LeadForm';

const CTASection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role>(null);

  useEffect(() => {
    const handleSetPartnerRole = () => {
      setSelectedRole('partner');
    };

    const handleSetTechnicianRole = () => {
      setSelectedRole('technician');
    };

    // Add event listeners
    document.addEventListener('setPartnerRole', handleSetPartnerRole);
    document.addEventListener('setTechnicianRole', handleSetTechnicianRole);

    // Cleanup
    return () => {
      document.removeEventListener('setPartnerRole', handleSetPartnerRole);
      document.removeEventListener('setTechnicianRole', handleSetTechnicianRole);
    };
  }, []);

  const content = {
    technician: {
      title: 'THAM GIA NGAY!',
      subtitle: 'Trở thành Kỹ thuật viên Glow miễn phí - dễ dàng - hiệu quả',
      description: 'Bấm nút dưới đây để đăng ký thông tin.',
      buttonText: 'Đăng ký trở thành Kỹ thuật viên',
    },
    partner: {
      title: 'THAM GIA NGAY!',
      subtitle: 'Trở thành Đối tác Glow miễn phí - dễ dàng - hiệu quả',
      description: 'Bấm nút dưới đây để đăng ký thông tin.',
      buttonText: 'Trở thành Đối tác Glow',
    },
  };

  const roleContent = selectedRole === 'technician' ? content.technician : content.partner;

  return (
    <section id="cta-section" className="bg-gradient-to-br from-white to-glow-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {!selectedRole ? (
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-4">
              Sẵn sàng tham gia cộng đồng Glow?
            </h2>
            <p className="text-xl text-glow-500 mb-12">
              Chọn vai trò phù hợp với bạn để bắt đầu hành trình cùng Glow
            </p>
            
            {/* Enhanced Role Selection UI */}
            <div className="grid md:grid-cols-2 gap-0 max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedRole('technician')}
                className="group relative h-[500px] bg-gradient-to-br from-glow-700 to-glow-800 hover:from-glow-600 hover:to-glow-700 transition-all duration-500 transform hover:scale-[1.02] flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center px-8">
                  <div className="mb-6">
                    <Users className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-glow-100 transition-colors duration-300">
                    Trở thành Kỹ thuật viên của Glow
                  </h3>
                  <p className="text-glow-100 text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    Gia nhập đội ngũ chuyên gia, tiếp cận hàng ngàn khách hàng
                  </p>
                </div>
                
                {/* Animated elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-glow-400 rounded-full opacity-20 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-glow-300 rounded-full opacity-15 group-hover:opacity-25 group-hover:scale-110 transition-all duration-700"></div>
              </button>

              <button
                onClick={() => setSelectedRole('partner')}
                className="group relative h-[500px] bg-gradient-to-br from-glow-600 to-glow-700 hover:from-glow-500 hover:to-glow-600 transition-all duration-500 transform hover:scale-[1.02] flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center px-8">
                  <div className="mb-6">
                    <Building className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-glow-100 transition-colors duration-300">
                    Trở thành Đối tác của Glow
                  </h3>
                  <p className="text-glow-100 text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    Mở rộng doanh nghiệp, tăng doanh thu bền vững
                  </p>
                </div>
                
                {/* Animated elements */}
                <div className="absolute top-10 left-10 w-24 h-24 bg-glow-400 rounded-full opacity-20 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500"></div>
                <div className="absolute bottom-10 right-10 w-18 h-18 bg-glow-300 rounded-full opacity-15 group-hover:opacity-25 group-hover:scale-110 transition-all duration-700"></div>
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <button
                onClick={() => setSelectedRole(null)}
                className="mb-8 inline-flex items-center text-glow-700 hover:text-glow-800 transition-colors"
              >
                <ChevronRight className="w-5 h-5 mr-1 rotate-180" />
                Thay đổi vai trò
              </button>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {roleContent.title}
              </h2>
              <p className="text-xl text-glow-700 font-medium mb-6 italic">
                {roleContent.subtitle}
              </p>
              <p className="text-gray-600 mb-8">
                {roleContent.description}
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-glow-100/20">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Tìm hiểu thêm?
                </h3>
                <p className="text-gray-600 mb-8 text-center text-lg">
                  {selectedRole === 'technician' 
                    ? 'Tài liệu giới thiệu Trở thành Kỹ thuật viên Glow.'
                    : 'Tài liệu giới thiệu Trở thành Đối tác Glow.'}
                </p>
                <LeadForm selectedRole={selectedRole} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection; 