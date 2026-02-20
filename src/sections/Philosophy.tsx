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
                        "코드를 아는 것"과 "제품을 만드는 것"은 다릅니다
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden">
                    {/* Theory Centric */}
                    <div className="bg-bg-primary p-12 flex flex-col items-center text-center">
                        <div className="mb-8 p-6 bg-white/5 rounded-full text-white/20">
                            <BookOpen size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white/40 mb-6 uppercase tracking-tighter">이론 중심 교육</h3>
                        <ul className="space-y-4 text-white/40 mb-12">
                            <li>• 문법 암기 위주</li>
                            <li>• 단편적인 예제 실습</li>
                        </ul>
                        <div className="mt-auto py-3 px-10 bg-white/5 rounded-full text-white/40 font-bold border border-white/5">
                            현업 적응 어려움
                        </div>
                    </div>

                    {/* Product Centric */}
                    <div className="bg-bg-secondary p-12 flex flex-col items-center text-center relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon/10 rounded-full blur-[100px]" />

                        <div className="mb-8 p-6 bg-neon/10 rounded-full text-neon relative z-10">
                            <Rocket size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-neon mb-6 uppercase tracking-tighter relative z-10">산출물 중심 교육</h3>
                        <ul className="space-y-4 text-white/70 mb-12 relative z-10">
                            <li>• 실제 서비스 기획 및 개발</li>
                            <li>• Intel MCP 기반 응용 프로젝트</li>
                        </ul>
                        <div className="mt-auto py-3 px-10 bg-neon text-black rounded-full font-bold relative z-10 shadow-[0_0_30px_rgba(200,255,0,0.4)]">
                            즉시 투입 가능한 실무 역량
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
