import { motion } from 'framer-motion';
import { Globe, GraduationCap, Cpu } from 'lucide-react';

const programs = [
    {
        icon: <Globe className="text-neon" size={32} />,
        title: 'Global Tech Stack',
        description: 'Experience the technology and curriculum of global leader Intel firsthand.'
    },
    {
        icon: <Cpu className="text-neon" size={32} />,
        title: 'Zero Cost, High ROI',
        description: 'Full tuition support through Ministry of Labor K-Digital Training.'
    },
    {
        icon: <GraduationCap className="text-neon" size={32} />,
        title: 'Project-Based Learning',
        description: 'Not just simple coding, but building a portfolio of real-working AI applications.'
    }
];

export default function ProgramOverview() {
    return (
        <section id="program" className="section bg-bg-primary">
            <div className="container">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Developing Real AI Developers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/60"
                    >
                        Go beyond theoretical learning to create real 'services'.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {programs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-bg-secondary border border-white/10 p-8 rounded-3xl hover:border-neon/40 transition-colors group"
                        >
                            <div className="mb-6 w-16 h-16 bg-neon/5 rounded-2xl flex items-center justify-center group-hover:bg-neon/10 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
