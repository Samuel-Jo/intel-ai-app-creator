import { motion } from 'framer-motion';
import { Globe, GraduationCap, Cpu, ChevronRight } from 'lucide-react';


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
            {/* Subtle Gradient Spotlights */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-yellow/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 xl:gap-32 items-center">

                    {/* Left Header - Clean Eye Flow */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-accent-yellow text-xs font-bold tracking-[0.4em] uppercase"
                        >
                            Program Philosophy
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter"
                        >
                            코드를 넘어 <br />
                            <span className="text-gradient-yellow">제품을 만드는</span> <br />
                            경험을 선물합니다
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-xl"
                        >
                            우리는 단순한 코딩 교육을 하지 않습니다. 최신 AI 트렌드를 읽고, 인텔의 강력한 하드웨어 가속기로 최적화된 결과물을 세상에 내놓는 '크리에이터'를 양성합니다.
                        </motion.p>
                    </div>

                    {/* Right: Feature Cards - Layered Glass */}
                    <div className="flex flex-col gap-8">
                        {programs.map((program, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-premium p-10 flex gap-8 group cursor-default"
                                style={{ borderRadius: '40px' }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-accent-neon/10 group-hover:border-accent-neon/20 transition-all duration-500">
                                    {program.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white tracking-tight flex items-center justify-between">
                                        {program.title}
                                        <ChevronRight size={20} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-accent-cyan" />
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
