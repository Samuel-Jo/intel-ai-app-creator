import { motion } from 'framer-motion';
import { Globe, GraduationCap, Cpu } from 'lucide-react';

const programs = [
    {
        icon: <Globe className="text-accent-neon" size={32} />,
        title: 'Global Tech Stack',
        description: '글로벌 IT 리더 인텔(Intel)의 공인 커리큘럼과 핵심 기술 스택을 직접 경험하며 세계적인 수준의 개발 역량을 쌓습니다.'
    },
    {
        icon: <GraduationCap className="text-accent-neon" size={32} />,
        title: 'Practical Project',
        description: '단순 이론을 넘어 실무에서 즉시 활용 가능한 프로젝트 중심의 교육으로, 기업이 탐내는 실전형 인재로 성장합니다.'
    },
    {
        icon: <Cpu className="text-accent-neon" size={32} />,
        title: 'Intel Official MCP',
        description: '인텔 공식 머신러닝 자격증(MCP) 취득을 위한 심화 학습과 글로벌 인증 프로세스를 지원받습니다.'
    }
];

export default function ProgramOverview() {
    return (
        <section id="program" className="section-padding bg-bg-secondary relative">
            <div className="container relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-accent-neon text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        Program Overview
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white leading-tight"
                    >
                        단순한 교육을 넘어 <br />
                        <span className="text-gradient-neon">커리어의 압도적 도약</span>을 시작하세요
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {programs.map((program, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-12 flex flex-col items-center text-center transition-all duration-500 hover:bg-white/[0.05]"
                            style={{
                                borderColor: 'rgba(255, 255, 255, 0.05)',
                                backgroundColor: 'rgba(255, 255, 255, 0.03)'
                            }}
                        >
                            <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                                {program.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 font-heading tracking-tight">{program.title}</h3>
                            <p className="text-text-secondary text-base leading-relaxed">
                                {program.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
