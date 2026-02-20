import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Schedule() {
    return (
        <section id="schedule" className="section-padding bg-bg-primary relative">
            <div className="container relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-accent-neon text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        Program Schedule
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white leading-tight"
                    >
                        AI 전문가로 거듭나는 <br />
                        <span className="text-gradient-neon">6개월의 압도적 몰입</span>
                    </motion.h2>
                </div>

                <div className="max-w-5xl mx-auto space-y-10">
                    {/* Key Dates Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { label: 'Application Deadline', value: '2026. 03. 22', icon: <AlertCircle className="text-red-400" size={20} />, style: { borderColor: 'rgba(239, 68, 68, 0.2)', backgroundColor: 'rgba(239, 68, 68, 0.05)', borderLeft: '4px solid rgba(239, 68, 68, 0.5)' } },
                            { label: 'Training Period', value: '03. 30 - 09. 22', icon: <Calendar className="text-accent-neon" size={20} />, style: { borderColor: 'rgba(212, 255, 0, 0.2)', backgroundColor: 'rgba(212, 255, 0, 0.05)', borderLeft: '4px solid var(--accent-neon)' } },
                            { label: 'Daily Session', value: '평일 09:00 - 18:00', icon: <Clock className="text-accent-blue" size={20} />, style: { borderColor: 'rgba(0, 229, 255, 0.2)', backgroundColor: 'rgba(0, 229, 255, 0.05)', borderLeft: '4px solid var(--accent-blue)' } }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 transition-all duration-500 hover:bg-white/[0.05]"
                                style={item.style}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {item.icon}
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-text-muted">{item.label}</span>
                                </div>
                                <div className="text-2xl font-bold text-white font-heading transition-transform hover:translate-x-1">{item.value}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Eligibility & Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-12 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-neon-rgba rounded-full blur-[100px] pointer-events-none"
                            style={{ opacity: 0.1, marginRight: '-10rem', marginTop: '-10rem' }} />

                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-4 space-y-4" style={{ gridColumn: 'span 4' }}>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center border"
                                    style={{ backgroundColor: 'rgba(212, 255, 0, 0.1)', borderColor: 'rgba(212, 255, 0, 0.2)' }}>
                                    <CheckCircle2 className="text-accent-neon" size={32} />
                                </div>
                                <h3 className="text-3xl font-bold text-white font-heading leading-tight">지원을 위한 <br /> 필수 체크리스트</h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    전공이나 경력에 상관없이, <br />성장하고 싶은 열정만 있다면 가능합니다.
                                </p>
                            </div>

                            <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-6" style={{ gridColumn: 'span 8' }}>
                                {[
                                    "내일배움카드 발급 가능자",
                                    "70세 미만 대한민국 국민 누구나",
                                    "전공 무관: 비전공자 기초부터 가능",
                                    "교육비 1,400만원 전액 국비 지원",
                                    "매월 최대 훈련 장려금 지급",
                                    "수료 즉시 입사 매칭 지원"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 py-2 border-b last:border-0"
                                        style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                        <div className="w-6 h-6 rounded-full glass border flex items-center justify-center transition-colors"
                                            style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                            <CheckCircle2 className="text-accent-neon" size={12} />
                                        </div>
                                        <span className="text-white/80 font-medium transition-colors hover:text-white">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
