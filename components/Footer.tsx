import React from 'react';
import { Recycle, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#05080F] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Recycle className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                (주)한국<span className="text-green-400">종합폐차장</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed break-keep">
              대구/경북 1등 관허 폐차장. <br/>
              고객님의 소중한 차량, 마지막까지 정직하고 투명하게 처리해드립니다.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">고객센터</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-500">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-green-500 shrink-0 mt-0.5" />
                <span>대구 달성군 하빈면 하산리 947-95<br/>(대구/경북 무료 견인)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-green-500 shrink-0" />
                <a href="tel:080-666-9000" className="hover:text-white transition-colors">080-666-9000 (무료 전화)</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-green-500 shrink-0" />
                <a href="tel:053-566-8888" className="hover:text-white transition-colors">053-566-8888 (일반 전화)</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-green-500 shrink-0" />
                <span>평일 09:00 - 18:00 / 주말 상담 가능</span>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div>
             <h4 className="text-white font-bold mb-6">빠른 상담 신청</h4>
             <p className="text-gray-500 text-sm mb-4">전화번호를 남기시면 담당자가 연락드립니다.</p>
             <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="tel" 
                 placeholder="010-0000-0000"
                 className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors" 
               />
               <button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white text-sm font-bold py-3 rounded-lg transition-colors">
                 상담 요청하기
               </button>
             </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="text-gray-600 text-xs space-y-1.5 text-left">
            <p className="font-bold text-gray-500">상호: (주)한국종합폐차장 | 대표자: 유용기</p>
            <p>사업자등록번호: 514-81-80365 | 관허번호: 제 2004-1호</p>
            <p>주소: 대구 달성군 하빈면 하산리 947-95</p>
            <p>전화번호: 080-666-9000, 053-566-8888 | 팩스: 053-566-8889</p>
            <p>개인정보관리책임자: 유충기 | 이메일: koreascrap@example.com</p>
            <p className="mt-2 text-gray-700">© {new Date().getFullYear()} Korea General Junkyard. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-400">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;