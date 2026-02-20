import { motion } from 'framer-motion';
import { MessageSquare, Code, BarChart, Eye } from 'lucide-react';

const techStack = [
    {
        category: 'Generative AI & LLM',
        title: 'Modern Generative Tech',
        items: ['Large Language Model Application', 'Generative AI App Development Practice'],
        icon: <MessageSquare className="text-neon" size={24} />,
        color: 'bg-blue-500/10'
    },
    {
        category: 'Python & Low-Code',
        title: 'Efficiency with Vibe Coding',
        items: ['Python & Self-Directed Learning', 'Vibe Coding & API Integration'],
        icon: <Code className="text-neon" size={24} />,
        color: 'bg-green-500/10'
    },
    {
        category: 'Machine Learning & Big Data',
        title: 'Data Intelligence',
        items: ['Big Data Processing/Visualization', 'Statistical Modeling'],
        icon: <BarChart className="text-neon" size={24} />,
        color: 'bg-purple-500/10'
    },
    {
        category: 'Advanced Perception',
        title: 'Visual & Linguistic AI',
        items: ['Computer Vision', 'NLP (Natural Language Processing)'],
        icon: <Eye className="text-neon" size={24} />,
        color: 'bg-orange-500/10'
    }
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="section bg-bg-primary">
            <div className="container">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white"
                    >
                        Core Technology Stack <br />
                        Required by the Industry
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-3xl border border-white/5 bg-bg-secondary hover:border-white/20 transition-all flex flex-col md:flex-row gap-8 items-start`}
                        >
                            <div className={`p-4 rounded-2xl bg-white/5`}>
                                {tech.icon}
                            </div>
                            <div className="space-y-4">
                                <div className="text-neon font-bold text-xl">{tech.category}</div>
                                <div className="text-white text-lg font-medium">{tech.title}</div>
                                <ul className="space-y-2">
                                    {tech.items.map((item, idx) => (
                                        <li key={idx} className="text-white/40 text-sm flex items-center gap-2">
                                            <span className="w-1 h-1 bg-white/20 rounded-full" /> {item}
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
