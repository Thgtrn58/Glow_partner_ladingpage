import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Users, TrendingUp, Eye, DollarSign, ChevronRight, Facebook, Youtube, Twitter, Smartphone, Monitor, Phone, Mail, MapPin } from 'lucide-react';
import Home from './pages/Home';

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
          <Link to="/" className="text-2xl font-bold">GLOW</Link>
          <nav className="hidden md:flex space-x-8">
            <a href="#" onClick={handleScrollToAbout} className="hover:text-glow-200 transition-colors">Về Glow</a>
            <a href="#" onClick={handleScrollToCTA} className="hover:text-glow-200 transition-colors">Hợp tác cùng Glow</a>
            <Link to="/" className="hover:text-glow-200 transition-colors">Hỗ trợ</Link>
          </nav>
        </div>
      </header>

      {children}

      {/* Footer */}
      <footer className="bg-glow-600 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold mb-4">GLOW</div>
              <p className="text-glow-200 mb-4">Nền tảng dịch vụ tận nơi</p>
              <div className="space-y-2 text-sm text-glow-200">
                <p>Công ty Cổ Phần Công nghệ BK Việt Nam</p>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>Tầng 14, số 169 Nguyễn Ngọc Vũ, Phường Trung Hòa, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</p>
                </div>
                <p>Mã số doanh nghiệp: 0110124791 do sở KH & ĐT TP Hà Nội cấp ngày 21/09/2022</p>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <p>0888129100</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <p>support@glowvietnam.com</p>
                </div>
              </div>
            </div>

            {/* About Glow */}
            <div>
              <h4 className="font-bold mb-4">Về Glow</h4>
              <ul className="space-y-2 text-glow-200">
                <li><Link to="/about" className="hover:text-white transition-colors">Về chúng tôi</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Chính sách bảo mật</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Điều khoản dịch vụ</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Quy chế hoạt động</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Partnership */}
            <div>
              <h4 className="font-bold mb-4">Hợp tác cùng Glow</h4>
              <ul className="space-y-2 text-glow-200">
                <li><a href="#" onClick={handlePartnerSignup} className="hover:text-white transition-colors">Trở thành Đối tác</a></li>
                <li><a href="#" onClick={handleTechnicianSignup} className="hover:text-white transition-colors">Trở thành kỹ thuật viên</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-glow-200 mb-6">
                <li><Link to="/" className="hover:text-white transition-colors">Liên hệ</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Trung tâm hỗ trợ</Link></li>
              </ul>
              
              <p className="text-glow-200 mb-4 font-medium">Theo dõi chúng tôi và cập nhật thông tin!</p>
              
              <div className="flex space-x-4 mb-6">
                <a href="#" className="bg-glow-700 hover:bg-glow-500 p-2 rounded-lg transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-glow-700 hover:bg-glow-500 p-2 rounded-lg transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="bg-glow-700 hover:bg-glow-500 p-2 rounded-lg transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              <div className="space-y-2">
                <a href="#" className="block bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors">
                  📱 Download on App Store
                </a>
                <a href="#" className="block bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors">
                  📱 Get it on Google Play
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-glow-700 pt-6 text-center text-glow-200">
            <p>&copy; 2024 Glow Vietnam. All rights reserved.</p>
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