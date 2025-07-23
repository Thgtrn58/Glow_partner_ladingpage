import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Users, TrendingUp, Eye, DollarSign, ChevronRight, Facebook, Youtube, Twitter, Smartphone, Monitor, Phone, Mail, MapPin } from 'lucide-react';
import Home from './pages/Home';
import GlowLogo from './assets/Logo Glow.png';

interface FormData {
  name: string;
  email: string;
  phone: string;
  agreedToMarketing: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

// Create custom events for setting the roles
const setPartnerRoleEvent = new CustomEvent('setPartnerRole');
const setTechnicianRoleEvent = new CustomEvent('setTechnicianRole');

const Layout = ({ children }: { children: React.ReactNode }) => {
  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePartnerSignup = (e: React.MouseEvent) => {
    e.preventDefault();
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch the custom event after scrolling
      document.dispatchEvent(setPartnerRoleEvent);
    }
  };

  const handleTechnicianSignup = (e: React.MouseEvent) => {
    e.preventDefault();
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch the custom event after scrolling
      document.dispatchEvent(setTechnicianRoleEvent);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-glow-600 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={GlowLogo} alt="Glow Logo" className="h-8" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a href="#" onClick={handleScrollToAbout} className="hover:text-glow-200 transition-colors">Về Glow</a>
            <a href="#" onClick={handleScrollToCTA} className="hover:text-glow-200 transition-colors">Hợp tác cùng Glow</a>
            <Link to="/" className="hover:text-glow-200 transition-colors">Hỗ trợ</Link>
          </nav>
        </div>
      </header>

      {children}

      {/* Footer */}
      <footer className="bg-glow-600 text-white py-6 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-4 sm:mb-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-2 sm:mb-4">
                <img src={GlowLogo} alt="Glow Logo" className="h-6 sm:h-8" />
              </div>
              <p className="text-glow-200 mb-2 sm:mb-4 text-sm sm:text-base">Nền tảng dịch vụ tận nơi</p>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-glow-200">
                <p className="hidden sm:block">Công ty Cổ Phần Công nghệ BK Việt Nam</p>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                  <p className="leading-tight">
                    <span className="sm:hidden">Tầng 14, 169 Nguyễn Ngọc Vũ, Cầu Giấy, Hà Nội</span>
                    <span className="hidden sm:block">Tầng 14, số 169 Nguyễn Ngọc Vũ, Phường Trung Hòa, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</span>
                  </p>
                </div>
                <p className="hidden sm:block">Mã số doanh nghiệp: 0110124791 do sở KH & ĐT TP Hà Nội cấp ngày 21/09/2022</p>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <p>0888129100</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <p>support@glowvietnam.com</p>
                </div>
              </div>
            </div>

            {/* About Glow */}
            <div>
              <h4 className="font-bold mb-2 sm:mb-4 text-sm sm:text-base">Về Glow</h4>
              <ul className="space-y-1 sm:space-y-2 text-glow-200 text-xs sm:text-sm">
                <li><a href="https://glowvietnam.com/vi/about" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                <li><a href="https://glowvietnam.com/vi/chinh-sach" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
                <li><a href="https://glowvietnam.com/vi/dieu-khoan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
                <li className="hidden sm:block"><a href="https://glowvietnam.com/vi/quy-che" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Quy chế hoạt động</a></li>
                <li className="hidden sm:block"><a href="https://glowvietnam.com/vi/blog" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Partnership */}
            <div>
              <h4 className="font-bold mb-2 sm:mb-4 text-sm sm:text-base">Hợp tác cùng Glow</h4>
              <ul className="space-y-1 sm:space-y-2 text-glow-200 mb-3 sm:mb-6 text-xs sm:text-sm">
                <li><a href="#" onClick={handlePartnerSignup} className="hover:text-white transition-colors">Trở thành Đối tác</a></li>
                <li><a href="#" onClick={handleTechnicianSignup} className="hover:text-white transition-colors">Trở thành kỹ thuật viên</a></li>
              </ul>
              
              <p className="text-glow-200 mb-2 sm:mb-4 font-medium text-xs sm:text-sm">Theo dõi chúng tôi và cập nhật thông tin!</p>
              
              <div className="flex space-x-2 sm:space-x-4 mb-3 sm:mb-6">
                <a href="#" className="bg-glow-700 hover:bg-glow-500 p-1 sm:p-2 rounded-lg transition-colors">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="bg-glow-700 hover:bg-glow-500 p-1 sm:p-2 rounded-lg transition-colors">
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="bg-glow-700 hover:bg-glow-500 p-1 sm:p-2 rounded-lg transition-colors">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <a href="https://apps.apple.com/vn/app/glow-beauty-wellness/id6443428819" target="_blank" rel="noopener noreferrer" className="block bg-black text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-gray-800 transition-colors">
                  📱 Download on App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.glow.mobileApp&hl=vi" target="_blank" rel="noopener noreferrer" className="block bg-black text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-gray-800 transition-colors">
                  📱 Get it on Google Play
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-glow-700 pt-3 sm:pt-6 text-center text-glow-200">
            <p className="text-xs sm:text-sm">&copy; 2024 Glow Vietnam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;