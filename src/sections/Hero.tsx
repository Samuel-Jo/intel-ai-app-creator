import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Monitor, GraduationCap } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-bg-primary font-body">
            {/* Immersive Background Gradients */}
            <div className="absolute rounded-full animate-pulse pointer-events-none"
                style={{
                    top: '-10%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    filter: 'blur(150px)',
                    backgroundColor: 'rgba(212, 255, 0, 0.15)'
                }} />
            <div className="absolute rounded-full pointer-events-none"
                style={{
                    bottom: '-10%',
                    left: '-10%',
                    width: '500px',
                    height: '500px',
                    filter: 'blur(120px)',
                    backgroundColor: 'rgba(0, 229, 255, 0.15)'
                }} />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.03
                }} />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7" style={{ gridColumn: 'span 7' }}>
                        <div className="space-y-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass"
                                style={{ borderColor: 'rgba(212, 255, 0, 0.2)' }}
                            >
                                <Sparkles size={16} className="text-accent-neon" />
                                <span className="text-xs md:text-sm font-bold tracking-widest text-white/80 uppercase">
                                    인텔 x 고용노동부 x RAPA 공동 주관
                                </span>
                            </motion.div>

                            <div className="space-y-6">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-6xl md:text-8xl font-bold leading-tight tracking-tight text-white mb-2"
                                >
                                    미래를 설계하는 <br />
                                    <span className="text-gradient-neon">AI 크리에이터</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed"
                                >
                                    글로벌 리더 인텔의 기술력으로 완성하는 실무 중심 AI 개발자 양성 과정.
                                    내일배움카드로 <span className="text-white font-bold">교육비 100% 지원</span>받으세요.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-wrap gap-5"
                            >
                                <button className="btn-premium btn-primary text-xl">
                                    지금 바로 지원하기 <ArrowRight size={22} />
                                </button>
                                <button className="btn-premium glass text-white text-xl" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                                    커리큘럼 살펴보기
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="flex items-center gap-12 pt-8"
                            >
                                <div>
                                    <div className="text-3xl font-bold text-white">100%</div>
                                    <div className="text-xs text-text-muted font-bold uppercase tracking-widest mt-1">Tuition Support</div>
                                </div>
                                <div className="shrink-0 w-px h-10 bg-white/10" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                                <div>
                                    <div className="text-3xl font-bold text-white">8th</div>
                                    <div className="text-xs text-text-muted font-bold uppercase tracking-widest mt-1">Batch Recruitment</div>
                                </div>
                                <div className="shrink-0 w-px h-10 bg-white/10" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                                <div>
                                    <div className="text-3xl font-bold text-white">Ready</div>
                                    <div className="text-xs text-text-muted font-bold uppercase tracking-widest mt-1">To Deploy</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Visual Content */}
                    <div className="lg:col-span-5" style={{ gridColumn: 'span 5' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative mt-12 lg:mt-0"
                        >
                            <div className="glass p-8 aspect-[4/5] relative overflow-hidden flex flex-col justify-between"
                                style={{ borderRadius: '32px' }}>
                                <div className="absolute inset-0 pointer-events-none"
                                    style={{ background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)', opacity: 0.3 }} />

                                <div className="relative z-10 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center border"
                                        style={{ backgroundColor: 'rgba(212, 255, 0, 0.1)', borderColor: 'rgba(212, 255, 0, 0.2)' }}>
                                        <Monitor className="text-accent-neon" size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white leading-tight font-heading">
                                        Generative AI <br /> Application Dev
                                    </h3>
                                    <div className="h-1 w-20 bg-accent-neon" style={{ backgroundColor: 'var(--accent-neon)' }} />
                                </div>

                                <div className="p-6 rounded-2xl border space-y-4"
                                    style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255,255,255,0.05)' }}>
                                    <div className="flex justify-between items-center text-[10px] text-text-muted uppercase font-bold tracking-widest">
                                        <span>Training Status</span>
                                        <span className="text-accent-neon flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-accent-neon rounded-full animate-ping"
                                                style={{ backgroundColor: 'var(--accent-neon)' }} />
                                            Active
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-white" style={{ fontFamily: 'monospace' }}>Intel® OpenVINO™</div>
                                    <div className="space-y-2">
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                            <motion.div
                                                animate={{ width: ["0%", "85%"] }}
                                                transition={{ duration: 2, ease: "easeInOut" }}
                                                className="h-full bg-accent-neon"
                                                style={{ backgroundColor: 'var(--accent-neon)' }}
                                            />
                                        </div>
                                        <div className="flex justify-between text-[10px] text-text-muted font-bold">
                                            <span>PROCESSED: 1.2TB</span>
                                            <span>ACCURACY: 99.4%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                animate={{ y: [-10, 10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute glass p-4 pr-10 flex items-center gap-4 z-20"
                                style={{ bottom: '15%', left: '-15%', borderColor: 'rgba(0, 229, 255, 0.2)' }}
                            >
                                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)' }}>
                                    <GraduationCap className="text-accent-blue" size={24} />
                                </div>
                                <div className="shrink-0">
                                    <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Certificate</div>
                                    <div className="text-sm font-bold text-white">Intel Official</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bg-white text-black p-4 px-6 rounded-2xl font-bold transform -rotate-3 z-20"
                                style={{ top: '10%', right: '-5%', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
                            >
                                <div className="text-[10px] uppercase text-black/40 mb-1 font-bold">모집 마감 임박</div>
                                <div className="text-2xl font-black">D-7일 전</div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
