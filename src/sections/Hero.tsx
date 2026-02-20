import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Monitor } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden mesh-bg">
            {/* Massive Ambient Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-yellow/10 rounded-full blur-[160px] -mr-40 -mt-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[140px] -ml-40 -mb-40 pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-center">

                    {/* Left: Content Area */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-layer-2 border-white/10 whitespace-nowrap"
                            style={{ boxShadow: '0 0 20px rgba(250, 204, 21, 0.1)' }}
                        >
                            <Sparkles size={16} className="text-accent-yellow animate-pulse" />
                            <span className="text-xs font-bold tracking-[0.25em] text-white/80 uppercase">
                                Intel x RAPA x KDT Official Program
                            </span>
                        </motion.div>

                        <div className="space-y-8 w-full">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tighter"
                                style={{ wordBreak: 'keep-all' }}
                            >
                                미래를 만드는 <br />
                                <span className="text-gradient-yellow">AI 크리에이터</span>
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
                            <button className="btn-premium btn-primary shadow-glow transition-all hover:scale-105" style={{ background: 'var(--accent-yellow)', color: 'black', boxShadow: '0 0 30px rgba(250, 204, 21, 0.3)' }}>
                                지금 바로 지원하기 <ArrowRight size={22} />
                            </button>
                            <button className="btn-premium glass-premium text-white hover:bg-white/5 border-white/10">
                                커리큘럼 살펴보기
                            </button>
                        </motion.div>

                        {/* Stats - Luxury Grid */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10 w-full max-w-xl"
                        >
                            {[
                                { label: '지원 혜택', val: '100% 국비', color: 'text-accent-yellow' },
                                { label: '기점', val: '누적 8기', color: 'text-accent-blue' },
                                { label: '커리큘럼', val: '실무 중심', color: 'text-text-primary' }
                            ].map((stat) => (
                                <div key={stat.label} className="space-y-1">
                                    <div className="text-[10px] text-text-muted font-black uppercase tracking-[0.2em]">{stat.label}</div>
                                    <div className={`text-xl md:text-2xl font-black ${stat.color}`}>{stat.val}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Futuristic UI Dashboard */}
                    <div className="hidden lg:block lg:col-span-5 relative">
                        {/* Orbiting Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-white/[0.05] rounded-full scale-125 pointer-events-none"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="glass-premium p-8 aspect-[4/5] flex flex-col justify-between relative overflow-hidden"
                            style={{ borderRadius: '40px', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                        >
                            {/* Inner Glows */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-yellow/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-blue/10 rounded-full blur-3xl" />

                            <div className="relative z-10 space-y-8">
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl">
                                        <Monitor className="text-accent-yellow" size={32} />
                                    </div>
                                    <div className="text-right font-mono text-[9px] text-white/40 space-y-1 leading-none">
                                        <div>SYSTEM_READY: OK</div>
                                        <div>LATENCY: 12ms</div>
                                        <div>CORE_TEMP: 42°C</div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight font-heading tracking-tighter">
                                        Generative AI <br />
                                        <span className="text-accent-yellow">System Dev</span>
                                    </h3>
                                    <div className="h-1 w-24 bg-gradient-to-r from-accent-yellow to-accent-blue rounded-full" />
                                </div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                {/* Simulated Data Stream */}
                                <div className="p-6 rounded-3xl bg-black/40 border border-white/10 space-y-5">
                                    <div className="flex justify-between items-center text-[9px] text-text-muted font-black uppercase tracking-[0.2em]">
                                        <span>Inference Engine</span>
                                        <span className="text-accent-yellow animate-pulse">Running</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                animate={{ width: ["15%", "95%", "15%"] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                className="h-full bg-gradient-to-r from-accent-yellow to-accent-blue"
                                                style={{ boxShadow: '0 0 15px rgba(250, 204, 21, 0.4)' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-between font-mono text-[9px] text-white/30 pt-2 border-t border-white/5 mt-4">
                                        <span>INTEL_OPENVINO_2026</span>
                                        <span className="text-accent-yellow">ACTIVE</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Floating Nodes */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 glass p-4 rounded-2xl border border-white/10 shadow-glow"
                            style={{ boxShadow: '0 0 30px rgba(250, 204, 21, 0.2)' }}
                        >
                            <Sparkles className="text-accent-yellow" size={24} />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
