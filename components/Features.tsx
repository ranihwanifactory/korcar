import React from 'react';
import { Phone, Truck, CreditCard, FileCheck } from 'lucide-react';

const Features: React.FC = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "1. 폐차 신청",
      desc: "전화 또는 홈페이지를 통해 폐차 상담을 신청합니다. 차번만 알려주시면 원부 조회 후 정확한 견적을 안내해 드립니다."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "2. 무료 견인",
      desc: "고객님이 원하시는 시간과 장소로 기사님이 방문하여 차량을 무료로 견인해 드립니다. 현장에 안 계셔도 가능합니다."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "3. 고철비 입금",
      desc: "차량이 폐차장에 입고되는 즉시 확인 절차를 거쳐 약속된 고철 보상금을 고객님의 계좌로 바로 송금해 드립니다."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "4. 말소 등록",
      desc: "관청 방문 없이 폐차장에서 말소 등록을 대행 처리해 드립니다. 말소증은 문자로 전송해 드립니다."
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              복잡한 서류작업? <br />
              <span className="text-green-500">한국종합폐차장</span>이<br />
              알아서 다 해드립니다.
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              정부 관허 폐차장이기 때문에 믿을 수 있습니다. 
              일반 대행업체와 달리 수수료가 없으며, 법적 보호를 받을 수 있습니다.
              전화 한 통으로 시작부터 끝까지 편안하게 처리하세요.
            </p>
            
            <div className="bg-brand-card border border-white/5 rounded-2xl p-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <FileCheck size={100} />
               </div>
               <h3 className="text-xl font-bold text-white mb-4">필요 서류 안내</h3>
               <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                     <span><strong className="text-white">개인:</strong> 자동차등록증 원본, 신분증 사본</span>
                  </li>
                  <li className="flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                     <span><strong className="text-white">법인:</strong> 사업자등록증, 법인인감증명서, 등기부등본</span>
                  </li>
               </ul>
            </div>
          </div>

          {/* Process Steps Visual */}
          <div className="relative">
             <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-green-500/50 to-blue-500/10"></div>
             
             <div className="space-y-8">
                {steps.map((step, idx) => (
                   <div key={idx} className="relative flex items-start gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-brand-card border border-white/10 flex items-center justify-center shrink-0 z-10 group-hover:border-green-500/50 group-hover:scale-110 transition-all duration-300 shadow-xl">
                         <div className="text-gray-400 group-hover:text-green-400 transition-colors">
                            {step.icon}
                         </div>
                      </div>
                      <div className="pt-2">
                         <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{step.title}</h3>
                         <p className="text-gray-500 leading-relaxed">{step.desc}</p>
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

export default Features;