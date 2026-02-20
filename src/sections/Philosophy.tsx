import { motion } from 'framer-motion';
import { BookOpen, Rocket, ChevronRight } from 'lucide-react';

export default function Philosophy() {
    return (
        <section className="section-padding bg-bg-primary overflow-hidden relative">
            <div className="container relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-text-muted text-xs font-bold tracking-widest uppercase mb-6"
                        style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                        Our Philosophy
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white leading-tight"
                    >
                        "코드를 아는 것"과 "제품을 만드는 것"은 <br />
                        <span className="text-gradient-neon">본질적으로 다릅니다</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Theory Centric */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-12 flex flex-col items-center text-center transition-all duration-700"
                        style={{ opacity: 0.4, filter: 'grayscale(1)' }}
                        whileHover={{ opacity: 1, filter: 'grayscale(0)' }}
                    >
                        <div className="mb-10 p-8 rounded-3xl bg-white/5 border border-white/10 text-text-muted"
                            style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                            <BookOpen size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white/60 mb-8 uppercase tracking-widest font-heading">Conventional Training</h3>
                        <div className="space-y-6 mb-12 flex-grow">
                            <div className="flex items-center gap-3 text-text-muted">
                                <span className="w-1.5 h-1.5 rounded-full bg-text-muted" style={{ backgroundColor: 'var(--text-muted)' }} />
                                <span className="text-lg">문법 암기 위주의 단순 코딩 실습</span>
                            </div>
                            <div className="flex items-center gap-3 text-text-muted">
                                <span className="w-1.5 h-1.5 rounded-full bg-text-muted" style={{ backgroundColor: 'var(--text-muted)' }} />
                                <span className="text-lg">실제 서비스 구조와 단절된 예제</span>
                            </div>
                            <div className="flex items-center gap-3 text-text-muted">
                                <span className="w-1.5 h-1.5 rounded-full bg-text-muted" style={{ backgroundColor: 'var(--text-muted)' }} />
                                <span className="text-lg">협업 툴 및 배포 프로세스 부재</span>
                            </div>
                        </div>
                        <div className="mt-auto py-4 px-10 rounded-xl border border-white/5 bg-white/5 text-text-muted font-bold text-sm"
                            style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                            현업 적합도 20% 미만
                        </div>
                    </motion.div>

                    {/* Product Centric */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-12 flex flex-col items-center text-center relative overflow-hidden"
                        style={{ outline: '1px solid rgba(212, 255, 0, 0.2)', boxShadow: '0 0 80px rgba(212,255,0,0.05)' }}
                    >
                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-neon-rgba rounded-full blur-[120px]"
                            style={{ marginRight: '-8rem', marginTop: '-8rem', pointerEvents: 'none' }} />

                        <div className="mb-10 p-8 rounded-3xl bg-accent-neon/10 border border-accent-neon/20 text-accent-neon"
                            style={{ backgroundColor: 'rgba(212, 255, 0, 0.1)', borderColor: 'rgba(212, 255, 0, 0.2)' }}>
                            <Rocket size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest font-heading">Intel AI Creator Path</h3>
                        <div className="space-y-6 mb-12 flex-grow">
                            <div className="flex items-center gap-3 text-white">
                                <ChevronRight className="text-accent-neon" />
                                <span className="text-lg font-medium">실제 프로덕트 중심의 엔드투엔드 개발</span>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <ChevronRight className="text-accent-neon" />
                                <span className="text-lg font-medium">Intel MCP를 활용한 고성능 AI 추론 최적화</span>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <ChevronRight className="text-accent-neon" />
                                <span className="text-lg font-medium">Git, Docker, CI/CD 등 현업 파이프라인 경험</span>
                            </div>
                        </div>
                        <div className="mt-auto py-4 px-10 rounded-xl bg-accent-neon text-black font-extrabold text-sm"
                            style={{ boxShadow: '0 10px 30px rgba(212,255,0,0.3)' }}>
                            즉시 투입 가능한 시니어급 역량 확보
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
