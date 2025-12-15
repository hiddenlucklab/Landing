import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import UspSection from './components/UspSection';
import Packages from './components/Packages';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';

const App: React.FC = () => {
  return (
    <main className="min-h-screen relative bg-beige-100 overflow-x-hidden">
      <Hero />
      <PainPoints />
      
      {/* Visual Break / Transition */}
      <div className="h-24 bg-gradient-to-b from-white/50 to-beige-100"></div>
      
      <UspSection />
      
      {/* Report Structure Teaser (Simple) */}
      <section className="py-20 px-6 bg-white/40">
        <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-mint-dark font-bold tracking-widest text-sm mb-4">REPORT STRUCTURE</h3>
            <h2 className="text-3xl font-serif font-bold mb-12">희구소 보고서 구성</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {['나의 타고난 에너지', '2026년 핵심 운세', '월별 타이밍 가이드', '프리미엄 전략', '실속 개운법'].map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-beige-200 flex flex-col items-center justify-center aspect-square md:aspect-auto md:h-32">
                        <div className="text-2xl font-serif text-gold mb-2">{i + 1}</div>
                        <div className="text-sm font-bold word-break break-keep">{item}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <Packages />
      <Reviews />
      <Faq />
      
      <div className="py-24 px-6 text-center bg-gradient-to-t from-mint/20 to-beige-100">
         <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark mb-6 leading-tight">
            2026년, 당신의 숨은 행운을<br/>찾아드립니다.
         </h2>
         <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            100페이지를 읽으며 길을 헤매는 대신,<br/>
            당신만의 명확한 한 걸음을 내딛으세요.
         </p>
         <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gold blur opacity-40 animate-pulse rounded-xl"></div>
            <a href="#packages" className="relative bg-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-black transition">
                지금 바로 시작하기
            </a>
         </div>
      </div>

      <Footer />
      <StickyCta />
    </main>
  );
};

export default App;