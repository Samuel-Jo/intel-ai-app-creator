import { motion } from 'framer-motion';
import { Zap, Cpu, Award, ChevronRight } from 'lucide-react';

const tools = [
    {
        title: 'Low-Code & Vibe Coding',
        description: '최신 개발 트렌드인 로우코드와 바이브코딩을 도입하여, 복잡한 문법보다 아이디어 구현에 집중하고 개발 생산성을 5배 이상 극대화합니다.',
        icon: <Zap className="text-accent-neon" size={24} />,
        accent: { backgroundColor: 'rgba(212, 255, 0, 0.1)' }
    },
    {
        title: 'API Integration Mastery',
        description: '단순 모델 학습을 넘어 다양한 AI API(OpenAI, Anthropic 등)와 인텔 기술을 통합하여 실제 유저가 즉시 사용 가능한 엔드투엔드 서비스 구조를 완성합니다.',
        icon: <Cpu className="text-accent-neon" size={24} />,
        accent: { backgroundColor: 'rgba(212, 255, 0, 0.1)' }
    },
    {
        title: 'Intel Official Content',
        description: '글로벌 인텔 본사의 머신러닝 전문 인증(MCP) 기반 콘텐츠를 활용하여, 세계 시장에서도 인정받는 글로벌 스탠다드 AI 기술 역량을 확보합니다.',
        icon: <Award className="text-accent-neon" size={24} />,
        accent: { backgroundColor: 'rgba(212, 255, 0, 0.1)' }
    }
];

export default function Tools() {
    return (
        <section className="section-padding bg-bg-primary overflow-hidden relative">
            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-accent-neon text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        Developer Environment
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white leading-tight"
                    >
                        트렌드를 리드하는 <br />
                        <span className="text-gradient-neon">실습 환경과 개발 도구</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-10 flex flex-col group transition-all duration-500"
                            whileHover={{ borderColor: 'rgba(212, 255, 0, 0.3)', transform: 'translateY(-4px)' }}
                        >
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-transform duration-500 group-hover:scale-110"
                                style={{ ...tool.accent, borderColor: 'rgba(255,255,255,0.05)' }}>
                                {tool.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-6 font-heading tracking-tight leading-snug">
                                {tool.title}
                            </h3>

                            <div className="h-px w-full mb-8"
                                style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.1), transparent)' }} />

                            <p className="text-text-secondary text-base leading-relaxed mb-8 flex-grow">
                                {tool.description}
                            </p>

                            <div className="flex items-center gap-2 text-accent-neon text-sm font-bold tracking-tight cursor-pointer">
                                Learn More <ChevronRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
