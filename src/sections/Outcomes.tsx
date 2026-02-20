import { motion } from 'framer-motion';
import { Rocket, Trophy } from 'lucide-react';

export default function Outcomes() {
    return (
        <section id="outcomes" className="section bg-bg-secondary relative">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Your Resume is Proven by <br />
                        <span className="text-neon">'Project Outcomes'</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Dashboard Mockup Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-black/40 border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden aspect-video">
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-950 rounded-2xl flex items-center justify-center">
                                <div className="text-white/10 text-xl font-bold">[Dashboard & Mobile Mockup]</div>
                            </div>
                        </div>
                        {/* Hovering stats */}
                        <div className="absolute -bottom-6 -right-6 bg-neon text-black p-6 rounded-2xl font-bold shadow-xl">
                            <div className="text-3xl">74%</div>
                            <div className="text-[10px] uppercase">Hiring Success</div>
                        </div>
                    </motion.div>

                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="p-4 bg-neon/10 rounded-2xl h-fit">
                                <Rocket className="text-neon" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">Deployment-Ready Output</h3>
                                <p className="text-white/40 leading-relaxed">
                                    Complete a portfolio that becomes a powerful tool in job applications by securing results at the level of real services.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="p-4 bg-accent-blue/10 rounded-2xl h-fit">
                                <Trophy className="text-accent-blue" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">Global Opportunity</h3>
                                <p className="text-white/40 leading-relaxed">
                                    Support your challenge to a wider stage by linking excellent participants with opportunities to join the Global AI Hackathon.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
