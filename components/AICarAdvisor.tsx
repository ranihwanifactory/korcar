import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, MessageSquare, Bot, AlertCircle } from 'lucide-react';
import { getCarRecommendation } from '../services/geminiService';
import { SearchStatus } from '../types';

const AICarAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<SearchStatus>(SearchStatus.IDLE);
  const responseRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setStatus(SearchStatus.LOADING);
    setResponse(null);

    const result = await getCarRecommendation(query);
    setResponse(result);
    setStatus(SearchStatus.SUCCESS);
  };

  useEffect(() => {
    if (status === SearchStatus.SUCCESS && responseRef.current) {
        responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [status]);

  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('1.') ? (
          <div className="flex items-start gap-2 ml-2 my-1.5">
            <span className="text-green-400 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-green-400 block"></span>
            <span className="text-gray-300">{line.replace(/^[•-]\s?/, '')}</span>
          </div>
        ) : (
          <p className={`my-2 leading-relaxed ${line.includes('?') || line.includes(':') ? 'font-bold text-green-100' : 'text-gray-300'}`}>{line}</p>
        )}
      </React.Fragment>
    ));
  };

  const suggestedQuestions = [
    '폐차 필요 서류는?',
    '조기 폐차 대상 확인법',
    '압류가 있어도 폐차 되나요?',
    '대구 무료 견인 되나요?'
  ];

  return (
    <section id="ai-advisor" className="py-24 bg-gradient-to-b from-brand-dark to-[#0F1623] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-green-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#111620] border border-white/5 rounded-3xl p-1 shadow-2xl">
          <div className="bg-brand-card/30 backdrop-blur-xl rounded-[20px] p-6 md:p-10 border border-white/5">
            
            <div className="flex flex-col items-center text-center mb-10">
              <div className="w-16 h-16 bg-gradient-to-tr from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 animate-pulse-slow">
                <Sparkles className="text-white w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                AI 폐차 상담소
              </h2>
              <p className="text-gray-400 max-w-lg">
                궁금한 점이 있으신가요? 24시간 언제든 물어보세요.<br/>
                복잡한 폐차 규정과 절차를 AI가 쉽게 설명해 드립니다.
              </p>
            </div>

            {/* Chat Interface */}
            <div className="max-w-2xl mx-auto">
              {/* Response Area */}
              {(status === SearchStatus.SUCCESS || status === SearchStatus.LOADING) && (
                 <div ref={responseRef} className="mb-6 bg-[#0B0F19] border border-green-500/20 rounded-2xl p-6 min-h-[100px] transition-all shadow-inner">
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-green-600/20 flex-shrink-0 flex items-center justify-center mt-1">
                          <Bot className="text-green-400 w-6 h-6" />
                       </div>
                       <div className="text-gray-200 text-sm leading-relaxed w-full">
                          {status === SearchStatus.LOADING ? (
                             <div className="space-y-3 animate-pulse pt-2">
                                <div className="h-2 bg-white/10 rounded w-3/4"></div>
                                <div className="h-2 bg-white/10 rounded w-full"></div>
                                <div className="h-2 bg-white/10 rounded w-5/6"></div>
                             </div>
                          ) : (
                             <div className="prose prose-invert max-w-none text-sm">
                                {response && formatText(response)}
                                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-500">
                                  <AlertCircle size={12} />
                                  <span>AI 답변은 참고용이며, 정확한 견적은 전화 상담을 권장합니다.</span>
                                </div>
                             </div>
                          )}
                       </div>
                    </div>
                 </div>
              )}

              {/* Input Area */}
              <form onSubmit={handleSearch} className="relative group">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="예: 2010년식 쏘나타 폐차비 얼마인가요?" 
                  className="w-full bg-[#0B0F19] border border-white/10 text-white rounded-xl py-4 pl-12 pr-32 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-gray-600"
                />
                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 group-focus-within:text-green-400 transition-colors" />
                <button 
                  type="submit" 
                  disabled={status === SearchStatus.LOADING || !query.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
                >
                  {status === SearchStatus.LOADING ? '생성중...' : '질문하기'}
                  {!status && <Send size={14} />}
                </button>
              </form>
              
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {suggestedQuestions.map(tag => (
                  <button 
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="text-xs text-gray-400 bg-white/5 hover:bg-white/10 hover:text-green-400 px-3 py-2 rounded-lg transition-colors border border-transparent hover:border-green-500/20"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AICarAdvisor;