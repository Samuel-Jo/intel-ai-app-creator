import { motion } from 'framer-motion';
import { BookOpen, Rocket } from 'lucide-react';

export default function Philosophy() {
    return (
        <section className="section overflow-hidden">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white"
                    >
                        "Knowing Code" vs "Making Products"
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden">
                    {/* Theory Centric */}
                    <div className="bg-bg-primary p-12 flex flex-col items-center text-center">
                        <div className="mb-8 p-6 bg-white/5 rounded-full text-white/20">
                            <BookOpen size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white/40 mb-6 uppercase tracking-tighter">Theory Centric Education</h3>
                        <ul className="space-y-4 text-white/40 mb-12">
                            <li>• Focus on memorizing syntax</li>
                            <li>• Simple one-off exercises</li>
                        </ul>
                        <div className="mt-auto py-3 px-10 bg-white/5 rounded-full text-white/40 font-bold border border-white/5">
                            Difficult to Apply in Real World
                        </div>
                    </div>

                    {/* Product Centric */}
                    <div className="bg-bg-secondary p-12 flex flex-col items-center text-center relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon/10 rounded-full blur-[100px]" />

                        <div className="mb-8 p-6 bg-neon/10 rounded-full text-neon relative z-10">
                            <Rocket size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-neon mb-6 uppercase tracking-tighter relative z-10">Output Centric Education</h3>
                        <ul className="space-y-4 text-white/70 mb-12 relative z-10">
                            <li>• Planning and Developing Real Services</li>
                            <li>• Application Projects based on Intel MCP</li>
                        </ul>
                        <div className="mt-auto py-3 px-10 bg-neon text-black rounded-full font-bold relative z-10 shadow-[0_0_30px_rgba(200,255,0,0.4)]">
                            Immediate Job-Ready Capabilities
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
