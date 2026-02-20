import { motion } from 'framer-motion';

export default function Partners() {
    const partners = [
        { name: '고용노동부', label: '역량 있는 인재 양성을 위한 전액 국비 지원', color: 'text-white' },
        { name: 'RAPA', label: '한국전파진흥협회 체계적인 교육 운영 및 관리', color: 'text-white' },
        { name: 'Intel', label: '글로벌 AI 기술 스택 및 실무 프로젝트 가이드', color: 'text-accent-blue' }
    ];

    return (
        <section className="py-20 bg-bg-primary relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl font-bold text-text-muted tracking-tight"
                    >
                        정부 지원과 글로벌 기업의 전문성이 결합된 <br />
                        <span className="text-white">최고 권위의 AI 교육 프로그램</span>
                    </motion.h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-32">
                    {partners.map((partner, i) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center gap-6 group"
                        >
                            <motion.div className="w-28 h-28 rounded-3xl glass flex items-center justify-center text-xs font-black text-white/20 transition-all duration-500 transform"
                                style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.05)' }}
                                whileHover={{ borderColor: 'rgba(212, 255, 0, 0.3)', color: 'var(--accent-neon)', backgroundColor: 'rgba(212, 255, 0, 0.05)', rotate: -6 }}>
                                {partner.name}
                            </motion.div>
                            <div className="text-center space-y-2">
                                <div className={`text-xl font-black font-heading ${partner.color}`}>{partner.name}</div>
                                <div className="text-[10px] text-text-muted max-w-[180px] font-bold uppercase tracking-widest leading-relaxed">{partner.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="glass px-10 py-4 text-accent-neon font-bold text-sm tracking-tight rounded-full"
                        style={{ borderColor: 'rgba(212, 255, 0, 0.2)', boxShadow: '0 0 20px rgba(212, 255, 0, 0.2)' }}
                    >
                        국가 공인 스마트 훈련과정 선정 기반의 검증된 커리큘럼
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
