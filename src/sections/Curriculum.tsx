import { motion } from 'framer-motion';
import { Target, Cpu, Activity, Award } from 'lucide-react';

const phases = [
    {
        phase: 'Phase 01',
        title: 'Foundation',
        description: '파이썬 핵심 문법 및 데이터 분석 라이브러리(Pandas, Numpy)를 통한 데이터 처리 기초 확립',
        icon: <Target className="text-accent-neon" size={32} />,
        time: 'Month 1'
    },
    {
        phase: 'Phase 02',
        title: 'Core Tech',
        description: '머신러닝/딥러닝 핵심 알고리즘 이해 및 Intel OpenVINO를 활용한 추론 최적화 실습',
        icon: <Cpu className="text-accent-neon" size={32} />,
        time: 'Month 2-3'
    },
    {
        phase: 'Phase 03',
        title: 'AI Dev',
        description: 'LLM 및 멀티모달 AI 연동, API 기반 마이크로서비스 아키텍처 구축 및 프롬프트 엔지니어링',
        icon: <Activity className="text-accent-neon" size={32} />,
        time: 'Month 4-5'
    },
    {
        phase: 'Phase 04',
        title: 'Capstone',
        description: '기업 연계 실전 프로젝트 수행 및 결과물 상용화 배포, 최종 취업 포트폴리오 완성',
        icon: <Award className="text-accent-neon" size={32} />,
        time: 'Month 6'
    }
];

export default function Curriculum() {
    return (
        <section id="curriculum" className="section-padding bg-bg-secondary relative">
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-accent-neon text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        Success Roadmap
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white leading-tight"
                    >
                        기초부터 상용 프로젝트까지 <br />
                        <span className="text-gradient-neon">단계별 완성 커리큘럼</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Horizontal Connector Line for Desktop */}
                    <div className="hidden lg:block absolute z-0"
                        style={{
                            top: '100px',
                            left: '10%',
                            right: '10%',
                            height: '1px',
                            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)'
                        }} />

                    <div className="grid lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
                        {phases.map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="group"
                            >
                                <div className="flex flex-col items-center">
                                    {/* Timeline Node */}
                                    <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center mb-8 relative transition-all duration-500"
                                        style={{
                                            borderColor: 'rgba(255,255,255,0.1)',
                                        }}>
                                        {phase.icon}
                                        <div className="absolute px-2 py-0.5 rounded-md bg-accent-neon text-black text-[10px] font-bold tracking-tighter"
                                            style={{ top: '-12px', right: '-12px' }}>
                                            {phase.time}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="glass p-8 text-center min-h-[280px] flex flex-col items-center transition-all duration-500 hover:bg-white/[0.05]"
                                        style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                                        <div className="text-accent-neon font-bold text-xs tracking-widest uppercase mb-4 font-heading">{phase.phase}</div>
                                        <h3 className="text-2xl font-bold text-white mb-6 font-heading">{phase.title}</h3>
                                        <div className="h-px bg-accent-neon"
                                            style={{ width: '3rem', marginBottom: '1.5rem', opacity: 0.3, transition: 'width 0.5s' }} />
                                        <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                                            {phase.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
