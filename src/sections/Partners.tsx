import { motion } from 'framer-motion';

export default function Partners() {
    const partners = [
        { name: '고용노동부', label: '전액 국비 지원 및 훈련 과정 승인', color: 'text-white' },
        { name: 'RAPA', label: '한국전파진흥협회 전문 운영 및 관리', color: 'text-white' },
        { name: 'Intel', label: '글로벌 AI 기술 지원 및 공식 인증', color: 'text-accent-blue' }
    ];

    return (
        <section className="section-padding bg-bg-primary relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-text-muted text-xs font-bold tracking-[0.3em] uppercase mb-6"
                    >
                        Official Partners
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                    >
                        국가 공인 교육의 신뢰와 <br className="md:hidden" />
                        <span className="text-accent-neon">글로벌 리더의 전문성</span>
                    </motion.h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-16 lg:gap-24">
                    {partners.map((partner, i) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center gap-8 group"
                        >
                            <motion.div className="w-32 h-32 rounded-[2.5rem] glass-premium flex items-center justify-center text-sm font-black text-white/40 transition-all duration-500 transform group-hover:border-accent-neon/30 group-hover:bg-accent-neon/5"
                                whileHover={{ scale: 1.05, rotate: -5 }}>
                                {partner.name}
                            </motion.div>
                            <div className="text-center space-y-3">
                                <div className={`text-2xl font-black font-heading ${partner.color}`}>{partner.name}</div>
                                <div className="text-xs text-text-muted max-w-[200px] font-bold uppercase tracking-widest leading-relaxed">{partner.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="glass-premium px-12 py-5 text-accent-neon font-bold text-sm tracking-widest rounded-full border-accent-neon/10"
                        style={{ boxShadow: '0 0 40px rgba(212, 255, 0, 0.05)' }}
                    >
                        K-Digital Training 공식 선정 훈련 과정
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
