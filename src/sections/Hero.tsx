import { motion } from 'framer-motion';
import { Monitor } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden bg-white">
            {/* Subtle Tech Patterns (Circuit lines) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Content Area */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-12">

                        {/* Partner Logos Area */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-8 mb-4"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-[10px]">고용</div>
                                <span className="font-bold text-gray-700 tracking-tighter">고용노동부</span>
                            </div>
                            <div className="h-4 w-[1px] bg-gray-200" />
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[14px] font-black text-blue-800 tracking-tighter">RAPA</span>
                                <span className="text-[8px] font-bold text-gray-500">한국전파진흥협회</span>
                            </div>
                            <div className="h-4 w-[1px] bg-gray-200" />
                            <div className="flex items-center">
                                <span className="text-xl font-bold italic text-blue-600 tracking-tighter">intel</span>
                            </div>
                        </motion.div>

                        <div className="space-y-6 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl md:text-2xl font-bold text-blue-600 tracking-tight"
                            >
                                인텔 글로벌 AI 기술, 내일배움카드로 전액 지원
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-6xl xl:text-7xl font-black text-[#0f172a] leading-[1.1] tracking-tighter"
                                style={{ wordBreak: 'keep-all' }}
                            >
                                인텔 AI 응용앱 크리에이터 <br />
                                <span className="block mt-2">용인과정 8기 모집</span>
                            </motion.h1>
                        </div>

                        {/* Badges Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap items-center gap-4 pt-4"
                        >
                            {['실무 프로젝트 중심', '생성형 AI & LLM', '취업 포트폴리오 완성'].map((tag, i) => (
                                <div
                                    key={i}
                                    className="px-6 py-3 rounded-full bg-blue-50 text-blue-600 font-bold text-sm md:text-base border border-blue-100 shadow-sm"
                                >
                                    {tag}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Modern Professional Photo */}
                    <div className="hidden lg:block lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Decorative background for the image */}
                            <div className="absolute -inset-4 bg-blue-600/5 rounded-[48px] blur-2xl" />

                            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="/hero_classroom.jpg"
                                    alt="Intel AI Professional"
                                    className="w-full h-full object-cover"
                                    style={{ aspectRatio: '4/5' }}
                                />
                                {/* Circuitry Overlay Effect at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-600/20 to-transparent flex items-end p-6">
                                    <div className="w-full h-full opacity-30 invert" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/circuit-board.png")' }} />
                                </div>
                            </div>

                            {/* Floating Card for extra premium feel */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                    <Monitor size={24} />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Enrollment Status</div>
                                    <div className="text-lg font-bold text-gray-900 leading-tight">용인과정 8기 <span className="text-blue-600">모집중</span></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
