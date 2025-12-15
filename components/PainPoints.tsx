import React from 'react';
import { HelpCircle, FileX, Brain } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white/50 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
            <span className="text-peach font-serif text-lg mb-2 block">Pain Point</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark">혹시 이런 경험 있으시죠?</h2>
        </div>
        
        <div className="grid md:grid-cols-1 gap-6">
           <div className="glass-card p-6 md:p-8 rounded-2xl flex items-start gap-4 transition-transform hover:-translate-y-1">
             <div className="bg-gray-100 p-3 rounded-full shrink-0 text-gray-500">
               <FileX size={24} />
             </div>
             <div>
               <h3 className="text-xl font-bold mb-2 text-dark">100페이지 넘는 사주 보고서...</h3>
               <p className="text-gray-600 leading-relaxed">받긴 했는데 어디부터 읽어야 할지 막막했던 적, 어려운 용어들만 가득해서 결국 3페이지만 보고 덮어버린 적 없으신가요?</p>
             </div>
           </div>

           <div className="glass-card p-6 md:p-8 rounded-2xl flex items-start gap-4 transition-transform hover:-translate-y-1">
             <div className="bg-gray-100 p-3 rounded-full shrink-0 text-gray-500">
               <HelpCircle size={24} />
             </div>
             <div>
               <h3 className="text-xl font-bold mb-2 text-dark">"그래서 나는 뭘 해야 하는데?"</h3>
               <p className="text-gray-600 leading-relaxed">내 성향 분석은 그럴듯한데, 당장 2026년에 내가 조심해야 할 것과 잡아야 할 기회가 무엇인지 명확한 답을 찾지 못했나요?</p>
             </div>
           </div>

           <div className="glass-card p-6 md:p-8 rounded-2xl flex items-start gap-4 transition-transform hover:-translate-y-1">
             <div className="bg-gray-100 p-3 rounded-full shrink-0 text-gray-500">
               <Brain size={24} />
             </div>
             <div>
               <h3 className="text-xl font-bold mb-2 text-dark">AI의 천편일률적인 답변</h3>
               <p className="text-gray-600 leading-relaxed">나만의 고유한 상황과 맥락을 이해하지 못한 채, 데이터가 뱉어낸 차가운 문장들 속에서 '나'를 찾지 못했나요?</p>
             </div>
           </div>
        </div>

        <div className="mt-16 text-center space-y-4">
            <p className="text-2xl font-serif text-dark font-medium">이제 그만하셔도 됩니다.</p>
            <p className="text-gray-600">당신에게 필요한 건 방대한 양이 아니라,<br/>2026년을 살아갈 <span className="text-mint-dark font-bold underline decoration-2 decoration-peach/50">당신만의 명확한 지도</span>니까요.</p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;