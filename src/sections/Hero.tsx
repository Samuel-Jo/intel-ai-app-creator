import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#050505] -z-20" />
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-neon/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent-blue/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

            <div className="container grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 text-white/60 text-sm font-medium"
                    >
                        <span>고용노동부</span>
                        <span className="w-1 h-1 bg-white/40 rounded-full" />
                        <span>RAPA</span>
                        <span className="w-1 h-1 bg-white/40 rounded-full" />
                        <span>Intel</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white leading-[1.1]"
                    >
                        인텔 글로벌 AI 기술 <br />
                        <span className="text-neon">내일배움카드로 전액 지원</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            인텔 AI 응용앱 크리에이터 <br />
                            용인과정 8기 모집
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="bg-neon text-black px-8 py-4 rounded-full font-bold text-base hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] transition-all flex items-center gap-2">
                            지금 바로 지원하기 <ArrowRight size={20} />
                        </button>
                        <button className="border border-white/20 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/5 transition-colors">
                            커리큘럼 상세보기
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex items-center gap-6 pt-4 border-t border-white/10"
                    >
                        {[
                            "실무 프로젝트 중심",
                            "생성형 AI & LLM",
                            "취업 포트폴리오 완성"
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                                <div className="w-2 h-2 rounded-full bg-accent-blue" />
                                {feature}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative lg:h-[600px] flex items-center justify-center"
                >
                    {/* Main Visual Image Placeholder */}
                    <div className="relative z-10 w-full aspect-[4/3] bg-gradient-to-tr from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        {/* If user provided an image for hero, use it here, otherwise placeholder */}
                        {/* Using a placeholder div for now that represents the 'man on laptop' from slide 1 */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xl font-bold">
                            [Hero Image: Man working on laptop]
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                            <div className="text-neon font-bold text-2xl">100%</div>
                            <div className="text-xs text-white/60">Tuition Support</div>
                        </div>
                    </div>

                    {/* Floating UI Elements (Abstract representation of AI/Tech) */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-8 top-20 bg-black/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-xl z-20"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                AI
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">GenAI Model</div>
                                <div className="text-xs text-green-400">Ready to deploy</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
