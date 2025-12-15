import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white/80 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-serif text-white">희구소 : Hidden Luck Lab</h2>
          <p className="text-sm font-light text-gray-400">
            당신의 2026년, 우리가 함께 찾아드립니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-400">
          <a href="mailto:hiddenlucklab@google.com" className="flex items-center gap-2 hover:text-mint transition">
            <Mail size={16} /> hiddenlucklab@google.com
          </a>
          <span className="hidden md:inline">|</span>
          <a href="https://open.kakao.com/me/hiddenlucklab" className="hover:text-yellow-400 transition">
             카카오톡 상담 바로가기
          </a>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs text-gray-600">
          &copy; 2025 Hidden Luck Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;