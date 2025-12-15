import React from 'react';
import { PACKAGES } from '../constants';
import { Check, Star } from 'lucide-react';

const Packages: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-beige-50" id="packages">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">희구소 패키지 구성</h2>
           <p className="text-gray-600">당신의 2026년을 위한 최고의 투자를 선택하세요.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col ${
                pkg.isRecommended 
                  ? 'bg-white border-2 border-gold shadow-xl scale-105 z-10' 
                  : 'bg-white/60 border border-white shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.isRecommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-4 py-1 rounded-full text-sm font-bold shadow-md flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> 추천
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className={`text-xl font-bold mb-2 ${pkg.isRecommended ? 'text-gold-matte' : 'text-gray-600'}`}>
                  {pkg.name}
                </h3>
                <div className="text-4xl font-serif font-bold text-dark">{pkg.price}</div>
                <p className="text-xs text-gray-400 mt-2">{pkg.deliveryTime}</p>
              </div>

              <div className="space-y-4 flex-1">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${feature.highlight ? 'bg-peach/20 text-peach' : 'bg-mint/20 text-mint-dark'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={`text-sm md:text-base ${feature.highlight ? 'font-bold text-dark underline decoration-peach/30 decoration-2' : 'text-gray-600'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                  pkg.isRecommended 
                    ? 'bg-gradient-to-r from-gold to-yellow-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                  {pkg.name} 신청하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;