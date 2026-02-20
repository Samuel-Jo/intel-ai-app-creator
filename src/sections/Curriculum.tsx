import { motion } from 'framer-motion';

const phases = [
    {
        phase: 'Phase 1',
        title: 'Foundation',
        description: 'Python Programming & Data Analysis Basics',
        icon: '📊'
    },
    {
        phase: 'Phase 2',
        title: 'Core Tech',
        description: 'Machine Learning/Deep Learning Core Algorithms & Intel MCP Content',
        icon: '⚙️'
    },
    {
        phase: 'Phase 3',
        title: 'Application',
        description: 'LLM & Generative AI Modeling, AI API Integration & Service Planning',
        icon: '📱'
    },
    {
        phase: 'Phase 4',
        title: 'Capstone',
        description: 'Real-world Project Implementation & Final Portfolio Completion',
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
                        A 6-Month Journey from Basics <br />
                        to Commercial-Level Projects
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
