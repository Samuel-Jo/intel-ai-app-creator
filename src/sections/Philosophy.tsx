import { motion } from 'framer-motion';
import { Cpu, CreditCard, Rocket } from 'lucide-react';

export default function Philosophy() {
    return (
        <section id="philosophy" className="section-padding bg-gray-50 overflow-hidden relative">
            <div className="container relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        왜 이 과정이어야 할까요?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-500 font-medium"
                    >
                        이론만 배우고 끝나는 교육은 이제 그만, 결과물로 증명합니다.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Global Tech Stack",
                            desc: "글로벌 기업 인텔(Intel)의 기술과 커리큘럼, 그리고 Intel MCP 인증 콘텐츠를 직접 경험합니다.",
                            icon: <Cpu className="text-blue-600" size={32} />
                        },
                        {
                            title: "Zero Cost, High ROI",
                            desc: "고용노동부 K-Digital Training 과정으로 교육비 전액 무료 지원. 비용 부담 없이 핵심 역량만 챙기세요.",
                            icon: <CreditCard className="text-blue-600" size={32} />
                        },
                        {
                            title: "Project-Based Learning",
                            desc: "문법 암기가 아닌 실제 서비스 기획 및 개발. 즉시 투입 가능한 실무 애플리케이션 포트폴리오는 확보합니다.",
                            icon: <Rocket className="text-blue-600" size={32} />
                        }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[32px] shadow-xl shadow-gray-200/50 flex flex-col items-start gap-8"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
                                {card.icon}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
