import { Review, FaqItem, Package } from './types';
import React from 'react';

export const REVIEWS: Review[] = [
  {
    id: 1,
    text: "100페이지짜리 봤는데 결국 모르겠더라고요. 희구소는 딱 필요한 것만 콕콕 찝어주셔서 바로 다이어리에 메모했어요.",
    author: "30대 여성",
    role: "사업가"
  },
  {
    id: 2,
    text: "보고서 받고 궁금한 거 물어봤는데 10분이 20분처럼 느껴졌어요. 진심으로 제 이야기 들어주시는 게 느껴졌습니다.",
    author: "40대 남성",
    role: "직장인"
  },
  {
    id: 3,
    text: "AI 보고서랑은 차원이 다릅니다. 제 상황을 정확히 아시는 것처럼 딱 필요한 조언만 주셨어요.",
    author: "20대 여성",
    role: "프리랜서"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "사주를 잘 모르는데 이해할 수 있을까요?",
    answer: "전문 용어는 최소화하고, 당신의 삶에 바로 적용 가능한 언어로 작성됩니다. 이해 안 되는 부분은 카톡 상담으로 바로 물어보세요."
  },
  {
    question: "보고서로 충분할까요?",
    answer: "보고서가 이미 핵심을 담고 있어서, 대부분의 궁금증이 해소됩니다. 더 필요하시면 프리미엄 패키지를 추천드려요."
  },
  {
    question: "언제 받을 수 있나요?",
    answer: "결제 후 48시간 이내 발송됩니다."
  },
  {
    question: "환불이 가능한가요?",
    answer: "보고서 발송 전까지는 100% 환불 가능합니다. 발송 후에는 디지털 상품 특성상 어렵습니다."
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'basic',
    name: '기본 패키지',
    price: '₩29,000',
    deliveryTime: '48시간 이내 발송',
    isRecommended: false,
    features: [
      { text: '2026년 맞춤 사주 보고서 (PDF)' },
      { text: '디지털 부적 카드' },
      { text: '월별 타이밍 체크리스트' }
    ]
  },
  {
    id: 'premium',
    name: '프리미엄 패키지',
    price: '₩49,000',
    deliveryTime: '24시간 이내 우선 발송',
    isRecommended: true,
    features: [
      { text: '기본 패키지 모든 혜택' },
      { text: '20분 심층 카톡 상담', highlight: true },
      { text: '중요 의사결정 시 추가 상담 1회', highlight: true }
    ]
  }
];