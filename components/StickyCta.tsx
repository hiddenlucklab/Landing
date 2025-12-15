import React, { useEffect, useState } from 'react';

const StickyCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full p-4 z-50 transition-transform duration-300 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="max-w-5xl mx-auto flex gap-3 md:justify-end">
        <a 
          href="#packages" 
          className="flex-1 md:flex-none md:w-64 bg-dark text-white text-center py-4 rounded-xl font-bold shadow-2xl flex flex-col justify-center items-center hover:bg-black transition-colors"
        >
          <span className="text-sm font-light text-gray-300">내 운세가 궁금하다면?</span>
          <span className="text-lg">지금 바로 확인하기</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCta;