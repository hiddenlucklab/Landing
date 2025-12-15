import React from 'react';
import { Target, UserCheck, MessageCircleHeart } from 'lucide-react';

const UspSection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-24">
        
        {/* USP 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 relative">
             <div className="aspect-square bg-mint/10 rounded-full absolute -top-10 -left-10 w-full h-full blur-3xl"></div>
             <div className="glass-card p-8 rounded-2xl relative z-10 text-center">
                <Target size={64} className="mx-auto text-mint-dark mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-4">핵심만 남겼습니다</h3>
                <p className="text-gray-600 leading-relaxed">
                  100페이지를 읽을 시간에 당신은 2026년을 준비해야 합니다.
                  불필요한 장식은 덜어내고, 당신의 행동을 바꿀 문장들만 압축했습니다.
                </p>
                <ul className="text-left mt-6 space-y-2 text-sm text-dark-soft">
                   <li className="flex items-center gap-2">✓ 진짜 기회는 언제인가</li>
                   <li className="flex items-center gap-2">✓ 조심해야 할 위기는 어느 달인가</li>
                   <li className="flex items-center gap-2">✓ 당장 시작해야 할 행동은 무엇인가</li>
                </ul>
             </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
             <span className="text-sm font-bold tracking-widest text-mint-dark uppercase">Compass</span>
             <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
               당신의 시간은<br/>소중하니까요.
             </h2>
             <p className="text-gray-600">복잡한 미로는 걷어내고,<br/>목적지로 향하는 직관적인 길을 보여드립니다.</p>
          </div>
        </div>

        {/* USP 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 relative">
             <div className="aspect-square bg-peach/10 rounded-full absolute -bottom-10 -right-10 w-full h-full blur-3xl"></div>
             <div className="glass-card p-8 rounded-2xl relative z-10 text-center">
                <UserCheck size={64} className="mx-auto text-peach mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-4">사람이 읽고 답합니다</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI는 데이터를 분석하지만, 당신의 고민은 이해하지 못합니다.
                  희구소는 사람이 직접 당신의 사주를 읽고, 삶의 맥락 속에서 해석합니다.
                </p>
             </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-right">
             <span className="text-sm font-bold tracking-widest text-peach uppercase">Human Touch</span>
             <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
               데이터 너머의<br/>진심을 담습니다.
             </h2>
             <p className="text-gray-600">차가운 알고리즘이 아닌,<br/>따뜻한 시선으로 당신의 운명을 읽습니다.</p>
          </div>
        </div>

        {/* USP 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 relative">
             <div className="aspect-square bg-gold/10 rounded-full absolute top-10 right-10 w-full h-full blur-3xl"></div>
             <div className="glass-card p-8 rounded-2xl relative z-10 text-center border-gold/30">
                <MessageCircleHeart size={64} className="mx-auto text-gold mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-4">10분 상담권 무료 증정</h3>
                <p className="text-gray-600 leading-relaxed">
                   "이 부분이 무슨 뜻이지?" 혼자 고민하지 마세요.
                   보고서 내용 중 궁금한 점, 당신의 상황에 맞춘 구체적인 조언까지
                   카카오톡으로 직접 물어보세요.
                </p>
                <div className="mt-6 bg-[#FEE500] text-dark/80 px-4 py-2 rounded-lg text-sm font-bold inline-block">
                   카카오톡 1:1 상담 포함
                </div>
             </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
             <span className="text-sm font-bold tracking-widest text-gold uppercase">After Care</span>
             <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
               명확해질 때까지<br/>함께합니다.
             </h2>
             <p className="text-gray-600">보고서 발송이 끝이 아닙니다.<br/>당신의 질문이 멈출 때까지 희구소는 곁에 있습니다.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UspSection;