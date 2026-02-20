import { motion } from 'framer-motion';
import { BookOpen, Rocket, ChevronRight } from 'lucide-react';

export default function Philosophy() {
    return (
        <section className="section-padding bg-bg-primary overflow-hidden relative">
            {/* Immersive Background Glows */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-neon/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-6 py-2 rounded-full glass-layer-2 border-white/10 text-accent-cyan text-xs font-bold tracking-[0.4em] uppercase mb-10"
                    >
                        Our Philosophy
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-white leading-[1.05] tracking-tighter"
                    >
                        "코드를 아는 것"과 <br />
                        "제품을 만드는 것"은 <br />
                        <span className="text-gradient-neon">본질적으로 다릅니다</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-stretch">
                    {/* Theory Centric */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-16 flex flex-col items-center text-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                    >
                        <div className="mb-12 p-10 rounded-[32px] glass-layer-2 border-white/5 text-text-muted">
                            <BookOpen size={56} />
                        </div>
                        <h3 className="text-2xl font-black text-white/60 mb-10 uppercase tracking-[0.2em] font-heading">Conventional Training</h3>
                        <div className="space-y-8 mb-16 flex-grow">
                            {[
                                '문법 암기 위주의 단순 코딩 실습',
                                '실제 서비스 구조와 단절된 예제',
                                '협업 툴 및 배포 프로세스 부재'
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 text-text-muted justify-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-text-muted" />
                                    <span className="text-xl font-medium">{text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto py-5 px-12 rounded-2xl glass-layer-2 border-white/5 text-text-muted font-black text-xs tracking-widest uppercase">
                            현업 적합도 20% 미만
                        </div>
                    </motion.div>

                    {/* Product Centric */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-premium p-16 flex flex-col items-center text-center relative overflow-hidden"
                    >
                        {/* Internal Accents */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-neon/10 rounded-full blur-[100px] -mr-32 -mt-32" />

                        <div className="mb-12 p-10 rounded-[32px] bg-accent-neon/10 border border-accent-neon/20 text-accent-neon shadow-glow">
                            <Rocket size={56} />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-10 uppercase tracking-[0.2em] font-heading">Intel AI Creator Path</h3>
                        <div className="space-y-8 mb-16 flex-grow">
                            {[
                                '실제 프로덕트 중심의 엔드투엔드 개발',
                                'Intel MCP를 활용한 고성능 AI 추론 최적화',
                                'Git, Docker, CI/CD 등 현업 파이프라인 경험'
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 text-white justify-center">
                                    <ChevronRight className="text-accent-cyan" size={24} />
                                    <span className="text-xl font-bold tracking-tight">{text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto py-5 px-12 rounded-2xl bg-accent-neon text-black font-black text-xs tracking-widest uppercase shadow-glow">
                            즉시 투입 가능한 시니어급 역량 확보
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
