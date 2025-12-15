import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-mint/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-peach/20 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        <div className="inline-block px-4 py-1 rounded-full border border-dark/20 bg-white/40 backdrop-blur-sm mb-4">
          <span className="text-sm font-serif tracking-widest text-dark/70">희구소 : Hidden Luck Lab</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-dark leading-tight md:leading-snug break-keep text-balance">
          당신의 2026년,<br />
          <span className="bg-gradient-to-r from-mint-dark to-teal-600 bg-clip-text text-transparent">100페이지</span>가 아닌<br />
          단 <span className="text-peach underline decoration-peach/30 underline-offset-4">한 문장</span>으로 충분합니다.
        </h1>

        <p className="text-lg md:text-xl text-dark-soft font-light leading-relaxed mt-6 max-w-2xl mx-auto">
          "그 많은 페이지 속에서<br className="md:hidden"/> 당신이 진짜 원하는 답을 찾으셨나요?"
        </p>

        {/* Visual Metaphor */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center opacity-50 grayscale transition-all duration-500 hover:grayscale-0">
            <img 
              src="https://picsum.photos/300/400?grayscale" 
              alt="두꺼운 보고서 더미" 
              className="w-40 h-52 object-cover rounded-lg shadow-inner rotate-[-5deg]"
            />
            <span className="mt-4 text-sm text-gray-500 font-sans">100페이지의 혼란</span>
          </div>
          <div className="hidden md:block text-2xl text-gray-300">→</div>
          <div className="flex flex-col items-center transform md:scale-110">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-mint to-peach rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://picsum.photos/300/400" 
                  alt="명확한 희구소 보고서" 
                  className="relative w-40 h-52 object-cover rounded-xl shadow-2xl rotate-[3deg] ring-1 ring-white/50"
                />
                {/* 3D Floating Element Badge */}
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur border border-white p-2 rounded-full shadow-lg">
                   <span className="text-2xl">✨</span>
                </div>
             </div>
            <span className="mt-6 text-base font-bold text-dark font-serif">명확한 하나의 지도</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-gray-400">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;