import React, { useState, useEffect, useRef } from 'react';

// Styles for animations
const animationStyles = `
  @keyframes fadeSlideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 1000;
    }
  }

  .animate-dash {
    stroke-dasharray: 20;
    animation: dash 30s linear infinite;
  }
`;

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = animationStyles;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const roadmapData = [
    {
      year: 2026,
      title: "Mở rộng quy mô",
      achievements: [
        "500+ Đối tác chất lượng cao tại Hà Nội và TP.HCM",
        "100,000+ thành viên Glow Việt Nam"
      ],
      color: "from-glow-500 to-glow-600"
    },
    {
      year: 2027,
      title: "Phát triển toàn quốc",
      achievements: [
        "1,000+ Đối tác liên kết trên toàn quốc",
        "500,000+ thành viên sử dụng mỗi tháng"
      ],
      color: "from-glow-600 to-glow-700"
    },
    {
      year: 2030,
      title: "Dẫn đầu thị trường",
      achievements: [
        "5,000+ Đối tác liên kết toàn quốc",
        "2,000,000+ thành viên hoạt động mỗi tháng"
      ],
      color: "from-glow-700 to-glow-800"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-6 pb-20 bg-gradient-to-br from-gray-50 via-white to-glow-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-glow-50/20 to-glow-100/10"></div>
        <div className="absolute top-16 left-8 w-72 h-72 bg-gradient-to-br from-glow-200/20 to-glow-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-8 w-64 h-64 bg-gradient-to-br from-glow-400/15 to-glow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block bg-gradient-to-r from-glow-500 to-glow-600 bg-clip-text text-transparent text-sm font-bold tracking-wider uppercase mb-1">
              ABOUT US
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">
              Về chúng tôi
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-glow-400 to-glow-600 mx-auto rounded-full"></div>
          </div>
        </div>


        {/* Company Vision */}
        <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-glow-100/50 mb-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-glow-500 leading-relaxed mb-5">
              Glow là nền tảng kết nối Khách hàng có nhu cầu massage lành mạnh và Kỹ thuật viên uy tín - tận tâm - chuyên nghiệp, góp phần giúp hàng triệu người Việt chăm sóc bản thân hiệu quả.
              </p>
              
              <div className="border-t border-glow-200 pt-5">
                <h4 className="text-3xl font-bold text-glow-700 bg-gradient-to-r from-glow-500 to-glow-600 bg-clip-text text-transparent">
                  Và để thực hiện điều đó, chúng tôi cần có bạn!
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className={`transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-4xl font-bold text-glow-500 mb-2">
              Mục tiêu của chúng tôi
            </h3>
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 md:w-12 h-0.5 bg-glow-600 rounded-full"></div>
              <div className="w-3 h-3 bg-glow-600 rounded-full"></div>
              <div className="w-8 md:w-12 h-0.5 bg-glow-600 rounded-full"></div>
            </div>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
              Hành trình phát triển và mở rộng của Glow
            </p>
          </div>

          {/* Mobile Layout - Vertical Timeline */}
          <div className="block md:hidden px-4 space-y-8">
            {roadmapData.map((item, index) => (
              <div
                key={item.year}
                className={`relative transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1500 + index * 300}ms` }}
              >
                {/* Vertical Line */}
                {index < roadmapData.length - 1 && (
                  <div className="absolute left-5 top-10 w-0.5 h-20 bg-glow-300"></div>
                )}
                
                <div className="flex items-start gap-4">
                  {/* Marker Point */}
                  <div className="flex-shrink-0">
                    <div 
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color} 
                        flex items-center justify-center shadow-lg border-4 border-white
                        transform transition-all duration-500 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}
                      style={{ transitionDelay: `${2000 + index * 300}ms` }}
                    >
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div 
                    className="bg-white rounded-xl p-4 shadow-xl flex-1
                      border border-glow-100/50 transition-all duration-500
                      hover:shadow-2xl"
                    style={{
                      transitionDelay: `${2300 + index * 300}ms`,
                      animation: isVisible 
                        ? 'fadeSlideUp 0.8s ease-out forwards'
                        : 'none'
                    }}
                  >
                    <div className="text-lg font-bold text-glow-600 mb-1">{item.year}</div>
                    <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
                    <div className="space-y-1.5">
                      {item.achievements.map((achievement, i) => (
                        <div 
                          key={i} 
                          className="flex items-start gap-2 transition-all duration-300"
                          style={{ 
                            transitionDelay: `${2600 + index * 300 + i * 150}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)'
                          }}
                        >
                          <div className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-glow-500"></div>
                          <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Curved Road Timeline */}
          <div className="hidden md:block relative w-full px-4">
            {/* Curved Road Background */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
              <svg className="w-full" height="160" viewBox="0 0 1200 180" fill="none" preserveAspectRatio="none">
                <path 
                  d="M0,90 C300,20 600,160 900,90 C1050,40 1150,90 1200,90" 
                  stroke="black"
                  strokeWidth="40"
                  strokeLinecap="round"
                  className="stroke-glow-200"
                  fill="none"
                />
                <path 
                  d="M0,90 C300,20 600,160 900,90 C1050,40 1150,90 1200,90" 
                  stroke="white"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                  fill="none"
                  className={`${isVisible ? 'animate-dash' : ''}`}
                />
              </svg>
            </div>

            {/* Timeline Items */}
            <div className="relative flex justify-between items-center min-h-[320px]">
              {roadmapData.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex-1 ${index % 2 === 0 ? '-mt-32' : 'mt-32'} transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${1500 + index * 300}ms` }}
                >
                  {/* Marker Point */}
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div 
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color} 
                        flex items-center justify-center shadow-lg border-4 border-white
                        transform transition-all duration-500 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
                        hover:scale-110`}
                      style={{ transitionDelay: `${2000 + index * 300}ms` }}
                    >
                      <span className="text-base font-bold text-white">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div 
                    className={`bg-white rounded-xl p-4 shadow-xl mx-3 
                      border border-glow-100/50 transition-all duration-500
                      hover:shadow-2xl ${index % 2 === 0 ? 'mt-6' : 'mb-6'} z-10`}
                    style={{
                      transitionDelay: `${2300 + index * 300}ms`,
                      animation: isVisible 
                        ? `${index % 2 === 0 ? 'fadeSlideDown' : 'fadeSlideUp'} 0.8s ease-out forwards`
                        : 'none'
                    }}
                  >
                    <div className="text-lg font-bold text-glow-600 mb-1">{item.year}</div>
                    <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
                    <div className="space-y-1.5">
                      {item.achievements.map((achievement, i) => (
                        <div 
                          key={i} 
                          className="flex items-start gap-2 transition-all duration-300"
                          style={{ 
                            transitionDelay: `${2600 + index * 300 + i * 150}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)'
                          }}
                        >
                          <div className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-glow-500"></div>
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 