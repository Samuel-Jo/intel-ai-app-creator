import { motion } from 'framer-motion';
import { Rocket, Trophy } from 'lucide-react';

export default function Outcomes() {
    return (
        <section id="outcomes" className="section-padding bg-gray-50 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        다양한 진로의 문을 엽니다
                    </motion.h2>
                    <p className="text-gray-500 text-lg font-medium">수료 후, 당신이 원하는 커리어의 길을 열어드립니다.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Job Seeker Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-[40px] shadow-xl shadow-gray-200/50 flex flex-col items-start gap-10"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                            <Rocket size={32} />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">구직자</h3>
                            <ul className="space-y-4">
                                {[
                                    '국내외 AI 솔루션 기업 취업 매칭',
                                    '1:1 포트폴리오 심화 컨설팅',
                                    '실무 프로젝트 기반 기술 면접 대비'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Founder Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-[40px] shadow-xl shadow-gray-200/50 flex flex-col items-start gap-10"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                            <Trophy size={32} />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">예비 창업자</h3>
                            <ul className="space-y-4">
                                {[
                                    'Intel MCP 기반 비즈니스 모델 검증',
                                    'IR 피칭 교육 및 데모데이 참가 기회',
                                    '창업 교육 및 네트워킹 지원'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
