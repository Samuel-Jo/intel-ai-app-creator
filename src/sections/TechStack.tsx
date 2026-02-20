import { motion } from 'framer-motion';
import { MessageSquare, Code, BarChart, Eye } from 'lucide-react';

const techStack = [
    {
        category: 'Generative AI & LLM',
        title: '현대적인 생성형 기술',
        items: ['대규모 언어 모델(LLM) 기반 서비스 기획', '멀티모달 AI 연동 및 프롬프트 엔지니어링 실습'],
        icon: <MessageSquare className="text-accent-neon" size={28} />
    },
    {
        category: 'Python & Vibe Coding',
        title: '자율학습과 생산성 극대화',
        items: ['Vibe Coding을 활용한 쾌속 프로토타이핑', '파이썬 기반 자율적 앱 로직 구현 및 최적화'],
        icon: <Code className="text-accent-neon" size={28} />
    },
    {
        category: 'ML & Big Data',
        title: '데이터 기반 인텔리전스',
        items: ['실시간 데이터 스트리밍 및 수집 파이프라인', '특화 데이터셋 구축을 위한 전처리 및 통계 모델링'],
        icon: <BarChart className="text-accent-neon" size={28} />
    },
    {
        category: 'Advanced Perception',
        title: '시각 및 인지 AI',
        items: ['컴퓨터 비전을 활용한 객체 인식 및 세그먼테이션', 'Intel OpenVINO 기반 텍스트 분석 및 인지 기능 구현'],
        icon: <Eye className="text-accent-neon" size={28} />
    }
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="section-padding bg-bg-primary relative">
            <div className="container relative z-10">
                <div className="max-w-3xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-accent-neon text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        Core Technologies
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white leading-tight"
                    >
                        현업에서 선호하는 <br />
                        <span className="text-gradient-neon">핵심 AI 기술 생태계</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-10 flex flex-col lg:flex-row gap-8 items-start group transition-all duration-500"
                            whileHover={{ borderColor: 'rgba(212, 255, 0, 0.3)', transform: 'translateY(-4px)' }}
                            style={{ boxShadow: '0 0 30px rgba(212, 255, 0, 0.05)' }}
                        >
                            <div className="p-6 rounded-2xl bg-white/5 transition-colors duration-500"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                                {tech.icon}
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-accent-neon font-bold text-sm tracking-widest uppercase mb-2 font-heading">{tech.category}</div>
                                    <div className="text-white text-2xl font-bold font-heading">{tech.title}</div>
                                </div>
                                <div className="h-px w-full bg-white/10" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                                <ul className="space-y-4">
                                    {tech.items.map((item, idx) => (
                                        <li key={idx} className="text-text-secondary text-sm md:text-base flex items-start gap-3">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-accent-neon/50 rounded-full shrink-0"
                                                style={{ backgroundColor: 'rgba(212, 255, 0, 0.5)' }} />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
