import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Monitor } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-bg-primary">
            {/* Immersive Background Gradients - Simplified */}
            <div className="absolute rounded-full animate-pulse pointer-events-none"
                style={{
                    top: '-5%',
                    right: '-5%',
                    width: '700px',
                    height: '700px',
                    filter: 'blur(160px)',
                    backgroundColor: 'rgba(212, 255, 0, 0.08)'
                }} />
            <div className="absolute rounded-full pointer-events-none"
                style={{
                    bottom: '-10%',
                    left: '-10%',
                    width: '600px',
                    height: '600px',
                    filter: 'blur(140px)',
                    backgroundColor: 'rgba(0, 229, 255, 0.08)'
                }} />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 items-center">

                    {/* Left: Clear Typography Focus */}
                    <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center xl:items-start text-center xl:text-left space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-white/5"
                        >
                            <Sparkles size={16} className="text-accent-neon" />
                            <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">
                                Intel x RAPA x KDT Official Program
                            </span>
                        </motion.div>

                        <div className="space-y-8">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl md:text-8xl xl:text-9xl font-black text-white leading-[0.9] tracking-tighter"
                            >
                                미래를 만드는 <br />
                                <span className="text-gradient-neon">AI 크리에이터</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed mx-auto xl:mx-0"
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
                            <button className="btn-premium btn-primary">
                                지금 바로 지원하기 <ArrowRight size={22} />
                            </button>
                            <button className="btn-premium glass-premium text-white">
                                커리큘럼 살펴보기
                            </button>
                        </motion.div>

                        {/* Social Proof - Simplified & Aligned */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-10 pt-10 border-t border-white/5 w-full justify-center xl:justify-start"
                        >
                            {[
                                { label: '지원 혜택', val: '100% 국비' },
                                { label: '기점', val: '누적 8기' },
                                { label: '커리큘럼', val: '실무 중심' }
                            ].map((stat) => (
                                <div key={stat.label} className="shrink-0">
                                    <div className="text-xs text-text-muted font-bold uppercase tracking-widest mb-1">{stat.label}</div>
                                    <div className="text-xl font-bold text-white">{stat.val}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Focused Visual (Only on XL/Large) */}
                    <div className="hidden xl:block xl:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="glass-premium p-10 aspect-[4/5] flex flex-col justify-between"
                            style={{ borderRadius: '40px' }}
                        >
                            <div className="relative z-10 space-y-8">
                                <div className="w-20 h-20 rounded-3xl flex items-center justify-center border border-accent-neon/20 bg-accent-neon/5">
                                    <Monitor className="text-accent-neon" size={40} />
                                </div>
                                <h3 className="text-4xl font-bold text-white leading-tight font-heading">
                                    Generative AI <br />
                                    <span className="text-accent-neon">System Dev</span>
                                </h3>
                                <div className="h-1.5 w-24 bg-accent-neon rounded-full" />
                            </div>

                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-4">
                                    <div className="flex justify-between items-center text-[10px] text-text-muted font-black uppercase tracking-[0.2em]">
                                        <span>System Analysis</span>
                                        <span className="text-accent-neon">Processing</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ width: ["10%", "90%"] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            className="h-full bg-accent-neon shadow-[0_0_15px_rgba(212,255,0,0.5)]"
                                        />
                                    </div>
                                    <div className="flex justify-between font-mono text-[10px] text-accent-neon/60">
                                        <span>INTEL_OPENVINO_RUNNING</span>
                                        <span>v2026.02</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
