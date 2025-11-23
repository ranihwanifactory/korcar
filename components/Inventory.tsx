import React from 'react';
import { Truck, AlertTriangle, Coins, Globe2, ArrowRight } from 'lucide-react';

const serviceData = [
  {
    id: '1',
    title: '일반 폐차',
    subtitle: 'General Scrapping',
    desc: '압류나 저당이 없는 일반적인 차량을 폐차하는 방식입니다. 대구/경북 전지역 무료 견인 후 즉시 말소해 드립니다.',
    icon: <Truck className="w-8 h-8 text-blue-400" />,
    tags: ['당일 말소', '무료 견인', '즉시 입금'],
    imageUrl: 'https://images.unsplash.com/photo-1597762636502-0e976c6c8059?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: '조기 폐차',
    subtitle: 'Diesel Subsidy',
    desc: '배출가스 4,5등급 노후 경유차를 대상으로 정부 보조금을 지원받습니다. 서류 접수부터 성능검사까지 대행해 드립니다.',
    icon: <Coins className="w-8 h-8 text-green-400" />,
    tags: ['정부 보조금', '성능 검사 대행', '추가 지원금'],
    imageUrl: 'https://images.unsplash.com/photo-1532935293444-6b2c62c2cb99?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: '차령초과 말소',
    subtitle: 'Pressure Scrapping',
    desc: '압류나 저당이 있어도 차량 연식이 오래되었다면 합법적으로 폐차가 가능합니다. (승용 11년, 승합 10년 이상 등)',
    icon: <AlertTriangle className="w-8 h-8 text-orange-400" />,
    tags: ['압류 폐차', '합법적 절차', '45-60일 소요'],
    imageUrl: 'https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: '폐차 수출',
    subtitle: 'Used Car Export',
    desc: '엔진 상태가 양호한 차량은 해외 바이어 직거래를 통해 일반 폐차비보다 더 높은 금액을 받으실 수 있습니다.',
    icon: <Globe2 className="w-8 h-8 text-purple-400" />,
    tags: ['고가 매입', '바이어 직거래', '인기 차종'],
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop'
  }
];

const Inventory: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            맞춤형 <span className="text-blue-500">폐차 서비스</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            (주)한국종합폐차장은 고객님의 상황에 맞는 가장 유리한 폐차 방법을 제안합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service) => (
            <div key={service.id} className="group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 p-2 bg-black/40 backdrop-blur rounded-lg border border-white/10">
                    {service.icon}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative -mt-12">
                <div className="mb-4">
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-wide mb-1">{service.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[80px]">
                    {service.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium bg-white/5 text-gray-300 px-2.5 py-1 rounded border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-white/10">
                  <a href="tel:080-666-9000" className="w-full py-3 rounded-xl bg-white/5 hover:bg-blue-600 text-white font-medium transition-all flex items-center justify-center gap-2 group-hover:bg-blue-600">
                    전화 상담하기 <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;