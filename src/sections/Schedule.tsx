import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

export default function Schedule() {
    return (
        <section className="section bg-bg-primary">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        2026년 상반기, <br />
                        AI 전문가로 거듭나기 위한 6개월의 몰입
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Timeline Wrapper */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {[
                            { label: '지원 마감일', value: '2026. 03. 22', icon: <Calendar size={18} />, color: 'bg-red-500/10 text-red-400' },
                            { label: '교육 기간', value: '03. 30 - 09. 22', icon: <Calendar size={18} />, color: 'bg-neon/10 text-neon' },
                            { label: '교육 시간', value: '평일 09:00 - 18:00', icon: <Clock size={18} />, color: 'bg-accent-blue/10 text-accent-blue' }
                        ].map((item, i) => (
                            <div key={i} className={`p-6 rounded-2xl border border-white/5 bg-bg-secondary ${item.color}`}>
                                <div className="flex items-center gap-2 mb-2 font-bold text-xs uppercase tracking-wider opacity-60">
                                    {item.icon} {item.label}
                                </div>
                                <div className="text-lg font-bold text-white transition-all transform hover:translate-x-1">{item.value}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Eligibility Checklist */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-bg-secondary border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row gap-12 items-center"
                    >
                        <div className="flex items-center gap-4 text-white">
                            <div className="p-4 bg-neon/10 rounded-2xl text-neon">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-2xl font-bold">누구나 <br /> 지원 가능</h3>
                        </div>
                        <div className="flex-1 grid md:grid-cols-1 gap-4">
                            {[
                                "내일배움카드 발급이 가능한 분",
                                "70세 미만의 대한민국 국민 누구나",
                                "전공 무관: 비전공자도 기초부터 체계적으로 학습"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                                    <CheckCircle2 size={16} className="text-neon flex-shrink-0" />
                                    <span className="text-white/60 text-sm">{text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
