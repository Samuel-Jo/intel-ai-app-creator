import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Monitor } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden mesh-bg">
            {/* Massive Ambient Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/10 rounded-full blur-[160px] -mr-40 -mt-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[140px] -ml-40 -mb-40 pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

                    {/* Left: Content Area */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-layer-2 border-white/10 whitespace-nowrap"
                        >
                            <Sparkles size={16} className="text-accent-cyan animate-pulse" />
                            <span className="text-xs font-bold tracking-[0.25em] text-white/80 uppercase">
                                Intel x RAPA x KDT Official Program
                            </span>
                        </motion.div>

                        <div className="space-y-10 w-full">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tighter"
                                style={{ wordBreak: 'keep-all' }}
                            >
                                미래를 만드는 <br />
                                <span className="text-gradient-neon">AI 크리에이터</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed mx-auto lg:mx-0"
                            >
                                글로벌 리더 인텔의 핵심 기술 스택으로 완성하는 <br className="hidden md:block" />
                                실무 중심 AI 개발자 양성 과정. 교육비 전액 국비 지원.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-6"
                        >
                            <button className="btn-premium btn-primary shadow-glow">
                                지금 바로 지원하기 <ArrowRight size={22} />
                            </button>
                            <button className="btn-premium glass-premium text-white hover:bg-white/5">
                                커리큘럼 살펴보기
                            </button>
                        </motion.div>

                        {/* Stats - Luxury Grid */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-3 gap-12 pt-12 border-t border-white/5 w-full max-w-2xl"
                        >
                            {[
                                { label: '지원 혜택', val: '100% 국비' },
                                { label: '기점', val: '누적 8기' },
                                { label: '커리큘럼', val: '실무 중심' }
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-[10px] text-text-muted font-black uppercase tracking-[0.3em] mb-2">{stat.label}</div>
                                    <div className="text-2xl font-black text-white">{stat.val}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Futuristic UI Dashboard */}
                    <div className="hidden lg:block relative">
                        {/* Orbiting Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-white/[0.03] rounded-full scale-110 pointer-events-none"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="glass-premium p-10 aspect-square flex flex-col justify-between relative overflow-hidden"
                            style={{ borderRadius: '48px' }}
                        >
                            {/* Inner Glows */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-neon/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-blue/20 rounded-full blur-3xl" />

                            <div className="relative z-10 space-y-10">
                                <div className="flex justify-between items-start">
                                    <div className="w-20 h-20 rounded-3xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl">
                                        <Monitor className="text-accent-cyan" size={40} />
                                    </div>
                                    <div className="text-right font-mono text-[10px] text-white/40 space-y-1">
                                        <div>SYSTEM_READY: OK</div>
                                        <div>LATENCY: 12ms</div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-4xl md:text-5xl font-black text-white leading-tight font-heading tracking-tighter">
                                        Generative AI <br />
                                        <span className="text-accent-cyan">System Dev</span>
                                    </h3>
                                    <div className="h-1.5 w-32 bg-gradient-to-r from-accent-neon to-accent-blue rounded-full" />
                                </div>
                            </div>

                            <div className="space-y-8 relative z-10">
                                {/* Simulated Data Stream */}
                                <div className="p-8 rounded-3xl bg-black/40 border border-white/10 space-y-6">
                                    <div className="flex justify-between items-center text-[10px] text-text-muted font-black uppercase tracking-[0.3em]">
                                        <span>Inference Engine</span>
                                        <span className="text-accent-cyan animate-pulse">Running</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                animate={{ width: ["15%", "95%", "15%"] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                className="h-full bg-gradient-to-r from-accent-neon to-accent-blue shadow-[0_0_20px_var(--accent-neon-rgba)]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-between font-mono text-[10px] text-white/30">
                                        <span>INTEL_OPENVINO_2026</span>
                                        <span className="text-accent-cyan">ACTIVE</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Floating Nodes */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 glass p-4 rounded-2xl border border-white/10 shadow-glow"
                        >
                            <Sparkles className="text-accent-neon" size={24} />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
