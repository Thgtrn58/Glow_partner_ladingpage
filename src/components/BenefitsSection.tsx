import React from 'react';
import { Users, TrendingUp, Eye, DollarSign } from 'lucide-react';
import { Role } from './RoleSelection';

interface BenefitsSectionProps {
  selectedRole: Role;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ selectedRole }) => {
  const content = {
    technician: {
      title: 'Thu nhập hấp dẫn không giới hạn',
      stats: [
        { icon: Users, value: '1000+', label: 'khách hàng' },
        { icon: TrendingUp, value: '+50%', label: 'thu nhập' },
        { icon: Eye, value: '100%', label: 'chủ động' },
        { icon: DollarSign, value: '0đ', label: 'phí tham gia' },
      ],
    },
    partner: {
      title: 'Mở rộng quy mô không tốn chi phí',
      stats: [
        { icon: Users, value: '50.000+', label: 'khách hàng' },
        { icon: TrendingUp, value: '+30%', label: 'doanh thu' },
        { icon: Eye, value: '+50%', label: 'độ nhận diện' },
        { icon: DollarSign, value: '0đ', label: 'phí hợp tác' },
      ],
    },
  };

  const roleContent = selectedRole === 'technician' ? content.technician : content.partner;

  return (
    <section className="py-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
          <span className="text-glow-500">{roleContent.title}</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {roleContent.stats.map((stat, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-glow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-glow-200">
                <stat.icon className="w-10 h-10 text-glow-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h4>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 