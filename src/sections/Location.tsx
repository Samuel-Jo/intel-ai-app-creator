import { motion } from 'framer-motion';
import { MapPin, Info, Navigation, Train } from 'lucide-react';

export default function Location() {
    return (
        <section className="section-padding bg-bg-secondary relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-accent-neon text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        Campus Location
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white leading-tight"
                    >
                        최상의 몰입을 위한 <br />
                        <span className="text-gradient-neon">프리미엄 교육 인프라</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Map/Visual (7 columns) */}
                    <div className="lg:col-span-7" style={{ gridColumn: 'span 7' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-video glass overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-white/5 flex items-center justify-center italic text-text-muted text-lg font-heading"
                                style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                [영통 흥덕유타워 용인지점 지도 상세]
                            </div>

                            {/* Decorative Map Marker */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative flex flex-col items-center"
                                >
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center border backdrop-blur-md"
                                        style={{ backgroundColor: 'rgba(212, 255, 0, 0.2)', borderColor: 'rgba(212, 255, 0, 0.3)' }}>
                                        <MapPin className="text-accent-neon" size={32} />
                                    </div>
                                    <div className="mt-3 px-4 py-2 glass rounded-full"
                                        style={{ borderColor: 'rgba(212, 255, 0, 0.4)', boxShadow: '0 0 20px rgba(212, 255, 0, 0.3)' }}>
                                        <span className="text-xs font-bold text-white whitespace-nowrap">마인드캔버스 용인센터 17F</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Overlay Controls UI */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                <div className="glass p-4 pr-10 flex items-center gap-4"
                                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent-neon">
                                        <Navigation size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Address</div>
                                        <div className="text-sm text-white font-medium">용인시 기흥구 흥덕중앙로 120</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Info (5 columns) */}
                    <div className="lg:col-span-5 space-y-8" style={{ gridColumn: 'span 5' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="glass p-8 space-y-6 group transition-all duration-500 hover:bg-white/[0.05]">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border transition-colors group-hover:border-accent-neon/30"
                                        style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                        <Train className="text-accent-neon" size={24} />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold text-white font-heading tracking-tight">우수한 교통 접근성</h3>
                                        <p className="text-text-secondary text-base leading-relaxed">
                                            수원 IC 및 흥덕 IC 초인접. 수도권 광역 버스 및 인근 역 연계로 서울과 경기 남부 어디서나 편리한 이동이 가능합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass p-8 space-y-6 group transition-all duration-500 hover:bg-white/[0.05]">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border transition-colors group-hover:border-accent-blue/30"
                                        style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                        <Info className="text-accent-blue" size={24} />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold text-white font-heading tracking-tight">시그니처 교육장</h3>
                                        <p className="text-text-secondary text-base leading-relaxed">
                                            최상층 펜트하우스형 교육장에서 내려다보는 파노라마 뷰와 최신 AI 실습 장비로 학습 몰입도를 극대화합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
