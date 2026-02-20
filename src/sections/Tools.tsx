import { motion } from 'framer-motion';
import { Zap, Cpu, Award } from 'lucide-react';

const tools = [
    {
        title: 'Efficiency with Low-Code & Vibe Coding',
        description: 'Maximize development productivity by introducing the latest trends like low-code and Vibe Coding.',
        icon: <Zap className="text-neon" />
    },
    {
        title: 'API Integration Mastery',
        description: 'Design service structures that real users can use through external API integration beyond simple modeling.',
        icon: <Cpu className="text-neon" />
    },
    {
        title: 'Intel MCP Certification Content',
        description: 'Learn global standard technology with content based on Intel\'s Machine Learning Professional (MCP) certification.',
        icon: <Award className="text-neon" />
    }
];

export default function Tools() {
    return (
        <section className="section bg-bg-primary overflow-hidden">
            <div className="container">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white"
                    >
                        Leading Tools and <br />
                        Practical Environments
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="space-y-6"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                                {tool.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white leading-tight">{tool.title}</h3>
                            <div className="w-12 h-px bg-neon/30" />
                            <p className="text-white/40 text-sm leading-relaxed">
                                {tool.description}
                            </p>

                            {/* Abstract Graphics */}
                            <div className="pt-8 opacity-20 group-hover:opacity-100 transition-opacity">
                                {i === 0 && <div className="flex gap-2"><div className="w-8 h-8 rounded bg-neon"></div><div className="w-8 h-8 rounded bg-white/40"></div><div className="w-8 h-8 rounded bg-white/20"></div></div>}
                                {i === 1 && <div className="w-24 h-12 border border-dashed border-white/40 rounded-full"></div>}
                                {i === 2 && <div className="w-16 h-16 border-4 border-neon rounded-full border-t-transparent animate-spin"></div>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
