import { motion } from 'framer-motion';
import { MapPin, Info } from 'lucide-react';

export default function Location() {
    return (
        <section className="section bg-bg-secondary/50">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        수도권 어디서나 편리한 접근, <br />
                        최상의 교육 인프라를 경험하세요
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Map Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 aspect-video lg:aspect-square flex items-center justify-center"
                    >
                        <div className="text-white/10 text-xl font-bold italic">[영통 흥덕유타워 교육장 위치]</div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="relative">
                                <MapPin className="text-neon fill-neon/20" size={48} />
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black border border-neon/40 px-3 py-1 rounded-full text-[10px] text-white whitespace-nowrap font-bold">
                                    마인드캔버스 홀
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <div className="bg-bg-primary p-8 rounded-3xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                용인 흥덕유타워 17층 <br />
                                <span className="text-neon">마인드캔버스 전용 교육장</span>
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="p-2 bg-neon/10 rounded-lg h-fit text-neon"><Info size={20} /></div>
                                    <div>
                                        <div className="text-white font-bold">우수한 교통 접근성</div>
                                        <div className="text-sm text-white/40">수원 IC, 흥덕 IC 인근 핵심 위치.</div>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="p-2 bg-neon/10 rounded-lg h-fit text-neon"><Info size={20} /></div>
                                    <div>
                                        <div className="text-white font-bold">수도권 주요 도시 인접</div>
                                        <div className="text-sm text-white/40">수원, 용인, 분당, 안양 등 인근 도시에서의 이동이 매우 편리합니다.</div>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="p-2 bg-neon/10 rounded-lg h-fit text-neon"><Info size={20} /></div>
                                    <div>
                                        <div className="text-white font-bold">프리미엄 학습 공간</div>
                                        <div className="text-sm text-white/40">최신 장비와 쾌적한 시설로 학습 몰입도를 극대화합니다.</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
