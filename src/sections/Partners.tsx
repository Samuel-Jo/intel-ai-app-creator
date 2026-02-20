import { motion } from 'framer-motion';

export default function Partners() {
    return (
        <section className="section bg-bg-secondary/50">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-bold text-white"
                    >
                        정부의 지원과 글로벌 기업의 전문성이 만났습니다
                    </motion.h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
                    {[
                        { name: '고용노동부', label: '역량 있는 인재 양성을 위한 전액 국비 지원', color: 'text-blue-400' },
                        { name: 'RAPA', label: '체계적인 교육 운영 및 관리', color: 'text-white' },
                        { name: 'Intel', label: '현업에서 쓰이는 AI 기술 스택 및 실무 프로젝트 가이드', color: 'text-blue-500' }
                    ].map((partner, i) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="w-24 h-24 rounded-full border border-white/10 bg-black/40 flex items-center justify-center text-xs font-bold text-white/40 group-hover:border-neon group-hover:text-neon transition-all">
                                {partner.name} LOGO
                            </div>
                            <div className="text-center">
                                <div className={`font-bold ${partner.color}`}>{partner.name}</div>
                                <div className="text-xs text-white/40 max-w-[150px]">{partner.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 py-4 px-8 bg-neon/10 border border-neon/20 rounded-full text-center text-neon font-medium text-sm inline-block left-1/2 -translate-x-1/2 relative"
                >
                    믿을 수 있는 기관들이 함께 설계한 검증된 교육 과정입니다.
                </motion.div>
            </div>
        </section>
    );
}
