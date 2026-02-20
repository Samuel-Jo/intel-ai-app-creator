import { motion } from 'framer-motion';
import { Globe, GraduationCap, Cpu, ArrowRight } from 'lucide-react';

const programs = [
    {
        icon: <Globe className="text-accent-neon" size={40} />,
        title: 'Global Ecosystem',
        description: '인텔(Intel) 글로벌 본사의 기술 생태계와 공인 커리큘럼을 기반으로, 세계 어디서나 통용되는 AI 기술 역량을 확보합니다.'
    },
    {
        icon: <GraduationCap className="text-accent-neon" size={40} />,
        title: 'Actionable Skills',
        description: '단순 이론 암기가 아닌, 실제 엔드투엔드 프로덕트를 직접 기획하고 배포하며 기업에서 즉시 활용 가능한 실전 감각을 익힙니다.'
    },
    {
        icon: <Cpu className="text-accent-neon" size={40} />,
        title: 'Intel Official MCP',
        description: '글로벌 인텔 머신러닝 자격증(MCP) 취득 프로세스를 지원하며, 실무 능력에 공신력을 더하는 공식 인증을 획득합니다.'
    }
];

export default function ProgramOverview() {
    return (
        <section id="program" className="section-padding bg-bg-secondary relative overflow-hidden">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(var(--text-muted) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-20">

                    {/* Persistent Left Header */}
                    <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-accent-neon text-xs font-bold tracking-[0.3em] uppercase mb-8"
                        >
                            Program Philosophy
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-12 tracking-tighter"
                        >
                            코드를 넘어 <br />
                            <span className="text-gradient-neon">제품을 만드는</span> <br />
                            경험을 선물합니다
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-text-secondary leading-relaxed max-w-lg"
                        >
                            우리는 단순한 코딩 교육을 하지 않습니다. 최신 AI 트렌드를 읽고, 인텔의 강력한 하드웨어 가속기로 최적화된 결과물을 세상에 내놓는 '크리에이터'를 양성합니다.
                        </motion.p>
                    </div>

                    {/* Right: Feature Cards Grid */}
                    <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-10">
                        {programs.map((program, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-premium p-10 flex flex-col md:flex-row gap-10 group cursor-default transition-all duration-500 hover:border-accent-neon/20"
                                style={{ borderRadius: '32px' }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-accent-neon/10"
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                                    {program.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                                        {program.title}
                                        <ArrowRight size={18} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-neon" />
                                    </h3>
                                    <p className="text-text-secondary text-lg leading-relaxed">
                                        {program.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
