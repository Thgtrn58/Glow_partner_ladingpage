import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    downloads: 0,
    users: 0,
    technicians: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const images = [
    {
      src: "/api/placeholder/300/400",
      alt: "Massage therapy",
      position: "top-20 left-10",
      delay: 0
    },
    {
      src: "/api/placeholder/280/350",
      alt: "Yoga session",
      position: "top-40 right-20",
      delay: 200
    },
    {
      src: "/api/placeholder/320/380",
      alt: "Spa treatment",
      position: "bottom-20 left-20",
      delay: 400
    },
    {
      src: "/api/placeholder/290/360",
      alt: "Fitness training",
      position: "bottom-40 right-10",
      delay: 600
    },
  
  ];

  const finalNumbers = {
    downloads: 70000,
    users: 50000,
    technicians: 5000
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const animateNumbers = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedNumbers({
        downloads: Math.floor(finalNumbers.downloads * progress),
        users: Math.floor(finalNumbers.users * progress),
        technicians: Math.floor(finalNumbers.technicians * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedNumbers(finalNumbers);
      }
    }, stepDuration);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-white to-glow-50 overflow-hidden sm:flex sm:flex-col">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-glow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-glow-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-glow-300 rounded-full opacity-15 animate-pulse"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-glow-400 to-glow-500 rounded-full opacity-10 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-glow-500 to-glow-400 rounded-full opacity-10 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-6 px-6 sm:flex-shrink-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20 sm:pt-0 px-6 sm:flex-1 sm:flex sm:items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h1 className={`text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Tăng doanh thu <span className="text-glow-600">miễn phí</span>
              <br />
              <span className="text-glow-700">& tiếp cận khách hàng</span>
              <br />
              mới mỗi ngày cùng <span className="text-glow-600">Glow</span>
            </h1>
            
            <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-5xl mx-auto leading-relaxed px-4">
                Nền tảng kết nối hàng đầu Việt Nam dành cho các dịch vụ chăm sóc sức khỏe và sắc đẹp
              </p>
              
              <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center mb-8 sm:mb-10 px-4">
                <button 
                  onClick={handleScrollToCTA}
                  className="group bg-glow-600 hover:bg-glow-700 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-1 sm:space-x-2 flex-1 sm:flex-none justify-center"
                >
                  <span className="whitespace-nowrap">Bắt đầu ngay</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="https://glowvietnam.com/vi/partner" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-glow-600 hover:bg-glow-700 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-1 sm:space-x-2 flex-1 sm:flex-none justify-center"
                >
                  <PlayCircle className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="whitespace-nowrap">Xem demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className={`grid grid-cols-3 gap-2 sm:gap-6 mb-24 sm:mb-0 transition-all duration-1000 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} px-4`}>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-glow-100/50">
              <div className="text-xl sm:text-4xl lg:text-5xl font-bold text-glow-600 mb-1 sm:mb-2">
                {animatedNumbers.downloads.toLocaleString()}+ 
              </div>
              <div className="text-gray-700 font-medium text-xs sm:text-sm uppercase tracking-wide leading-tight">
                lượt tải ứng dụng
              </div>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-glow-100/50">
              <div className="text-xl sm:text-4xl lg:text-5xl font-bold text-glow-600 mb-1 sm:mb-2">
                {animatedNumbers.users.toLocaleString()}+
              </div>
              <div className="text-gray-700 font-medium text-xs sm:text-sm uppercase tracking-wide leading-tight">
                người dùng đăng ký
              </div>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-glow-100/50">
              <div className="text-xl sm:text-4xl lg:text-5xl font-bold text-glow-600 mb-1 sm:mb-2">
                {animatedNumbers.technicians.toLocaleString()}+
              </div>
              <div className="text-gray-700 font-medium text-xs sm:text-sm uppercase tracking-wide leading-tight">
                kỹ thuật viên
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Service Images */}
      <div className="absolute inset-0 pointer-events-none">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute ${image.position} transition-all duration-1000 transform ${
              isVisible ? 'opacity-70 scale-100' : 'opacity-0 scale-95'
            } hover:scale-110 hover:opacity-90`}
            style={{
              animationDelay: `${image.delay}ms`,
              animation: `float ${3 + index}s ease-in-out infinite ${image.delay}ms`
            }}
          >
            <div className="w-32 h-40 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-6 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-glow-200 to-glow-300 opacity-80"></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="text-white text-xs font-semibold">{image.alt}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-20px) rotate(-3deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 6s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 