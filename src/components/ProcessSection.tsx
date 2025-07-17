import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import { Role } from './RoleSelection';

interface ProcessSectionProps {
  selectedRole: Role;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ selectedRole }) => {
  const content = {
    technician: {
      title: 'Các bước tham gia rất đơn giản',
      steps: [
        {
          title: 'Điền form đăng ký',
          description: 'Hoàn thành biểu mẫu trên trang này. Đội ngũ Glow sẽ liên hệ trong vòng 24 giờ để tư vấn chi tiết về quy trình hợp tác và hỗ trợ thiết lập.',
        },
        {
          title: 'Thiết lập thông tin cá nhân trên ứng dụng Glow',
          description: 'Cập nhật thông tin và chứng chỉ của bạn trên ứng dụng Glow. Khách hàng sẽ có thể tìm thấy và đặt lịch dịch vụ trực tiếp với bạn.',
        },
        {
          title: 'Bắt đầu nhận và thực hiện đơn hàng',
          description: 'Cung cấp dịch vụ chất lượng cho khách hàng Glow. Thanh toán được xử lý tự động qua QR check-in, đảm bảo quy trình nhanh chóng và minh bạch.',
        },
      ],
    },
    partner: {
      title: 'Các bước tham gia rất đơn giản',
      steps: [
        {
          title: 'Điền form đăng ký',
          description: 'Hoàn thành biểu mẫu trên trang này. Đội ngũ Glow sẽ liên hệ trong vòng 24 giờ để tư vấn chi tiết về quy trình hợp tác và hỗ trợ thiết lập.',
        },
        {
          title: 'Thiết lập thông tin cơ sở trên ứng dụng Glow',
          description: 'Cập nhật thông tin spa/phòng gym của bạn trên ứng dụng Glow. Khách hàng sẽ có thể tìm thấy và đặt lịch dịch vụ trực tiếp qua ứng dụng.',
        },
        {
          title: 'Đón khách và nhận thanh toán',
          description: 'Cung cấp dịch vụ chất lượng cho khách hàng Glow. Thanh toán được xử lý tự động qua QR check-in, đảm bảo quy trình nhanh chóng và minh bạch.',
        },
      ],
    },
  };

  const roleContent = selectedRole === 'technician' ? content.technician : content.partner;

  return (
    <section className="py-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-glow-500 mb-12">
          {roleContent.title}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {roleContent.steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-glow-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-glow-100 to-glow-200 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <Monitor className="w-16 h-16 text-glow-600 mx-auto mb-4" />
                <p className="text-glow-800 font-medium">Quản lý dễ dàng</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-glow-100 to-glow-200 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <Smartphone className="w-16 h-16 text-glow-600 mx-auto mb-4" />
                <p className="text-glow-800 font-medium">Ứng dụng thông minh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 