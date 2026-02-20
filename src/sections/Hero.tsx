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
                            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white text-blue-600 border-white/10 whitespace-nowrap"
                            style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
                        >
                            <Sparkles size={16} className="text-blue-600" />
                            <span className="text-xs font-bold tracking-tight uppercase">
                                고용노동부 x RAPA x Intel
                            </span>
                        </motion.div>

                        <div className="space-y-8 w-full">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.15] tracking-tighter"
                                style={{ wordBreak: 'keep-all' }}
                            >
                                인텔 글로벌 AI 기술, <br />
                                <span className="text-blue-500">내일배움카드로 전액 지원</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mx-auto lg:mx-0"
                            >
                                단순 코딩을 넘어 실제 작동하는 '서비스'를 만드는 실전 AI 개발자 양성. <br />
                                인텔 AI 응용앱 크리에이터 용인과정 8기에 합류하여 완벽한 취업 포트폴리오를 완성하세요.
                            </motion.p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-6"
                            >
                                <button className="btn-premium btn-primary shadow-glow transition-all hover:scale-105" style={{ background: '#2563eb', color: 'white', borderRadius: '9999px', padding: '1.25rem 3rem' }}>
                                    과정 지원하기 <ArrowRight size={22} />
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-2 text-text-muted"
                            >
                                <Monitor size={18} />
                                <span className="text-sm font-medium">모집 마감: 2026. 03. 22</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Classroom Photo */}
                    <div className="hidden lg:block lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative rounded-[40px] overflow-hidden shadow-2xl"
                            style={{ aspectRatio: '4/3' }}
                        >
                            <img
                                src="/hero_classroom.jpg"
                                alt="AI Classroom"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
