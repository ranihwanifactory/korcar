import React from 'react';
import { CheckCircle2, PhoneCall } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Abstract Gradients - Adjusted to Green/Blue for Eco/Trust */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-green-600/10 rounded-full blur-[120px] opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-sm font-semibold">
              <CheckCircle2 size={16} />
              <span>정부 관허 1등급 업체 (주)한국종합폐차장</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white leading-[1.15] break-keep">
              대구 경북 1등 폐차장 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                최고가 보상
              </span> 약속드립니다.
            </h1>
            
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed break-keep">
              조기폐차부터 일반폐차, 폐차수출까지. 대구 달성군 소재, 믿을 수 있는 관허 업체에서 무료 견인과 당일 말소 서비스를 경험하세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:080-666-9000" className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/50 hover:shadow-green-600/40 hover:-translate-y-1">
                <PhoneCall size={20} />
                080-666-9000
              </a>
              <a href="#ai-advisor" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all flex items-center justify-center backdrop-blur-sm hover:-translate-y-1">
                AI 예상 견적 받기
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 flex gap-8">
              <div>
                <p className="text-3xl font-display font-bold text-white">100%</p>
                <p className="text-sm text-gray-500">관허 업체 인증</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">0원</p>
                <p className="text-sm text-gray-500">무료 견인 서비스</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">24h</p>
                <p className="text-sm text-gray-500">친절 상담 대기</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 transform hover:scale-[1.01] transition-transform duration-500 ease-out">
               {/* Using a mechanic/car service related image */}
               <img 
                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2000&auto=format&fit=crop" 
                alt="Professional Car Service" 
                className="rounded-3xl shadow-2xl shadow-black/50 border border-white/10 w-full object-cover h-[600px]"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-10 -right-6 bg-brand-card/90 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <span className="font-display font-bold text-lg">₩</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">고철비 최고가 지급</p>
                    <p className="text-xs text-gray-400">알루미늄 휠 추가 보상</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 -left-6 bg-brand-card/90 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">관허 업체 등록</p>
                    <p className="text-xs text-gray-400">안전하고 깔끔한 말소</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;