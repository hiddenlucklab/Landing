import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-12 text-dark">자주 묻는 질문</h2>
      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="glass-card rounded-xl overflow-hidden transition-all duration-300"
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-bold text-dark text-lg flex gap-3">
                   <span className="text-mint-dark">Q.</span> {faq.question}
                </span>
                <span className={`text-mint-dark transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                 <p className="text-gray-600 bg-beige-50 p-4 rounded-lg text-sm md:text-base leading-relaxed">
                   <span className="font-bold text-peach mr-2">A.</span>
                   {faq.answer}
                 </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;