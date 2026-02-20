import { motion } from 'framer-motion';
import { Rocket, Trophy } from 'lucide-react';

export default function Outcomes() {
    return (
        <section id="outcomes" className="section bg-bg-secondary relative">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        당신의 이력서는 <br />
                        <span className="text-neon">'프로젝트 결과물'</span>로 증명됩니다
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Dashboard Mockup Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-black/40 border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden aspect-video">
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-950 rounded-2xl flex items-center justify-center">
                                <div className="text-white/10 text-xl font-bold">[대시보드 및 모바일 목업]</div>
                            </div>
                        </div>
                        {/* Hovering stats */}
                        <div className="absolute -bottom-6 -right-6 bg-neon text-black p-6 rounded-2xl font-bold shadow-xl">
                            <div className="text-3xl">74%</div>
                            <div className="text-[10px] uppercase">Hiring Success</div>
                        </div>
                    </motion.div>

                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="p-4 bg-neon/10 rounded-2xl h-fit">
                                <Rocket className="text-neon" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">실전 서비스 수준의 결과물</h3>
                                <p className="text-white/40 leading-relaxed">
                                    취업 지원 시 강력한 무기가 되는 포트폴리오를 완성하여 단순 학습 이상의 가치를 창출합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="p-4 bg-accent-blue/10 rounded-2xl h-fit">
                                <Trophy className="text-accent-blue" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">글로벌 무대 진출 기회</h3>
                                <p className="text-white/40 leading-relaxed">
                                    우수 참가자에게는 글로벌 AI 해커톤 참가 등 더 넓은 세계로 도약할 수 있는 기회를 연계합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
