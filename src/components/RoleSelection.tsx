import React from 'react';

export type Role = 'technician' | 'partner' | null;

interface RoleSelectionProps {
  onRoleSelect: (role: Role) => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onRoleSelect }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
      <button
        onClick={() => onRoleSelect('technician')}
        className="group relative h-[400px] bg-glow-700 rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
      >
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center px-6">
            Trở thành Kỹ thuật viên của Glow
          </h2>
        </div>
      </button>

      <button
        onClick={() => onRoleSelect('partner')}
        className="group relative h-[400px] bg-glow-600 rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
      >
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center px-6">
            Trở thành Đối tác của Glow
          </h2>
        </div>
      </button>
    </div>
  );
};

export default RoleSelection; 