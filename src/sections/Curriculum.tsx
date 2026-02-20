import { motion } from 'framer-motion';
import { Target, Cpu, Activity, Award } from 'lucide-react';

const phases = [
    {
        phase: 'Phase 1',
        title: 'Foundation',
        description: 'Python 프로그래밍 & 데이터 분석 기초',
        icon: <Target className="text-blue-400" size={24} />,
        isActive: false
    },
    {
        phase: 'Phase 2',
        title: 'Core Tech',
        description: '머신러닝/딥러닝 핵심 알고리즘, Intel MCP 콘텐츠 학습',
        icon: <Cpu className="text-blue-400" size={24} />,
        isActive: false
    },
    {
        phase: 'Phase 3',
        title: 'Application',
        description: 'LLM 및 생성형 AI 모델링, AI API 연동 및 서비스 기획',
        icon: <Activity className="text-blue-400" size={24} />,
        isActive: true
    },
    {
        phase: 'Phase 4',
        title: 'Capstone',
        description: '실전 프로젝트 수행 및 최종 포트폴리오 완성',
        icon: <Award className="text-blue-400" size={24} />,
        isActive: false
    }
];

export default function Curriculum() {
    return (
        <section id="curriculum" className="section-padding bg-[#0f172a] relative">
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        6개월의 마스터플랜
                    </motion.h2>
                    <p className="text-gray-400 text-lg font-medium">기초부터 상용화 레벨 프로젝트까지, 체계적인 여정을 안내합니다.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {phases.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-[32px] border transition-all duration-500 flex flex-col justify-between gap-10 min-h-[320px] ${phase.isActive
                                ? 'bg-[#1e293b] border-blue-500/50 shadow-2xl shadow-blue-500/20'
                                : 'bg-white/5 border-white/5 hover:bg-white/10'
                                }`}
                        >
                            <div className="space-y-6">
                                <div className="text-blue-400 font-bold text-sm tracking-tight">{phase.phase}</div>
                                <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                    {phase.description}
                                </p>
                            </div>
                            <div className="flex justify-end">
                                {phase.isActive && <Activity className="text-blue-500 opacity-50" size={24} />}
                                {!phase.isActive && <div className="w-6 h-6" />}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
