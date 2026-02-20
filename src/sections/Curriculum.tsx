import { motion } from 'framer-motion';

const phases = [
    {
        phase: 'Phase 1',
        title: 'Foundation',
        description: '파이썬 프로그래밍 & 데이터 분석 기초',
        icon: '📊'
    },
    {
        phase: 'Phase 2',
        title: 'Core Tech',
        description: '머신러닝/딥러닝 핵심 알고리즘 Intel MCP 콘텐츠 학습',
        icon: '⚙️'
    },
    {
        phase: 'Phase 3',
        title: 'Application',
        description: 'LLM 및 생성형 AI 모델링 AI API 연동 및 서비스 기획',
        icon: '📱'
    },
    {
        phase: 'Phase 4',
        title: 'Capstone',
        description: '실전 프로젝트 수행 최종 포트폴리오 완성',
        icon: '🏆'
    }
];

export default function Curriculum() {
    return (
        <section id="curriculum" className="section bg-bg-secondary/30">
            <div className="container">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        기초부터 상용화 레벨 프로젝트까지, <br />
                        6개월의 여정
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />

                    <div className="grid lg:grid-cols-4 gap-8 relative z-10">
                        {phases.map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="bg-bg-primary border border-white/10 p-8 rounded-3xl group-hover:border-neon/40 transition-all relative">
                                    <div className="text-4xl mb-6">{phase.icon}</div>
                                    <div className="text-neon font-bold text-sm mb-2 uppercase tracking-widest">{phase.phase}</div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed">
                                        {phase.description}
                                    </p>

                                    {/* Active Phase Indicator (Abstract) */}
                                    {i === 3 && (
                                        <div className="absolute -top-2 -right-2 bg-neon text-black text-[10px] font-black px-2 py-1 rounded-md shadow-[0_0_10px_rgba(200,255,0,0.5)]">
                                            Hired!
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
